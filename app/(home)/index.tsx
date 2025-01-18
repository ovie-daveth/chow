import AllRestauants from '@/components/homepage/AllRestauants';
import Categories from '@/components/homepage/ategories';
import DishesPerRestaurantList from '@/components/homepage/dishes-per-restaurant';
import FeaturedDishes from '@/components/homepage/featuredDishes';
import Header from '@/components/homepage/header';
import RestaurantLists from '@/components/homepage/restaurantLists';
import { Colors } from '@/constants/Colors';
import { restaurantsList } from '@/constants/data';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, Text, FlatList, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const styles = StyleSheet.create({
    inputContainer: {
      marginLeft: 17,
      marginTop: 20,
      position: 'relative',
    },
    textInput: {
      backgroundColor: Colors.light.search,
      width: width / 1.15,
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
    <SafeAreaView style={{ flex: 1, paddingBottom: 80 }}>
      <FlatList
        data={restaurantsList}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View>
            <Header />
            <View style={styles.inputContainer}>
              <AntDesign style={styles.icon} name="search1" size={16} color="gray" />
              <TextInput placeholder="Search dishes, restaurants" style={styles.textInput} />
            </View>
            <View className="mt-5">
              <Categories />
            </View>
            <View className="mt-5">
              <RestaurantLists />
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View key={item.id} className="mt-7 -mb-11">
            <DishesPerRestaurantList data={item} />
          </View>
        )}
        ListFooterComponent={
          <View>
            <View className="mt-5">
              <FeaturedDishes />
            </View>
            <View className="mt-5">
              <AllRestauants />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
