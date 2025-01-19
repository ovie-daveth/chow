import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native'
import React from 'react'
import Listheader from './listheader'
import { restaurantsList } from '@/constants/data'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { formatCurrency } from '@/helpers/format-currency'

const AllRestauants = () => {

    const { width } = useWindowDimensions();
    const styles = StyleSheet.create({
      container: {
        paddingHorizontal: 10,
        marginTop: 14
      },
      content: {
        marginBottom: 30,
        paddingLeft: 0,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 10,
        gap: 10,
        height: 260, // Set a fixed height for consistency
        width: width * 0.95, // Adjust width as needed // Optional: Add background to visualize layout
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
       ratebg: {
                  backgroundColor: Colors.light.search,
                  padding: 5,
                  borderRadius: 100
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
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={restaurantsList}
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
                  <View style={styles.tag} className="flex flex-row items-center gap-1">
  {item.tags.map((tag, idx) => (
    <React.Fragment key={idx}>
      <Text style={styles.tagText} className="font-light text-sm tracking-wider">
        {tag}
      </Text>
      {idx < item.tags.length - 1 && (
        <Text style={styles.tagText} className="font-light text-sm tracking-wider">
          -
        </Text>
      )}
    </React.Fragment>
  ))}
</View>

                  <View style={styles.addedon} className="flex items-center gap-5 flex-row justify-between">
                    <View style={styles.ratebg} className="flex items-center gap-1 flex-row">
                      <AntDesign name="staro" size={15} color="orange" />
                      <Text style={styles.addtext} className="text-sm">{item.ratings} ({item.noofrate})</Text>
                    </View>
                    <View className="flex items-center flex-row gap-1">
                      <MaterialCommunityIcons name="dump-truck" size={17} color="gray" />
                      <Text style={styles.addtext} className="text-sm">{item.deliveryType == "0" ? "Free" : formatCurrency(item.deliveryType)}</Text>
                    </View>
                    <View className="flex items-center gap-1 flex-row">
                      <AntDesign name="clockcircleo" size={15} color="gray" />
                      <Text style={styles.addtext} className="text-sm">{item.timeOfDelivery}</Text>
                    </View>
                      <Text style={styles.addedonText} className='bg-orange-600'>Closed</Text>
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

export default AllRestauants
