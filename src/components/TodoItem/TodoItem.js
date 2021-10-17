import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const TodoItem = ({ title }) => {
  return (
    <View>
      <Text style={styles.todoItem} onLongPress={() => console.log(title)}>
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  todoItem: {
    margin: 4,
    padding: 8,
    fontSize: 20,
    backgroundColor: '#eee',
  },
});
