import {View, Text, FlatList, useWindowDimensions, StyleSheet, TouchableOpacity, Image, useColorScheme} from "react-native"
import Listheader from "./listheader"
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { formatCurrency } from "@/helpers/format-currency";
import { useTheme } from "@/contexts/themeContext";

interface Dish {
    name: string;
    amount: number; // Price of the dish
    rating: number; // Rating out of 5
    image: string;
    noofrate: number
  }
  
  interface Restaurant {
    id: number;
    name: string;
    description: string;
    image: string; // Assuming the image is a string path or URL
    tags: string[]; // Array of tags for the restaurant
    ratings: number; // Average rating out of 5
    timeOfDelivery: string; // Estimated delivery time
    deliveryType: string; // Type of delivery (e.g., Free, Paid)
    dishes: Dish[]; // Array of dishes offered by the restaurant
  }
interface Prop {
    data: Restaurant
}
const DishesPerRestaurantList = ({data}: Prop) => {

  const colorSchema = useColorScheme()
  const { theme } = useTheme();
        const { width } = useWindowDimensions();
        const styles = StyleSheet.create({
          container: {
            paddingHorizontal: 10,
          },
          content: {
            marginRight: 15,
            paddingLeft: 0,
            display: 'flex',
            flexDirection: 'column',
            borderRadius: 10,
            gap: 10,
            height: 160, // Set a fixed height for consistency
            width: width / 2.5, // Adjust width as needed // Optional: Add background to visualize layout
            padding: 0,
            backgroundColor: colorSchema === "dark" ? theme.input.background : ""
          },
          image: {
            borderRadius: 10,
            marginBottom: 5,
            height: 100, // Ensure consistent image height
            width: '100%', // Make image responsive to container width
          },
          tag: {
            marginLeft: 5,
            color: theme.text
          },
          addIcon: {
            bottom: 33,
            right: 5,
            backgroundColor: colorSchema === "dark" ? theme.secondary : theme.primary,
            borderRadius: 100,
            width: 25,
            height: 25,
            alignItems: "center",
            justifyContent: "center"
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
            color: theme.text,
          },
          ratebg: {
            backgroundColor: theme.input.background,
            padding: 5,
            borderRadius: 100
          },
          addText: {
            fontSize: 10,
            color: theme.text
          }
        });
    return (
        <View className="px-5">
            <Listheader title={data.name} />
            <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={data.dishes}
            renderItem={({item}) => {
                return (
                    <View style={styles.content}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {}}
                  className="mx-5 flex-column items-start relative"
                >
                  <Image
                    source={item.image as any}
                    style={styles.image}
                    resizeMode="contain"
                  />
                   <TouchableOpacity activeOpacity={0.9} style={styles.addIcon} className='absolute bottom-30 right-10'>
                  <AntDesign  name="plus" size={15} color={colorSchema === "light" ? theme.background : theme.text} />
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

export default DishesPerRestaurantList