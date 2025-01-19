import { StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors';

const Search = ({placeholder, value}: {placeholder: string, value?: string}) => {

    const {width} = useWindowDimensions()

    const styles = StyleSheet.create({
        inputContainer: {
          marginLeft: 10,
          marginTop: 20,
          position: 'relative',
        },
        textInput: {
          backgroundColor: Colors.light.search,
          width: width / 1.07,
          height: 55,
          borderRadius: 10,
          paddingLeft: 35,
          color: Colors.light.text,
          fontWeight: '300',
        },
        icon: {
          position: 'absolute',
          top: 19,
          left: 10,
          zIndex: 999,
        },
      });
  return (
    <View style={styles.inputContainer}>
              <AntDesign style={styles.icon} name="search1" size={16} color="gray" />
              <TextInput placeholder={placeholder} style={styles.textInput} />
            </View>
  )
}

export default Search

const styles = StyleSheet.create({})