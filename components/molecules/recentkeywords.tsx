import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '@/constants/Colors';

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

const RecentKeywords = () => {

     const [state, setState] = useState<string>("")
      const [isActive, setIsActive] = useState<number | null>(null)
      
      const onPressHandler = (item: string, idx: number) => {
        setState(item)
        setIsActive(idx)
      };
  return (
     <View className="flex flex-row items-center gap-3 mt-5">
        {button.map((item: { title: string }, idx: any) => (
          <TouchableOpacity
          style={[styles.touchable]}
            key={idx}
            onPress={() => onPressHandler(item.title, idx)}
            
          >
            <View style={[styles.button, isActive === idx && styles.isActive]}>
              <Text style={[styles.buttonText,isActive === idx && styles.isActiveText ]}>{item?.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
  )
}

export default RecentKeywords

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
     inputContainer: {
              marginLeft: 10,
              marginTop: 20,
              position: 'relative',
              backgroundColor: Colors.light.search,
               width: "93%",
              height: 55,
              borderRadius: 10,
              paddingLeft: 35,
            },
            textInput: {
              color: Colors.light.text,
              fontWeight: '300',
              paddingTop: 17
            },
            icon: {
              position: 'absolute',
              top: 19,
              left: 10,
              zIndex: 999,
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