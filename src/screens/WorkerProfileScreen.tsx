import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const SKILLS = ['Landscape Design', 'Organic Gardening', 'Irrigation Systems', 'Hedge Trimming', 'Pest Management', 'Tree Pruning'];

const STATS = [
  { label: 'Experience', value: '8+ Yrs' },
  { label: 'Jobs', value: '450+' },
  { label: 'Repeat', value: '92%' },
];

const REVIEWS = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    date: '2 days ago',
    rating: 5,
    comment: 'Alex did an incredible job with our overgrown backyard. He was punctual, professional, and very knowledgeable about the plants. Highly recommend!',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHzmzEOItGtHaVpDrVOmiQvLLzV2VR4x8XimoZCBZkyE6YeUajX1FovkQkwelIO5PDesiz_069dSQMKgmfX6Q_mdFTWjqIMCS2-3Ev3F9o4Qhy-4aOUmTi15lsefZHqpXdag_tFdx4VlbFKSoIU5eMf5m-VQbiKRAZqt3ZjNkmscv7BjBoZiGyyzvO8lCOgfyeCBZeIb-nSJYIL1PvXkY9ZPV9TpuhnBJSsuKTVRT1i1K6JpYhoOUVmNDwzvGcFWzfVtKCyh3UnLFj'
  },
  {
    id: '2',
    name: 'Michael Chen',
    date: '1 week ago',
    rating: 4,
    comment: 'Great pruning work on our fruit trees. He really knows his stuff. Will definitely hire again for spring planting.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBNiTfkgNN-LXedFecrI_0e7beaOh6whhYtaHpQiCYUkRWzZdi61td8qB5DrZnya5LytuQtgcB-6JTOIe7zpG1qo3nKxEBsg8j2V5B4qq-GnvZyrD5NPSalmeqA8kKonBRFNx4F2Q1NZnVpb8JvewHad8CU4oX_CWPYnhs3wQD_Xwc1qDKMe62cNio7Zq5YI-q_FZk1RoytInvM1zSTLl3XrBjXqvC74E786SksRSNKFkDTIMRp19FjtIvwOHr32xfMYVnt8-VaVOyK'
  }
];

