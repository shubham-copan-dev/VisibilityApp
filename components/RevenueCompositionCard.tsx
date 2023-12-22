import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  revenueCardContainer: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 16,
    paddingRight: 16,
    marginBottom: 12,
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

const RevenueCompositionCard = ({
  titleIconSource,
  titleText,
  chevronIconSource,
  totalRevenue,
  percentageDetail,
  graphData,
  donutImageSource,
}) => {
  return (
    <View style={styles.revenueCardContainer}>
      <View style={styles.titleContainer}>
        <View style={styles.titleLabel}>
          <Image source={titleIconSource} alt="right-icon" />
          <Text style={styles.label}>{titleText}</Text>
        </View>
        <Image source={chevronIconSource} alt="right-icon" />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
        <Text style={styles.totalRevenueCost}>{totalRevenue}</Text>
        <Text style={styles.percentageDetail}>({percentageDetail})</Text>
      </View>
      <View style={styles.graphContainer}>
        <View style={styles.graphStatus}>
          {graphData.map((data, index) => (
            <View key={index}>
              <Text>{data.label}</Text>
              <Text>{data.value}</Text>
            </View>
          ))}
        </View>
        <Image
          source={donutImageSource}
          alt="right-icon"
          style={{width: 50, height: 50}}
        />
      </View>
    </View>
  );
};

export default RevenueCompositionCard;
