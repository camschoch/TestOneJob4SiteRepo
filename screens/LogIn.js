import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import { WebBrowser } from 'expo';
import axios from 'axios';
import { MonoText } from '../components/StyledText';
import {StackNavigator} from 'react-navigation';
import RootNavigation from '../navigation/RootNavigation';
import HomeScreen from './HomeScreen';
import TestTwo from './TestTwo';
import MainTabNavigator from '../navigation/MainTabNavigator'

export default class LogIn extends React.Component {
  static navigationOptions = {
    header: null,
    tabBarVisible: true,
  };
  
  callAPIUser = () =>{
    let user = null;
    const { navigate } = this.props.navigation;    
    axios.get('http://dev.job4site.com/api/index.php?', {
    params: {
      get_user: 'asdf'
    }
  })
    .then(function (response) {
      let hope = response.data;
      console.log(response.data);
      console.log(hope[0].User);
      hope[0].User.forEach(element => {
        console.log(element);
      });
      navigate('Home');
    })
    .catch(function (error) {
      console.log(error);
      return <RootNavigation />
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/Job4Site_ColorLogo-Small.png')
                  : require('../assets/images/Job4Site_ColorLogo-Small.png')
              }
              style={styles.welcomeImage}
            />
          </View>
            <Text style={styles.getStartedText}>
            Log In
            </Text>
            <Button onPress={this.callAPIUser} title='Log In'/>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
