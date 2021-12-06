import * as React from 'react';
import { View } from 'react-native';
import { Text} from "react-native-elements";
import LinearGradient from "react-native-linear-gradient";

function Info({ navigation }) {
    return (
      <View style={{ flex: 0.5,alignItems: 'center', justifyContent: 'center' }}>
        <Text h1> Info!</Text>
        <Text h4>Trabajo practico Nro 2</Text>
        <Text>DRAWER NAVIGATOR.</Text>
        <Text>Alumno: Nicolas Cohen Suaya.</Text>
        <Text>Profesor: Christian Dario Nievas.</Text>
          
      </View>
   );
  }

  export default Info;