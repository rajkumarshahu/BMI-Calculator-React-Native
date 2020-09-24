import React, { useState, useRef } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Button,
	TouchableOpacity,
	Alert,
	TextInput,
} from 'react-native';

function SIUnitScreen() {
	const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');
  const inputWeight = useRef();
  const inputHeight = useRef();

  const [bmi, setBmi] = useState('');

  const calculateBMIHandler = () => {
    if(weight != '' && height !=''){
      let userBMI = weight / Math.pow(height / 100, 2);
      setBmi(userBMI.toFixed());
      getBMICategories()
    } else {
      setBmi('Please enter your informations.')
    }
  };

  const getBMICategories = () => {
    let userBMI = weight / Math.pow(height / 100, 2);
      setBmi(userBMI.toFixed());
    if(userBMI < 18.5){
      setBmiCategory('You are underweight!')
    } else if (userBMI >= 18.5 && userBMI <= 24.9){
      setBmiCategory('Your weight is normal!')
    }else if (userBMI >= 25 && userBMI <= 29.9){
      setBmiCategory('You are overweight!')
    }else if (userBMI >= 30){
        setBmiCategory('You are obese!')
  }
}




  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>BMI Calculator</Text>
      </View>
      <View >
      <View>
      <Text style={{marginTop: 100}}>Enter your weight in Kilograms and Height in centimeters</Text>
      </View>
      <View style={{marginTop: 20}}>
      <TextInput
          ref={inputWeight}
          clearTextOnFocus
          style={styles.textInputContainer}
          placeholder="Weight in Kg"
          keyboardType="numeric"
          value={weight}
          onChangeText={(enteredWeight) => {
            setWeight(enteredWeight);
          }}
        />

        <TextInput
          ref={inputHeight}
          style={styles.textInputContainer}
          name="height"
          placeholder="Height in CM"
          keyboardType="numeric"
          value={height}
          onChangeText={(enteredHeight) => {
            setHeight(enteredHeight);
          }}
        />
      </View>

      </View>
      <View style={styles.buttonContainer}>
        <Button
          color="#841584"
          title="Calculate"
          onPress={calculateBMIHandler}
        />
        <TouchableOpacity>
          <Text style={styles.resultText} onPress={calculateBMIHandler}>Calculate</Text>
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
		flexWrap: 'wrap',
		margin: 70,
	},
	header: {
		fontSize: 20,
	},
	buttonContainer: {
		backgroundColor: 'lightblue',
		padding: 5,
		marginTop: 30,
	},
	textInputContainer: {
		margin: 10,
		borderWidth: 1,
		padding: 10,
		borderColor: '#777',
	},
	resultContainer: {
		margin: 10,
		padding: 20,
	},
	resultText: {
		fontSize: 15,
		textAlign: 'center',
	},
});

export default SIUnitScreen;
