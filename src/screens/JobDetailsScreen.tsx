import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

export const JobDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'JobDetails'>>();
  const { jobId } = route.params;

  return (
    <View className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header Image */}
      <View className="relative h-72 w-full">
        <Image
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6t2oTUiSPBUAK9VCW6HNITsVMXbPAVVPfeGKUd7Tx6uhs6ccB2Qvq2-5Cmzvwgyho1rMT5xp8xO4sra8DGRuMR_WV1UNzeiDG31-vkoQeghEvIZRhh-Rq2NMVWVoiGTAiXw6Z_Uy5JO4KvE8EwAFokqPw_n_dvHWYSZ81-0i-rzty7iWNBAAunPiU2yDsmIWZnqIJ-SjBYPvcAjXaZDhLTK6AOFoUS4fik4Sd7ABYzBFcSkHg9E5RRNJ6Ut-Tw6xZZtTKB6m0z0Xi' }}
          className="w-full h-full"
        />
        <View className="absolute inset-0 bg-black/20" />
        <View className="absolute top-0 left-0 right-0 flex-row items-center justify-between p-4 z-10 pt-12">
          <TouchableOpacity onPress={() => navigation.goBack()} className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30">
            <Icon name="arrow-back-ios-new" size={20} color="white" />
          </TouchableOpacity>
          <View className="flex-row gap-2">
            <TouchableOpacity className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <Icon name="share" size={20} color="white" />
            </TouchableOpacity>
            <TouchableOpacity className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <Icon name="favorite" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Content */}
      <View className="relative -mt-8 flex-1 rounded-t-3xl bg-background-light dark:bg-background-dark p-6">
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="mb-6">
            <View className="flex-row items-center gap-2 mb-2">
              <View className="inline-flex flex-row items-center gap-1 rounded-full bg-primary/20 px-2.5 py-0.5">
                <Icon name="verified" size={12} color="#13ec5b" />
                <Text className="text-[10px] font-bold text-slate-900 dark:text-primary font-display">VERIFIED HOUSEHOLD</Text>
              </View>
              <Text className="text-xs text-slate-500 font-medium tracking-wide font-display">• MANHATTAN, NY</Text>
            </View>
            <Text className="text-2xl font-extrabold leading-tight text-slate-900 dark:text-slate-50 font-display">Private Chef for Weekend Event</Text>
            <Text className="mt-1 text-sm text-slate-500 font-display">Posted 2 hours ago • Job ID: #58291</Text>
          </View>

          {/* Stats Grid */}
          <View className="flex-row flex-wrap gap-3 mb-8">
            <View className="flex-1 min-w-[45%] bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-primary/10 items-start justify-center">
              <Icon name="payments" size={20} color="#13ec5b" className="mb-1" />
              <Text className="text-xs font-medium text-slate-500 uppercase tracking-tight mb-1 font-display">Pay Rate</Text>
              <Text className="text-lg font-bold text-slate-900 dark:text-slate-50 font-display">$45 - $60<Text className="text-sm font-normal">/hr</Text></Text>
            </View>
            <View className="flex-1 min-w-[45%] bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-primary/10 items-start justify-center">
              <Icon name="event" size={20} color="#13ec5b" className="mb-1" />
              <Text className="text-xs font-medium text-slate-500 uppercase tracking-tight mb-1 font-display">Date</Text>
              <Text className="text-lg font-bold text-slate-900 dark:text-slate-50 font-display">Oct 12-13</Text>
            </View>
            <View className="flex-1 min-w-[45%] bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-primary/10 items-start justify-center">
              <Icon name="schedule" size={20} color="#13ec5b" className="mb-1" />
              <Text className="text-xs font-medium text-slate-500 uppercase tracking-tight mb-1 font-display">Duration</Text>
              <Text className="text-lg font-bold text-slate-900 dark:text-slate-50 font-display">12 Hours</Text>
            </View>
            <View className="flex-1 min-w-[45%] bg-white dark:bg-slate-800 p-4 rounded-xl shadow-sm border border-primary/10 items-start justify-center">
              <Icon name="near-me" size={20} color="#13ec5b" className="mb-1" />
              <Text className="text-xs font-medium text-slate-500 uppercase tracking-tight mb-1 font-display">Distance</Text>
              <Text className="text-lg font-bold text-slate-900 dark:text-slate-50 font-display">2.4 miles</Text>
            </View>
          </View>

          {/* Description */}
          <View className="mb-8">
            <View className="flex-row items-center gap-2 mb-3">
              <Icon name="subject" size={20} color="#94a3b8" />
              <Text className="text-lg font-bold text-slate-900 dark:text-slate-50 font-display">Job Description</Text>
            </View>
            <Text className="text-slate-600 dark:text-slate-300 leading-relaxed font-display">
              Seeking a professional private chef to manage a high-end weekend birthday event for 12 guests. You will be responsible for creating a 5-course seasonal menu, sourcing fresh local ingredients, and managing kitchen clean-up. The host provides a fully equipped gourmet kitchen with sub-zero appliances.
            </Text>
          </View>

          {/* Required Skills */}
          <View className="mb-8">
            <View className="flex-row items-center gap-2 mb-3">
              <Icon name="psychology" size={20} color="#94a3b8" />
              <Text className="text-lg font-bold text-slate-900 dark:text-slate-50 font-display">Required Skills</Text>
            </View>
            <View className="flex-row flex-wrap gap-2">
              {['Culinary Arts', 'Menu Planning', 'Food Safety', 'Plating'].map((skill) => (
                <View key={skill} className="px-3 py-1.5 rounded-full bg-slate-200 dark:bg-slate-700">
                  <Text className="text-sm font-semibold text-slate-700 dark:text-slate-200 font-display">{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Requirements List */}
          <View className="mb-8">
            <View className="flex-row items-center gap-2 mb-3">
              <Icon name="assignment-turned-in" size={20} color="#94a3b8" />
              <Text className="text-lg font-bold text-slate-900 dark:text-slate-50 font-display">Requirements</Text>
            </View>
            <View className="gap-2">
              {[
                'Must have professional knife set',
                'Chef whites/uniform required',
                'Proof of vaccination or negative test',
              ].map((req) => (
                <View key={req} className="flex-row items-start gap-2">
                  <Icon name="check-circle" size={16} color="#13ec5b" className="mt-0.5" />
                  <Text className="text-sm text-slate-600 dark:text-slate-300 font-display">{req}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Map Preview */}
          <View className="mt-8 mb-24">
            <View className="flex-row items-center justify-between mb-3">
              <View className="flex-row items-center gap-2">
                <Icon name="location-on" size={20} color="#94a3b8" />
                <Text className="text-lg font-bold text-slate-900 dark:text-slate-50 font-display">Job Location</Text>
              </View>
              <Text className="text-xs font-bold text-primary font-display">VIEW MAP</Text>
            </View>
            <View className="h-32 w-full rounded-xl bg-slate-200 dark:bg-slate-700 overflow-hidden relative">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoWoNt2oNyNYIIcwy5xWeRwkjor-hbV-2AU9Ed27AHx53fSYu3yj7hIrMyqrseuA8VILBb0nFgkQt5Exb2_o9tZdkuIv7EOYzzGYbLe7V1gqmpI2109V_LVNjAqPU3ilNu7w4RovKACWMtPCBOlnEVYWPCH0Y8swS1xINtjYLSq7XhghqSLHNzhEsLb4Fh8HsTs3zJZLPP-8U44U3Dk2HLY-4QS8G4NsBnAVrxFx37-uHzf-VgVJaB1b54tSbFLwCZDKA-XP4xugSM' }} className="w-full h-full opacity-60" />
              <View className="absolute inset-0 items-center justify-center">
                <View className="h-10 w-10 bg-primary/20 rounded-full items-center justify-center">
                  <View className="h-4 w-4 bg-primary rounded-full shadow-lg" />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* Footer Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-900/95 p-4 pb-8 flex-row items-center gap-4 border-t border-slate-200 dark:border-slate-800">
        <TouchableOpacity className="size-12 items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700">
          <Icon name="chat-bubble" size={24} color="#64748b" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 h-14 bg-primary rounded-xl items-center justify-center shadow-lg shadow-primary/20">
          <Text className="text-slate-900 font-extrabold text-lg font-display">Apply Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
