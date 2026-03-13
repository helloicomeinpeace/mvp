import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CATEGORIES = [
  { id: 'all', name: 'All Services', icon: 'grid-view', color: 'bg-primary', textColor: 'text-slate-900', iconColor: '#102216' },
  { id: 'cooks', name: 'Cooks', icon: 'restaurant', color: 'bg-white dark:bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', iconColor: '#13ec5b' },
  { id: 'drivers', name: 'Drivers', icon: 'directions-car', color: 'bg-white dark:bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', iconColor: '#13ec5b' },
  { id: 'gardeners', name: 'Gardeners', icon: 'local-florist', color: 'bg-white dark:bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', iconColor: '#13ec5b' },
  { id: 'cleaners', name: 'Cleaners', icon: 'cleaning-services', color: 'bg-white dark:bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', iconColor: '#13ec5b' },
  { id: 'nannies', name: 'Nannies', icon: 'child-care', color: 'bg-white dark:bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', iconColor: '#13ec5b' },
  { id: 'plumbers', name: 'Plumbers', icon: 'plumbing', color: 'bg-white dark:bg-slate-800', textColor: 'text-slate-700 dark:text-slate-300', iconColor: '#13ec5b' },
];

const WORKERS = [
  {
    id: '1',
    name: 'Marco Rossi',
    title: 'Professional Chef',
    exp: '8 yrs exp.',
    rating: 4.9,
    rate: '$45',
    tags: ['Italian', 'Pastry', 'Vegan'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjqubMmTH1yeYivfTnHDIjCNrMbhYyefKixT54oyya5PFGBHIz0JxOS4wX9pLjlJ0igB7K9x2VBU7nVMENJQCcecmBvdo0XxIkuEd9YBvIceyYl9XLrSDwGXjujWTi8Com8-h6Bj5TuLzhByc3EpkzYDEkAmaCcWVSal3rj-X72nii9ZINNS6PG3ZIdGQnu7cPCi882z4DnTA4mtTZEz76w7F4CK3U61qK9LUpM6oh-ECmdTjfQthl1_UNOC1zLBdihe8Yg0yLj0U-'
  },
  {
    id: '2',
    name: 'Elena Gilbert',
    title: 'Garden Specialist',
    exp: '5 yrs exp.',
    rating: 4.7,
    rate: '$32',
    tags: ['Landscaping', 'Pruning'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApIfy565dozDNhVumEWT8iscrisk7qZJIse6bij2dw-tJNDWexmQ43a0MyTBNvjPeisjoja2t_MsHring-WAHAXPaIUcauTwdzjIKBTWKcqvprjzHHZuBe-mJk7zVtKWZz4BQ6wr22cwATl2slGb7lpRfnc4QyJZwVHHSFR85zmkwDj2NylhlvflsUjVKYk_UXCsMESKqdGkCBTP5zv3qtBbiOCHLpFUs2w4xygLd_I5CHEotsI85kLru0S6ycOg4xawQQRyTYxIJW'
  },
  {
    id: '3',
    name: 'David Chen',
    title: 'Certified Plumber',
    exp: '12 yrs exp.',
    rating: 5.0,
    rate: '$65',
    tags: ['Emergency', 'Installation'],
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDcQF3YJh3Pydi84hHxc67fRE-3oz81G83WT4i0OpJi-clND0KzAlmFuzSDjWqQgxbdXhGeYPmBXbzfncBXI9TN_ThQeofNZ2yf_G4fKqN14kmfNhsZ9RyETagT-atH5ArKWh-qn3IKBfIGpKLzIiDEa2Pni8-aXtBt-l_RezfRqzzr7kvPurzXj2sYhCi-rvkyeAhVrBC1ajiK2SyyuLIhYY_3bz6XfuyXqRLQNVssppL3C7SDmqB4clbmkMM9x5o0fKpKELhuPWrg'
  },
];

export const EmployerDashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
          <View className="flex-row items-center gap-3">
            <View className="size-10 bg-primary rounded-lg items-center justify-center">
              <Icon name="hub" size={20} color="#102216" />
            </View>
            <Text className="text-slate-900 dark:text-white text-lg font-bold tracking-tight font-display">WorkConnect</Text>
          </View>
          <View className="flex-row gap-3">
            <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              <Icon name="notifications" size={20} color="#64748b" />
            </TouchableOpacity>
            <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
              <Icon name="settings" size={20} color="#64748b" />
            </TouchableOpacity>
            <View className="size-10 rounded-full border-2 border-primary overflow-hidden">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXYWKdI6CJZlprdvUFcQVvoXYhY-7dtknqIu9dZmucyAUqJWvxlIFDYZ5VLXOQ0ShjRDHlyokpcsGwBvMKmGbwNgdtmBSRTTBexDVAyhXnePhBw8hO4jNTGTIPOGKyCB9eSoeZeUe2zEWWDN6sKqIddp1CKOlBpE6lxEeKDRXDkqh9TnB4e_reKg2PqpVQ_Vx64ljv35T1y4Pj_jGRoEmdO4SlQWw4V-xqk2LBxniaHEQPG9m4hlNHxXWZR1uQZ1DHijSWU_0LjdqW' }} className="w-full h-full" />
            </View>
          </View>
        </View>

        {/* Welcome Section */}
        <View className="px-6 pt-8 pb-4">
          <Text className="text-slate-900 dark:text-white text-3xl font-extrabold tracking-tight font-display">Welcome back, Sarah</Text>
          <Text className="text-slate-500 dark:text-slate-400 text-lg font-display">What help do you need with your home today?</Text>
        </View>

        {/* Search Bar */}
        <View className="px-6 py-4">
          <View className="flex-row items-center bg-slate-100 dark:bg-slate-800 rounded-xl px-4 py-3">
            <Icon name="search" size={20} color="#94a3b8" />
            <TextInput
              className="flex-1 ml-2 text-base text-slate-900 dark:text-slate-100 font-display"
              placeholder="Search for any service..."
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>

        {/* Categories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 12, gap: 12 }}>
          {CATEGORIES.map((cat) => (
            <TouchableOpacity
              key={cat.id}
              className={`flex-row h-11 items-center justify-center px-6 rounded-xl border border-slate-200 dark:border-slate-700 ${cat.color}`}
            >
              <Icon name={cat.icon} size={20} color={cat.iconColor} />
              <Text className={`ml-2 text-sm font-bold font-display ${cat.textColor}`}>{cat.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Recommended Professionals */}
        <View className="px-6 pt-6 pb-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-slate-900 dark:text-white text-xl font-bold font-display">Recommended Professionals</Text>
            <TouchableOpacity><Text className="text-primary text-sm font-bold font-display">View all</Text></TouchableOpacity>
          </View>

          <View className="gap-6">
            {WORKERS.map((worker) => (
              <View key={worker.id} className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
                <View className="relative h-48 w-full">
                  <Image source={{ uri: worker.img }} className="w-full h-full" resizeMode="cover" />
                  <View className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-lg px-2 py-1 flex-row items-center gap-1">
                    <Icon name="star" size={14} color="#13ec5b" />
                    <Text className="text-xs font-bold text-slate-900 dark:text-white font-display">{worker.rating}</Text>
                  </View>
                </View>
                <View className="p-5">
                  <View className="flex-row justify-between items-start mb-3">
                    <View>
                      <Text className="text-slate-900 dark:text-white font-bold text-lg font-display">{worker.name}</Text>
                      <Text className="text-slate-500 text-sm font-display">{worker.title} • {worker.exp}</Text>
                    </View>
                    <View className="items-end">
                      <Text className="text-primary font-extrabold text-lg font-display">{worker.rate}</Text>
                      <Text className="text-slate-400 text-xs font-display">per hour</Text>
                    </View>
                  </View>
                  <View className="flex-row flex-wrap gap-2 mb-4">
                    {worker.tags.map(tag => (
                      <View key={tag} className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">
                        <Text className="text-[10px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 font-display">{tag}</Text>
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('WorkerProfile', { workerId: worker.id })}
                    className="w-full py-3 bg-primary/10 border border-primary/20 rounded-xl items-center justify-center"
                  >
                    <Text className="text-primary font-bold font-display">Book Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Pro Banner */}
        <View className="mx-6 mt-8 mb-32 p-6 rounded-2xl bg-primary/10 border border-primary/20 flex-row items-center gap-4">
          <View className="flex-1">
            <Text className="text-xl font-bold text-slate-900 dark:text-white font-display">Want to become a Pro?</Text>
            <Text className="text-slate-600 dark:text-slate-400 text-sm mt-1 mb-4 font-display">Join our network of elite professionals and start earning today.</Text>
            <TouchableOpacity className="bg-slate-900 dark:bg-primary px-6 py-2.5 rounded-xl self-start">
              <Text className="text-white dark:text-slate-900 font-bold font-display">Get Started</Text>
            </TouchableOpacity>
          </View>
          <View className="w-1/3 aspect-square rounded-xl overflow-hidden">
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5b6QLZj8siSKhmVZn9DVqgmiyGSAJuZCpF4xFyIZ7bi14houeys_Pj7b40lmKc0AwUvNwQiApV76T-bJ2Njvs3BQms8Mba6Lf4-0683jFpsnjRdzIACPQvHjRbGD3B33B1bps5XGJJf3oQggJWV4whWVzNf37Kx75ALGryVJh1fW-ItI1YBfgZWdZxLhevYFSW0c6CbM--DKOVU6H3FJrugtwrptVQsSUUbcW4ysFyqgtkvp9dM_se5_7279NT97ldAB0Y76E5uPL' }} className="w-full h-full" />
          </View>
        </View>
      </ScrollView>

      {/* Post a Job Floating Button */}
      <View className="absolute bottom-6 right-6">
        <TouchableOpacity
          onPress={() => navigation.navigate('PostJob')}
          className="bg-primary size-14 rounded-full items-center justify-center shadow-lg shadow-primary/40"
        >
          <Icon name="add" size={30} color="#102216" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
