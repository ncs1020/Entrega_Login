import * as React from 'react';
import axios from 'axios';
import { View, TextInput, StyleSheet, Image} from 'react-native';
import { Text, Button } from "react-native-elements";


export default class MostrarRandom extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      quote: "Eat my shorts",
      character: "Bart Simpson",
      image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FBartSimpson.png?1497567511638",
      characterDirection: "Right",
      prueba: false
    }
  }

  
  frase = () => { 
    
    let url = "https://simpsons-quotes-api.herokuapp.com/quotes";

    axios.get(url)
    .then(
      res => { console.log(res.data[0].quote),
      this.setState({
        quote: res.data[0].quote,
        character: res.data[0].character,
        image: res.data[0].image,
        characterDirection: res.data[0].characterDirection,
        prueba: true
      });
    })
    .catch ((error) => console.error(error));  
  };

 render(){
 
    return (
      <View>
        <Text h1 style={styles.baseText}> {this.state.character} </Text>
        <Text style={styles.baseText}> {this.state.quote} </Text>
        <Image  style={styles.imagen}
          source = {{ uri: this.state.image }}
        />
        <Button  buttonStyle={{ marginLeft: 120, marginTop: 20, width: 150, height: 50 }} onPress={this.frase} title="Proxima frase" />
      </View>
    );
  }
}

  
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    marginTop: 50,
    borderWidth: 1,
    padding: 10,
  },
  baseText: {
    padding: 10,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
   
  },
  imagen: {
    width: 250,
    height: 400,
    marginLeft: 80,
  },
  button: {
   
  }
 
});