import { StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';

const Search = ({placeholder, value}: {placeholder: string, value?: string}) => {

    const {width} = useWindowDimensions()
    const [isOpen, setIsOpen] = useState(false)

    const styles = StyleSheet.create({
        inputContainer: {
          marginLeft: 10,
          marginTop: 20,
          position: 'relative',
          backgroundColor: Colors.light.search,
          width: width / 1.07,
          height: 55,
          borderRadius: 10,
          paddingLeft: 35,
        },
        textInput: {
          color: Colors.light.text,
          fontWeight: '300',
          paddingTop: 17
        },
        icon: {
          position: 'absolute',
          top: 19,
          left: 10,
          zIndex: 999,
        },
      });

      const handlePress = () => {
        router.push("/(asides)/search")
      }
  return (
    <TouchableOpacity onPress={handlePress} activeOpacity={0.7} style={styles.inputContainer}>
              <AntDesign style={styles.icon} name="search1" size={16} color="gray" />
              <Text style={styles.textInput}>{placeholder}</Text>
            </TouchableOpacity>
  )
}

export default Search

const styles = StyleSheet.create({})