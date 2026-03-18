import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
//import { useNavigation } from '@react-navigation/native';

const LoginScreen = ({navigation}) => {
  //const navigation = useNavigation();
  const handleLogin = () => {
    // Navigate to Home screen
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <Text> </Text>
      <TextInput style={styles.input}/>
      <TextInput style={styles.input}/>
      <TouchableOpacity style={styles.button} onPress={handleLogin}>Login</TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1
  },
  button: {
      width: '10%',
      height: 20,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default LoginScreen;