import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { WorkerDashboard } from '../screens/WorkerDashboard';
import { BookingsScreen } from '../screens/BookingsScreen';
import { MessagingScreen } from '../screens/MessagingScreen';
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

const PlaceholderProfile = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Profile Screen</Text>
  </View>
);

export const WorkerTabs = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={WorkerDashboard} />
      <Tab.Screen name="Messages" component={MessagingScreen} />
      <Tab.Screen name="My Jobs" component={BookingsScreen} />
      <Tab.Screen name="Profile" component={PlaceholderProfile} />
    </Tab.Navigator>
  );
};
