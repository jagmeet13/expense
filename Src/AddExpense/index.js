// screens/AddExpenseScreen.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from './styles';

const AddExpense = ({navigation}) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const handleSaveExpense = () => {
    AsyncStorage.getItem('expensive')
      .then(storedDataString => {
        let storedData = [];
        if (storedDataString) {
          // Convert string back to array of objects
          storedData = JSON.parse(storedDataString);
          console.log('Retrieved data: ', storedData);
        } else {
          console.log('No data found');
        }

        // Create new data object
        const newData = {
          title,
          amount,
          category,
        };

        // Merge existing data and new data
        storedData.push(newData);

        // Convert data to string
        const dataString = JSON.stringify(storedData);

        // Store data
        AsyncStorage.setItem('expensive', dataString)
          .then(() => {
            console.log('Data stored successfully');
          })
          .catch(error => {
            console.error('Error storing data: ', error);
          });
        navigation.navigate('Home');
      })
      .catch(error => {
        console.error('Error retrieving data: ', error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.AddExpenseText}>Add Expense</Text>
        <TextInput
          style={styles.input}
          placeholder="Title"
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Amount"
          value={amount}
          onChangeText={text => setAmount(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          value={category}
          onChangeText={text => setCategory(text)}
        />
        <Button title="Save" onPress={handleSaveExpense} />
      </View>
    </View>
  );
};

export default AddExpense;
