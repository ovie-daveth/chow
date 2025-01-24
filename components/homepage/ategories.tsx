import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity, Appearance } from 'react-native';
import React, { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { categories } from '@/constants/data';
import { Colors } from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import Listheader from './listheader';
import { useTheme } from '@/contexts/themeContext';

interface prop {
  isDetail?: boolean
}
const Categories: React.FC<prop> = ({isDetail}) => {
  const [active, setActive] = useState<number | null>(1);
  const { theme } = useTheme();
  const colorScheme = Appearance.getColorScheme()

  const styles = StyleSheet.create({
    container: {
      paddingLeft: 15,
    },
    containere: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 5
    },
    content: {
      marginRight: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 100,
      width: 50,
      height: 50,
    },
    separator: {
      height: 10, 
      width:20
    },
    active: {
      backgroundColor: theme.button.background,
    },
    inactive: {
      backgroundColor: colorScheme === "dark" ? theme.input.background : "#eee",
    },
    activeText: {
      color: "#fff"
    },
    imageContainer: {
      borderRadius: 100,
    },
    image: {
      borderRadius: 100,
      width: 35,
      height: 35
    },
    addText: {
      fontSize: 10,
      color: theme.text,
      marginLeft: -7
    }
  });
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
    
       {
        !isDetail &&  <Listheader title="All Categories" onPress={onPress} />
       }
      {/* Categories List */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          let viewRef: any = null;

          return (
            <Animatable.View
              ref={(ref) => {
                viewRef = ref;
              }}
              style={styles.containere}
            >
              <TouchableOpacity
               style={[
                styles.content,
                active === item.id ? styles.active : styles.inactive,
              ]}
                activeOpacity={0.7}
                onPress={() => handlePress(item.id, viewRef)}
                className="mx-5 flex-row items-center"
              >
               <View  style={[styles.imageContainer
              ]}>
               <Image
                  source={item.image}
                  className="w-full h-full"
                  style={styles.image}
                  resizeMode="contain"
                />
               </View>
              </TouchableOpacity>
              <Text style={styles.addText} className='text-sm'>{item.name}</Text>
            </Animatable.View>
          );
        }}
      />
    </View>
  );
};

export default Categories;
