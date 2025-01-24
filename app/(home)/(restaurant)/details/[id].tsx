import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router';
import { restaurantsList } from '@/constants/data';
import { RestaurantInterface } from '@/variables/restaurant';
import { AntDesign } from '@expo/vector-icons';
import Addendons from '@/components/restaurants/addedons';
import Categories from '@/components/homepage/ategories';
import DishesPerRestaurantList from '@/components/homepage/dishes-per-restaurant';
import ListOfDishesPerCategories from '@/components/restaurants/listof-dishes-per-categories';

const RestaurantDetails = () => {
  const [data, setData] = useState<RestaurantInterface>()
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const filterData = restaurantsList.find(x => x.id === parseFloat(id.toString()))
    console.log(filterData)
    setData(filterData)
  }, [id])

  return (
    <ScrollView style={{flex: 1}}
    >
      <View className=''>
       <View className='h-[250px]'>
       <Image
          source={data?.image as any}
          resizeMode='cover'
          className='w-full h-full rounded-b-3xl'
        />
       </View>
        <View>
          <View className='pl-5'>
           {data &&  <Addendons item={data} />}
          </View>
        </View>
        <View className='ml-7 mt-5 mb-2'>
          <Text className='font-semibold text-2xl'>{data?.name}</Text>
          <Text>{data?.description}</Text>
        </View>
        <View className='mt-5'>
          <Categories isDetail />
        </View>
        <View className='mt-5'>
        {
          data?.dishes &&   <ListOfDishesPerCategories data={data.dishes} />
        }
        </View>
      </View>
    </ScrollView>
  )
}

export default RestaurantDetails

const styles = StyleSheet.create({})