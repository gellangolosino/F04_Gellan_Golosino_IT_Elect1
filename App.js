import CommentApp from './CommentApp';

import React from 'react';
import { View, StyleSheet } from 'react-native';
import CounterApp from './ChatApp';
import ColorChangerApp from './CommentApp';

const App = () => {
  return (
    <View style={styles.container}>
      <CommentApp />
 />
      <ChatApp/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;