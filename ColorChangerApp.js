import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ColorChangerApp = () => {
  const [backgroundColor, setBackgroundColor] = useState('white');

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Button title="White" onPress={() => setBackgroundColor('pink')} />
      <Button title="Light Blue" onPress={() => setBackgroundColor('lightblue')} />
      <Button title="Light Green" onPress={() => setBackgroundColor('lightgreen')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorChangerApp;