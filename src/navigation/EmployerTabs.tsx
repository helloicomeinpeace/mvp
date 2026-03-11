import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { EmployerDashboard } from '../screens/EmployerDashboard';
import { BookingsScreen } from '../screens/BookingsScreen';
import { MessagingScreen } from '../screens/MessagingScreen';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const PlaceholderProfile = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

export const EmployerTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={EmployerDashboard} />
      <Tab.Screen name="Messages" component={MessagingScreen} />
      <Tab.Screen name="Bookings" component={BookingsScreen} />
      <Tab.Screen name="Profile" component={PlaceholderProfile} />
    </Tab.Navigator>
  );
};
