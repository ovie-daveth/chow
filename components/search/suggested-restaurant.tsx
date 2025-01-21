import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React, { useState } from 'react'
import { restaurantsList } from '@/constants/data'
import { Colors } from '@/constants/Colors';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import { formatCurrency } from '@/helpers/format-currency';

const SuggestedRestaurant = () => {
   const { width } = useWindowDimensions();
      const [data, setData] = useState<any[]>(restaurantsList)
      const styles = StyleSheet.create({
        container: {
          paddingHorizontal: 10,
        },
        content: {
          display: 'flex',
          flexDirection: 'row',
          borderRadius: 10,
          borderBottomWidth: 2,
          borderColor: Colors.light.search,
          gap: 3,
          height: 120, // Set a fixed height for consistency
          width: width * 0.95, // Adjust width as needed // Optional: Add background to visualize layout
          padding: 0,
        },
        image: {
          borderRadius: 10,
          marginBottom: 5,
          height: 90, // Ensure consistent image height
          width: width / 2.5, // Make image responsive to container width
        },
        tag: {
          fontSize: 10,
          fontWeight: 600
        },
         ratebg: {
                  
                    
                  },
        addedon: {
          marginTop: 10,
          gap: 10,
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
    <View className='px-5 mt-5'>
      <Text className=''>Suggested Restaurants</Text> 
      <View className='mt-5'>
      <FlatList
          showsVerticalScrollIndicator={false}
          data={data.slice(0,3)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.content} className='border-b-2 border-gray-300'>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {}}
                  className="mx-5 flex-row items-center gap-1"
                >
                  <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <View style={{paddingHorizontal: 5, width: width / 1.5}}>
                  <Text className="font-light text-md tracking-wider">
                    {item.name}
                  </Text>
                  <Text style={styles.tag} className="font-medium text-sm tracking-wider">
                    {item.region}
                  </Text>
                    <View style={styles.ratebg} className="flex items-center gap-1 flex-row w-fit">
                      <AntDesign name="staro" size={15} color="orange" />
                      <Text style={styles.addtext} className="text-sm">{item.ratings} ({item.noofrate})</Text>
                    </View>
                      <Text style={styles.addedonText} className='bg-orange-600'>Closed</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </View>
  )
}

export default SuggestedRestaurant

const styles = StyleSheet.create({})