import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Logo from '../assets/Vector.png';
import Colors from '../constants/colors';
import {Height, Width} from '../constants/dimension';

const splashscreen = ({navigation}) => {
  React.useEffect(() => {
    setTimeout(() => {
      navigation.navigate('home');
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} resizeMode="center" />
    </View>
  );
};

export default splashscreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
  },
  logo: {
    height: Height / 2,
    width: Width,
  },
});
