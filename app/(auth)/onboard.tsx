import { View, FlatList, Text, TouchableOpacity, ColorSchemeName } from 'react-native';
import React, { useState, useRef } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar'; 
import * as Animatable from 'react-native-animatable';
import { router } from 'expo-router';
import OnbordComponent from '@/components/onboard/onboard';
import { onboardData } from '@/components/onboard/data';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import { Button } from '@/components/atoms/buttons';
import { useTheme } from '@/contexts/themeContext';
import { Appearance } from 'react-native';

const Onboard = () => {
  const { theme, toggleTheme } = useTheme();
   const colorScheme = Appearance.getColorScheme()
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
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
      <StatusBar style={colorScheme === "dark" ? "light" : "dark"} />
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
            backgroundColor: theme.primary,
            width: `${progress * 100}%`,
          }}
        />
      </View>

        <View className={`absolute top-2/3 ${currentIndex >= totalSlides - 1 ? "-translate-x-2" : "-translate-x-20"} translate-y-[100px] left-1/2 `}>
        {
          currentIndex >= totalSlides - 1 ? <View  className='flex flex-row items-center gap-3 justify-center w-[20%]'>
             <Button onPress={handleNext} cwidth={1.5} title={'Get Started'} />
          </View> : <Animatable.View
                      animation={customFade}
                      iterationCount="infinite"
                      direction="alternate" // Makes it fade in and out
                      duration={2000} // Adjust the duration as needed
                      className='flex flex-row gap-1 items-center item'>
                <Text
                   
                  style={{color: theme.text}}
              >
                Swipe to continue
              </Text>
              <Feather name="chevrons-right" size={16} style={{color: theme.text, marginTop: 2}}/>
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
