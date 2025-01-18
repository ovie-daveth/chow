import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import Listheader from './listheader'
import { featuredDishes } from '@/constants/data'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

const FeaturedDishes = () => {

    const { width } = useWindowDimensions();
    const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 10,
      },
      content: {
        marginRight: 5,
        paddingLeft: 0,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        gap: 10,
        height: 260, // Set a fixed height for consistency
        width: width * 0.8, // Adjust width as needed // Optional: Add background to visualize layout
        padding: 0,
      },
      image: {
        borderRadius: 10,
        marginBottom: 5,
        height: 170, // Ensure consistent image height
        width: '100%', // Make image responsive to container width
      },
      tag: {
        marginLeft: 5,
      },
      addedon: {
        marginTop: 10,
        justifyContent: "space-between",
        width: width / 1.28,
        paddingRight: 20
      },
      tagText: {
        color: 'gray',
      },
    });


    const [like, setLike] = useState<number | null>(null)
    const handleFavorite = (id: number) => {
        setLike(id)
    }
    
    return (
      <View style={styles.container}>
        <Listheader icon={<MaterialCommunityIcons name="puzzle-star" size={18} color="orange" />} title="Featured" />
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={featuredDishes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.content}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {}}
                  className="mx-5 flex-column items-start"
                >
                  <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <View style={{paddingHorizontal: 5}}>
                  <Text style={styles.tag} className="font-medium text-xl tracking-wider">
                    {item.name}
                  </Text>
                  <View style={styles.addedon} className="flex items-center flex-row justify-between">
                    <View className='flex flex-row items-center gap-5'>
                    <View className="flex items-center gap-2 flex-row">
                      <AntDesign name="staro" size={15} color="orange" />
                      <Text>{item.rating}</Text>
                    </View>
                    <View className="flex items-center flex-row gap-2">
                      <MaterialCommunityIcons name="dump-truck" size={17} color="gray" />
                      <Text>{item.deliveryType}</Text>
                    </View>
                    <View className="flex items-center gap-2 flex-row">
                      <AntDesign name="clockcircleo" size={15} color="gray" />
                      <Text>{item.timeOfDelivery}</Text>
                    </View>
                    </View>
                    <View>
                    {/* */}
                    <TouchableOpacity activeOpacity={0.7} onPress={() => handleFavorite(item.id)}>
                        {
                            like === item.id ? <AntDesign name="heart" size={18} color="red" />  : <AntDesign name="hearto" size={18} color="black" />
                        }
                    </TouchableOpacity>
                    </View>
                  </View>
                  </View>
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    );
    
  
}

export default FeaturedDishes
