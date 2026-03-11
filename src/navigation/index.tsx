import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoleSelectionScreen } from '../screens/RoleSelectionScreen';
import { EmployerTabs } from './EmployerTabs';
import { WorkerTabs } from './WorkerTabs';
import { PostJobScreen } from '../screens/PostJobScreen';
import { JobDetailsScreen } from '../screens/JobDetailsScreen';
import { MessagingScreen } from '../screens/MessagingScreen';
import { WorkerProfileScreen } from '../screens/WorkerProfileScreen';

export type RootStackParamList = {
  RoleSelection: undefined;
  EmployerHome: undefined;
  WorkerHome: undefined;
  PostJob: undefined;
  JobDetails: { jobId: string };
  Messaging: { chatId: string };
  WorkerProfile: { workerId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="EmployerHome" component={EmployerTabs} />
      <Stack.Screen name="WorkerHome" component={WorkerTabs} />
      <Stack.Screen name="PostJob" component={PostJobScreen} />
      <Stack.Screen name="JobDetails" component={JobDetailsScreen} />
      <Stack.Screen name="Messaging" component={MessagingScreen} />
      <Stack.Screen name="WorkerProfile" component={WorkerProfileScreen} />
    </Stack.Navigator>
  );
};
