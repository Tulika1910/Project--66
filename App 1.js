import * as React from 'react';
import * as Speech from 'expo-speech';
import { Text, View, StyleSheet, TextInput, Image,TouchableOpacity, Alert } from 'react-native';
import { Header } from 'react-native-elements';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
     name: '',
    };
  }
sound=()=>{
  var writtenWord = this.state.text;
    writtenWord ? Speech.speak(writtenWord) : alert('The box can not be left empty. Please write something in the box, then click on the button.')
  }

  speak=()=> {
    var thingToSay = this.state.name
    Speech.speak(thingToSay);
  }

  render(){
  return (
    <View>
      <Header
        backgroundColor={'#ff0056'}
        centerComponent={{
        text: 'Speech Converter',
        style: { color: '#fff', fontSize: 23,fontStyle: 'italic', fontWeight:'bold' },
        }}/>

      <Image
        style={styles.imageIcon}
        source={require('./download.png')}/>

      <Text style={styles.title}>Enter your word 👇</Text>

      <TextInput
        style={styles.inputBox}
        onChangeText={text => {
          this.setState({ name:text});
        }}
        value={this.state.text}
      />

      <TouchableOpacity style={styles.button}
        onPress={()=>{this.speak()}}>
        <Text style={styles.buttonText}>Click Here to hear Speech</Text>
      </TouchableOpacity>
    </View>
  )}
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 25,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
  imageIcon: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginTop: 15
  },
  title:{
    alignSelf: 'center',
    fontWeight: 'bold',
    marginTop: 20,
    fontSize: 27
  },
  button:{
    alignSelf: "center",
    marginTop: 75,
    backgroundColor: '#ff0056',
    padding: 5,
    width: 300,
    height:50,
    borderWidth: 5,
    fontColor:'white'
  },
  buttonText:{
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'

  }
  
});
