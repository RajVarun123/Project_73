import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class ReadStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      allStories: [],
    };
  }

  componentDidMount() {
    this.retriveStories()
  }

  retriveStories = () => {
    try {
      var allStories = []
      var stories = db.collection("story")
      .get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          allStories.push(doc.data())
          console.log("These are the Stories", allStories)
        })
        this.setState({allStories})
      })
    }
    catch{error} {
      console.log(error);
    }
  }

  render() {
    const { search } = this.state;
    return(
      <View>
        <FlatList
          data={this.state.allStories}
          renderItem={({item}) => (
            <View style={styles.itemContainer}>
              <Text>Title: {item.title}</Text>
              <Text>Author: {item.author}</Text>
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    height: 80,
    width: "100%",
    borderWidth: 2,
    borderColor: "pink",
    justifyContent: "center",
    alignSelf: "center"
  }
});