import React, { useState } from 'react';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
//components
import { InputForm } from './src/components/InputForm';
import { Navbar } from './src/components/Navbar';
import { TodoItem } from './src/components/TodoItem';

export default function App() {
  const [todo, setTodos] = useState([
    { id: '1', title: '1' },
    { id: '2', title: '2' },
    { id: '3', title: '3' },
  ]);
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.inputBlock}>
        <InputForm
          addTodo={(title) =>
            setTodos((prev) => [...prev, { id: Date.now().toString(), title }])
          }
        />
      </View>
      <ScrollView style={styles.todosBlock}>
        {todo.map((item) => (
          <TodoItem key={item.id} title={item.title} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  inputBlock: {
    padding: 8,
  },
  todosBlock: {
    padding: 8,
  },
});
