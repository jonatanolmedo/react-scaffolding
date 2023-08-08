// MyOrganism.tsx (organism)
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MyMolecule from '../molecules/MyMolecule/MyMolecule';
import MyComponent from '../atoms/MyComponent/MyComponent';

const MyOrganism: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is MyOrganism!</Text>
      <MyMolecule /> 
      <MyComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgreen',
    padding: 30,
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MyOrganism;
