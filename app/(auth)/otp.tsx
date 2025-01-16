import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { Button } from '@/components/atoms/buttons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { router } from 'expo-router';

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);
  const [showButton, setShowButton] = useState(false);
  const [timer, setTimer] = useState<number>(50);
  const [isResendActive, setIsResendActive] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setIsResendActive(true); // Enable the "Resend OTP" button when timer hits 0
    }

    return () => {
      if (interval) clearInterval(interval); // Cleanup on unmount
    };
  }, [timer]);

  const handleResendOtp = () => {
    Alert.alert('OTP Resent');
    setTimer(50); // Restart the timer
    setIsResendActive(false); // Disable the "Resend OTP" button until timer hits 0 again
  };

  const handleInputChange = (value: string, index: number) => {
    if (value.length > 1) return; // Prevent entering more than one digit
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }

    // Automatically submit if all boxes are filled
    if (index === 3 && value) {
      setShowButton(true);
    //   handleSubmit(newOtp.join(''));
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === 'Backspace' && otp[index] === '' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (otpValue: string) => {
    if (otpValue.length < 4) {
      Alert.alert('Error', 'Please enter a valid 4-digit OTP');
      return;
    }
    Alert.alert('Success', `OTP Submitted: ${otpValue}`);
    console.log('OTP Submitted:', otpValue);
    router.replace("/(home)/home")
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-[200px] bg-[#000] flex flex-row items-start justify-between">
          <View className="mt-5 ml-5">
            <Text className="font-bold text-xl text-white">Enter OTP</Text>
            <Text className="font-semibold text-sm text-white">
              Please Enter the OTP sent to your mail
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.back()}
            activeOpacity={0.7}
            className="mt-5 mr-5 "
          >
            <View>
              <AntDesign name="leftcircle" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View className="flex-1 -mt-10 w-[100%] mx-auto bg-white h-screen rounded-t-3xl pb-10">
          <View className="mt-5 flex-row gap-1 flex items-end justify-end mr-12">
            <TouchableOpacity
              disabled={!isResendActive} // Disable button if not active
              onPress={handleResendOtp}
            >
              <Text
                className={`font-bold text-sm ${
                  isResendActive ? 'text-black' : 'text-gray-400'
                }`}
              >
                Resend OTP
              </Text>
            </TouchableOpacity>
            <Text className="text-sm">in {timer} sec</Text>
          </View>
          <View className="flex-row justify-between w-4/5 mb-6 mx-auto mt-10">
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                className="w-12 h-12 border border-gray-300 rounded-md text-center text-lg bg-white"
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(value) => handleInputChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
              />
            ))}
          </View>
          <View className="mx-10">
            {showButton && (
              <Button
                cwidth={1.2}
                title="Submit OTP"
                onPress={() => handleSubmit(otp.join(''))}
              />
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtpPage;
