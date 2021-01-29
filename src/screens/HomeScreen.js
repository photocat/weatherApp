import React, {useEffect, useState, useContext} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import {AuthContext} from '../navigation/AuthProvider';
import {GetWeather} from '../utils/GetWeather';
import {Picker} from '@react-native-picker/picker';

export default function HomeScreen({navigation}) {
  const {user, logout} = useContext(AuthContext);
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Kharkiv');

  useEffect(() => {
    GetWeather(city)
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  }, [navigation]);

  const changeCity = (itemValue) => {
    setCity(itemValue);
    GetWeather(itemValue)
      .then((data) => setWeather(data))
      .catch((error) => console.log(error));
  };

  console.log(user);

  return (
    weather && (
      <View style={styles.container}>
        <Picker
          style={{height: 50, width: '60%'}}
          selectedValue={city}
          onValueChange={(itemValue) => changeCity(itemValue)}>
          <Picker.Item label="Luhansk" value="Luhansk" />
          <Picker.Item label="Rivne" value="Rivne" />
          <Picker.Item label="Donetsk" value="Donetsk" />
          <Picker.Item label="Ivano-Frankivsk" value="Ivano-Frankivsk" />
          <Picker.Item label="Kiyv" value="Kiev" />
          <Picker.Item label="Kharkiv" value="Kharkiv" />
          <Picker.Item label="Poltava" value="Poltava" />
          <Picker.Item label="Dnipro" value="Dnipro" />
          <Picker.Item label="Zaporizhzhya" value="Zaporizhzhya" />
          <Picker.Item label="Lviv" value="Lviv" />
          <Picker.Item label="Odesa" value="Odesa" />
          <Picker.Item label="Sumy" value="Sumy" />
          <Picker.Item label="Kherson" value="Kherson" />
        </Picker>
        <View style={styles.wrapper}>
          <Image
            style={{height: 100, width: 100}}
            source={{
              uri:
                'http://openweathermap.org/img/wn/' +
                weather.weather[0].icon +
                '@2x.png',
            }}
          />
          <Text style={styles.text}>City: {weather.name}</Text>
          <Text style={styles.text}>Weather: {weather.weather[0].main}</Text>
          <Text style={styles.text}>
            Temperature: {weather.main.temp.toFixed(0)}&#xb0;
          </Text>
          <Text style={styles.text}>
            Feels like: {weather.main.feels_like.toFixed(0)}&#xb0;
          </Text>
          <Text style={styles.text}>Humidity: {weather.main.humidity}%</Text>
        </View>
        <FormButton buttonTitle="Logout" onPress={() => logout()} />
      </View>
    )
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FEFEFE',
    paddingBottom: 40,
  },

  wrapper: {
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    lineHeight: 30,
    color: '#333333',
  },
});
