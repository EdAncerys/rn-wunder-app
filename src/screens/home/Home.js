import * as React from 'react';
import {StatusBar, View, StyleSheet, Animated, Platform} from 'react-native';
import AddPostAction from '../../components/AddPostAction';
import Loading from '../../components/Loading';

import HomeScreen from '../../components/HomeScreen';
import CommendActions from '../../components/commendActions/CommendActions';

// GRAPH QL ---------------------------------------------------------
import {useAuthState, useAuthDispatch, getPosts} from '../../context/auth';
import {useApiDispatch} from '../../context/api';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const HomePrototype = ({navigation}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {addAction, posts} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);
  const [commendAction, setCommendAction] = React.useState(null);
  const jwt =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxMGJjZmYwMWQ1YjBmZTRjMzBhZWNiNyIsImlhdCI6MTYyODU5NjQ1NSwiZXhwIjoxNjMxMTg4NDU1fQ.2Yi-c-1LhCd7Xbk8Z5WgNL45N99QeBJenM-nvpiStk4';

  const [postData, setPostData] = React.useState(null);
  const scrollY = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (jwt) getPosts({dispatchAuth, dispatchApi, jwt});
  }, [jwt]);

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
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
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
