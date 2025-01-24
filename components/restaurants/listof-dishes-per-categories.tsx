import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Dish } from '@/variables/restaurant'
import { Colors } from '@/constants/Colors';
import { formatCurrency } from '@/helpers/format-currency';
import { AntDesign } from '@expo/vector-icons';

const ListOfDishesPerCategories = ({data}: {data: Dish[]}) => {

    const { width } = useWindowDimensions();
    const styles = StyleSheet.create({
              container: {
                paddingHorizontal: 10,
               
              },
              content: {
                marginRight: 5,
                paddingLeft: 15,
                display: 'flex',
                flexDirection: 'column',
                borderRadius: 10,
                height: 200, // Set a fixed height for consistency
                width: width / 2.2, // Adjust width as needed // Optional: Add background to visualize layout
                padding: 0,
              },
              title: {
                marginLeft: 15,
                marginBottom: 10
              },
              image: {
                borderRadius: 10,
                marginBottom: 5,
                height: 100, // Ensure consistent image height
                width: '100%', // Make image responsive to container width
              },
              tag: {
                marginLeft: 5,
              },
              addedon: {
                marginTop: 10,
                gap: 10,
                marginLeft: 5,
                width: 145,
                justifyContent: "space-between",
                paddingRight: 15
              },
              tagText: {
                color: 'gray',
              },
              addToCart: {
                  position: "absolute",
                  bottom: 64,
                  right: 10,
                  zIndex: 999,
                  backgroundColor: "darkpurple",
                  width: 30,
                  height: 30,
                  borderRadius: 100
              },
              ratebg: {
                backgroundColor: Colors.light.search,
                padding: 5,
                borderRadius: 100
              },
              addText: {
                fontSize: 10
              }   
             });


  return (
    <View>
      <Text style={styles.title} className='font-semibold text-xl'>Burgers (10)</Text>
      <FlatList
            showsHorizontalScrollIndicator={false}
            data={data}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            nestedScrollEnabled={true}
            renderItem={({item}) => {
                return (
                    <View className='grid grid-cols-2 gap-2' style={styles.content}>
                            <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {}}
                  className="mx-5 flex-column items-start relative"
                >
                  <Image
                    source={item.image as any}
                    style={styles.image as any}
                    resizeMode="contain"
                  />
                  <TouchableOpacity activeOpacity={0.7} onPress={() => {}} style={styles.addToCart} className='absolute flex items-center justify-center'>
                    <AntDesign name="plus" size={15} color="#fff" />
                  </TouchableOpacity>
                  <View style={{paddingHorizontal: 5}}>
                  <Text style={[styles.addText, styles.tag]} className="font-medium text-sm tracking-wider">
                    {item.name}
                  </Text>
                  <View style={styles.addedon} className="flex items-center flex-row justify-betwee">
                    <View className="flex items-center gap-2 flex-row">
                      <Text style={styles.addText} className="text-sm">{formatCurrency(2900)}</Text>
                    </View>
                    <View style={styles.ratebg} className="flex items-center flex-row gap-1 ">
                        <AntDesign name="staro" size={15} color="orange" />
                        <Text style={styles.addText} className="text-sm"><Text className="font-semibold">{item.rating}</Text> ({item.noofrate})</Text>
                    </View>
                  </View>
                  </View>
                            </TouchableOpacity>
                    </View>
                )
            }}
            />
    </View>
  )
}


export default ListOfDishesPerCategories

const styles = StyleSheet.create({
    
})