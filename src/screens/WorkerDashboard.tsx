import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, TextInput, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const JOBS = [
  {
    id: '1',
    title: 'Executive Head Cook',
    location: 'Downtown',
    rate: '$25-30/hr',
    type: 'Full-Time',
    posted: 'Posted 2d ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlA9eoLBBBG6v5DYOKtlLu6mq-Xpo46IZ209mD34hJx8CrmJuv0ZofHUFgQFctflpn6lJzYDYrCTwBwnY95pKkgywBrl5foH9eMVFgnT8kK0076ZHVcXQ6LPO3RLjMZx8sH8nDluHuX8HiVCDtp-rtl4ZmogLRSgrEcdn6mdSI19wUw0JYTGlrdF1mdOygW7lpu7onT7wi0i8XClrnjD3h2-eRc2VjG9ELf79glRM2MWWYQg9ZwvKLxCocfPo6_WdRZPT2YJACT9uW',
    typeColor: 'bg-primary/10',
    typeTextColor: 'text-primary'
  },
  {
    id: '2',
    title: 'Private Personal Driver',
    location: 'Suburban Heights',
    rate: '$20/hr',
    type: 'Contract',
    posted: 'Posted 5h ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAN77xVsdaPeOdBlnYlRDUHhM8uTx_BASzsH5w7y9pghQNMBrt0SRF6bo6XwpIr2gByLUedps1Gu_X424ZQFgj4jHXkl0pbGd-8vDK0VRUXDwGYo0fU6T73D3MkMsQT5zQuKtmR0GbxAVHrWQxNqBmOLfuef5WOyrpZjy2IVwPLA6E6Bj0cswjuNog1VR8Qy407B3ulY5Ork3dCx_9uEqfFj1aZ5BtcmXc9difZzaZm-wrC1swxXhj62gzg0ghoh9hN7e6kCHZSJuzj',
    typeColor: 'bg-blue-100 dark:bg-blue-900/30',
    typeTextColor: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: '3',
    title: 'Landscape Gardener',
    location: 'City Park Area',
    rate: '$22/hr',
    type: 'Remote',
    posted: 'Posted 1d ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBsoXf-Vr9MNbV41LhTd-Bxhxpp8JVJva6SWb75Es4elQ4PTh6DEvl2IO1nKi5WbV7z5BCuPVLGQVhJD1xfBNI35z6Ut4XZAI7bH2yr3ymNPvqHfisw_h0ln6IGSRAGP8xNB43d4M5ZaaRvRZIGjRJeKsq9HdQ1hpWdFiUPnEuKE5ZRErEWZoN5WVunXhrDzrhScbIYRckna6aaIAXKGjDUBpONQc7zt4P1kzSS1FR14sgGwbzepxULsQ-DR3L-31qGdDWlwAkEkUnL',
    typeColor: 'bg-primary/10',
    typeTextColor: 'text-primary'
  },
  {
    id: '4',
    title: 'Artisan Baker Assistant',
    location: 'East Side',
    rate: '$18-22/hr',
    type: 'Part-Time',
    posted: 'Posted 3d ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCZ2LXJ5DL-i-9FJPo7YzJBdO8e0TAoxIJiV73c6rc3p4Okr-bNVXe6sAt7t55WMJ_nKzlFiPSeAeu-0-UsEVkCc4-UKfyQQOra7_QQ7dbeQkHciZuUxDA94e2jOUbYXVDOSK55yUGVU0C3zzTyEiNB-7UNl5fCsrbJ6PURPB_PPwJuyLqcovW5TMlSkn4wUfraZuZAi7OlXX6wgrcG0oItZZHOkxQQaoofZDPiB_KviKcQMI83VhJyoF5d9UmA2EjkRt7r78J7C-u',
    typeColor: 'bg-primary/10',
    typeTextColor: 'text-primary'
  },
  {
    id: '5',
    title: 'Long Haul Driver',
    location: 'Interstate Route',
    rate: '$35/hr',
    type: 'Full-Time',
    posted: 'Posted 12h ago',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCK0641LzAsKeV_Rg3JZ9ON__j-nBHVy-Q7cBW5hZGtgXNn7Ug93ufms5xjCc6WzPvmOyrZD2MngqGe_dSqLkb6Pi6IQZv7HV7VIGaJ2UEd-3Sredx0xct0tKuZSMaunjGXsOBZ2mBH8cbph2uzGCCZEQrRKJhxd2A1SID4cl3oceShtRyer8Wf2Q90y_FcrZ4m574byDGkiPHau6LIPvi_USCa7xCRj2WOxdeRXGGY-YxEfCJBBOvu3oGuLDibRGBSYYXZ0gQI1c38',
    typeColor: 'bg-blue-100 dark:bg-blue-900/30',
    typeTextColor: 'text-blue-600 dark:text-blue-400'
  }
];

