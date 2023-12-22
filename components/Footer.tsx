import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footer}>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../assets/images/Home-icon.png')}
          alt="profile-icon"
        />
        <Text>Home</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../assets/images/trophy.png')}
          alt="profile-icon"
        />
        <Text>Goal Attainment</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../assets/images/payment-icon.png')}
          alt="profile-icon"
        />
        <Text>Payments</Text>
      </View>
      <View style={styles.iconsContainer}>
        <Image
          source={require('../assets/images/search-icon.png')}
          alt="profile-icon"
        />
        <Text>Search</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'space-evenly',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 16,
    paddingRight: 16,
  },
  iconsContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Footer;
