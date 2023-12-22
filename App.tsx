import React from 'react';
import {SafeAreaView, View, Text, StatusBar, Image} from 'react-native';
import styles from './styles/styles';

function App(): React.JSX.Element {
  return (
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
      </SafeAreaView>
    </View>
  );
}

export default App;
