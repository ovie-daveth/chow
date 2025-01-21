import { FlatList, Image, StyleSheet, Text, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import React, { useState } from 'react';
import { restaurantsList } from '@/constants/data';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const PopularDishes = () => {
  const { width } = useWindowDimensions();
  const [data, setData] = useState<any[]>(restaurantsList);

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 10,
    },
    content: {
      borderRadius: 10,
      borderBottomWidth: 15,
      marginBottom: 2,
      borderColor: Colors.light.search,
      padding: 10,
      margin: 5,
      flex: 1, // Ensures equal spacing between items
      maxWidth: width / 2 - 20, // Ensures two items per row with spacing
      backgroundColor: 'white',
    },
    image: {
      borderRadius: 10,
      marginBottom: 5,
      height: 90,
      width: '100%',
    },
    tag: {
      fontSize: 10,
      fontWeight: '600',
    },
    ratebg: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    addedonText: {
      color: '#C2410C',
      fontWeight: '600',
      fontSize: 12,
      marginTop: 5,
    },
    addtext: {
      fontSize: 12,
    },
  });

  return (
    <View style={{ paddingHorizontal: 10, marginTop: 20 }}>
      <Text className='pl-2'>Popular Dishes</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2} // Render two items per row
        columnWrapperStyle={{ justifyContent: 'space-between' }} // Adds spacing between columns
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.content}
            onPress={() => {}}
          >
            <Image source={item.image} style={styles.image} resizeMode="cover" />
            <Text style={{ fontWeight: '600', fontSize: 14 }}>{item.name}</Text>
            <Text style={styles.tag}>{item.region}</Text>
            <View style={styles.ratebg}>
              <AntDesign name="staro" size={15} color="orange" />
              <Text style={styles.addtext}>
                {item.ratings} ({item.noofrate})
              </Text>
            </View>
            <Text style={styles.addedonText}>Closed</Text>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default PopularDishes;
