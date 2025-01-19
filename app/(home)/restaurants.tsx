import { View, Text, TouchableNativeFeedback, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";
import PageHeader from "@/components/molecules/pageHeader";
import AllRestauants from "@/components/homepage/AllRestauants";

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
  const onPressHandler = () => {
    console.log("Button pressed!");
  };

  return (
    <View className="pt-5" style={{flex: 1, paddingBottom: 150 }}>
      <PageHeader showLocation title={"Restaurants"} icon="left" />
      <View className="flex flex-row items-center gap-3 mt-5">
        {button.map((item: { title: string }, idx: any) => (
          <TouchableNativeFeedback
          style={styles.touchable}
            key={idx}
            onPress={onPressHandler}
            background={TouchableNativeFeedback.Ripple(
              "rgba(0, 0, 0, 0.2)",
              false,
            )}
          >
            <View style={styles.button}>
              <Text style={styles.buttonText}>{item?.title}</Text>
            </View>
          </TouchableNativeFeedback>
        ))}
      </View>
      <View>
        <AllRestauants />
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
  }
});
