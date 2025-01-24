import { StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { formatCurrency } from '@/helpers/format-currency'
import { RestaurantInterface } from '@/variables/restaurant'

const Addendons = ({item}: {item: RestaurantInterface}) => {

  const {width} = useWindowDimensions()
  const styles = StyleSheet.create({
    addedon: {
      width: width / 1.1,
      marginTop: 10,
    },
    addedonContent: {
      gap: 10
    },
    ratebg: {
               backgroundColor: Colors.light.search,
               padding: 5,
               borderRadius: 100
             },
   
   tagText: {
     color: 'gray',
   },
   addedonText: {
     color: "#C2410C",
     fontWeight: 600,
     fontSize: 12,
   },
   addtext: {
     fontSize: 12
   }
 });
  return (
    <View style={styles.addedon} className="flex justify-between items-center flex-row ">
        <View style={styles.addedonContent} className='flex-row'>
            <View style={styles.ratebg} className="flex items-center gap-1 flex-row">
              <AntDesign name="staro" size={15} color="orange" />
              <Text style={styles.addtext} className="text-sm">{item?.ratings} ({item?.noofrate})</Text>
            </View>
            <View className="flex items-center flex-row gap-1">
              <MaterialCommunityIcons name="dump-truck" size={17} color="gray" />
              <Text style={styles.addtext} className="text-sm">{item?.deliveryType == "0" ? "Free" : formatCurrency(item?.deliveryType)}</Text>
            </View>
            <View className="flex items-center gap-1 flex-row">
              <AntDesign name="clockcircleo" size={15} color="gray" />
              <Text style={styles.addtext} className="text-sm">{item?.timeOfDelivery}</Text>
            </View>
        </View>
        <Text style={styles.addedonText} className='bg-orange-600'>Closed</Text>
  </View>
  )
}

export default Addendons

 