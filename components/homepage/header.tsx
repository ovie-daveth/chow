import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons'; 
import { Colors } from '@/constants/Colors';

const styles = StyleSheet.create({
    headerContainer: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    headerContent: {
        
    },
    cart: {
        backgroundColor: "#000",
        width: 40,
        height: 40,
        borderRadius: 100,
    },
    cartNo:{
        color: "#fff",
        backgroundColor: Colors.dark.buttons,
        width: 20,
        height: 20,
        borderRadius: 100,
        position: "absolute",
        top: -2,
        right: 0,
        zIndex: 999,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
        fontWeight: 500
    },
    greeting: {
        marginLeft: 5
    },
    bold: {
        fontWeight: 500,
        fontSize: 15
    }
})
const Header = () => {
  return (
    <View style={styles.headerContainer}>
        <View className="flex-row items-center justify-between " style={styles.headerContent}>
    <View className='flex-row gap-5'>
     <TouchableOpacity activeOpacity={0.7}>
        <Ionicons name="menu-outline" size={24} color="black" />
     </TouchableOpacity>
      <View className=''>
        <Text>DELIVER TO</Text>
        <TouchableOpacity activeOpacity={0.7}>
          <View className='flex-row items-center gap-5'>
            <Text style={{color: "#B0B0B0"}} className='text-gray-100'>34, Jakpa junction</Text>
            <AntDesign name="caretdown" size={13} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <View>
      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.cart} className='flex items-center text-center justify-center relative'>
            <Text className='absolute top-0 right-0 flex-row flex items-center justify-center' style={styles.cartNo}>3</Text>
        <AntDesign name="shoppingcart" size={24} color="white"  className='z-50' />
        </View>
      </TouchableOpacity>
    </View>
  </View>
  <Text style={styles.greeting} className='mt-5'>Hey David, <Text style={styles.bold}>Good afternoon!</Text></Text>
    </View>
  )
}

export default Header