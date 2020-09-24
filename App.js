import React from 'react';
import { StyleSheet, AppRegistry, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SIUnitScreen from './screens/SIUnitScreen';
import ImperialUnitScreen from './screens/ImperialUnitScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="SI Unit" component={SIUnitScreen} />
        <Tab.Screen name="Imperial" component={ImperialUnitScreen} />
      </Tab.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
