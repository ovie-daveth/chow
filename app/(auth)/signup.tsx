import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Button } from '@/components/atoms/buttons';
import { Link, router } from 'expo-router';

const SignUp = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors) {
      setErrors({ ...errors, [field]: '' }); // Clear error when user starts typing
    }
  };

  const validateForm = () => {
    const newErrors = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    };
    if (!form.name.trim()) newErrors.name = 'Name is required.';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = 'A valid email is required.';
    if (!form.password) newErrors.password = 'Password is required.';
    if (form.password && form.password.length < 5) newErrors.password = 'Password length too short.';
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (
        validationErrors.confirmPassword === "" && 
        validationErrors.email === "" && 
        validationErrors.name === "" && 
        validationErrors.password === "" 
    ) {
      Alert.alert('Success', 'Form submitted successfully!', [
      { text: 'OK', onPress: () => console.log(form) },
      ]);
    } 
       
    setErrors(validationErrors);
    return;
  };

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible((prev) => !prev);
  };


  return (
    <SafeAreaView>
      <ScrollView>
        <View className="h-[200px] bg-[#000] flex flex-row items-start justify-between">
          <View className="mt-5 ml-5">
            <Text className="font-bold text-xl text-white">SignUp</Text>
            <Text className="font-semibold text-sm text-white">
              Please Sign Up to get started
            </Text>
          </View>
        </View>
        <View className="-mt-10 w-[100%] mx-auto bg-white h-full rounded-t-3xl pb-10">
          <View className="py-10 px-5 flex flex-col gap-5">
            {/* Name Field */}
            <View className="flex flex-col gap-2">
              <Text className="font-medium">Name</Text>
              <TextInput
                className={`bg-gray-100 font-normal text-sm px-5 rounded-md h-16 placeholder:text-gray-400 ${
                  errors.name ? 'border-red-500 border' : ''
                }`}
                placeholder="Enter your Full name e.g., John Doe"
                value={form.name}
                onChangeText={(value) => handleInputChange('name', value)}
              />
              {errors.name && <Text className="text-red-500">{errors.name}</Text>}
            </View>

            {/* Email Field */}
            <View className="flex flex-col gap-2">
              <Text className="font-medium">Email</Text>
              <TextInput
                className={`bg-gray-100 font-normal text-sm px-5 rounded-md h-16 placeholder:text-gray-400 ${
                  errors.email ? 'border-red-500 border' : ''
                }`}
                keyboardType="email-address"
                placeholder="Enter your email"
                value={form.email}
                onChangeText={(value) => handleInputChange('email', value)}
              />
              {errors.email && <Text className="text-red-500">{errors.email}</Text>}
            </View>

            {/* Password Field */}
            <View className="flex flex-col gap-2">
              <Text className="font-medium">Password</Text>
              <View className="relative">
                <TextInput
                  className={`bg-gray-100 font-normal text-sm px-5 rounded-md h-16 placeholder:text-gray-400 ${
                    errors.password ? 'border-red-500 border' : ''
                  }`}
                  secureTextEntry={!isPasswordVisible}
                  placeholder="Create a password"
                  value={form.password}
                  onChangeText={(value) => handleInputChange('password', value)}
                />
                <TouchableOpacity
                  style={{ position: 'absolute', right: 10, top: 15 }}
                  onPress={handlePasswordVisibilityToggle}
                >
                  <Ionicons
                    name={isPasswordVisible ? 'eye-off' : 'eye'}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text className="text-red-500">{errors.password}</Text>
              )}
            </View>

            {/* Confirm Password Field */}
            <View className="flex flex-col gap-2">
              <Text className="font-medium">Confirm Password</Text>
              <View className="relative">
                <TextInput
                  className={`bg-gray-100 font-normal text-sm px-5 rounded-md h-16 placeholder:text-gray-400 ${
                    errors.confirmPassword ? 'border-red-500 border' : ''
                  }`}
                  secureTextEntry={!isPasswordVisible}
                  placeholder="Confirm your password"
                  value={form.confirmPassword}
                  onChangeText={(value) =>
                    handleInputChange('confirmPassword', value)
                  }
                />
              </View>
              {errors.confirmPassword && (
                <Text className="text-red-500">{errors.confirmPassword}</Text>
              )}
            </View>

            {/* Submit Button */}
            <Button title="Sign Up" onPress={handleSubmit} />

            {/* Redirect to Login */}
            <View className="flex flex-row justify-center gap-2 mt-2">
              <Text className="text-gray-400">Already have an account?</Text>
              <Link className="text-[#FFB84C]" href="/(auth)/login">
                Login
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
