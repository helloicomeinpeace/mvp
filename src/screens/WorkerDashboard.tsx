import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JOBS = [
  { id: '1', title: 'Private Family Cook', location: 'Greenwich Village, NY', rate: '$35/hr', type: 'Part-time', dist: '1.2 miles away', posted: '2h ago', icon: 'restaurant', color: 'bg-primary/10' },
  { id: '2', title: 'Executive Personal Driver', location: 'Upper East Side, NY', rate: '$28/hr', type: 'Full-time', dist: '3.5 miles away', posted: '5h ago', icon: 'directions-car', color: 'bg-blue-500/10' },
  { id: '3', title: 'Landscape Gardener', location: 'Brooklyn, NY', rate: '$22/hr', type: 'Contract', dist: '0.8 miles away', posted: '1d ago', icon: 'local-florist', color: 'bg-orange-500/10' },
];

export const WorkerDashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="pt-6 pb-2 px-4 flex-row items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <View className="flex-row items-center gap-3">
            <View className="size-10 rounded-full bg-primary/20 items-center justify-center overflow-hidden border border-primary/30">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCRu8C3WWCmiUq8-cVd4FNBBK4eBhWjhyQAq7x5UngByPowDtLM04zB5kLmEcJYDlZkOE618YEsX_6lRe6YCsfYptPaaUYV3gZpMAyd4l2zatRFn29r7RhTfnVJDuJjHquXO8BEIRbl5yw0DeYO_V3RyATm1kR6zMSPYI-tInsmt57G3jyZEuysKrqdzMA-ACS15no2BJyaBnn6E3NjO2bQro9YUROCJh-o7pPA00TWow15ePsXZ6gXG4SRwhB2Lpq2EA3YGBSRE7Gl' }} className="w-full h-full" />
            </View>
            <View>
              <Text className="text-xs text-slate-500 dark:text-slate-400 font-medium font-display">Welcome back,</Text>
              <Text className="text-lg font-bold leading-none text-primary font-display">Alex Rivera</Text>
            </View>
          </View>
          <TouchableOpacity className="relative p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800">
            <Icon name="notifications" size={24} color="#64748b" />
            <View className="absolute top-2 right-2 size-2 rounded-full bg-primary" />
          </TouchableOpacity>
        </View>

        {/* Search & Filter */}
        <View className="px-4 py-4">
          <View className="flex-row items-center bg-white dark:bg-slate-900 rounded-xl px-4 py-3 border border-slate-200 dark:border-slate-800 shadow-sm">
            <Icon name="search" size={24} color="#94a3b8" />
            <TextInput
              className="flex-1 ml-2 text-slate-900 dark:text-slate-100 font-display"
              placeholder="Search jobs (e.g. Driver, Cook)"
              placeholderTextColor="#94a3b8"
            />
            <Icon name="tune" size={24} color="#13ec5b" />
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mt-4 pb-2">
            <TouchableOpacity className="px-5 py-2 rounded-full bg-primary mr-2"><Text className="text-slate-900 text-sm font-bold font-display">All</Text></TouchableOpacity>
            {['Cook', 'Driver', 'Gardener', 'Housekeeper'].map((cat) => (
              <TouchableOpacity key={cat} className="px-5 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 mr-2">
                <Text className="text-slate-600 dark:text-slate-300 text-sm font-semibold font-display">{cat}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Job Feed */}
        <View className="flex-1 px-4 py-4 gap-4 mb-24">
          <View className="flex-row items-center justify-between">
            <Text className="text-md font-bold text-slate-900 dark:text-slate-100 font-display">Nearby Jobs (24)</Text>
            <TouchableOpacity><Text className="text-primary text-xs font-bold uppercase tracking-wider font-display">Sort by Distance</Text></TouchableOpacity>
          </View>

          {JOBS.map((job) => (
            <View key={job.id} className="bg-white dark:bg-slate-900 rounded-xl p-4 border border-slate-100 dark:border-slate-800 shadow-sm">
              <View className="flex-row justify-between items-start mb-3">
                <View className="flex-row gap-3">
                  <View className={`size-12 rounded-lg ${job.color} items-center justify-center`}>
                    <Icon name={job.icon} size={24} color={job.color === 'bg-primary/10' ? '#13ec5b' : job.color === 'bg-blue-500/10' ? '#3b82f6' : '#f97316'} />
                  </View>
                  <View>
                    <Text className="font-bold text-slate-900 dark:text-white leading-tight font-display">{job.title}</Text>
                    <Text className="text-xs text-slate-500 dark:text-slate-400 font-display">{job.location}</Text>
                  </View>
                </View>
                <View className="items-end">
                  <Text className="text-lg font-extrabold text-primary leading-none font-display">{job.rate}<Text className="text-[10px] text-slate-400 font-normal">/hr</Text></Text>
                  <View className="bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded mt-1"><Text className="text-[10px] text-slate-500 font-display">{job.type}</Text></View>
                </View>
              </View>

              <View className="flex-row items-center gap-4 mb-4">
                <View className="flex-row items-center gap-1">
                  <Icon name="location-on" size={14} color="#64748b" />
                  <Text className="text-xs text-slate-600 dark:text-slate-400 font-display">{job.dist}</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Icon name="schedule" size={14} color="#64748b" />
                  <Text className="text-xs text-slate-600 dark:text-slate-400 font-display">Posted {job.posted}</Text>
                </View>
              </View>

              <View className="flex-row gap-2">
                <TouchableOpacity
                  onPress={() => navigation.navigate('JobDetails', { jobId: job.id })}
                  className="flex-1 bg-primary py-2.5 rounded-lg items-center justify-center"
                >
                  <Text className="text-slate-900 font-bold text-sm font-display">View Details</Text>
                </TouchableOpacity>
                <TouchableOpacity className="p-2.5 border border-slate-200 dark:border-slate-700 rounded-lg items-center justify-center">
                  <Icon name="favorite-border" size={20} color="#94a3b8" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Navigation Footer */}
      <View className="fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl border-t border-slate-200 dark:border-slate-800 pb-8 pt-3 px-6 flex-row justify-between items-center z-50">
        <TouchableOpacity className="items-center gap-1">
          <Icon name="home" size={24} color="#13ec5b" />
          <Text className="text-[10px] font-bold text-primary">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-1">
          <Icon name="forum" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-medium text-slate-400">Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-1">
          <Icon name="work" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-medium text-slate-400">My Jobs</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-1">
          <Icon name="person" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-medium text-slate-400">Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
