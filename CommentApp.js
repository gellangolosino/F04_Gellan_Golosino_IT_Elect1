import React, { useState } from 'react';
import {View,Text,TextInput, Button, StyleSheet,
  KeyboardAvoidingView,Platform,ScrollView,
  TouchableOpacity,} from 'react-native';

const CommentApp = () => {
  const [comments, setComments] = useState([]); // all comments
  const [text, setText] = useState(''); // input text
  const [idCount, setIdCount] = useState(1); // simple ID counter

  const addComment = () => {
    if (text.trim() === '') return;

    const newComment = { id: idCount, content: text, reaction: null };
    setComments([...comments, newComment]);
    setIdCount(idCount + 1);
    setText('');
  };

  const reactToComment = (id, emoji) => {
    const updated = comments.map((pak) =>
      pak.id === id ? { ...pak, reaction: emoji } : pak
    );
    setComments(updated);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Post */}
      <View style={styles.postBox}>
        <Text style={styles.postTitle}>🧟 Gellan Golosino</Text>
        
        
        <Text style={styles.postText}>
          Jeremiah 29:11 
                For I know the plans I have for you, declares the Lord, plan that prosper you and not to harm you, plan that give you hope and a future. 
        </Text>
      </View>

      {/* Comments */}
      <ScrollView style={styles.commentBox}>
        {comments.map((pak) => (
          <View key={pak.id} style={styles.commentBubble}>
            <Text style={styles.commentText}>{pak.content}</Text>

            {/* Reaction */}
            {pak.reaction && (
              <Text style={styles.reactionText}>Reaction: {pak.reaction}</Text>
            )}

            {/* Reaction Buttons */}
            <View style={styles.reactionRow}>
              <TouchableOpacity onPress={() => reactToComment(pak.id, '👍')}>
                <Text style={styles.reactBtn}>👍</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => reactToComment(pak.id, '❤️')}>
                <Text style={styles.reactBtn}>❤️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => reactToComment(pak.id, '😂')}>
                <Text style={styles.reactBtn}>😂</Text>
                        </TouchableOpacity>
              <TouchableOpacity onPress={() => reactToComment(pak.id, '😡')}>
                <Text style={styles.reactBtn}>😡</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Input */}
      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={text}
          onChangeText={setText}
          placeholder="Write a comment..."
        />
        <Button title="Add" onPress={addComment} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'gray', padding: 20 },
  postBox: { padding: 15, backgroundColor: '#fff', borderRadius: 8, marginBottom: 15 },
  postTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 5 },
  postText: { fontSize: 16 },
  commentBox: { flex: 1, marginBottom: 10 },
  commentBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#d1e7ff',
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
    maxWidth: '80%',
  },
  commentText: { fontSize: 15 },
  reactionText: { marginTop: 5, fontSize: 14,  color: 'purple' },
  reactionRow: { flexDirection: 'row', marginTop: 5 },
  reactBtn: { fontSize: 20, marginHorizontal: 5 },
  inputRow: { flexDirection: 'row', alignItems: 'center' },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginRight: 8,
    borderRadius: 20,
    backgroundColor: 'white',
  },
});

export default CommentApp;

