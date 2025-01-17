import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { categories } from '@/constants/data';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const Categories = () => {
  const [active, setActive] = useState<number | null>(1);

  const handlePress = (id: number, ref: any) => {
    setActive(id);
    if (ref?.animate) {
      ref.animate(
        {
          0: { scale: 1 },
          0.5: { scale: 0.9 }, // Shrink
          1: { scale: 1 }, // Back to normal
        },
        300 // Duration in ms
      );
    }
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>All Categories</Text>
        <TouchableOpacity activeOpacity={0.7} style={styles.viewAllButton}>
          <Text style={styles.viewAllText}>View All</Text>
          <AntDesign name="right" size={15} color="black" />
        </TouchableOpacity>
      </View>

      {/* Categories List */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          let viewRef: any = null;

          return (
            <Animatable.View
              ref={(ref) => {
                viewRef = ref;
              }}
              style={[
                styles.content,
                active === item.id ? styles.active : styles.inactive,
              ]}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => handlePress(item.id, viewRef)}
                className="mx-5 flex-row items-center"
              >
                <Image
                  source={item.image}
                  className="w-8 h-8"
                  style={styles.image}
                  resizeMode="contain"
                />
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </Animatable.View>
          );
        }}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    fontSize: 15,
    fontWeight: 400,
    color: Colors.dark.background,
  },
  viewAllButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center"
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
    color: Colors.light.text,
  },
  content: {
    marginRight: 13,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 100,
    gap: 20,
  },
  active: {
    backgroundColor: Colors.light.buttons,
  },
  inactive: {
    backgroundColor: '#fff',
  },
  image: {
    borderRadius: 100,
    width: 30,
    height: 30,
    marginRight: 10,
  },
});
