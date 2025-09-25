import ChatApp from './CounterApp';
import CommentApp from './ColorChangerApp';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Chat Section */}
      <View style={styles.section}>
        <CounterApp />
      </View>

      {/* Comment Section */}
      <View style={styles.section}>
        <ColorChangerApp />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    flexDirection: 'column', 
  },
  section: {
    flex: 1,
    borderWidth: 1, 
    borderColor: '#ccc',
  },
});

export default App;
