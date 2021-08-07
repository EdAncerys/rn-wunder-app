import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import {useAuthState} from '../../context/auth';
import AddPostAction from '../../components/AddPostAction';
import {PROJECTS_DATA} from '../../config/data';

import ScreenWrapper from '../../components/ScreenWrapper';
import Colors from '../../config/colors';
import Fonts from '../../config/fonts';
import CustomButton from '../../components/CustomButton';
import DonateActions from '../../components/DonateActions';
import ProjectList from '../../components/ProjectList';

import DummyBackground from '../../assets/images/profile/profile-background.png';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  donateContainer: {
    justifyContent: 'center',
    marginHorizontal: '5%',
  },
  actionContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: '5%',
    marginVertical: '5%',
  },
  actionTitle: {
    ...Fonts.N_700_12,
  },
});

const Projects = ({navigation}) => {
  const {addAction} = useAuthState();
  const [addPostPopUp, setAddPostPopUp] = React.useState(null);
  const [data, setData] = React.useState(PROJECTS_DATA);
  const [mutatedData, setMutatedData] = React.useState(false);
  const [filter, setFilter] = React.useState('');

  React.useEffect(() => {
    if (!filter) {
      const mutatedDataArray = serveMutateArray(data);
      setMutatedData(mutatedDataArray);
      return;
    }
    if (filter === 'nearMe') {
      const nearMe = data.sort(() => 0.5 - Math.random()).slice(0, 7);
      const mutatedDataArray = serveMutateArray(nearMe);
      setMutatedData(mutatedDataArray);
      return;
    }
    if (filter === 'people' || 'planet') {
      const mutatedData = data.filter(
        profileDataInfo => profileDataInfo.category == filter,
      );
      const mutatedDataArray = serveMutateArray(mutatedData);
      setMutatedData(mutatedDataArray);
      return;
    }
  }, [filter]);

  React.useEffect(() => {
    if (addAction) setAddPostPopUp(addAction.addAction);
  }, [addAction]);

  // SERVERS ---------------------------------------------------------
  const serveMutateArray = array => {
    let mutatedArray = [];
    array.map((profileDataInfo, index) => {
      let dummy = {
        url: DummyBackground,
        dummy: true,
      };

      if (index % 4 === 0) profileDataInfo.halfWidth = true;
      if (index % 5 === 0 && index !== 0)
        mutatedArray = [...mutatedArray, dummy];
      mutatedArray = [...mutatedArray, profileDataInfo];
    });

    return mutatedArray;
  };

  const ServeActions = ({navigation}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="All"
          titleStyling={{
            ...styles.actionTitle,
            color: filter === '' ? Colors.lightBlack : Colors.lightSilver,
          }}
          onPress={() => setFilter('')}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="People"
          titleStyling={{
            ...styles.actionTitle,
            color: filter === 'people' ? Colors.lightBlack : Colors.lightSilver,
          }}
          onPress={() => setFilter('people')}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="Planet"
          titleStyling={{
            ...styles.actionTitle,
            color: filter === 'planet' ? Colors.lightBlack : Colors.lightSilver,
          }}
          onPress={() => setFilter('planet')}
        />
        <CustomButton
          style={{
            backgroundColor: Colors.transparent,
          }}
          title="Near Me"
          titleStyling={{
            ...styles.actionTitle,
            color: filter === 'nearMe' ? Colors.lightBlack : Colors.lightSilver,
          }}
          onPress={() => setFilter('nearMe')}
        />
      </View>
    );
  };

  // RETURN ---------------------------------------------------------
  return (
    <ScreenWrapper>
      {addPostPopUp && <AddPostAction navigation={navigation} />}
      <View style={styles.wrapper}>
        <View style={styles.donateContainer}>
          <DonateActions navigation={navigation} projects />
        </View>
        <View style={styles.actionContainer}>
          <ServeActions navigation={navigation} />
        </View>
        <ProjectList navigation={navigation} projects={mutatedData} />
        <View style={{paddingBottom: 60}} />
      </View>
    </ScreenWrapper>
  );
};

export default Projects;
