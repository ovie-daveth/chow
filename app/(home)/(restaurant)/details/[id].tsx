import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router';

const RestaurantDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>RestaurantDetails {id}</Text>
    </View>
  )
}

export default RestaurantDetails

const styles = StyleSheet.create({})