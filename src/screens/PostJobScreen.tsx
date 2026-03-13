import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const PostJobScreen = () => {
  const navigation = useNavigation();
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-white/80 dark:bg-background-dark/80 border-b border-primary/10">
        <View className="flex-row items-center gap-3">
          <View className="size-10 bg-primary rounded-lg items-center justify-center">
            <Icon name="hub" size={20} color="#102216" />
          </View>
          <Text className="text-slate-900 dark:text-slate-100 text-xl font-bold font-display">WorkConnect</Text>
        </View>
        <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
          <Icon name="notifications" size={20} color="#102216" className="dark:text-slate-100" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6 py-8" showsVerticalScrollIndicator={false}>
        <View className="mb-10">
          <Text className="text-4xl font-black tracking-tight text-slate-900 dark:text-slate-100 mb-2 font-display">Post a New Job</Text>
          <Text className="text-slate-600 dark:text-slate-400 font-display">Provide the details of your project to get quotes from top-rated professionals in your area.</Text>
        </View>

        {/* Step Indicators */}
        <View className="flex-row gap-2 mb-8">
          {[1, 2, 3, 4].map((step) => (
            <TouchableOpacity
              key={step}
              onPress={() => setCurrentStep(step)}
              className={`flex-1 h-12 rounded-lg flex-row items-center justify-center gap-2 ${currentStep === step ? 'bg-primary' : 'bg-slate-100 dark:bg-slate-800 opacity-60'}`}
            >
              <View className={`size-6 rounded-full items-center justify-center ${currentStep === step ? 'bg-white/50' : 'bg-slate-200 dark:bg-slate-700'}`}>
                <Text className="text-xs font-bold font-display">{step}</Text>
              </View>
              {currentStep === step && <Text className="text-[10px] font-bold text-slate-900 font-display">Step {step}</Text>}
            </TouchableOpacity>
          ))}
        </View>

        {/* Form Content Area */}
        <View className="bg-white dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm mb-32">
          {currentStep === 1 && (
            <View className="gap-6">
              <View className="flex-row items-center gap-2 text-primary border-b border-primary/10 pb-4">
                <Icon name="assignment" size={24} color="#13ec5b" />
                <Text className="text-xl font-bold text-slate-900 dark:text-white font-display">Step 1: Job Details</Text>
              </View>

              <View className="gap-4">
                <View>
                  <Text className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 font-display">Job Title</Text>
                  <TextInput
                    className="w-full h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800 text-slate-900 dark:text-white font-display"
                    placeholder="e.g. Kitchen Faucet Replacement"
                    placeholderTextColor="#94a3b8"
                  />
                </View>

                <View>
                  <Text className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 font-display">Category</Text>
                  <TouchableOpacity className="h-12 px-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800 flex-row items-center justify-between">
                    <Text className="text-slate-400 font-display">Plumbing</Text>
                    <Icon name="expand-more" size={20} color="#64748b" />
                  </TouchableOpacity>
                </View>

                <View>
                  <Text className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 font-display">Description</Text>
                  <TextInput
                    multiline
                    numberOfLines={4}
                    className="w-full p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800 text-slate-900 dark:text-white font-display min-h-[100px]"
                    placeholder="Describe what needs to be done..."
                    placeholderTextColor="#94a3b8"
                    textAlignVertical="top"
                  />
                </View>
              </View>
            </View>
          )}

          {currentStep === 2 && (
            <View className="gap-6">
              <View className="flex-row items-center gap-2 text-primary border-b border-primary/10 pb-4">
                <Icon name="location-on" size={24} color="#13ec5b" />
                <Text className="text-xl font-bold text-slate-900 dark:text-white font-display">Step 2: Logistics</Text>
              </View>

              <View className="gap-4">
                <View>
                  <Text className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 font-display">Location</Text>
                  <View className="relative">
                    <Icon name="map" size={20} color="#94a3b8" className="absolute left-3 top-3.5" style={{ zIndex: 1 }} />
                    <TextInput
                      className="w-full h-12 pl-11 pr-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800 text-slate-900 dark:white font-display"
                      placeholder="Enter your full address"
                      placeholderTextColor="#94a3b8"
                    />
                  </View>
                </View>

                <View className="h-48 rounded-xl bg-slate-200 dark:bg-slate-800 overflow-hidden">
                  <Image
                    source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDI22EH3vPo3Yt7_qF-y-fzIbNVQnVqqibxjtZyGQJeQ0BdjGDFsJhd7sCC4ynaAUXaNpFCb8MqzGHRC8581tZ3QfNW60dQNHA9ErgFJJJpTtuFdfty71lge3nLGI938lw0QRqIahdp465meyKuumD_e-haPrjlMtsHW6btxtNGskuB3-eD7G4NR_V81TXqAy1pGArvGNlcx0Ch42QJELgm9Qx3Ix7QPHwu_uXQQKuzVMth9yanPRLQCFcFK7ELvsxrNlrv4LwgCnXp' }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>
              </View>
            </View>
          )}

          {currentStep === 3 && (
            <View className="gap-6">
              <View className="flex-row items-center gap-2 text-primary border-b border-primary/10 pb-4">
                <Icon name="payments" size={24} color="#13ec5b" />
                <Text className="text-xl font-bold text-slate-900 dark:text-white font-display">Step 3: Compensation</Text>
              </View>

              <View className="gap-6">
                <View>
                  <Text className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-300 font-display">Budget Range</Text>
                  <View className="flex-row items-center gap-3">
                    <View className="relative flex-1">
                      <Text className="absolute left-3 top-3.5 text-slate-400 font-display" style={{ zIndex: 1 }}>$</Text>
                      <TextInput
                        keyboardType="numeric"
                        className="w-full h-12 pl-8 pr-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800 text-slate-900 dark:text-white font-display"
                        placeholder="Min"
                        placeholderTextColor="#94a3b8"
                      />
                    </View>
                    <Text className="text-slate-400 font-display">to</Text>
                    <View className="relative flex-1">
                      <Text className="absolute left-3 top-3.5 text-slate-400 font-display" style={{ zIndex: 1 }}>$</Text>
                      <TextInput
                        keyboardType="numeric"
                        className="w-full h-12 pl-8 pr-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800 text-slate-900 dark:text-white font-display"
                        placeholder="Max"
                        placeholderTextColor="#94a3b8"
                      />
                    </View>
                  </View>
                </View>

                <View>
                  <Text className="text-sm font-semibold mb-3 text-slate-700 dark:text-slate-300 font-display">Payment Method Preference</Text>
                  <View className="flex-row gap-4">
                    <TouchableOpacity className="flex-1 items-center justify-center p-4 rounded-lg border border-primary bg-primary/10">
                      <Text className="text-sm font-bold text-slate-900 dark:text-white font-display">Flat Fee</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="flex-1 items-center justify-center p-4 rounded-lg border border-slate-200 dark:border-slate-800 bg-background-light dark:bg-slate-800">
                      <Text className="text-sm font-medium text-slate-600 dark:text-slate-400 font-display">Hourly Rate</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          )}

          {currentStep === 4 && (
            <View className="gap-6">
              <View className="flex-row items-center gap-2 text-primary border-b border-primary/10 pb-4">
                <Icon name="visibility" size={24} color="#13ec5b" />
                <Text className="text-xl font-bold text-slate-900 dark:text-white font-display">Step 4: Review</Text>
              </View>

              <View className="gap-4">
                <View className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <Text className="text-xs font-bold text-slate-400 uppercase mb-2 font-display">Job Summary</Text>
                  <Text className="text-lg font-bold text-slate-900 dark:text-white font-display">Kitchen Faucet Replacement</Text>
                  <Text className="text-sm text-slate-500 mt-1 font-display">Plumbing • Urgent</Text>
                </View>

                <View className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <Text className="text-xs font-bold text-slate-400 uppercase mb-2 font-display">Compensation</Text>
                  <Text className="text-lg font-bold text-primary font-display">$150 - $200 (Flat Fee)</Text>
                </View>

                <View className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700">
                  <Text className="text-xs font-bold text-slate-400 uppercase mb-2 font-display">Location</Text>
                  <Text className="text-sm text-slate-700 dark:text-slate-300 font-display">123 West Side Ave, New York, NY</Text>
                </View>
              </View>
            </View>
          )}

          {/* Action Buttons */}
          <View className="flex-row items-center justify-between pt-10 border-t border-slate-200 dark:border-slate-800 mt-8">
            <TouchableOpacity onPress={() => navigation.goBack()} className="px-4 py-3 rounded-xl">
              <Text className="font-bold text-slate-500 font-display">Save as Draft</Text>
            </TouchableOpacity>
            <View className="flex-row gap-3">
              <TouchableOpacity
                onPress={() => setCurrentStep(prev => Math.max(1, prev - 1))}
                className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800"
              >
                <Text className="font-bold text-slate-700 dark:text-slate-300 font-display">Back</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => currentStep < 4 ? setCurrentStep(currentStep + 1) : navigation.goBack()}
                className="px-8 py-3 rounded-xl bg-primary flex-row items-center gap-2 shadow-lg shadow-primary/20"
              >
                <Text className="font-bold text-slate-900 font-display">{currentStep === 4 ? 'Post & Pay' : 'Continue'}</Text>
                <Icon name="arrow-forward" size={18} color="#102216" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
