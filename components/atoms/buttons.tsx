import { View, Text, TouchableOpacity, StyleSheet, useWindowDimensions, ColorSchemeName, Appearance } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';
import { useTheme } from '@/contexts/themeContext';

interface Prop {
    title: string,
    onPress?: () => void;
    Icon?: any
    cwidth?: number
}
export const Button = ({title, onPress, Icon, cwidth}: Prop) => {

    const {width, height} = useWindowDimensions()
    const {theme} = useTheme()

    const styles = StyleSheet.create({
        ButtonContainer: {
            backgroundColor: theme.button.background ,
            width: width / (cwidth ?? 1.1),
            height: 45,
            marginTop: 15,
            paddingVertical: 8,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
        },
        buttonBody: {
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
        },
        buttonText: {
            color: theme.button.text,
        }
    })
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.ButtonContainer}>
        <View className='flex items-end flex-row gap-5' style={styles.buttonBody}>
            {
                Icon && Icon
            }
            <Text className='font-bold' style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}