export const WorkerProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'WorkerProfile'>>();
  const { workerId } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 px-4 py-3 flex-row items-center justify-between border-b border-primary/10">
          <TouchableOpacity onPress={() => navigation.goBack()} className="p-2 hover:bg-primary/10 rounded-full">
            <Icon name="arrow-back-ios-new" size={20} color="#102216" className="dark:text-slate-100" />
          </TouchableOpacity>
          <Text className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 font-display">Professional Profile</Text>
          <TouchableOpacity className="p-2 hover:bg-primary/10 rounded-full">
            <Icon name="ios-share" size={20} color="#102216" className="dark:text-slate-100" />
          </TouchableOpacity>
        </View>

        {/* Hero Section */}
        <View className="items-center pt-8 pb-6 px-4">
          <View className="relative">
            <View className="size-32 rounded-full border-4 border-primary bg-slate-200 items-center justify-center overflow-hidden">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAqlJusvMSnei7947kAUIEauogceJVFL44WxQ3r8bb5l0iimXM7a1-lolQYXKxsZtQoI-gQ3ivXdBKGljV40QVUGKRcM4MMbnxmapSM0A4f6KWvyeOVcFZCPuQgUPNmowdjo5z8Fyzkcv1nru2RknYyO9FRUOP2VOj7ALasobE9lMuuLXYV2PQFyIfK2qW1P4j85hl0Z1W5IINMb01zDGEjxdMWquLD8choarq_jgyI10F4rKR2MAOeq9nXwqRZLM1i4-2wICD50-sT' }} className="w-full h-full" />
            </View>
            <View className="absolute bottom-1 right-1 bg-primary p-1 rounded-full border-2 border-background-light">
              <Icon name="verified" size={14} color="#102216" />
            </View>
          </View>

          <View className="mt-4 items-center">
            <Text className="text-2xl font-bold text-slate-900 dark:text-slate-100 font-display">Alex Rivers</Text>
            <Text className="text-primary font-semibold text-center font-display">Master Gardener & Landscaper</Text>
            <View className="flex-row items-center gap-2 mt-1">
              <View className="flex-row items-center gap-1">
                <Icon name="star" size={14} color="#f59e0b" />
                <Text className="font-bold text-slate-900 dark:text-slate-100 font-display">4.9</Text>
              </View>
              <Text className="text-slate-400 font-display">•</Text>
              <Text className="text-slate-600 dark:text-slate-400 text-sm font-display">124 Reviews</Text>
              <Text className="text-slate-400 font-display">•</Text>
              <View className="flex-row items-center gap-0.5">
                <Icon name="location-on" size={14} color="#64748b" />
                <Text className="text-slate-600 dark:text-slate-400 text-sm font-display">Brooklyn, NY</Text>
              </View>
            </View>
          </View>

          {/* Quick Stats */}
          <View className="flex-row w-full mt-6 bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-primary/5">
            {STATS.map((stat, i) => (
              <View key={stat.label} className={`flex-1 items-center ${i < STATS.length - 1 ? 'border-r border-slate-100 dark:border-slate-800' : ''}`}>
                <Text className="text-xs text-slate-500 uppercase font-bold tracking-wider font-display">{stat.label}</Text>
                <Text className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">{stat.value}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* About Section */}
        <View className="px-4 py-4">
          <Text className="text-lg font-bold mb-2 text-slate-900 dark:text-slate-100 font-display">About</Text>
          <Text className="text-slate-700 dark:text-slate-300 leading-relaxed font-display">
            Passionate gardener specializing in residential landscaping, organic vegetable patches, and precision hedge trimming. I focus on creating sustainable, lush sanctuaries that homeowners can enjoy year-round. <Text className="text-primary font-bold">Read more...</Text>
          </Text>
        </View>

        {/* Skills Section */}
        <View className="px-4 py-4">
          <Text className="text-lg font-bold mb-3 text-slate-900 dark:text-slate-100 font-display">Skills & Expertise</Text>
          <View className="flex-row flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <View key={skill} className="px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                <Text className="text-primary text-sm font-semibold font-display">{skill}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Gallery Section */}
        <View className="py-4">
          <View className="flex-row items-center justify-between px-4 mb-3">
            <Text className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">Past Work</Text>
            <TouchableOpacity><Text className="text-primary text-sm font-bold font-display">View All</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16, gap: 12 }}>
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvldYAtIW9cAR19TFAUUFwP2NncEW53R2j5UTRcgQbrDi2pipAAaEW9w4PqFkQwFCSw2fwkItWH2XOddw7jJCpQq3eIMRQ8k6e6syahDKW5Y3P-dz_XNW4Wt9pMV2dYu8LVq2I0oMiQDSzoFTVij6uUBRxqUi-msA7pG1f6RBplS2_sCtI70YGaOujIEaRzFV1_T56lwhjyiwq9t0Vtvq4CbMfmQZLGQa44Xh28w56FrU6ROThhUmso8DUTmTpchywZra2N9Khk-PM' }} className="w-64 h-48 rounded-xl shadow-md" />
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBYb8bFr7RPMQ62BoYVw1uHLPC9tPES8nt8gpylbpDdBRapwEZnrWwtZYl9HaMsP7Gup8_xntxOnKm6oqIItrsYRgVrszf7-yBwXo1RfJCsvxWPKWQ8lCemWT_KxUidnAYX4c19vzqDrOkj2ghAnLdDQz4ZOOunypN9CNaX9l2nmt4-patwAVRDZNHJQ9H4wGlf5vjhR9fHfrEo32PL7fhGxpe5cE7cHJA_ML5aNTMrQPj45ci8INfmOCMV5rjQOJziEMQxWT6JO7Ob' }} className="w-64 h-48 rounded-xl shadow-md" />
          </ScrollView>
        </View>

        {/* Recent Reviews Section */}
        <View className="px-4 py-4">
          <View className="flex-row items-center justify-between mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">Recent Reviews</Text>
            <TouchableOpacity className="flex-row items-center gap-1">
              <Icon name="add-circle" size={18} color="#13ec5b" />
              <Text className="text-sm font-bold text-primary font-display">Write one</Text>
            </TouchableOpacity>
          </View>
          <View className="gap-4">
            {REVIEWS.map((review) => (
              <View key={review.id} className="p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 shadow-sm">
                <View className="flex-row justify-between items-start mb-2">
                  <View className="flex-row items-center gap-3">
                    <Image source={{ uri: review.img }} className="size-10 rounded-full bg-slate-200" />
                    <View>
                      <Text className="font-bold text-sm text-slate-900 dark:text-slate-100 font-display">{review.name}</Text>
                      <Text className="text-xs text-slate-500 font-display">{review.date}</Text>
                    </View>
                  </View>
                  <View className="flex-row">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon key={star} name="star" size={12} color={star <= review.rating ? "#13ec5b" : "#e2e8f0"} />
                    ))}
                  </View>
                </View>
                <Text className="text-sm text-slate-700 dark:text-slate-300 leading-snug font-display">{review.comment}</Text>
              </View>
            ))}
          </View>
        </View>

        <View className="h-32" />
      </ScrollView>

      {/* Bottom Action Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-background-light dark:bg-background-dark border-t border-slate-200 dark:border-slate-800 p-4 pb-8 flex-row gap-3">
        <TouchableOpacity className="flex-none w-14 h-14 rounded-xl bg-primary/10 items-center justify-center border border-primary/20">
          <Icon name="chat-bubble" size={24} color="#13ec5b" />
        </TouchableOpacity>
        <TouchableOpacity className="flex-1 h-14 bg-primary rounded-xl items-center justify-center flex-row gap-2 shadow-lg shadow-primary/20">
          <Text className="font-bold text-lg text-slate-900 font-display">Hire Alex Now</Text>
          <Icon name="arrow-forward" size={24} color="#102216" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
