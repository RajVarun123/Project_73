import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, ToastAndroid } from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';
import firebase from 'firebase';

const showToast = () => {
  ToastAndroid.show("You Have Submitted The Story", ToastAndroid.SHORT);
};

export default class WriteStoryScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text1: "",
      text2: "",
      text3: ""
    }
  }

  submitStory() {
    db.collection("transactions").add({
      'Title': this.state.text1,
      'Author': this.state.text2,
      'Story': this.state.text3
    })
  }
  
  render() {
      return(
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <View>
            <Header
              backgroundColor={'#9c8210'}
              centerComponent={{
                text: 'Monkey Chunkey',
                style: { color: 'white', fontSize: 20 },
              }}
            />

            <Image source={require("../assets/write.png")} style={{width: 200, height: 200}}/>
            
            <TextInput
              style={styles.inputBox}
              onChangeText={(text1) => {
                this.setState({
                  text1: text1,
                });
              }}
              value = {this.state.text1}
              placeholder = "Title of the Story"
            />

            <TextInput
              style={styles.inputBox}
              onChangeText={(text2) => {
                this.setState({
                  text2: text2,
                });
              }}
              value = {this.state.text2}
              placeholder = "Author of The Story"
            />

            <TextInput
              style={styles.inputBox}
              onChangeText={(text3) => {
                this.setState({
                  text3: text3,
                });
              }}
              value = {this.state.text3}
              multiline = {true}
              placeholder = "Write Story"
            />

            <TouchableOpacity
              onPress = {() => {
                submitStory(),
                showToast()
              }}
            ><Text>Submit</Text></TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});