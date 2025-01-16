import { Tabs } from 'expo-router';
import React from 'react';
import { Platform, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: 'white',
          height: 70,
          borderRadius: 20,
          marginHorizontal: 20,
          marginBottom: 10,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 10,
          elevation: 5,
        },
        tabBarShowLabel: true,
        tabBarButton: (props) => <CustomTabBarButton {...props} route={route} />,
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="home"
              size={focused ? 30 : 24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: "Orders",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="cart"
              size={focused ? 30 : 24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="person"
              size={focused ? 30 : 24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
       <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name="settings"
              size={focused ? 30 : 24}
              color={focused ? '#007AFF' : '#8E8E93'}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const CustomTabBarButton = ({ children, onPress, accessibilityState, route } : {children: React.ReactNode | undefined, onPress: undefined, accessibilityState: any | undefined, route: any | undefined}) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.tabButton,
        focused && styles.activeTabButton,
        route.name === 'index' && { marginBottom: focused ? 15 : 0 },
      ]}
    >
      <View>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  activeTabButton: {
    transform: [{ scale: 1.2 }],
    marginTop: -10,
  },
});
