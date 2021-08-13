import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import {useAuthState, useAuthDispatch, createNewPost} from '../../context/auth';
import {useApiDispatch, useApiState} from '../../context/api';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import NavigateAction from '../../components/NavigateAction';
import Loading from '../../components/Loading';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  title: {
    ...Fonts.N_700_16,
    color: Colors.lightBlack,
    textAlign: 'justify',
  },
  navigateActionContainer: {
    flexDirection: 'row',
    marginTop: '5%',
    marginHorizontal: '5%',
  },
  content: {
    flex: 1,
    marginHorizontal: '5%',
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
    marginVertical: '2%',
  },
  btnTitleStyling: {
    flex: 1,
    ...Fonts.N_400_16,
    color: Colors.lightBlack,
  },
  btnStyling: {
    backgroundColor: Colors.transparent,
    marginVertical: 5,
  },
  contentWrapper: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
  logoContainer: {
    flex: 3,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginVertical: '5%',
  },
  inputContainer: {
    ...Fonts.N_400_12,
    marginVertical: '2%',
    padding: 5,
    borderRadius: 4,
    backgroundColor: Colors.transparent,
    color: Colors.lightBlack,
  },
  btnWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightSilver,
  },
});

// SERVERS ---------------------------------------------------------
const ServeAboutPostSection = ({
  renderImg,
  title,
  setTitle,
  body,
  setBody,
  hashtag,
  setHashtag,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: '5%',
        }}>
        <View
          style={{
            height: 170,
          }}>
          <Image
            style={{
              width: 80,
              height: 170,
              borderRadius: 5,
              overflow: 'hidden',
              resizeMode: 'cover',
            }}
            source={renderImg}
          />
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-start',
            marginLeft: '5%',
          }}>
          <View
            style={{
              borderBottomWidth: 1,
              borderColor: Colors.lightSilver,
              width: '100%',
            }}>
            <TextInput
              // maxLength={20}
              require={true}
              placeholder="Title of post..."
              underlineColorAndroid="transparent"
              placeholderTextColor={Colors.lightSilver}
              style={styles.inputContainer}
              value={title}
              onChangeText={setTitle}
              autoCapitalize="none"
            />
          </View>
          <View
            style={{
              width: '100%',
              height: 100,
            }}>
            <TextInput
              multiline={true}
              numberOfLines={3}
              require={true}
              placeholder="Write a body..."
              underlineColorAndroid="transparent"
              placeholderTextColor={Colors.lightSilver}
              style={styles.inputContainer}
              onChangeText={setBody}
              value={body}
              autoCapitalize="none"
            />
          </View>
        </View>
      </View>
      <View style={styles.divider} />
      <View
        style={{
          width: '100%',
          height: 100,
        }}>
        <TextInput
          multiline={true}
          numberOfLines={3}
          require={true}
          placeholder="Create some hashtags..."
          underlineColorAndroid="transparent"
          placeholderTextColor={Colors.lightSilver}
          style={styles.inputContainer}
          onChangeText={setHashtag}
          value={hashtag}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.divider} />
    </View>
  );
};

