import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { View, Button, Image,StyleSheet} from 'react-native';

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen({navigation}) {
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: '988313077947-krbv222rnv076hdijep9f86ihj1jhae1.apps.googleusercontent.com'
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
       navigation.navigate('Inicio', {auth: response.authentication})
      }
  }, [response]);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
        <Image  style={styles.imagen}
          source = {{ uri: 'https://superawesomevectors.com/wp-content/uploads/2016/02/the-simpsons-vector-logo-800x566.jpg' }}
        />
        <Button 
            disabled={!request}
            title="Login"
            onPress={() => {
                promptAsync();
            }}> Login </Button>
    </View>
  );
}

const styles = StyleSheet.create({
   imagen: {
    width: 400,
    height: 200,
    marginBottom:50
    
  }
});