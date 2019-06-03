import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import axios from 'axios';
import { Text } from 'native-base';
import MoviesDeatils from '../Components/MovieDetails';


class MoviesList extends Component {
  static navigationOptions = {
    title: 'Choose Your Movie',

  }
  // onPressBack = () => {
  //   this.props.navigation.pop();
  //   // this.props.navigation.goBack();
  // };

  state = { movies: [] };

  componentWillMount() {
    axios.get('http://api.tvmaze.com/shows')
      .then(response => {
        const movies = [];
        for (let i = 0; i < 10; i++) {
          movies.push(response.data[i]);
        }
        this.setState({ movies });
        //  console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }
  renderMovies() {
    return this.state.movies.map(movie =>
      <MoviesDeatils key={movie.id} movie={movie} navigation={this.props.navigation} />
      // <Text>{response.data.name}</Text>
    );
  }

  render() {
    // console.log(this.state)
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>
          {this.state.movies.length > 0 ? this.renderMovies() : <Text>' we are loading the data'</Text>}

        </ScrollView>
        <View style={{
          position: 'relative', left: 0, right: 0, bottom: 20, fontSize: 50,
          fontWeight: 'bold'
        }}>
          <Text style={{
            textAlign: 'center', // <-- the magic
            fontWeight: 'bold',
            fontSize: 18,
            marginTop: 0,
            width: '100%',
            height:30,
            backgroundColor: 'yellow',
          }} >Moran Levi</Text>
        </View>
      </View>
    );
  }
}
export default MoviesList;