import { View, Text, TouchableNativeFeedback, StyleSheet, useWindowDimensions } from "react-native";
import React, { useState } from "react";
import PageHeader from "@/components/molecules/pageHeader";
import AllRestauants from "@/components/homepage/AllRestauants";
import { Colors } from "@/constants/Colors";
import Search from "@/components/atoms/search";

const button: any = [
  {
    id: 1,
    title: "Favourites",
  },
  {
    id: 2,
    title: "Delivering Now",
  },
  {
    id: 3,
    title: "To Schedule",
  },
];
const Restaurants = () => {

  const { width } = useWindowDimensions()

  const [state, setState] = useState<string>("")
  const [isActive, setIsActive] = useState<number | null>(null)
  
  const onPressHandler = (item: string, idx: number) => {
    setState(item)
    setIsActive(idx)
  };

  return (
    <View className="pt-5" style={{flex: 1 }}>
      <PageHeader showLocation title={"Restaurants"} icon="left" />
      <Search placeholder="Search for a restaurant" />
      <View className="flex flex-row items-center gap-3 mt-8 pl-3">
        {button.map((item: { title: string }, idx: any) => (
          <TouchableNativeFeedback
          style={[styles.touchable]}
            key={idx}
            onPress={() => onPressHandler(item.title, idx)}
            background={TouchableNativeFeedback.Ripple(
              "rgba(0, 0, 0, 0.2)",
              false,
            )}
          >
            <View style={[styles.button, isActive === idx && styles.isActive]}>
              <Text style={[styles.buttonText,isActive === idx && styles.isActiveText ]}>{item?.title}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
      <View className="mt-5" style={{paddingBottom: 230}}>
        <AllRestauants state={state} />
      </View>
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#eee",
    paddingHorizontal: 10,
    paddingVertical: 7,
    borderRadius: 100
  },
  buttonText: {
    color: "gray",
    fontWeight: 400,
  },
  touchable: {
    borderRadius: 100
  },
  isActive: {
    backgroundColor: Colors.light.buttons
  },
  isActiveText: {
    color: "#000"
  }
});
