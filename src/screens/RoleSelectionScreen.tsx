import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const RoleSelectionScreen = () => {
  const [selectedRole, setSelectedRole] = useState<'worker' | 'employer' | null>(null);
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleContinue = () => {
    if (selectedRole === 'worker') {
      navigation.navigate('WorkerHome');
    } else if (selectedRole === 'employer') {
      navigation.navigate('EmployerHome');
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-row items-center p-4 justify-between">
        <TouchableOpacity className="size-12 items-center justify-center">
          <Icon name="arrow-back-ios" size={24} className="text-slate-900 dark:text-slate-100" />
        </TouchableOpacity>
        <View className="flex-1 items-center pr-12">
          <View className="flex-row gap-2">
            <View className="h-1.5 w-6 rounded-full bg-primary" />
            <View className="h-1.5 w-2 rounded-full bg-primary/20" />
            <View className="h-1.5 w-2 rounded-full bg-primary/20" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-6 pt-8 pb-4">
        <View className="items-center mb-10">
          <Text className="text-slate-900 dark:text-slate-100 text-[32px] font-bold leading-tight tracking-[-0.02em] mb-3 text-center font-display">
            Welcome! How can we help you today?
          </Text>
          <Text className="text-slate-600 dark:text-slate-400 text-base font-normal leading-relaxed px-4 text-center font-display">
            Choose your role to get started with the best experience for your needs.
          </Text>
        </View>

        <View className="gap-4 flex-1">
          <TouchableOpacity
            onPress={() => setSelectedRole('worker')}
            className={`relative border-2 rounded-xl p-5 shadow-sm flex-col justify-between h-44 ${
              selectedRole === 'worker' ? 'border-primary bg-white dark:bg-slate-800' : 'border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800'
            }`}
          >
            <View className="flex-row justify-between items-start">
              <View className="w-16 h-16 bg-primary/10 rounded-lg items-center justify-center">
                <Icon name="work" size={36} color="#13ec5b" />
              </View>
              <View className={`h-6 w-6 rounded-full items-center justify-center ${selectedRole === 'worker' ? 'bg-primary' : 'border-2 border-slate-200'}`}>
                {selectedRole === 'worker' && <Icon name="check" size={16} color="white" />}
              </View>
            </View>
            <View>
              <Text className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-display">I am looking for a job</Text>
              <Text className="text-sm text-slate-500 dark:text-slate-400 font-display">Join as a cook, driver, gardener or skilled professional.</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelectedRole('employer')}
            className={`relative border-2 rounded-xl p-5 shadow-sm flex-col justify-between h-44 ${
              selectedRole === 'employer' ? 'border-primary bg-white dark:bg-slate-800' : 'border-slate-100 dark:border-slate-700 bg-white dark:bg-slate-800'
            }`}
          >
            <View className="flex-row justify-between items-start">
              <View className="w-16 h-16 bg-slate-100 dark:bg-slate-700 rounded-lg items-center justify-center">
                <Icon name="person-search" size={36} color="#94a3b8" />
              </View>
              <View className={`h-6 w-6 rounded-full items-center justify-center ${selectedRole === 'employer' ? 'bg-primary' : 'border-2 border-slate-200'}`}>
                {selectedRole === 'employer' && <Icon name="check" size={16} color="white" />}
              </View>
            </View>
            <View>
              <Text className="text-xl font-bold text-slate-900 dark:text-white mb-1 font-display">I am looking to hire help</Text>
              <Text className="text-sm text-slate-500 dark:text-slate-400 font-display">Find and book reliable help for your home or business.</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View className="p-6 pb-10 bg-white dark:bg-slate-900/50 border-t border-slate-100 dark:border-slate-800">
        <TouchableOpacity
          onPress={handleContinue}
          disabled={!selectedRole}
          className={`w-full py-4 rounded-xl items-center justify-center flex-row gap-2 shadow-lg shadow-primary/20 ${selectedRole ? 'bg-primary' : 'bg-slate-300'}`}
        >
          <Text className="text-slate-900 font-bold text-lg font-display">Continue</Text>
          <Icon name="arrow-forward" size={24} color="#102216" />
        </TouchableOpacity>
        <Text className="text-center text-xs text-slate-400 dark:text-slate-500 mt-4 px-8 font-display">
          By continuing you agree to our <Text className="text-primary underline">Terms of Service</Text> and <Text className="text-primary underline">Privacy Policy</Text>.
        </Text>
      </View>
    </SafeAreaView>
  );
};
