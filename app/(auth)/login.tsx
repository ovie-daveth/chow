import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Button } from "@/components/atoms/buttons";
import { Link, router } from "expo-router";

const Login = () => {
  const { width } = useWindowDimensions();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State to toggle password visibility
  const [password, setPassword] = useState(""); // State to store password value
  const [confirmPassword, setConfirmPassword] = useState(""); // State to store confirm password value

  const handlePasswordVisibilityToggle = () => {
    setIsPasswordVisible((prevState) => !prevState); // Toggle the visibility of the password
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (field: string, value: string) => {
    setForm({ ...form, [field]: value });
    if (errors) {
      setErrors({ ...errors, [field]: "" }); // Clear error when user starts typing
    }
  };

  const validateForm = () => {
    const newErrors = {
      email: "",
      password: "",
    };
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "A valid email is required.";
    if (!form.password) newErrors.password = "Password empty.";
    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validateForm();
    if (validationErrors.email === "" && validationErrors.password === "") {
      Alert.alert("Success", "Form submitted successfully!", [
        { text: "OK", onPress: () => console.log(form) },
      ]);
    }

    setErrors(validationErrors);
    return;
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View
          style={{ width }}
          className="h-[200px] bg-[#000] flex flex-row items-start justify-between"
        >
          <View className="mt-5 ml-5">
            <Text className="font-bold text-xl text-white">Welcome</Text>
            <Text className="font-semibold text-sm text-white">
              Please Sign Into your account
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => router.push("/(auth)/signup")}
            activeOpacity={0.7}
            className="mt-5 mr-5 "
          >
            <View>
              <AntDesign name="leftcircle" size={24} color="white" />
            </View>
          </TouchableOpacity>
        </View>
        <View className=" -mt-10 w-[100%] mx-auto bg-white h-screen rounded-t-3xl">
          <View className="py-10 px-5 flex flex-col gap-5">
            {/* Email Field */}
            <View className="flex flex-col gap-2">
              <Text className="font-medium">Email</Text>
              <TextInput
                className={`bg-gray-100 font-normal text-sm px-5 rounded-md h-16 placeholder:text-gray-400 ${
                  errors.email ? "border-red-500 border" : ""
                }`}
                keyboardType="email-address"
                placeholder="Enter your email"
                value={form.email}
                onChangeText={(value) => handleInputChange("email", value)}
              />
              {errors.email && (
                <Text className="text-red-500">{errors.email}</Text>
              )}
            </View>

            {/* Password Field */}
            <View className="flex flex-col gap-2">
              <Text className="font-medium">Password</Text>
              <View className="relative">
                <TextInput
                  className={`bg-gray-100 font-normal text-sm px-5 rounded-md h-16 placeholder:text-gray-400 ${
                    errors.password ? "border-red-500 border" : ""
                  }`}
                  secureTextEntry={!isPasswordVisible}
                  placeholder="Enter your password"
                  value={form.password}
                  onChangeText={(value) => handleInputChange("password", value)}
                />
                <TouchableOpacity
                  style={{ position: "absolute", right: 10, top: 15 }}
                  onPress={handlePasswordVisibilityToggle}
                >
                  <Ionicons
                    name={isPasswordVisible ? "eye-off" : "eye"}
                    size={24}
                    color="gray"
                  />
                </TouchableOpacity>
              </View>
              {errors.password && (
                <Text className="text-red-500">{errors.password}</Text>
              )}
            </View>

            <View className="flex flex-col gap-2">
              <View className="">
                <Button title={"Login"} onPress={handleSubmit} />
                <View className="flex flex-row items-start justify-center w-[330px] gap-2 mx-auto text-center mt-2">
                  <Text className="text-gray-400">Don't have an account?</Text>
                  <Link className="text-[#FFB84C]" href={"/(auth)/signup"}>
                    Sign Up
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;
