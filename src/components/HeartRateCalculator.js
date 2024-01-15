// src/components/HeartRateCalculator.js

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AgeInput from './AgeInput';

const HeartRateCalculator = () => {
  const [lowerLimit, setLowerLimit] = useState(null);
  const [upperLimit, setUpperLimit] = useState(null);

  const calculateHeartRateLimits = (age) => {
    const lower = Math.round((220 - age) * 0.65);
    const upper = Math.round((220 - age) * 0.85);

    setLowerLimit(lower);
    setUpperLimit(upper);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Heart Rate Calculator</Text>
      <AgeInput onCalculate={calculateHeartRateLimits} />
      {lowerLimit !== null && upperLimit !== null && (
        <View>
          <Text style={styles.result}>
            Lower Limit: {lowerLimit} bpm, Upper Limit: {upperLimit} bpm
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  result: {
    fontSize: 16,
    marginTop: 20,
  },
});

export default HeartRateCalculator;
