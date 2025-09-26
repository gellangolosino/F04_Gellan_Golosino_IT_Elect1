import ColorChangerApp from './ColorChangerApp';
import CounterApp from './CounterApp';
import ChatApp from './ChatApp'
import CommentApp from './CommentApp'
import React from 'react';
import { View, StyleSheet } from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      {/* Chat Section */}
      <View style={styles.section}>
        <ColorChangerApp/>
      </View>

      {/* Comment Section */}
      <View style={styles.section}>
        <CounterApp/>

      </View>
      
       <View style={styles.section}>
        <ChatApp/>

      </View>
      
       <View style={styles.section}>
        <CommentApp/>

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
