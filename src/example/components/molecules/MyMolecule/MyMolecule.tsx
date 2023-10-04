// MyMolecule.tsx (molecule)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyComponent from '../../atoms/MyComponent/MyComponent';

const MyMolecule: React.FC = () => {
  return (
    <View style={styles.container} testID="myMoleculeTestId" >
      <Text style={styles.title}>This is MyMolecule!</Text>
      <MyComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default MyMolecule;
