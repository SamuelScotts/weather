import React from 'react';
import { Platform, StyleSheet, View, Text, ImageBackground, KeyboardAvoidingView} from 'react-native';

import SearchInput from './components/searchInput'
import getImageFromWeather from './getImageForWeather'

export default class App extends React.Component {  
    constructor(props) {
      super(props);
        this.state = {
          location: 'San Francisco',
      };
    }

    handleUpdateLocation = city => {
      this.setState({
        location: city,
      });
    };

  render(){
    const { location } = this.state;

    return (
      <KeyboardAvoidingView behaviour='height' style={styles.container}>
        <ImageBackground source={getImageFromWeather('Clear')} style={styles.imageContainer} imageStyle={styles.image}>
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24°</Text>
            <SearchInput placeholder="Search any city..." onSubmit={this.handleUpdateLocation}/>
            </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: '#FFF',  
    textAlign: 'center',
    fontFamily:
    Platform.select({
      ios: {
      fontFamily: 'AvenirNext-Regular',
      },
      android: {
      fontFamily: 'Roboto',
      },
    })
  },
  largeText: {
    fontSize: 44,
  },
  smallText: {
    fontSize: 18,
  },
  imageContainer: {
    flex: 1,
    },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)',
    paddingHorizontal: 20,
    },
});
