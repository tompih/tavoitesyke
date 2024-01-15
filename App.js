import React from 'react';
import { SafeAreaView } from 'react-native';
import HeartRateCalculator from './src/components/HeartRateCalculator';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeartRateCalculator />
    </SafeAreaView>
  );
}
