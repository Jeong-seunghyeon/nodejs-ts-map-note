import React, { type PropsWithChildren } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

const App = () =>
{
  return (
    <View style={ { flex: 1, flexDirection: 'column' } }>
      <MapView style={ { flex: 1 } } initialRegion={ { latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421, } } />
      <View style={ { flex: 1 } }>
        <Text>앗싸</Text>
      </View>
    </View>);
};

export default App;
