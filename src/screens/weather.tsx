import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View , StyleSheet } from 'react-native';
import { IWeatherData } from '../interfaces';
import { API_KEY, BASE_URL } from '../services/api';
import * as Location from 'expo-location';

const WeatherScreen = () => {
    const [weather, setWeather] = useState<IWeatherData | null>(null);
    const [location, setLocation] = useState<Location.LocationObject>();
    const [errorMsg, setErrorMsg] = useState('');
  
    const fetchWeather = async () => {
        if (!location) {
            return;
        }

        const results = await fetch(`${BASE_URL}?lat=${location?.coords.latitude}&lon=${location?.coords.longitude}&appid=${API_KEY}&units=metric`);
        const data = await results.json();
        console.log(JSON.stringify(data, null , 2));
        setWeather(data);
    };

    useEffect(() => {
        if (location) {
            fetchWeather();
        }
    }, [location]);

    const fetchForecast = async () => {
        
    }
  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      console.log(location)
      setLocation(location);
    })();
  }, []);

  
    if (!weather) {
        return <ActivityIndicator/>;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.location}>{weather.name}</Text>
            <Text style={styles.temp}>{Math.floor(weather.main.temp)}°</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        justifyContent:'center',
        alignItems:'center',
        alignSelf:'center'
    },
    location:{
        fontSize: 20
    },
    temp:{
        fontSize:20,
        color:'gray'
    }
})

export default WeatherScreen;
