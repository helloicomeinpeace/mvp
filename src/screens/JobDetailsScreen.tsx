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
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-white/80 dark:bg-background-dark/80 border-b border-primary/10">
        <View className="flex-row items-center gap-3">
          <View className="size-10 bg-primary rounded-lg items-center justify-center">
            <Icon name="hub" size={20} color="#102216" />
          </View>
          <Text className="text-slate-900 dark:text-slate-100 text-xl font-bold font-display">WorkConnect</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.goBack()} className="size-10 items-center justify-center rounded-full bg-slate-200 dark:bg-slate-800">
          <Icon name="close" size={20} color="#102216" className="dark:text-slate-100" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 px-6 py-8" showsVerticalScrollIndicator={false}>
        {/* Breadcrumbs Placeholder */}
        <View className="flex-row items-center gap-2 mb-8">
          <Text className="text-sm text-slate-500 font-display">Home</Text>
          <Icon name="chevron-right" size={14} color="#94a3b8" />
          <Text className="text-sm text-slate-900 dark:text-slate-100 font-medium font-display">Job Details</Text>
        </View>

        {/* Job Header Card */}
        <View className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-primary/10 shadow-sm mb-8">
          <View className="flex-row gap-6 items-start">
            <View className="size-32 rounded-xl bg-primary/10 overflow-hidden">
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdQBCULTRgB38xPcp02685P9D4USFOeOy4tYfVrjA6yAWz0VQG2eZEqlQcGEx7vzwB8XexOe67r3N9qaPhN4-Im2kF2tZec6s5xAyxp7ZuZZYaCnQkOKtEI-QKkSHSDaRyIp34iJJwy3NW6d9fr8KPZXQeITWtDS5ZPYPG86fZYu6F-QmPJqrrmntE3ggq9CxsuWBANdfDbuhb_LSHdAzz6wnpMiskp5nvQUUr_gCHOpX6dT5EWeyWxrYvm5KW727pJg1LGNZg_4_j' }}
                className="w-full h-full"
                resizeMode="cover"
              />
            </View>
            <View className="flex-1">
              <View className="flex-row flex-wrap items-center gap-2 mb-2">
                <View className="px-2 py-1 rounded bg-primary/20">
                  <Text className="text-primary text-[10px] font-bold uppercase tracking-wider font-display">Landscaping</Text>
                </View>
                <View className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800">
                  <Text className="text-slate-500 text-[10px] font-bold uppercase tracking-wider font-display">Part-Time</Text>
                </View>
              </View>
              <Text className="text-2xl font-extrabold text-slate-900 dark:text-white leading-tight font-display">Senior Garden Maintenance & Landscaping</Text>
            </View>
          </View>

          <View className="flex-row flex-wrap gap-4 mt-6">
            <View className="flex-row items-center gap-1">
              <Icon name="person" size={18} color="#13ec5b" />
              <Text className="text-sm text-slate-500 font-display">Sarah Jenkins</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Icon name="location-on" size={18} color="#13ec5b" />
              <Text className="text-sm text-slate-500 font-display">Riverside, CA</Text>
            </View>
            <View className="flex-row items-center gap-1">
              <Icon name="payments" size={18} color="#13ec5b" />
              <Text className="text-sm text-slate-500 font-display">$25 - $35 / hr</Text>
            </View>
          </View>

          <View className="flex-row gap-4 mt-8">
            <TouchableOpacity className="flex-1 bg-primary py-3 rounded-xl items-center justify-center flex-row gap-2">
              <Icon name="send" size={20} color="#102216" />
              <Text className="text-slate-900 font-bold font-display">Apply Now</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-1 bg-slate-100 dark:bg-slate-800 py-3 rounded-xl items-center justify-center flex-row gap-2">
              <Icon name="chat" size={20} color="#64748b" />
              <Text className="text-slate-900 dark:text-white font-bold font-display">Message</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Content Section */}
        <View className="gap-10 mb-32">
          {/* Description */}
          <View>
            <View className="flex-row items-center gap-2 mb-4">
              <Icon name="description" size={20} color="#13ec5b" />
              <Text className="text-xl font-bold text-slate-900 dark:text-white font-display">Job Description</Text>
            </View>
            <Text className="text-slate-600 dark:text-slate-300 leading-relaxed font-display">
              We are seeking an experienced gardener and landscaper to help maintain our 2-acre residential estate in Riverside. The ideal candidate will have a deep passion for horticulture and eye for detail.
              {"\n\n"}
              Your responsibilities will include seasonal planting, precision pruning of ornamental shrubs, maintenance of the irrigation system, and managing the health of our organic vegetable garden.
            </Text>
          </View>

          {/* Requirements */}
          <View>
            <View className="flex-row items-center gap-2 mb-4">
              <Icon name="task-alt" size={20} color="#13ec5b" />
              <Text className="text-xl font-bold text-slate-900 dark:text-white font-display">Requirements</Text>
            </View>
            <View className="gap-3">
              {[
                '5+ years professional landscaping experience',
                'Expert knowledge of native CA plants',
                'Ability to lift 50lbs and work outdoors',
                'Reliable transportation with tool space'
              ].map(req => (
                <View key={req} className="flex-row items-center gap-3 bg-white dark:bg-slate-900 p-4 rounded-xl border border-primary/5">
                  <Icon name="check-circle" size={20} color="#13ec5b" />
                  <Text className="text-sm text-slate-700 dark:text-slate-300 font-display flex-1">{req}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* Schedule */}
          <View>
            <View className="flex-row items-center gap-2 mb-4">
              <Icon name="calendar-month" size={20} color="#13ec5b" />
              <Text className="text-xl font-bold text-slate-900 dark:text-white font-display">Schedule</Text>
            </View>
            <View className="bg-primary/5 border border-primary/10 rounded-2xl p-6 flex-row justify-between">
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <View key={day} className="items-center">
                  <Text className="text-[10px] font-bold text-slate-400 mb-2 uppercase font-display">{day}</Text>
                  <View className={`size-10 rounded-full items-center justify-center ${['Mon', 'Wed', 'Fri'].includes(day) ? 'bg-primary' : 'border border-dashed border-slate-400 opacity-30'}`}>
                    <Text className="text-[10px] font-bold text-slate-900 font-display">{['Mon', 'Wed', 'Fri'].includes(day) ? '8-12' : '-'}</Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          {/* About Homeowner */}
          <View className="bg-white dark:bg-slate-900 rounded-2xl border border-primary/10 p-6 shadow-sm">
            <Text className="font-bold text-slate-900 dark:text-white mb-4 font-display">About the Homeowner</Text>
            <View className="flex-row items-center gap-4 mb-4">
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDvfQV4FB3M17eboTut5RonjxlmiYaqdVtFAni-RRPKfKqlr_u65waa0rIBq83nt2VXBjzPoRsKVnAnWOjHMWpzR4BBka__2Ui6t6kZJLcC02npue9odhP8xDby7Ysvsn5D24owla8wgcBLEFXORvRBfr86ey6dR7kuUsVCfffb3__dqVHcZyu0LRHk9jhrpEYQT4q4V7XMIQyHK74BxJR4VVLw00iIaXi5DYIFSc2IVElRc3VNVVrc5CMi6R0Ra0KNC1I6HChH1p_Z' }}
                className="size-12 rounded-full"
              />
              <View>
                <Text className="font-bold text-slate-900 dark:text-white font-display">Sarah Jenkins</Text>
                <Text className="text-xs text-slate-500 font-display">Member since 2021</Text>
              </View>
            </View>
            <View className="gap-3">
              <View className="flex-row items-center gap-2">
                <Icon name="star" size={18} color="#13ec5b" />
                <Text className="text-sm text-slate-700 dark:text-slate-300 font-display">4.9 (12 reviews)</Text>
              </View>
              <View className="flex-row items-center gap-2">
                <Icon name="verified-user" size={18} color="#13ec5b" />
                <Text className="text-sm text-slate-700 dark:text-slate-300 font-display">ID Verified</Text>
              </View>
            </View>
            <TouchableOpacity className="mt-6">
              <Text className="text-primary text-sm font-bold text-center font-display">View Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Sticky Mobile Action Bar */}
      <View className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-900 p-4 pb-8 border-t border-primary/10 flex-row gap-4">
        <TouchableOpacity className="flex-1 bg-primary py-4 rounded-xl items-center justify-center">
          <Text className="text-slate-900 font-bold text-lg font-display">Apply Now</Text>
        </TouchableOpacity>
        <TouchableOpacity className="size-14 items-center justify-center border border-primary/20 rounded-xl">
          <Icon name="chat" size={24} color="#13ec5b" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
