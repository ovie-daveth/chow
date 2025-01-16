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
    const theme = useTheme()
     const [colorScheme, setColorScheme] = useState<ColorSchemeName>(Appearance.getColorScheme());

    const styles = StyleSheet.create({
        ButtonContainer: {
            backgroundColor: Colors.light.buttons,
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
            color: colorScheme === "dark" ? Colors.light.background : Colors.light.text,
        }
    })
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.ButtonContainer}>
        <View style={styles.buttonBody}>
            {
                Icon &&<Text>{Icon}</Text>
            }
            <Text className='font-bold' style={styles.buttonText}>{title}</Text>
        </View>
    </TouchableOpacity>
  )
}
