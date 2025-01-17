import { Button } from '@/components/atoms/buttons';
import Header from '@/components/homepage/header';
import { AntDesign } from '@expo/vector-icons';
import { Redirect } from 'expo-router';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {
  return (
   <SafeAreaView style={{flex: 1}} className='flex-1'>
    <ScrollView>
     <Header />
      <View className="w-[400px] flex items-center justify-center">
        
      </View>
    </ScrollView>
   </SafeAreaView>
  )
}
