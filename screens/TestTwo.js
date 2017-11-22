import React from 'react';
import { ScrollView, StyleSheet, Dimensions, Text } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

export default class MapExample extends React.Component {

  static navigationOptions = {
    title: 'TestTwo',
  };
  constructor() {
  super();
  this.state = {
    region: {
      latitude: 43.04,
      longitude: -87.99,
      latitudeDelta: 0.0043,
      longitudeDelta:  0.0034,
    }
  };
}

  render() {
    return (
      <MapView
      provider={ PROVIDER_GOOGLE }      
      style={ styles.container }
      showsUserLocation={ true }
      region={ this.state.region }
    >
    </MapView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});