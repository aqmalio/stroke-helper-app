import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (

    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 30, color: '#ffffff' }}>Selamat Datang di</Text>
        <Text style={{fontWeight: 'bold',fontSize: 30, color: '#ffffff'}}>SIMSTROKE</Text>
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 80
  },
  header: {
    backgroundColor: '#323ebe',
    width: '90%',
    padding: 40,
    borderBottomEndRadius: 20,
    alignSelf: 'flex-start',
    fontSize: 50,
    fontWeight: "900",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 10
    
  }
});
