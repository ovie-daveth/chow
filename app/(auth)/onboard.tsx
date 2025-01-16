import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'; 
import * as Animatable from 'react-native-animatable';
import { router } from 'expo-router';
import OnbordComponent from '@/components/onboard/onboard';
import { onboardData } from '@/components/onboard/data';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Button } from '@/components/atoms/buttons';

const Onboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // Track current slide index
  const flatListRef = useRef<FlatList>(null); // Reference to FlatList
  const totalSlides = onboardData.length;

  const customFade = {
    0: { opacity: 0.2 }, // Starting opacity (how faded it is)
    0.5: { opacity: 1 }, // Fully visible
    1: { opacity: 0.2 }, // Fades back to starting opacity
  };

  // Handle "Next" button click
  const handleNext = () => {
    if (currentIndex < totalSlides - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
    } else {
        router.replace("/(auth)/signup")
    }
  };

  // Handle "Previous" button click
  const handlePrevious = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      flatListRef.current?.scrollToIndex({ index: prevIndex, animated: true });
    }
  };

  // Handle progress bar calculation
  const progress = (currentIndex + 1) / totalSlides;

  const onScroll = (event: any) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / event.nativeEvent.layoutMeasurement.width);
    setCurrentIndex(index);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <FlatList
        ref={flatListRef}
        data={onboardData}
        renderItem={({ item }) => <OnbordComponent data={item} />}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        onScrollToIndexFailed={() => {}}
        onScroll={onScroll} // Track scroll position
        scrollEventThrottle={16}
      />

      {/* Progress Bar */}
      <View style={{ position: 'absolute', bottom: 70, left: 0, right: 0 }}>
        <Animatable.View
          animation="slideInUp"
          duration={500}
          style={{
            height: 5,
            backgroundColor: '#FFB84C',
            width: `${progress * 100}%`,
          }}
        />
      </View>

        <View className={`absolute top-2/3 ${currentIndex >= totalSlides - 1 ? "-translate-x-10" : "-translate-x-28"} translate-y-[100px] left-1/2 `}>
        {
          currentIndex >= totalSlides - 1 ? <View  className='flex flex-row items-center gap-3 justify-center w-[20%]'>
            <TouchableOpacity activeOpacity={0.7} onPress={handlePrevious}>
            <AntDesign name="leftcircle" size={24} color="orange" className='mt-4' />
            </TouchableOpacity>
             <Button onPress={handleNext} cwidth={1.5} title={'Get Started'} />
          </View> : <Animatable.View
                      animation={customFade}
                      iterationCount="infinite"
                      direction="alternate" // Makes it fade in and out
                      duration={2000} // Adjust the duration as needed
                      className='flex flex-row gap-3 item'>
              <TouchableOpacity onPress={handlePrevious} activeOpacity={0.7}>
              <AntDesign name="left" size={24} color="lightgray" />
              </TouchableOpacity>
                <Text
                   
                    className="text-gray-400"
              >
                Swipe to continue
              </Text>
              <TouchableOpacity onPress={handleNext} activeOpacity={0.7}>
              <AntDesign name="right" size={24} color="lightgray" />
              </TouchableOpacity>
          </Animatable.View>
        }
        </View>
      {/* Navigation Buttons */}
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          left: '25%',
          transform: [{ translateX: -50 }],
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '70%',
        }}
      >
        
      </View>
    </SafeAreaView>
  );
};

export default Onboard;
