import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

const ChatApp = () => {
  const [messages, setMessages] = useState([]); // all chat messages
  const [text, setText] = useState(''); // what user types
  const [hasReply, setHasReply] = useState(false); // check if reply is shown
  const [idCount, setIdCount] = useState(1); // simple counter for IDs

  const sendMessage = () => {
    if (text.trim() === '') return;

    // add my message
    const myMessage = { id: idCount, sender: 'me', content: text };
    setMessages([...messages, myMessage]);
    setIdCount(idCount + 1);
    setText('');

    // show reply only after first message
    if (!hasReply) {
      const replyMessage = { id: idCount + 1, sender: 'other', content: 'Gwapa ka' };
      setMessages([...messages, myMessage, replyMessage]);
      setIdCount(idCount + 2);
      setHasReply(true);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.title}>Chat App</Text>

      <ScrollView style={styles.chatBox}>
        {messages.map((msg) => (
          <Text
            key={msg.id}
            style={msg.sender === 'me' ? styles.myMessage : styles.otherMessage}
          >
            {msg.content}
          </Text>
        ))}
      </ScrollView>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Type a message..."
        />
        <Button title="Send" onPress={sendMessage} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple', // 💜 purple background
    padding: 20,
  },
  title: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 10, color: 'white' },
  chatBox: { flex: 1, marginBottom: 50 },
  myMessage: { textAlign: 'right', color: 'yellow', marginVertical: 5 },
  otherMessage: { textAlign: 'left', color: 'white', marginVertical: 5 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 3, borderColor: 'black', padding: 10, marginRight: 8, backgroundColor: 'white' },
});

export default ChatApp;
