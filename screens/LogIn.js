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
import axios from 'axios';
import HomeScreen from './HomeScreen';
import TestTwo from "./TestTwo";
import {StackNavigator, NavigationActions} from 'react-navigation';  

export default class LogIn extends React.Component {
  static navigationOptions = {
    title: 'HIDE ME',
  };

  callAPIUser = () =>{
    const { navigate } = this.props.navigation;    
    axios.get('http://dev.job4site.com/api/index.php?', {
    params: {
      get_user: 'asdf'
    }
  })
    .then(function (response) {
      console.log("working");  
      navigate('Home');
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  render() {
    return (
      <View style={styles.container}>
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
});