export const WorkerDashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="h-16 border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-6 flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="bg-primary p-1.5 rounded-lg"><Icon name="hub" size={20} color="#102216" /></View>
            <Text className="text-slate-900 dark:text-slate-100 text-xl font-bold font-display">WorkConnect</Text>
          </View>
          <View className="flex-row items-center gap-4">
            <TouchableOpacity className="p-2 relative">
              <Icon name="notifications" size={24} color="#64748b" />
              <View className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full border-2 border-white dark:border-slate-900" />
            </TouchableOpacity>
            <View className="w-8 h-8 rounded-full bg-primary/20 border border-primary/40 items-center justify-center">
              <Text className="text-primary font-bold text-xs font-display">AJ</Text>
            </View>
          </View>
        </View>

        {/* Dashboard Content */}
        <View className="p-6">
          <View className="mb-8">
            <Text className="text-3xl font-black text-slate-900 dark:text-slate-100 tracking-tight font-display">Job Seeker Dashboard</Text>
            <Text className="text-slate-500 dark:text-slate-400 mt-2 font-display">Find your next opportunity in service and labor. Hand-picked for your skills.</Text>
          </View>

          {/* Search */}
          <View className="relative mb-6">
            <View className="absolute left-3 top-3.5 z-10">
              <Icon name="search" size={20} color="#94a3b8" />
            </View>
            <TextInput
              className="w-full bg-slate-100 dark:bg-slate-800 border-none rounded-xl pl-10 pr-4 py-3 text-sm text-slate-900 dark:text-slate-100 font-display"
              placeholder="Search roles, locations or keywords..."
              placeholderTextColor="#94a3b8"
            />
          </View>

          {/* Filters */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="mb-8">
            <TouchableOpacity className="px-5 py-2 rounded-full bg-slate-900 dark:bg-slate-100 mr-2">
              <Text className="text-white dark:text-slate-900 font-bold text-sm font-display">All Jobs</Text>
            </TouchableOpacity>
            {['Cooks', 'Drivers', 'Gardeners'].map((filter) => (
              <TouchableOpacity key={filter} className="px-5 py-2 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mr-2 flex-row items-center gap-1">
                <Text className="text-slate-600 dark:text-slate-300 font-medium text-sm font-display">{filter}</Text>
                <Icon name="expand-more" size={16} color="#64748b" />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Job Listings Grid (using column-like cards for mobile) */}
          <View className="gap-6">
            {JOBS.map((job) => (
              <TouchableOpacity
                key={job.id}
                onPress={() => navigation.navigate('JobDetails', { jobId: job.id })}
                className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm"
              >
                <Image source={{ uri: job.img }} className="h-48 w-full" resizeMode="cover" />
                <View className="p-5">
                  <View className="flex-row justify-between items-start mb-3">
                    <View className="flex-1">
                      <View className={`inline-flex px-2 py-1 rounded self-start ${job.typeColor}`}>
                        <Text className={`text-[10px] font-bold uppercase tracking-wider font-display ${job.typeTextColor}`}>{job.type}</Text>
                      </View>
                      <Text className="text-lg font-bold mt-1 text-slate-900 dark:text-slate-100 font-display">{job.title}</Text>
                    </View>
                    <Text className="text-primary font-black text-lg font-display">{job.rate}</Text>
                  </View>
                  <View className="flex-row items-center gap-4 mb-6">
                    <View className="flex-row items-center gap-1">
                      <Icon name="location-on" size={16} color="#94a3b8" />
                      <Text className="text-sm text-slate-500 dark:text-slate-400 font-display">{job.location}</Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Icon name="schedule" size={16} color="#94a3b8" />
                      <Text className="text-sm text-slate-500 dark:text-slate-400 font-display">{job.posted}</Text>
                    </View>
                  </View>
                  <View className="w-full py-2.5 rounded-lg border-2 border-slate-100 dark:border-slate-800 items-center justify-center flex-row gap-2">
                    <Text className="text-slate-900 dark:text-slate-100 font-bold font-display">View Details</Text>
                    <Icon name="arrow-forward" size={16} color="#64748b" />
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Pagination Placeholder */}
          <View className="mt-12 mb-24 flex-row justify-center items-center gap-2">
            <TouchableOpacity className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 items-center justify-center">
              <Icon name="chevron-left" size={24} color="#64748b" />
            </TouchableOpacity>
            <View className="w-10 h-10 rounded-lg bg-primary items-center justify-center">
              <Text className="text-slate-900 font-bold font-display">1</Text>
            </View>
            <TouchableOpacity className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 items-center justify-center">
              <Text className="text-slate-600 dark:text-slate-400 font-medium font-display">2</Text>
            </TouchableOpacity>
            <TouchableOpacity className="w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-800 items-center justify-center">
              <Icon name="chevron-right" size={24} color="#64748b" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
