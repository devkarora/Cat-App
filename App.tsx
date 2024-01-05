

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

function App() {
  const gifUrl = 'https://media.giphy.com/media/OmK8lulOMQ9XO/giphy.gif';

  return ( 
    <View> 
      <Text style={{fontSize: 30}}>Wow the world of Mobile Applications!!</Text>
      <Text/>
      <View style={{ flex: 2 }}>
      <Image
        source={{ uri: gifUrl }}
        style={{ width: 200, height: 200 }}
      />
    </View>
    </View>
   );
}



export default App;
