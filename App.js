import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const menus = [
  {
    id: '1',
    title: "Definisi Stroke",
    icon: "newspaper-outline",
    color: "#ffc996"
  },
  {
    id: '2',
    title: "SOP Makan",
    icon: "fast-food",
    color: "#00adb5"
  },

]

export default function App() {
  return (

    <View style={styles.container}>
      <LinearGradient
        // Background Linear Gradient
        style={styles.header}
        colors={['rgba(254,87,98,1)', 'rgba(255,107,161,1)']}
        locations={[0.2, 0.9]}
      >
        <Text style={{ fontSize: 30, color: '#ffffff' }}>Selamat Datang di</Text>
        <Text style={{ fontWeight: 'bold', fontSize: 30, color: '#ffffff' }}>SIMSTROKE</Text>
      </LinearGradient>
      <FlatList
        data={menus}
        style={styles.menusList}
        keyExtractor={item => item.title}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) =>
          <View style={[{ backgroundColor: item.color + "40" }, styles.menu]}>
            <Ionicons name={item.icon} size={62} color={item.color} />
            <Text style={{ color: '#333', fontWeight: 'bold', fontSize: 14 }}>{item.title}</Text>
          </View>
        }
      ></FlatList>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5e9f9',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    width: '90%',
    marginTop: 40,
    padding: 40,
    borderRadius: 20,
    alignSelf: 'center',
    fontSize: 50,
    fontWeight: "900",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10
  },
  menusList: {
    width: '90%',
    paddingTop: 20,
  },
  menu: {
    padding: 20,
    width: '46%',
    borderRadius: 20,
    flexDirection: 'column',
    alignItems: 'center'
  }
});
