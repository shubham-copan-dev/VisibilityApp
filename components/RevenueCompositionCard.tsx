import React from 'react';
import {View, Image, Text} from 'react-native';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  revenueCardContainer: {
    backgroundColor: '#fff',
    marginTop: 32,
    borderRadius: 18,
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 16,
    paddingRight: 16,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleLabel: {
    display: 'flex',
    flexDirection: 'row',
    gap: 15,
  },
  label: {
    color: '#252B41',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 20.8,
  },
  totalRevenueCost: {
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 30 * 1.3,
    color: '#252B41',
  },
  percentageDetail: {
    color: '#252B41', // Default color if variable is not defined
    fontVariant: ['lining-nums', 'tabular-nums', 'slashed-zero'],
    fontFeatureSettings: "'clig' off, 'liga' off",
    fontFamily: 'Poppins',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 12 * 1.3, // Adjust as needed based on your percentage calculation
  },
  graphContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graphStatus: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
});

const RevenueCompositionCard = () => {
  return (
    <>
      <View style={styles.revenueCardContainer}>
        <View style={styles.titleContainer}>
          <View style={styles.titleLabel}>
            <Image
              source={require('../assets/images/BoldDuotone.png')}
              alt="right-icon"
            />
            <Text style={styles.label}>$ Renewed</Text>
          </View>
          <Image
            source={require('../assets/images/chevron-right-icon.png')}
            alt="right-icon"
          />
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
          <Text style={styles.totalRevenueCost}>24M</Text>
          <Text style={styles.percentageDetail}>(65.5% of total Revenue)</Text>
        </View>
        <View style={styles.graphContainer}>
          <View style={styles.graphStatus}>
            <View>
              <Text>Software {'\n'} 16M</Text>
            </View>
            <View>
              <Text>Cross-Sell {'\n'} 8M</Text>
            </View>
          </View>
          <Image
            source={require('../assets/images/Donut2.png')}
            alt="right-icon"
            style={{width: 50, height: 50}}
          />
        </View>
      </View>
    </>
  );
};

export default RevenueCompositionCard;
