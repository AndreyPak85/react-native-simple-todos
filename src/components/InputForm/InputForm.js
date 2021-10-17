import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

export const InputForm = ({ addTodo }) => {
  const [todo, setTodo] = useState('');

  return (
    <>
      <View style={styles.inputForm}>
        <TextInput
          style={styles.textInput}
          value={todo}
          onChangeText={setTodo}
        />
        <Button
          title='Add'
          onPress={() => {
            addTodo(todo);
            setTodo('');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textInput: {
    width: '75%',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
  },
});
