import * as React from 'react';
import {StatusBar, View, StyleSheet, Animated, Platform} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import AddPostAction from '../../components/AddPostAction';
import HomeScreen from '../../components/HomeScreen';
import CommendActions from '../../components/commendActions/CommendActions';
import Loading from '../../components/Loading';

// GRAPH QL ---------------------------------------------------------
import {useAuthState, useAuthDispatch, getPosts} from '../../context/auth';
import {useApiDispatch, useApiState} from '../../context/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomePrototype = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {error, loading} = useApiState();
  const isFocused = useIsFocused();
  const {addAction, posts, jwt} = useAuthState();

  const [postsData, setPostsData] = React.useState(null);
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);
  const [commendAction, setCommendAction] = React.useState(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    getPosts({dispatchAuth, dispatchApi, jwt});
    // if (isFocused) data = await getPosts({dispatchAuth, dispatchApi, jwt});
  }, [isFocused]);

  // React.useEffect(() => {
  //   setPostsData(posts);
  // }, [posts]);

  React.useEffect(() => {
    if (addAction) setAddPostPopUp(addAction.addAction);
  }, [addAction]);

  // SERVERS ---------------------------------------------------------
  const renderFlatList = ({item, index}) => {
    return (
      <View
        key={String(index)}
        style={{justifyContent: 'center', alignItems: 'center'}}>
        <HomeScreen
          item={item}
          index={index}
          scrollY={scrollY}
          navigation={navigation}
        />
      </View>
    );
  };

  if (loading) return <Loading />;
  // RETURN ---------------------------------------------------------
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      {addPostPopUp && <AddPostAction navigation={navigation} />}
      {commendAction && (
        <CommendActions
          donateReason={commendAction}
          setDonateReason={setCommendAction}
        />
      )}
      <Animated.FlatList
        snapToAlignment="start"
        bounces={false}
        pagingEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => String(index)}
        decelerationRate={Platform.OS === 'ios' ? 0 : 0.98}
        renderToHardwareTextureAndroid
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        extraData={isFocused} // re-renders upon new Data
        data={Object.values(posts)}
        renderItem={renderFlatList}
      />
    </View>
  );
};

export default HomePrototype;
