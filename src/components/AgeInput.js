// src/components/AgeInput.js

import React, { useState } from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native';

const AgeInput = ({ onCalculate }) => {
  const [age, setAge] = useState('');

  const handleCalculate = () => {
    if (age !== '') {
      onCalculate(parseInt(age, 10));
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <Button
        title="Calculate"
        onPress={handleCalculate}
        color="#007BFF" // Set the color to blue
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default AgeInput;
