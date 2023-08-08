// components/atoms/Header.tsx
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const HeaderImage = require('../../../../shared/assets/images/digital-logo.png'); // Reemplaza el path con la ruta de tu imagen

const Header: React.FC = () => {
  return (
    <View style={styles.headerContainer} testID="header-component">
      <Image source={HeaderImage} style={styles.headerImage} resizeMode="contain" data-testid="header-image" />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 100, // Ajusta la altura del encabezado según tus necesidades
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
});

export default Header;
