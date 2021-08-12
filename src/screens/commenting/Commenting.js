import * as React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  FlatList,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import {POST_DATA} from '../../config/data';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';

const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  divider: {
    borderColor: Colors.silver,
    borderBottomWidth: 1,
  },
  title: {
    ...Fonts.N_700_28,
    color: Colors.lightBlack,
  },
  post: {
    ...Fonts.N_400_16,
    color: Colors.lightBlack,
  },
  name: {
    ...Fonts.N_400_16,
    color: Colors.lightBlack,
    marginHorizontal: 5,
  },
  actionContainer: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionTitle: {
    ...Fonts.N_400_10,
    color: Colors.lightBlack,
  },
  textInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    borderColor: Colors.lightSilver,
    borderWidth: 1,
    borderRadius: 20,
  },
});

const ServeReplyInput = ({profileDataInfo, reply, setReply}) => {
  const {profileImageUrl, name} = profileDataInfo;

  return (
    <View>
      <View style={styles.divider} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginHorizontal: 10,
          marginVertical: 15,
        }}>
        <View>
          <Image
            source={{uri: profileImageUrl}}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
            }}
          />
        </View>
        <View style={styles.textInput}>
          <View style={{flex: 1}}>
            <TextInput
              placeholder={`Add a comment as ${name}…`}
              onChangeText={setReply}
              value={reply}
              autoCapitalize="none"
              style={{padding: 10}}
            />
          </View>
          <View>
            <CustomButton
              title="post"
              titleStyling={{...Fonts.N_400_12, color: Colors.lightSilver}}
              style={{backgroundColor: Colors.transparent}}
              onPress={() => setReply('')}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const Commenting = ({navigation, route}) => {
  const {profileDataInfo} = route.params;
  const [postBody, setPostBody] = React.useState(profileDataInfo);
  const [comment, setComment] = React.useState(POST_DATA);
  const [reply, setReply] = React.useState('');
  const [randomComment, setRandomComment] = React.useState(comment);

  const {category, title, tags, post} = postBody;

  React.useEffect(() => {
    const commentData = comment.sort(() => 0.5 - Math.random()).slice(0, 8);
    setRandomComment(commentData);
  }, [comment]);

  // SERVERS ---------------------------------------------------------
  const renderFlatList = ({item, index}) => {
    const {post} = item;

    return (
      <View style={{marginVertical: 10}}>
        <ServeProfileInfo profileDataInfo={item} />
        <View style={{marginVertical: 5}}>
          <Text style={styles.post}>{post}</Text>
        </View>
        <ServeActions />
        <View style={styles.divider} />
      </View>
    );
  };

  const ServeActions = () => {
    const [count, setCount] = React.useState(425);

    return (
      <View style={{flexDirection: 'row', marginVertical: 5}}>
        <TouchableOpacity
          style={styles.actionContainer}
          onPress={() => setCount(count + 1)}>
          <CustomButton
            iconLeft="Like"
            iconFill={Colors.lightBlack}
            iconWidth={20}
            iconHeight={20}
            style={{backgroundColor: Colors.transparent}}
            noFeedback
          />
          <View>
            <Text style={styles.actionTitle}>{count}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionContainer}>
          <CustomButton
            iconLeft="Reply"
            iconFill={Colors.lightBlack}
            iconWidth={20}
            iconHeight={20}
            style={{backgroundColor: Colors.transparent}}
            noFeedback
          />
          <View>
            <Text style={styles.actionTitle}>reply</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.actionContainer}
          onPress={() => setCount(count + 1)}>
          <CustomButton
            iconLeft="ThreeDots"
            iconFill={Colors.lightBlack}
            iconWidth={20}
            iconHeight={20}
            style={{backgroundColor: Colors.transparent}}
            noFeedback
          />
          <View>
            <Text style={styles.actionTitle}>more</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const ServeProfileInfo = ({profileDataInfo}) => {
    const {title, body, canVolunteer, people, planet, picture, user} =
      profileDataInfo;
    console.log('hello profileDataInfo', profileDataInfo);

    const isVerified = user.confirmed;
    const profileImage = user.picture[0].url;
    const username = user.username;

    const navStack = isVerified ? 'ProfileStack' : 'AppStack';
    const navScreen = isVerified ? 'ProProfile' : 'Profile';

    return (
      <TouchableOpacity
        style={styles.rowWrapper}
        onPress={() =>
          navigation.navigate(navStack, {
            screen: navScreen,
            params: {
              profileDataInfo: profileDataInfo,
            },
          })
        }>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View>
            <Image
              source={{uri: profileImage}}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
          </View>
          <View>
            <Text style={styles.name}>{username}</Text>
          </View>
          {isVerified && (
            <CustomButton
              iconLeft="Verified"
              iconFill={Colors.primary}
              iconWidth={20}
              iconHeight={20}
              style={{backgroundColor: Colors.transparent}}
              noFeedback
            />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  const ServePostBody = ({}) => {
    return (
      <View>
        <View style={{alignSelf: 'flex-end'}}>
          <CustomButton
            style={{backgroundColor: Colors.transparent}}
            iconLeft="Cross"
            iconWidth={16}
            iconHeight={16}
            onPress={() => navigation.goBack()}
          />
        </View>
        <ServeProfileInfo profileDataInfo={postBody} />
        <View style={{marginVertical: 20}}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={{flex: 3}}>
            <Text style={styles.post}>{post}</Text>
          </View>
          <View style={{flex: 1, alignItems: 'center'}}>
            <CustomButton
              iconLeft={category === 'planet' ? 'Planet' : 'People'}
              iconWidth={34}
              iconHeight={34}
              iconFill={Colors.white}
              style={{
                padding: 5,
                borderRadius: 30,
                backgroundColor:
                  category === 'planet' ? Colors.planet : Colors.primary,
              }}
              onPress={() => alert(category)}
            />
          </View>
        </View>
        <View style={{width: width / 1.5, marginVertical: 20}}>
          <Text style={styles.post}>
            #healthyeating #fruit #veg #vegetables #eatgreen #wunder
          </Text>
        </View>
      </View>
    );
  };

  const ServeReply = ({}) => {
    return (
      <View>
        <FlatList
          data={randomComment}
          keyExtractor={(_, index) => String(index)}
          renderItem={renderFlatList}
        />
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper>
      <View style={{marginHorizontal: '5%', marginTop: '5%'}}>
        <ServePostBody />
      </View>
      <View style={styles.divider} />
      <ScrollView showsVerticalScrollIndicator={false} horizontal={false}>
        <View style={{marginHorizontal: '5%', marginVertical: 30}}>
          <ServeReply />
        </View>
      </ScrollView>
      <ServeReplyInput
        profileDataInfo={postBody}
        reply={reply}
        setReply={setReply}
      />
    </ScreenWrapper>
  );
};

export default Commenting;
