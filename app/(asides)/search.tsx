import { ScrollView, StyleSheet, Text, TextInput, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import Listheader from '@/components/homepage/listheader';
import PageHeader from '@/components/molecules/pageHeader';
import RecentKeywords from '@/components/molecules/recentkeywords';
import SuggestedRestaurant from '@/components/search/suggested-restaurant';
import PopularDishes from '@/components/search/popular-dishes';

const Search = () => {

    const {width} = useWindowDimensions()
    const styles = StyleSheet.create({
        inputContainer: {
          marginLeft: 10,
          marginTop: 20,
          position: 'relative',
        },
        textInput: {
          backgroundColor: Colors.light.search,
          width: width / 1.07,
          height: 55,
          borderRadius: 10,
          paddingLeft: 35,
          color: Colors.light.text,
          fontWeight: '300',
        },
        icon: {
          position: 'absolute',
          top: 19,
          left: 10,
          zIndex: 999,
        },
      });
  return (
    <ScrollView style={{flex: 1}}>
       <View className='mt-5'>
       <PageHeader showLocation={false} title={"Search"} icon="left" />
        <View style={styles.inputContainer}>
            <AntDesign style={styles.icon} name="search1" size={16} color="gray" />
            <TextInput placeholder={"type in your search"} style={styles.textInput} />
        </View>
        <View className='pl-4 mt-7'>
            <Text>Recent Keywords</Text>
            <RecentKeywords />
        </View>
        <View>
            <SuggestedRestaurant />
        </View>
        <View>
            <PopularDishes />
        </View>
       </View>
    </ScrollView>
  )
}

export default Search