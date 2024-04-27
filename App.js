import { View } from 'react-native';
import WeatherScreen from './src/screens/weather';

export default function App() {
  return (
    <View style={{ flex: 1 , justifyContent:'center'}}>
      <WeatherScreen/>
    </View>
  );
}
