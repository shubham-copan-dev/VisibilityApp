import React from 'react';
import {View, Text, Image} from 'react-native';
import {StyleSheet} from 'react-native';
import HrDivider from './HrDivider';

const GoalAttainment = () => {
  return (
    <View style={styles.goalAttainmentContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.textStyle}>Goal Attainment</Text>
        <Image
          source={require('../assets/images/chevron-right-icon.png')}
          alt="right-icon"
        />
      </View>
      <Text style={styles.secondaryTextStyle}>
        You increased you Goal performance by 5% this month that boosts your
        Revenue by 1.2K.
      </Text>
      <View style={styles.graphicalContainer}>
        <Image
          source={require('../assets/images/graph.png')}
          alt="profile-icon"
        />
        <View style={styles.columnListsContainer}>
          <View style={styles.columnList}>
            <Text style={styles.graphicalLabels}>PRD & Service Annual</Text>
            <Text>
              <Text style={styles.text1Style}>4.95M</Text>/
              <Text style={styles.text2Style}>21.83M</Text>
            </Text>
          </View>
          <HrDivider />
          <View style={styles.columnList}>
            <Text>RWS RND</Text>
            <Text>
              <Text style={styles.text3Style}>526.38K</Text>/
              <Text style={styles.text2Style}>6.20M</Text>
            </Text>
          </View>
          <HrDivider />
          <View style={styles.columnList}>
            <Text>RSW & CX SVC</Text>
            <Text>
              <Text style={styles.text4Style}>270.64K</Text>/
              <Text style={styles.text2Style}>975.15K</Text>
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  goalAttainmentContainer: {
    backgroundColor: '#fff',
    marginTop: 32,
    borderRadius: 18,
    paddingTop: 26,
    paddingBottom: 26,
    paddingLeft: 16,
    paddingRight: 16,
  },
  textStyle: {
    color: '#252B41',
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 16 * 1.3,
  },
  secondaryTextStyle: {
    color: '#666B7A',
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14 * 1.4,
    marginBottom: 34,
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  graphicalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    flexDirection: 'row',
  },
  columnListsContainer: {},
  columnList: {},
  text1Style: {
    color: '#37BFA7', // Use your Charts-2 color here
    fontFamily: 'Poppins',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 30 * 1.3, // Assuming the base font size is 30 and line-height is 130%
    fontVariant: ['lining-nums', 'tabular-nums', 'slashed-zero'],
    fontFeatureSettings: "'clig' off, 'liga' off",
  },
  text2Style: {
    color: '#252B41', // Use your Base-Primary color here
    fontFamily: 'Poppins',
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 16 * 1.3, // Assuming the base font size is 16 and line-height is 130%
    fontVariant: ['lining-nums', 'tabular-nums', 'slashed-zero'],
    fontFeatureSettings: "'clig' off, 'liga' off",
  },
  text3Style: {
    color: '#4B96C1', // Use your Charts-2 color here
    fontFamily: 'Poppins',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 30 * 1.3, // Assuming the base font size is 30 and line-height is 130%
    fontVariant: ['lining-nums', 'tabular-nums', 'slashed-zero'],
    fontFeatureSettings: "'clig' off, 'liga' off",
  },
  text4Style: {
    color: '#6CC6D4', // Use your Charts-2 color here
    fontFamily: 'Poppins',
    fontSize: 30,
    fontStyle: 'normal',
    fontWeight: 'bold',
    lineHeight: 30 * 1.3, // Assuming the base font size is 30 and line-height is 130%
    fontVariant: ['lining-nums', 'tabular-nums', 'slashed-zero'],
    fontFeatureSettings: "'clig' off, 'liga' off",
  },
  graphicalLabels: {
    color: '#666B7A', // Use your Base-Secondary color here
    fontFamily: 'Poppins',
    fontSize: 14,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 14 * 1.4, // Assuming the base font size is 14 and line-height is 140%
  },
});

export default GoalAttainment;
