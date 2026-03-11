import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const PostJobScreen = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="flex-row items-center p-4 justify-between border-b border-slate-200 dark:border-slate-800 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-primary font-semibold text-base font-display">Cancel</Text>
        </TouchableOpacity>
        <Text className="text-slate-900 dark:text-slate-100 text-lg font-bold tracking-tight font-display">Post a New Job</Text>
        <View className="w-12" />
      </View>

      <ScrollView className="flex-1 px-4 py-4" showsVerticalScrollIndicator={false}>
        <View className="flex-row items-center gap-2 mb-6">
          <View className={`h-1.5 flex-1 rounded-full ${currentStep >= 1 ? 'bg-primary' : 'bg-primary/20'}`} />
          <View className={`h-1.5 flex-1 rounded-full ${currentStep >= 2 ? 'bg-primary' : 'bg-primary/20'}`} />
          <View className={`h-1.5 flex-1 rounded-full ${currentStep >= 3 ? 'bg-primary' : 'bg-primary/20'}`} />
        </View>

        <Text className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-1 font-display">Tell us what you need</Text>
        <Text className="text-slate-500 dark:text-slate-400 text-sm mb-6 font-display">Find the perfect local worker for your household.</Text>

        <View className="space-y-6">
          {/* Basic Information */}
          <View className="mb-6">
            <Text className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-display">Basic Information</Text>
            <View className="gap-4">
              <View className="gap-2">
                <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-display">Job Title</Text>
                <TextInput
                  className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-display"
                  placeholder="e.g. Need an experienced family driver"
                  placeholderTextColor="#94a3b8"
                />
              </View>
              <View className="gap-2">
                <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-display">Category</Text>
                <TouchableOpacity className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-row items-center justify-between">
                  <Text className="text-slate-400 font-display">Select a service category</Text>
                  <Icon name="unfold-more" size={20} color="#94a3b8" />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Job Details */}
          <View className="mb-6">
            <Text className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-display">Job Details</Text>
            <View className="gap-2">
              <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-display">Description</Text>
              <TextInput
                multiline
                numberOfLines={4}
                className="w-full p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-display text-start min-h-[100px]"
                placeholder="Describe the responsibilities, schedule, and any specific requirements..."
                placeholderTextColor="#94a3b8"
                style={{ textAlignVertical: 'top' }}
              />
            </View>
          </View>

          {/* Logistics */}
          <View className="mb-6">
            <Text className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-display">Logistics</Text>
            <View className="gap-2">
              <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-display">Location</Text>
              <View className="relative">
                <Icon name="location-on" size={20} color="#13ec5b" className="absolute left-4 top-3" style={{ zIndex: 1 }} />
                <TextInput
                  className="w-full h-12 pl-12 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-display"
                  placeholder="Enter neighborhood or address"
                  placeholderTextColor="#94a3b8"
                />
              </View>
            </View>
            {/* Map Preview */}
            <View className="w-full h-32 mt-4 rounded-xl bg-slate-200 dark:bg-slate-800 items-center justify-center border border-slate-200 dark:border-slate-800 overflow-hidden relative">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCDYNRH-KWYUnbQCoyDIw1ZnWPi21olMVng23wFEkmk5-e80cOKXC6yXtxWYuDONLjpPwGX6wZo46rM0pHcIbsOuVd-pPEJqL2NOnybz4NNr3ef4buN1Gp2EvGVq1lMybb8gCy4H_iXn013_9G5seFR64-TOS-3G6ymQS28viUge0rjchMkEYV8vWT6yJY2Z2RZG100vJbcQCGiVe1xttQXXcKhD4JZRhihTc3pbgAANdtxQA0BqwP-KaujQMyB90Sc1tfiYdFzgrIS' }} className="w-full h-full opacity-60" />
              <View className="absolute inset-0 items-center justify-center">
                <View className="w-8 h-8 bg-primary rounded-full border-2 border-white items-center justify-center shadow-lg">
                  <Icon name="person-pin-circle" size={20} color="white" />
                </View>
              </View>
            </View>
          </View>

          {/* Compensation */}
          <View className="mt-6 mb-32">
            <Text className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-4 font-display">Compensation</Text>
            <View className="flex-row gap-4">
              <View className="flex-1 gap-2">
                <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-display">Budget / Rate</Text>
                <View className="relative">
                  <Text className="absolute left-4 top-3 text-slate-400 font-bold font-display" style={{ zIndex: 1 }}>$</Text>
                  <TextInput
                    keyboardType="numeric"
                    className="w-full h-12 pl-8 pr-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-display"
                    placeholder="0.00"
                    placeholderTextColor="#94a3b8"
                  />
                </View>
              </View>
              <View className="flex-1 gap-2">
                <Text className="text-sm font-semibold text-slate-700 dark:text-slate-300 font-display">Payment Unit</Text>
                <TouchableOpacity className="w-full h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex-row items-center justify-between">
                  <Text className="text-slate-900 dark:text-slate-100 font-display">per hour</Text>
                  <Icon name="expand-more" size={20} color="#94a3b8" />
                </TouchableOpacity>
              </View>
            </View>
            <View className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg flex-row gap-3">
              <Icon name="info" size={18} color="#3b82f6" />
              <Text className="text-xs text-blue-700 dark:text-blue-300 leading-relaxed flex-1 font-display">Most family drivers in your area are paid between $25-$35 per hour.</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 p-4 bg-background-light/90 dark:bg-background-dark/90 border-t border-slate-200 dark:border-slate-800">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="w-full h-14 bg-primary rounded-2xl items-center justify-center flex-row gap-2 shadow-lg shadow-primary/20"
        >
          <Text className="text-slate-900 font-bold text-lg font-display">Post Job Listing</Text>
          <Icon name="send" size={20} color="#102216" />
        </TouchableOpacity>
        <View className="h-4" />
      </View>
    </SafeAreaView>
  );
};
