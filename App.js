
import React, { Component } from 'react';
import MovieList from './src/Screens/MoviesList';
import MovieData from './src/Screens/MovieData';
import MoviesDeatils from './src/Components/MovieDetails';
import {
  createStackNavigator,
  createNavigationContainer,
} from 'react-navigation';


class App extends Component {
  render() {
    return {
    }
  }
}


const MainStackNavigator = createStackNavigator(
  {
    // App,
    HomeScreen: MovieList,
    MoviesDeatils: MoviesDeatils,
    MovieData: MovieData,

  }
);
const NavigationApp = createNavigationContainer(MainStackNavigator);
export default NavigationApp;