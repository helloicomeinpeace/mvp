import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const { width } = Dimensions.get('window');

const SKILLS = ['React / Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS Cloud', 'GraphQL', 'Docker', 'Redis', 'Redux'];

const STATS = [
  { label: 'Job Success', value: '98%' },
  { label: 'Total Jobs', value: '450' },
  { label: 'Hours Worked', value: '12k' },
  { label: 'Hourly Rate', value: '$85' },
];

const REVIEWS = [
  {
    id: '1',
    name: 'Sarah J.',
    title: 'CTO at TechStream',
    date: 'Jan 12, 2024',
    rating: 5,
    comment: 'Alex helped us rebuild our legacy system into a modern microservices architecture. His attention to detail and ability to explain complex concepts was invaluable to our team.',
  },
  {
    id: '2',
    name: 'Michael R.',
    title: 'Project Manager',
    date: 'Dec 05, 2023',
    rating: 5,
    comment: 'Alex delivered high-quality React components exactly on schedule. Communicative throughout the entire sprint. Highly recommended!',
  }
];

export const WorkerProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'WorkerProfile'>>();
  const { workerId } = route.params;

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <View className="flex-row items-center gap-3">
          <View className="size-10 bg-primary rounded-lg items-center justify-center">
            <Icon name="hub" size={20} color="#102216" />
          </View>
          <Text className="text-slate-900 dark:text-slate-100 text-xl font-bold font-display">WorkConnect</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} className="size-10 items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800">
          <Icon name="close" size={20} color="#64748b" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Breadcrumbs Placeholder */}
        <View className="flex-row items-center gap-2 px-6 py-4">
          <Text className="text-slate-500 font-display text-sm">Home</Text>
          <Icon name="chevron-right" size={14} color="#94a3b8" />
          <Text className="text-slate-900 dark:text-white font-semibold font-display text-sm">Professional Profile</Text>
        </View>

        {/* Profile Header Card */}
        <View className="mx-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
          <View className="flex-row gap-6 items-center">
            <View className="relative">
              <View className="size-24 rounded-full border-4 border-slate-50 dark:border-slate-800 overflow-hidden shadow-md">
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAtCDUkmSxdvrBC6GTZLmfUojVRKwz1j9uIjH6wM6O4R-YAAv69LrCYyvQB32qphV5sK2rt7ikwkL1Lhc-QHYYXGgykOIwvQkodCORgWEPxPylNQDYyWMD3YaMqRYsFwaUUTEPpeATFOg3VezqsZiayJpxheNBG0U1WuI3_p3CMT29J2sc3fNkD5VUP5yrl7TxqH7-SxDpmVwTiUt51nOHfX51jXgwTnf7X90eyDvFVo96Cbzfxgnr_kERf8MlHPXfYHL6hhG9tJyoZ' }} className="w-full h-full" />
              </View>
              <View className="absolute bottom-0 right-0 size-6 bg-primary rounded-full border-2 border-white dark:border-slate-900 items-center justify-center">
                <Icon name="check" size={12} color="white" />
              </View>
            </View>
            <View className="flex-1">
              <View className="flex-row items-center gap-1">
                <Text className="text-2xl font-extrabold text-slate-900 dark:text-white font-display">Alex Rivera</Text>
                <Icon name="verified" size={20} color="#13ec5b" />
              </View>
              <Text className="text-primary font-semibold font-display">Senior Full-Stack Developer</Text>
              <View className="flex-row items-center gap-4 mt-1">
                <View className="flex-row items-center gap-1">
                  <Icon name="location-on" size={14} color="#64748b" />
                  <Text className="text-xs text-slate-500 font-display">San Francisco, CA</Text>
                </View>
                <View className="flex-row items-center gap-1">
                  <Icon name="schedule" size={14} color="#64748b" />
                  <Text className="text-xs text-slate-500 font-display">Available Now</Text>
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row gap-3 mt-6">
            <TouchableOpacity className="flex-1 h-12 rounded-lg bg-slate-100 dark:bg-slate-800 items-center justify-center border border-slate-200 dark:border-slate-700">
              <Text className="font-bold text-slate-900 dark:text-white font-display">Message</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 h-12 rounded-lg bg-primary items-center justify-center shadow-lg shadow-primary/20">
              <Text className="font-bold text-slate-900 font-display">Hire Now</Text>
            </TouchableOpacity>
          </View>

          {/* Stats Row */}
          <View className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex-row flex-wrap">
            {STATS.map(stat => (
              <View key={stat.label} className="flex-1 min-w-[40%] bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                <Text className="text-slate-900 dark:text-white text-2xl font-extrabold font-display">{stat.value}</Text>
                <Text className="text-slate-500 text-[10px] uppercase font-bold tracking-wider font-display">{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Content Tabs area - Simple Sections for Mobile */}
        <View className="px-6 py-8 gap-8">
          {/* About */}
          <View>
            <Text className="text-lg font-bold mb-4 text-slate-900 dark:text-white font-display">About Alex</Text>
            <Text className="text-slate-600 dark:text-slate-300 leading-relaxed font-display">
              I am a seasoned Senior Full-Stack Developer with over a decade of experience in building scalable web applications and enterprise-grade solutions. My expertise lies in architecting robust backends and crafting intuitive, responsive frontends.
            </Text>
          </View>

          {/* Core Skills */}
          <View>
            <Text className="text-lg font-bold mb-4 text-slate-900 dark:text-white font-display">Core Skills</Text>
            <View className="flex-row flex-wrap gap-2">
              {SKILLS.map(skill => (
                <View key={skill} className="px-3 py-1.5 bg-primary/10 rounded-full border border-primary/20">
                  <Text className="text-primary text-xs font-bold font-display">{skill}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Portfolio Gallery */}
          <View>
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-bold text-slate-900 dark:text-white font-display">Portfolio</Text>
              <TouchableOpacity><Text className="text-primary text-sm font-bold font-display">View All</Text></TouchableOpacity>
            </View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 12 }}>
              <View className="w-64 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSTSIBLuuG5_0kyPS0bIJL3XhTd4oUSWrDEZSvu8lL9Gn9lpdWe1ZEeYxvfoQvGO3H3QHQRgzaqHpcH5y6cojDLeqJLqcUMSzWC1S4UbbgjFX3QhZgS58a002khbs6NmSj-fio6DO-WFxMJeuq3eEEvIkfHw0B7OvOfyvD3W-POtZPjSY7-yJbfD-Nv4Ksil3YhPC6gzk_gIalmxdWMwoIbY4VWTLgC2FhBuCRqQMWNUi11UCNHt-CwXo_3yJF8_zYQCh7pNAsRwnk' }} className="w-full h-36" />
                <View className="p-4">
                  <Text className="font-bold text-sm text-slate-900 dark:text-white font-display">SaaS Analytics Platform</Text>
                  <Text className="text-xs text-slate-500 font-display">Next.js • Tailwind • GraphQL</Text>
                </View>
              </View>
              <View className="w-64 rounded-xl border border-slate-100 dark:border-slate-800 overflow-hidden bg-white dark:bg-slate-900">
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6iKo1g2t9i74H3kfz4j2ppqpO4U5O1ujmmnaHn3DYQQjA0rQ3BfB5oWeS-HfUaW_mDTg_njUpBv5nG52uRhpkrTH-Pe9BGfZnEui9_LnVmCSx624EfYxF5imHdCifUkgDceS6H7aDnNNoDjHF0obhsrdTphVpN19hmtC4kn2qA4hhSIeCcEfKbSP5fLfT-bcpio8atSMEPyO9xMQy0XkSqkaKdncaMno4M190qx5KZ64xHoQKsJkilbvxPjPi1oMJxkrJLNwvf_UW' }} className="w-full h-36" />
                <View className="p-4">
                  <Text className="font-bold text-sm text-slate-900 dark:text-white font-display">E-commerce Mobile App</Text>
                  <Text className="text-xs text-slate-500 font-display">React Native • Stripe • Firebase</Text>
                </View>
              </View>
            </ScrollView>
          </View>

          {/* Reviews */}
          <View>
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-bold text-slate-900 dark:text-white font-display">Reviews (142)</Text>
              <View className="flex-row items-center gap-1">
                <Icon name="star" size={18} color="#13ec5b" />
                <Text className="font-bold text-slate-900 dark:text-white font-display">4.9/5.0</Text>
              </View>
            </View>
            <View className="gap-6">
              {REVIEWS.map(review => (
                <View key={review.id} className="border-b border-slate-100 dark:border-slate-800 pb-6">
                  <View className="flex-row justify-between mb-2">
                    <Text className="font-bold text-slate-900 dark:text-white font-display">"{review.name}"</Text>
                    <Text className="text-slate-400 text-xs font-display">{review.date}</Text>
                  </View>
                  <View className="flex-row mb-2">
                    {[1, 2, 3, 4, 5].map(s => <Icon key={s} name="star" size={14} color="#13ec5b" />)}
                  </View>
                  <Text className="text-sm text-slate-600 dark:text-slate-400 font-display">{review.comment}</Text>
                  <Text className="mt-2 text-xs font-semibold text-slate-400 font-display">— {review.name}, {review.title}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {/* Hiring CTA Banner */}
        <View className="mx-6 mb-32 p-6 bg-primary/5 dark:bg-primary/10 rounded-2xl border border-primary/20 items-center">
          <Text className="font-bold text-slate-900 dark:text-white mb-1 font-display">Want to work with Alex?</Text>
          <Text className="text-xs text-slate-500 mb-4 font-display">Current projects in queue: 2</Text>
          <TouchableOpacity className="w-full bg-primary py-3 rounded-xl items-center justify-center flex-row gap-2 shadow-md">
            <Icon name="check-circle" size={18} color="#102216" />
            <Text className="font-bold text-slate-900 font-display">Start Proposal</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
