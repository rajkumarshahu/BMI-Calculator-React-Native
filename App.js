import React from 'react';
import { StyleSheet, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import SIUnitScreen from './screens/SIUnitScreen';
import ImperialUnitScreen from './screens/ImperialUnitScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Tab.Navigator
					initialRouteName='SI Unit'
					activeColor='#f0edf6'
					inactiveColor='#3e2465'
					barStyle={{ backgroundColor: '#00587a' }}
				>
					<Tab.Screen
						name='SI Unit'
						component={SIUnitScreen}
						options={{
							tabBarLabel: 'SI Unit',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons
									name='weight-kilogram'
									color={color}
									size={26}
								/>
							),
						}}
					/>
					<Tab.Screen
						name='Imperial'
						component={ImperialUnitScreen}
						options={{
							tabBarLabel: 'Imperial',
							tabBarIcon: ({ color }) => (
								<MaterialCommunityIcons
									name='weight-pound'
									color={color}
									size={26}
								/>
							),
						}}
					/>
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
