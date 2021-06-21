import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from "expo-linear-gradient";

const menus = [
    {
        id: '1',
        title: "Definisi Stroke",
        icon: "newspaper-variant-multiple",
        pdf: 'http://msglowbandaaceh.com/simstroke/1.pdf',
        color: "#ffc996"
    },
    {
        id: '2',
        title: "SOP Makan",
        icon: "food",
        pdf: 'http://msglowbandaaceh.com/simstroke/2.pdf',
        color: "#00adb5"
    },
    {
        id: '3',
        title: "SOP Mandi",
        icon: "shower",
        pdf: 'http://msglowbandaaceh.com/simstroke/3.pdf',
        color: "#150e56"
    },
    {
        id: '4',
        title: "SOP Perawatam",
        icon: "medical-bag",
        pdf: 'http://msglowbandaaceh.com/simstroke/4.pdf',
        color: "#ffb037"
    },
    {
        id: '5',
        title: "SOP Berpakaian",
        icon: "tshirt-crew",
        pdf: 'http://msglowbandaaceh.com/simstroke/5.pdf',
        color: "#289672"
    },
    {
        id: '6',
        title: "SOP BAB dan BAK",
        icon: "emoticon-poop",
        pdf: 'http://msglowbandaaceh.com/simstroke/6.pdf',
        color: "#184d47"
    },
    {
        id: '7',
        title: "SOP Menggunakan Toilet",
        icon: "toilet",
        pdf: 'http://msglowbandaaceh.com/simstroke/7.pdf',
        color: "#e2703a"
    },
    {
        id: '8',
        title: "SOP ROM Aktif",
        icon: "arm-flex-outline",
        pdf: 'http://msglowbandaaceh.com/simstroke/8.pdf',
        color: "#96bb7c"
    },
    {
        id: '9',
        title: "SOP Mobilisasi",
        icon: "run",
        pdf: 'http://msglowbandaaceh.com/simstroke/9.pdf',
        color: "#31326f"
    },
    {
        id: '10',
        title: "SOP Naik Turun Tangga",
        icon: "stairs-box",
        pdf: 'http://msglowbandaaceh.com/simstroke/10.pdf',
        color: "#2b2e4a"
    },

]


export default function HomeScreen({ navigation }) {
    return (

        <View style={styles.container}>
            <LinearGradient
                // Background Linear Gradient
                style={styles.header}
                colors={['#ff8882', '#ffaaa7']}
                locations={[0.2, 0.9]}
            >
                <Text style={{ fontSize: 16, color: '#ffffff' }}>Selamat Datang di</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 32, color: '#ffffff' }}>SIMSTROKE</Text>
            </LinearGradient>
            <FlatList
                data={menus}
                style={styles.menusList}
                keyExtractor={item => item.title}
                numColumns={2}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                renderItem={({ item }) =>
                    <TouchableOpacity style={[{ backgroundColor: item.color }, styles.menu]} onPress={() => navigation.navigate('PDF', { 'pdflink': item.pdf })}>
                        <MaterialCommunityIcons name={item.icon} size={62} color="#fff" />
                        <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 14 }}>{item.title}</Text>
                    </TouchableOpacity>
                }
            ></FlatList>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#9dbeb9',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    header: {
        width: '90%',
        marginTop: 40,
        padding: 32,
        borderRadius: 16,
        alignSelf: 'center',
        fontSize: 30,
        fontWeight: "900",
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: 1 },
        // shadowOpacity: 0.8,
        // shadowRadius: 2,
        // elevation: 10
    },
    menusList: {
        width: '90%',
        paddingTop: 20,
        marginTop: 20
    },
    menu: {
        padding: 20,
        width: '46%',
        borderRadius: 6,
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 28

    }
});
