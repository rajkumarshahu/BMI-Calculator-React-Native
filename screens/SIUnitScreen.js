import React, { useState, useRef } from 'react';
import {
	Text,
	View,
	StyleSheet,
	TouchableOpacity,
	TextInput,
} from 'react-native';

function SIUnitScreen() {
	const [weight, setWeight] = useState('');
	const [height, setHeight] = useState('');
	const [bmi, setBmi] = useState('');
	const [bmiCategory, setBmiCategory] = useState('');
	const inputWeight = useRef();
	const inputHeight = useRef();

	const getBMICategories = () => {
		let userBMI = weight / Math.pow(height / 100, 2);
		setBmi(userBMI.toFixed(2));
		if (userBMI < 18.5) {
			setBmiCategory('You are underweight!');
		} else if (userBMI >= 18.5 && userBMI <= 24.9) {
			setBmiCategory('Your weight is normal!');
		} else if (userBMI > 24.9 && userBMI <= 29.9) {
			setBmiCategory('You are overweight!');
		} else if (userBMI > 29.9) {
			setBmiCategory('You are obese!');
		} else {
			setBmiCategory('Please enter numeric value!!!');
		}
	};

	const calculateBMIHandler = () => {
		if (weight != '' && height != '') {
			getBMICategories();
		} else {
			setBmi('Please enter your informations.');
		}
	};

	return (
		<View style={styles.container}>
			<View>
				<Text style={styles.header}>BMI Calculator</Text>
			</View>
			<View>
				<View>
					<Text style={{ marginTop: 50 }}>Enter your weight in Kilograms</Text>
				</View>
				<View>
					<TextInput
						ref={inputWeight}
						clearTextOnFocus
						style={styles.textInputContainer}
						placeholder='Weight in Kg'
						keyboardType='numeric'
						value={weight}
						onChangeText={(enteredWeight) => {
							setWeight(enteredWeight);
						}}
					/>
					<View>
						<Text>Enter your Height in Centimeters</Text>
					</View>
					<TextInput
						ref={inputHeight}
						clearTextOnFocus
						style={styles.textInputContainer}
						name='height'
						placeholder='Height in CM'
						keyboardType='numeric'
						value={height}
						onChangeText={(enteredHeight) => {
							setHeight(enteredHeight);
						}}
					/>
				</View>
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity style={styles.button} onPress={calculateBMIHandler}>
					<Text style={{ color: '#f4ebc1', fontSize: 20 }}>Calculate</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.resultContainer}>
				<Text style={styles.resultText}>Your BMI is:</Text>
				<Text style={styles.resultText}>{bmi}</Text>
				<Text style={styles.resultText}>Your BMI category is:</Text>
				<Text style={styles.resultText}>{bmiCategory}</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f4ebc1',
	},
	header: {
		fontSize: 30,
		alignSelf: 'center',
		fontWeight: 'bold',
	},
	button: {
		marginTop: 20,
		zIndex: 1,
		alignItems: 'center',
		backgroundColor: '#709fb0',
		padding: 10,
	},
	textInputContainer: {
		margin: 10,
		borderWidth: 1,
		padding: 10,
		borderColor: '#777',
	},
	resultContainer: {
		margin: 10,
		borderWidth: 2,
		padding: 10,
		backgroundColor: '#e7e7de',
		marginTop: 30,
	},
	resultText: {
		fontSize: 20,
		textAlign: 'center',
	},
});

export default SIUnitScreen;
