// HomeScreen.tsx
import React, { useContext } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native'; // Importa ScrollView
import Button from '../../../../shared/components/atoms/Button/Button';
import dateFormatter from '../../../../shared/utils/dateFormatter/dateFormatter';
import { MyOrganism, MyComponent, MyMolecule, Header, MyHookComponent } from '../../index';
import MyContext from '../../../context/MyContext/MyContext';
import useMyHook from '../../../context/hooks/MyHook/useMyHook';


const HomeScreen: React.FC = () => {
  const { data, refreshData } = useMyHook(); // Invocamos el hook y obtenemos data y refreshData

  const currentDate = new Date();
  const formattedDate = dateFormatter(currentDate);

  const myContextData = useContext(MyContext);

  return (
    // Use ScrollView as the outer container
    <ScrollView contentContainerStyle={styles.container}>
      <Header />
      <View style={styles.spacer} />
      <Text style={styles.dateText}>Context Example:</Text>
      <Text style={styles.title}>Welcome, {myContextData?.email}!</Text>
      <View style={styles.spacer} />
      <Text style={styles.dateText}>DateFormatter Example:</Text>
      <Text style={styles.dateText}>Today's Date: {formattedDate}</Text>

      <View style={styles.spacer} />
      <MyComponent />
      <View style={styles.spacer} />
      <MyMolecule />
      <View style={styles.spacer} />
      <MyOrganism />
      <View style={styles.spacer} />
      <Text style={styles.dateText}>Hook Example:</Text>
      <MyHookComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1, // Set flexGrow to 1 to allow content to scroll
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dateText: {
    fontSize: 16,
    marginBottom: 10,
  },
  spacer: {
    height: 20,
  },
});

export default HomeScreen;
