import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimensions';

export default function FormButton({buttonTitle, isDisabled, ...rest}) {
  return (
    <TouchableOpacity
      activeOpacity={isDisabled ? 1 : 0.8}
      style={[
        styles.buttonContainer,
        isDisabled ? {backgroundColor: '#F2545B'} : null,
      ]}
      {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 10,
    width: windowWidth / 2,
    height: windowHeight / 15,
    backgroundColor: '#2191FB',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 28,
    color: '#ffffff',
  },
});
