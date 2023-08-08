// MyComponent.tsx (atom)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyComponent: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is MyComponent!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    padding: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyComponent;
