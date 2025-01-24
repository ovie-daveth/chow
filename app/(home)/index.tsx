import Search from '@/components/atoms/search';
import AllRestauants from '@/components/homepage/AllRestauants';
import Categories from '@/components/homepage/ategories';
import DishesPerRestaurantList from '@/components/homepage/dishes-per-restaurant';
import FeaturedDishes from '@/components/homepage/featuredDishes';
import Header from '@/components/homepage/header';
import RestaurantLists from '@/components/homepage/restaurantLists';
import { Colors } from '@/constants/Colors';
import { restaurantsList } from '@/constants/data';
import { useTheme } from '@/contexts/themeContext';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TextInput, View, Text, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const { theme, toggleTheme } = useTheme();

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 80, backgroundColor: theme.background }}>
      <FlatList
        data={restaurantsList}
        keyExtractor={(item) => item.id.toString()}
        ListHeaderComponent={
          <View>
            <Header />
            <Search placeholder='Search restaurant, dishes' />
            <View className="mt-5">
              <Categories />
            </View>
            <View className="mt-5">
              <RestaurantLists />
            </View>
          </View>
        }
        renderItem={({ item }) => (
          <View key={item.id} className="mt-7 mb-2">
            <DishesPerRestaurantList data={item} />
          </View>
        )}
        ListFooterComponent={
          <View>
            <View className="mt-5">
              <FeaturedDishes />
            </View>
            <View className="mt-5">
              <AllRestauants state={''} />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
