import * as React from 'react';
import { View } from 'react-native';
import { Text } from "react-native-elements";

function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 0.5, margin: 60, alignItems: 'center', justifyContent: 'center' }}>
        <Text h1> Bienvenido!</Text>
        <Text > Ingresá al menú, buscá la sección Random y recibiras la frase del día.</Text>
      </View>
   );
  }

  export default HomeScreen;