const SharePost = ({navigation, route}) => {
  const dispatchAuth = useAuthDispatch();
  const dispatchApi = useApiDispatch();
  const {user, jwt} = useAuthState();
  const {error} = useApiState();

  const {image} = route.params;
  const {url} = image;
  const renderImg = url || image;
  const userID = user.id;

  const [isLoading, setIsLoading] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [body, setBody] = React.useState('');
  const [hashtag, setHashtag] = React.useState('');
  const [tagPeople, setTagPeople] = React.useState('');
  const [location, setLocation] = React.useState('London');
  const [people, setPeople] = React.useState(false);
  const [planet, setPlanet] = React.useState(false);
  const [draft, setDraft] = React.useState(false);
  const [canVolunteer, setCanVolunteer] = React.useState(false);

  // SERVERS ---------------------------------------------------------
  const ServeActions = ({}) => {
    return (
      <View>
        <View style={styles.contentWrapper}>
          <CustomButton
            title="Tag People"
            iconRight="ChevronRight"
            iconWidth={12}
            iconHeight={16}
            titleStyling={styles.btnTitleStyling}
            style={styles.btnStyling}
            onPress={() => alert('Tag People')}
          />
        </View>
        <View style={styles.contentWrapper}>
          <CustomButton
            title="Location"
            iconRight="ChevronRight"
            iconWidth={12}
            iconHeight={16}
            titleStyling={styles.btnTitleStyling}
            style={styles.btnStyling}
            onPress={() => alert('Location')}
          />
        </View>
        <View style={styles.btnWrapper}>
          <View style={{flex: 1}}>
            <CustomButton
              noFeedback
              title="People"
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
            />
          </View>
          <View>
            <Switch
              trackColor={{false: Colors.matFilter, true: Colors.primary}}
              thumbColor={Colors.white}
              ios_backgroundColor={Colors.matFilter}
              onValueChange={() => setPeople(!people)}
              value={people}
            />
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <View style={{flex: 1}}>
            <CustomButton
              noFeedback
              title="Planet"
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
            />
          </View>
          <View>
            <Switch
              trackColor={{false: Colors.matFilter, true: Colors.planet}}
              thumbColor={Colors.white}
              ios_backgroundColor={Colors.matFilter}
              onValueChange={() => setPlanet(!planet)}
              value={planet}
            />
          </View>
        </View>
        <View style={styles.btnWrapper}>
          <View style={{flex: 1}}>
            <CustomButton
              noFeedback
              title="Save for to drafts?"
              titleStyling={styles.btnTitleStyling}
              style={styles.btnStyling}
            />
          </View>
          <View>
            <Switch
              trackColor={{false: Colors.matFilter, true: Colors.primary}}
              thumbColor={Colors.white}
              ios_backgroundColor={Colors.matFilter}
              onValueChange={() => setDraft(!draft)}
              value={draft}
            />
          </View>
        </View>
        <View style={styles.contentWrapper}>
          <CustomButton
            title="Advanced Settings"
            iconRight="ChevronRight"
            iconWidth={12}
            iconHeight={16}
            titleStyling={styles.btnTitleStyling}
            style={styles.btnStyling}
            onPress={() => alert('Advanced Settings')}
          />
        </View>
      </View>
    );
  };

  // HANDLERS ---------------------------------------------------------
  const handleSharePost = () => {
    // setIsLoading(true);
    const createNewPostData = {
      user: userID,
      title,
      body,
      location,
      picture: '610c1143f6b07a016f68eacf',
      people,
      planet,
      canVolunteer,
    };
    // createNewPost({dispatchAuth, dispatchApi, createNewPostData, jwt});
    // setTile('');
    // setBody('');
    // setHashtag('');
    // setLocation('');
    // setPeople(false);
    // setPlanet(false);
    // setDraft(false);

    // navigation.navigate('AppStack', {screen: 'Home'})
  };

  if (isLoading) return <Loading />;

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper filter={Colors.white}>
      <View style={styles.wrapper}>
        <View style={styles.navigateActionContainer}>
          <View style={{flex: 2}}>
            <NavigateAction
              title="New Post"
              titleStyling={{color: Colors.lightBlack}}
              iconFill={Colors.lightBlack}
              onPress={() => navigation.goBack()}
            />
          </View>
          <View style={{justifyContent: 'center'}}>
            <CustomButton
              title="Share"
              titleStyling={{...Fonts.N_700_12, color: Colors.primary}}
              style={styles.btnStyling}
              onPress={handleSharePost}
            />
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.content}>
          <ServeAboutPostSection
            renderImg={renderImg}
            title={title}
            setTitle={setTitle}
            body={body}
            setBody={setBody}
            hashtag={hashtag}
            setHashtag={setHashtag}
          />
          <ServeActions />
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SharePost;
