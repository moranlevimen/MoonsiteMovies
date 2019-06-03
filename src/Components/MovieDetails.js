import React, { Component } from 'react';
import { Text, Content, Card, CardItem, Thumbnail, Button, } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating';



class MovieDetails extends React.Component {
    static navigationOptions = {
        title: 'Movie Details:',
        headerTitleStyle: { color: "white" },
        headerStyle: { backgroundColor: "#4050b5" }
    }

    constructor(props) {
        super(props);
        this.state = {
             starCount: 3.5///?
        };
    }

    render() {
        const { navigate } = this.props.navigation;
        const { id, url, name, type, language, genres, image, summary, schedule, rating,network } = this.props.movie;
        // console.log(this);

        return (
       
            <Card style={styles.cardStyle}>
                <Thumbnail source={{ uri: image.medium }} style={{ height: 350, width: '100%', flex: 1, resizeMode: 'stretch' }} />
                <CardItem cardBody >
                    <Content>
                        <Text>{name ? name : ''}</Text>
                        {
                            schedule.days.map(ele =><Text>{ele}</Text>)
                        }
                        <Text>{rating.average ? rating.average : ''}</Text>
                   
                         <StarRating
                            disabled={false}
                            starSize={20}
                            maxStars={10}
                            rating={rating.average}
                            fullStarColor={'yellow'}
                            
                        />
                        {/* <Icon name="star" size={10} color="#ffd700" size={15} />
                        <Icon name="star-half-o" size={10} color="#ffd700" size={15} /> */}
                        <Button full dark onPress={() => { this.props.navigation.navigate('MovieData',{data: {name,image,rating,summary,genres,schedule,network,language}}) }}>

                            <Text>click here for more details</Text>
                        </Button>
                    </Content>
                </CardItem>
   
            </Card>
        
        );
    }
}



const styles = {
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },

    cardStyle: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        marginTop: 10,
    },
    // conatinerStyle: {
    //     flex: 0.9
    // },
    // footerContainer: {
    //     flex: 0.07,
    //     backgroundColor: "#4050b5",
    //     justifyContent: "center",
    //     alignItems: 'center'
    // },
};

export default MovieDetails;