import * as React from 'react';
import {StatusBar, View, StyleSheet, Animated, Platform} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import AddPostAction from '../../components/AddPostAction';
import Loading from '../../components/Loading';
import HomeScreen from '../../components/HomeScreen';
import CommendActions from '../../components/commendActions/CommendActions';

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
  const {error} = useApiState();
  const isFocused = useIsFocused();
  const {addAction, posts, jwt} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);
  const [commendAction, setCommendAction] = React.useState(null);

  const [postData, setPostData] = React.useState(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (isFocused) {
      if (jwt) getPosts({dispatchAuth, dispatchApi, jwt});
      if (!jwt) alert('jwt error');
    }
  }, [isFocused]);

  React.useEffect(() => {
    if (posts) setPostData(posts);
  }, [posts]);

  React.useEffect(() => {
    if (addAction) setAddPostPopUp(addAction.addAction);
  }, [addAction]);

  if (!postData) {
    return <Loading />;
  }

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
        data={postData}
        renderItem={renderFlatList}
      />
    </View>
  );
};

export default HomePrototype;
