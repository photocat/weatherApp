import React, {useCallback, useState, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
import {AuthContext} from '../navigation/AuthProvider';
import {useFocusEffect} from '@react-navigation/native';

export default function LoginScreen({route, navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {login, error, setError} = useContext(AuthContext);

  useFocusEffect(
    useCallback(() => {
      setError(null);
    }, [route]),
  );

  const signUpHandler = () => {
    setError(null);
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
      <FormInput
        value={email}
        placeholderText="Email"
        onChangeText={(userEmail) => setEmail(userEmail)}
        autoCapitalize="none"
        keyboardType="email-address"
        autoCorrect={false}
      />
      <FormInput
        value={password}
        placeholderText="Password"
        onChangeText={(userPassword) => setPassword(userPassword)}
        secureTextEntry={true}
      />
      <Text style={styles.error}>{error}</Text>
      <FormButton
        buttonTitle="Login"
        onPress={() => (email && password ? login(email, password) : null)}
        isDisabled={email && password ? false : true}
      />
      <TouchableOpacity style={styles.navButton} onPress={signUpHandler}>
        <Text style={styles.navButtonText}>New user? Join here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f5f5f5',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 24,
    marginBottom: 10,
  },

  error: {
    color: '#F2545B',
    textAlign: 'center',
    fontSize: 16,
    lineHeight: 20,
    marginTop: 12,
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 12,
    minHeight: 40,
  },

  navButton: {
    marginTop: 15,
  },

  navButtonText: {
    fontSize: 20,
    color: '#2191FB',
  },
});
