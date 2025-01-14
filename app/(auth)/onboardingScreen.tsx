import { Appearance, ColorSchemeName, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import {Button} from '@/components/atoms/buttons'
import { useTheme } from '@/contexts/themeContext'
import { Colors } from '@/constants/Colors'

const onboardingScreen = () => {
   const {width, height} = useWindowDimensions()
      const {theme} = useTheme()
       const [colorScheme, setColorScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

   const styles = StyleSheet.create({
    container: {
      backgroundColor: "#fff"
    },
          textColor: {
              color: colorScheme === "dark" ? Colors.light.text: Colors.light.text,
          },
          smallText: {
            color: colorScheme === "dark" ? Colors.light.text: Colors.light.text,
        },

      })
  return (
    <SafeAreaView className='relative' style={{flex: 1}}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
      <View className="h-screen flex items-center justify-center text-center w-full mx-auto " style={{ backgroundColor: "#fff"}}>
        <Image source={require("../../assets/images/delivery-man.png")} className='w-40 h-32' resizeMode='contain' />
      <Text style={styles.textColor} className="  uppercase text-xl font-bold" >Cho<Text className=''>wN</Text>oW</Text>
      <Text style={styles.textColor} className=" text-sm font-medium text-center" >All your favorites food, delivered to you, just in time</Text>
      <Button title='Get Started' />
    <View className='flex flex-row mt-5 gap-2'>
    <Text style={styles.textColor} className=" text-sm font-medium text-center" >Already have an acount?</Text>
    <TouchableOpacity>
      <Text className='text-sm text-orange-400 font-semibold underline'>login</Text>
    </TouchableOpacity>
    </View>
    </View>
    <View className='w-[200px] h-[200px] rounded-full border-4 border-orange-500  absolute -bottom-20 -left-10 bg-orange-500'>
        <View className='w-[150px] h-[150px] rounded-full border-4 border-orange-500 z-50 absolute -bottom-10 -left-10 bg-orange-400'>
          
        </View>
    </View>
    <View className='w-[200px] h-[200px] rounded-full border-4 border-orange-500  absolute -top-20 -right-10 bg-orange-500'>
        <View className='w-[150px] h-[150px] rounded-full border-4 border-orange-500 z-50 absolute -top-10 -right-10 bg-orange-400'>
          
        </View>
    </View>
  </SafeAreaView>
  )
}

export default onboardingScreen

const styles = StyleSheet.create({})