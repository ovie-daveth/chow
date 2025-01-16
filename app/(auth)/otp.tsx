import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Alert,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';
import { Button } from '@/components/atoms/buttons';

const OtpPage = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const inputRefs = useRef<(TextInput | null)[]>([]);

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
      handleSubmit(newOtp.join(''));
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
  };

  return (
    <View className="flex-1 justify-center items-center px-5 bg-gray-100">
      <Text className="text-2xl font-bold mb-3">Enter OTP</Text>
      <Text className="text-base text-gray-600 mb-8 text-center">
        We’ve sent a 4-digit code to your phone
      </Text>
      <View className="flex-row justify-between w-4/5 mb-6">
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
      <Button title="Submit OTP" onPress={() => handleSubmit(otp.join(''))} />
    </View>
  );
};

export default OtpPage;
