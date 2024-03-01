import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, StyleSheet} from 'react-native';
import styles from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useIsFocused} from '@react-navigation/native';
import SimplePieChart from '../Chart';

const Home = ({navigation}) => {
  const [expenses, setExpenses] = useState([]);
  const isfocused = useIsFocused();

  useEffect(() => {
    AsyncStorage.getItem('expensive')
      .then(storedDataString => {
        if (storedDataString) {
          // Convert string back to object
          const storedData = JSON.parse(storedDataString);
          setExpenses(storedData);
          console.log('Retrieved data: ', storedData);
        } else {
          console.log('No data found');
        }
      })
      .catch(error => {
        console.error('Error retrieving data: ', error);
      });
  }, [isfocused]);

  const renderExpenseItem = ({item}) => (
    <View style={styles.expenseItem}>
      <Text style={{width: '25%'}}>{item.title}</Text>
      <Text style={{width: '25%'}}>${item.amount}</Text>
      <Text style={{width: '15%'}}>{item.category}</Text>
    </View>
  );

  const handleAddExpense = newExpense => {
    setExpenses(prevExpenses => [...prevExpenses, newExpense]);
  };

  return (
    <View style={[styles.container, {width: '100%'}]}>
      <FlatList
        data={expenses}
        keyExtractor={item => item.id}
        renderItem={renderExpenseItem}
      />
      <SimplePieChart expenses={expenses} />
      <TouchableOpacity
        style={styles.fab}
        onPress={() => {
          navigation.navigate('AddExpense', {onSave: handleAddExpense});
        }}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
