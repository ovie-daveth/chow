
import Categories from '@/components/homepage/ategories';
import Header from '@/components/homepage/header';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, Text, ScrollView, TouchableOpacity, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {

  const {width} = useWindowDimensions()
  const styles = StyleSheet.create({
    inputContainer: {
      marginLeft: 17,
      marginTop: 20,
      position: "relative"
    },
    textInput: {
      backgroundColor: Colors.light.search,
      width: width / 1.15,
      height: 55,
      borderRadius: 10,
      paddingLeft: 35,
      color: Colors.light.text,
      fontWeight: 300
    },
    icon: {
      position: "absolute",
      top: 19,
      left: 10,
      zIndex: 999
    }
  })
  return (
   <SafeAreaView style={{flex: 1}} className='flex-1'>
    <ScrollView>
     <Header />
      <View style={styles.inputContainer} className="">
      <AntDesign style={styles.icon} name="search1" size={16} color="gray" />
        <TextInput placeholder="Search dishes, restaurants" style={styles.textInput} />
      </View>
      <View className='mt-5'>
        <Categories />
      </View>
      <View className='mt-5'>
        <RestaurantLists />
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}
