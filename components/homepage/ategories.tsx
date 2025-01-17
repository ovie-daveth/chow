import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { categories } from '@/constants/data';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import Listheader from './listheader';

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

  const onPress = () => {

  }

  return (
    <View style={styles.container}>
      {/* Header Section */}
    
        <Listheader title="All Categories" onPress={onPress} />
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
               <View  style={[styles.imageContainer,
                active === item.id ? styles.imageContainerActive : styles.imageContainerInActive,
              ]}>
               <Image
                  source={item.image}
                  className="w-8 h-8"
                  style={styles.image}
                  resizeMode="contain"
                />
               </View>
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
    paddingHorizontal: 10,
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
    backgroundColor: "#E68A2F",
  },
  inactive: {
    backgroundColor: '#eee',
  },
  activeText: {
    color: "#fff"
  },
  imageContainer: {
    borderRadius: 100,
    width: 33,
    height: 33,
    marginRight: 10,
  },
  imageContainerInActive: {
    backgroundColor: "#E8E8E8"
  },
  imageContainerActive: {
    backgroundColor: "#FFB84C"
  },
  image: {
    borderRadius: 100,
    width: 30,
    height: 30
  },
});
