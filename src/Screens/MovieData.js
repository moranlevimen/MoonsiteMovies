import React, { Component } from 'react';
import { Text, Content, Card, CardItem, Thumbnail } from 'native-base';
import StarRating from 'react-native-star-rating';


class MoviesData extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: navigation.getParam('data').name,
        headerTitleStyle: { color: "black" },
    })


    render() {
        const { navigation } = this.props;
        const movie = navigation.getParam('data', {});

        console.log(movie);
        return (
          
                <Card style={styles.cardStyle}>
                    <Thumbnail source={{ uri: movie.image.medium }} style={{ height: 300, width: '100%', resizeMode: 'stretch' }} />
                    <CardItem cardBody >
                        <Content>
                            <Text>rating:{movie.rating.average ? movie.rating.average : ''}</Text>
                            <StarRating
                                disabled={false}
                                starSize={20}
                                maxStars={10}
                                rating={movie.rating.average}
                                fullStarColor={'yellow'}
                            />

                            <Text>
                                summary:{movie.summary ? movie.summary : ''}
                            </Text>

                            <Text>
                                genres:  {movie.genres ? movie.genres : ''}
                            </Text>

                            {
                                movie.schedule.days.map(ele =>
                                    <Text>
                                        schedule:
                                {ele}</Text>)
                            }

                            <Text>
                                network:  {movie.network.name ? movie.network.name : ''}
                            </Text>
                            <Text>
                                language:  {movie.language ? movie.language : ''}
                            </Text>

                        </Content>
                    </CardItem>

                </Card>
        );
    }
}



const styles = {


    cardStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
        flex: 0.7
    },


};

export default MoviesData;