import { StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';
import { router } from 'expo-router';
import { useTheme } from '@/contexts/themeContext';

const Search = ({placeholder, value}: {placeholder: string, value?: string}) => {

    const {width} = useWindowDimensions()
    const [isOpen, setIsOpen] = useState(false)
    const { theme } = useTheme();

    const styles = StyleSheet.create({
        inputContainer: {
          marginLeft: 10,
          marginTop: 20,
          position: 'relative',
          backgroundColor: theme.input.background,
          width: width / 1.07,
          height: 55,
          borderRadius: 10,
          paddingLeft: 35,
        },
        textInput: {
          color: theme.input.text,
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
              <AntDesign style={styles.icon} name="search1" size={16} color={theme.input.text} />
              <Text style={styles.textInput}>{placeholder}</Text>
            </TouchableOpacity>
  )
}

export default Search

const styles = StyleSheet.create({})