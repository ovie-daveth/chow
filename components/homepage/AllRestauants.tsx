import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, useWindowDimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Listheader from './listheader'
import { restaurantsList } from '@/constants/data'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors } from '@/constants/Colors'
import { formatCurrency } from '@/helpers/format-currency'
import {router} from "expo-router"
import Addendons from '../restaurants/addedons'

const AllRestauants = ({state}: {state: string}) => {

    const { width } = useWindowDimensions();
    const [data, setData] = useState<any[]>(restaurantsList)
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

    useEffect(() => {
      if (state === "Delivering Now"){
        const rest = restaurantsList.filter(x => x.isDeliveryNow);
        setData(rest)
      }
      if (state === "To Schedule"){
        const rest = restaurantsList.filter(x => !x.isDeliveryNow);
        setData(rest)
      }
      if (state === "Favourites"){
        const rest = restaurantsList.filter(x => x.isFavourite);
        setData(rest)
      }
    }, [state])
    
    return (
      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.content}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {router.push(`/(home)/(restaurant)/details/${item?.id}`)}}
                  className="mx-5 flex-column items-start"
                >
                  <Image
                    source={item.image}
                    style={styles.image}
                    resizeMode="cover"
                  />
                  <View style={{paddingHorizontal: 5}}>
                  <Text style={styles.tag} className="font-medium text-xl tracking-wider">
                    {item.name} - {item.region}
                  </Text>
                  <View style={styles.tag} className="flex flex-row items-center gap-1">
  {item.tags.map((tag: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, idx: React.Key | null | undefined) => (
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

                <Addendons item={item} />
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
