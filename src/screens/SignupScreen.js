import React, {useState, useContext} from 'react';
import {AuthContext} from '../navigation/AuthProvider';
import {View, Text, StyleSheet} from 'react-native';
import FormButton from '../components/FormButton';
import FormInput from '../components/FormInput';
export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {register, error} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
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
        buttonTitle="Signup"
        onPress={() => (email && password ? register(email, password) : null)}
        isDisabled={email && password ? false : true}
      />
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
});
