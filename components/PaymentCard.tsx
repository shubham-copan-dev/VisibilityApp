import React from 'react';
import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';

const PaymentCardView = () => {
  return (
    <View style={styles.estimatedViewContainer}>
      <View>
        <Text style={styles.estimatedPaymentText}>Estimated payment</Text>
        <Text style={styles.amountText}>$12,240.50</Text>
        <Text>Next payment date is 30 Dec 2023</Text>
      </View>
      <View style={styles.chevronContainer}>
        <Image
          source={require('../assets/images/chevron-right-icon.png')}
          alt="right-icon"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  estimatedViewContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
    borderRadius: 18,
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 16,
    paddingRight: 16,
  },
  estimatedPaymentText: {
    color: '#252B41',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 20.8,
  },
  amountText: {
    color: '#252B41',
    fontFamily: 'Poppins',
    fontSize: 48,
    fontWeight: '500',
    lineHeight: 57.6,
  },
  chevronContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    backgroundColor: '#4274CF33',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PaymentCardView;
