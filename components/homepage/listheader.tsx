import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons'
import { useTheme } from '@/contexts/themeContext'

const Listheader = ({icon, title, onPress}: {icon?: any, title: string, onPress?: () => void}) => {
  const { theme } = useTheme();

  const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
      },
      headerText: {
        fontSize: 15,
        fontWeight: 400,
        color: theme.text,
      },
      viewAllButton: {
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
      },
      viewAllText: {
        fontSize: 14,
        fontWeight: '600',
        color: theme.text,
      },
})
  return (
      <View style={styles.header}>
        <View className='flex flex-row items-center gap-1'>
        <Text style={styles.headerText}>{title}</Text>
          {
            icon && icon
          }
        </View>
       
            <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.viewAllButton}>
              
                <Text style={styles.viewAllText}>View All</Text>
                
           
              <AntDesign name="right" size={15} color={theme.text} />
            </TouchableOpacity>
          </View>
  )
}

export default Listheader
