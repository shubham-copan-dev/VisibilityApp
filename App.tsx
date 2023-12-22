import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Image,
  ScrollView,
} from 'react-native';
import styles from './styles/styles';
import PaymentCardView from './components/PaymentCard';
import GoalAttainment from './components/GoalAttainment';
import RevenueCompositionCard from './components/RevenueCompositionCard';
import Footer from './components/Footer';

function App(): React.JSX.Element {
  const customStyle = {
    color: '#252B41', // Replace with the correct color value
    fontFamily: 'Poppins',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 18 * 1.3, // Calculation for line-height based on font-size
    marginTop: 32,
    marginBottom: 12,
  };
  return (
    <>
      <ScrollView>
        <View>
          <StatusBar backgroundColor="#EFF5F9" barStyle="dark-content" />
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.HeaderContainerView}>
              <View>
                <Text style={styles.homeText}>Home</Text>
                <Text style={styles.updatedText}>Updated 11 hrs ago</Text>
              </View>
              <View style={styles.iconsContainer}>
                <Image
                  source={require('./assets/images/Outline.png')}
                  alt="Settings-icon"
                />
                <Image
                  source={require('./assets/images/Ellipse.png')}
                  alt="profile-icon"
                />
              </View>
            </View>
            <PaymentCardView />
            <GoalAttainment />
            <Text style={customStyle}>Revenue Composition</Text>
            <RevenueCompositionCard
              titleIconSource={require('./assets/images/BoldDuotone.png')}
              titleText="$ Renewed"
              chevronIconSource={require('./assets/images/chevron-right-icon.png')}
              totalRevenue="24M"
              percentageDetail="(65.5% of total Revenue)"
              graphData={[
                {label: 'Software', value: '16M'},
                {label: 'Cross-Sell', value: '8M'},
                // Add more data as needed
              ]}
              donutImageSource={require('./assets/images/Donut2.png')}
            />
            <RevenueCompositionCard
              titleIconSource={require('./assets/images/Bronze.png')}
              titleText="iACV"
              chevronIconSource={require('./assets/images/chevron-right-icon.png')}
              totalRevenue="15M"
              percentageDetail="(23.6% of total Revenue)"
              graphData={[
                {label: 'New Logo', value: '6.5M'},
                {label: 'Cross-Sell', value: '4.2M'},
                {label: 'Up-Sell', value: '4.3M'},
                // Add more data as needed
              ]}
              donutImageSource={require('./assets/images/Distribution.png')}
            />
            <RevenueCompositionCard
              titleIconSource={require('./assets/images/heart.png')}
              titleText="ATR"
              chevronIconSource={require('./assets/images/chevron-right-icon.png')}
              totalRevenue="12.6M"
              percentageDetail="(16.6% of total Revenue)"
              graphData={[
                {label: '$Renewed', value: '6.5M'},
                {label: 'Forecast-Attrition', value: '6.1M'},
              ]}
              donutImageSource={require('./assets/images/Linegraph.png')}
            />
          </SafeAreaView>
        </View>
      </ScrollView>
      <Footer />
    </>
  );
}

export default App;
