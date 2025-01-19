import { View, Text, useWindowDimensions, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'

const PageHeader = ({title, icon, showLocation}: {title: string, icon?: any, showLocation: boolean}) => {

  const {width} = useWindowDimensions()
  return (
      <View style={{width: width, paddingLeft: 10}} className='flex flex-row items-center justify-between'>
        <View className='flex flex-row items-center gap-3'>
      <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            className=""
          >
            <View style={styles.button} className=" shadow-md">
              <AntDesign name={icon} size={15} color="black" />
            </View>
          </TouchableOpacity>
          <Text style={styles.text}>{title}</Text>
      </View>
      {
        showLocation && <TouchableOpacity activeOpacity={0.7} className='flex items-center gap-2 flex-row' style={styles.right}>
        <Ionicons name="location" size={15} color="orange" />
        <Text style={styles.smalltext}>7, Jakap Rd ...</Text>
        <AntDesign name="down" size={15} color="black" style={styles.icon} />
      </TouchableOpacity>
      }
      <View>
        
      </View>
      </View>
  )
}

export default PageHeader

const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.light.search,
    width: 25,
    height: 25,
    borderRadius: 100,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontWeight: 500,
    fontSize: 16
  },
  icon: {
    fontWeight: 500
  },
  smalltext: {
    fontSize: 12
  },
  right: {
    marginRight: -80
  }
})