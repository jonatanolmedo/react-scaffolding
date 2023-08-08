// MyHookComponent.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native'; // Importa Button desde react-native
import useMyHook from '../../../context/hooks/MyHook/useMyHook';

const MyHookComponent: React.FC = () => {
  const { data, refreshData } = useMyHook(); // Obtén también la función refreshData del hook

  const handleRefreshData = () => {
    refreshData(); // Llama a la función refreshData al presionar el botón
  };

  return (
    <View>
      {/* Agrega un botón para refrescar los datos */}
      <Button title="Refresh Data" onPress={handleRefreshData} testID="refresh-button"  />

      {/* Renderiza los datos actualizados */}
      {data.map((user) => (
        <View key={user.login.uuid} style={styles.card} testID="user-card">
          <Image source={{ uri: user.picture.large }} style={styles.image} />
          <View style={styles.userInfo}>
            <Text style={styles.name}>{`${user.name.title}. ${user.name.first} ${user.name.last}`}</Text>
            <Text style={styles.email}>Email: {user.email}</Text>
            <Text style={styles.location}>Location: {`${user.location.city}, ${user.location.state}, ${user.location.country}`}</Text>
            <Text style={styles.phone}>Phone: {user.phone}</Text>
          </View>
        </View>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    shadowColor: '#ccc',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    elevation: 4,
    // Ajusta la anchura del card para que no ocupe todo el ancho disponible
    width: '80%',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 50,
  },
  userInfo: {
    flex: 1,
    // Ajusta el estilo del contenedor userInfo
    // para que los elementos se muestren en una columna
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 16,
  },
  location: {
    fontSize: 14,
    color: '#666',
  },
  phone: {
    fontSize: 14,
    color: '#666',
  },
});

export default MyHookComponent;
