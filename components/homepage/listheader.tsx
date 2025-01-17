import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons'

const Listheader = ({title, onPress}: {title: string, onPress?: () => void}) => {
  return (
      <View style={styles.header}>
            <Text style={styles.headerText}>{title}</Text>
            <TouchableOpacity onPress={onPress} activeOpacity={0.7} style={styles.viewAllButton}>
              <Text style={styles.viewAllText}>View All</Text>
              <AntDesign name="right" size={15} color="black" />
            </TouchableOpacity>
          </View>
  )
}

export default Listheader

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
        color: Colors.dark.background,
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
        color: Colors.light.text,
      },
})