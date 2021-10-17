import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const Navbar = () => {
  return (
    <View style={style.header}>
      <Text>Hiyushki</Text>
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e5e5e5',
  },
});
