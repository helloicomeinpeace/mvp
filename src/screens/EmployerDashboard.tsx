import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, TextInput, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CATEGORIES = [
  { id: 'cooks', name: 'Cooks', icon: 'restaurant', color: 'bg-primary/10', textColor: 'text-primary' },
  { id: 'drivers', name: 'Drivers', icon: 'directions-car', color: 'bg-blue-500/10', textColor: 'text-blue-500' },
  { id: 'gardeners', name: 'Gardeners', icon: 'local-florist', color: 'bg-orange-500/10', textColor: 'text-orange-500' },
  { id: 'cleaners', name: 'Cleaners', icon: 'cleaning-services', color: 'bg-purple-500/10', textColor: 'text-purple-500' },
  { id: 'security', name: 'Security', icon: 'security', color: 'bg-teal-500/10', textColor: 'text-teal-500' },
];

const WORKERS = [
  { id: '1', name: 'Elena Rodriguez', title: 'Professional Cook', rating: 4.9, exp: '8 yrs', dist: '2.4 mi', rate: '$28/hr', verified: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbKEyFA-nMHwk44RxpZpkKkNR6hohDueXwFqw98Ncq6Y_sdnlrnUe7sjnXGvzmK8mppcUb_zxwlhuhgedRvYsFWV5z3N68OydrvhmGrxaK1S4v9FplkvZYeNvmUoO8jJ3v72CseJhg4LQyKL8rx_lNnux_UrtTx6E0A1PJPhjJrmSUGkrP-06KuRuXpcMPVsCcUdya4opL9ICmn8gxwmmjt6x1ZYNsqKI83l-SguIdudQqyYb2TojglJ9LiGRJII1TCh5__HfZJjLe' },
  { id: '2', name: 'David Chen', title: 'Private Driver', rating: 4.8, exp: '12 yrs', dist: '1.1 mi', rate: '$35/hr', verified: false, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5k8kP4Bsqehlcyg8YtF3F-lhFKJ7hIZ17xcfry2HvQrMWIaHavoi-Nq79EOBRUT5Qf8PfvDq5pKgsQ0zTCQr-2yCzlRkGcEDuhfw3XjwxFFps0ffBvmywx4oqnp-KjfVsF1WCnUrG7lpHWmBYJ7mDrJmol-j3WhDVN0FEvOVBYIBRzNBybVG0BUEnOYdsC0xmM23IA-pYmxl9uoXvDGdveaXT6W6ozTubVrI0HBWfg4smyGFUGdyay9L-ZVFj5YTlixn68oEu06Rf' },
  { id: '3', name: 'Marcus Wright', title: 'Gardener & Landscaper', rating: 5.0, exp: '5 yrs', dist: '3.8 mi', rate: '$22/hr', verified: true, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCOGGyJDwOLT2Zy9-TzrL8Hh-dfrsOxDQ7n4q1N_mJy4nzuV4JRBgH9X9Gnxhtk0J-ft9tGQkQcL_S2HdAag4N8nA8EOQ2Y-ZMQcXrImUhstgatXNxYw6G4jLizB0buA_5La74hVEwjOcMyJXIdtUn2T10CoxyyU5m7PDr1p3m4cHuiCOKRbY13S8vwPg-LDH-pyxBxAvgCL2UqBKuW-OAUlfdrdmlDpxX5Mbe_ap-9ia1MzCPpg0ZMOgiM772isf9Za7k9qR6wilc8' },
];

export const EmployerDashboard = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View className="flex-row items-center justify-between px-6 pt-4 pb-4">
          <View className="flex-row items-center gap-3">
            <View className="size-12 rounded-full bg-primary/20 items-center justify-center overflow-hidden border-2 border-primary">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApyBNISvJ8YpV1mI4jBhLfTCX5gXlFsIDD8xv6WlYbFlJA2NKXsEdXQQ9t_OIQErEcY9uqrSlF8HvBmiIGB71Sbv8DvEopIaDXmhRSLw89CcUD9Y7UBB2Ow7BxPbPY_krzqp4w96x4lIYA7wqWld2GggS7UTRkLloUDsPDYMjTT4AtSGX5sCTelH-6v90QCiF86GKDuM0UqR63L86ND6ELB0kpC5ixQ7hhexJVuNv5GFhihlV9_d9bVudY39zV-hw03eCuDcySha4u' }} className="w-full h-full" />
            </View>
            <View>
              <Text className="text-slate-500 dark:text-slate-400 text-sm font-display">Welcome back,</Text>
              <Text className="text-xl font-bold leading-tight text-slate-900 dark:text-slate-100 font-display">Alex Johnson</Text>
            </View>
          </View>
          <TouchableOpacity className="relative flex size-10 items-center justify-center rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
            <Icon name="notifications" size={24} className="text-slate-700 dark:text-slate-200" />
            <View className="absolute top-2 right-2 size-2 rounded-full bg-red-500" />
          </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View className="px-6 py-2">
          <View className="relative flex-row items-center bg-white dark:bg-slate-800 rounded-xl px-4 py-3 shadow-sm">
            <Icon name="search" size={24} color="#94a3b8" />
            <TextInput
              className="flex-1 ml-2 text-slate-900 dark:text-slate-100 font-display"
              placeholder="Search for cooks, drivers, etc."
              placeholderTextColor="#94a3b8"
            />
          </View>
        </View>

        {/* Categories */}
        <View className="mt-6">
          <View className="flex-row items-center justify-between px-6 mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">Quick Hire</Text>
            <TouchableOpacity><Text className="text-sm font-semibold text-primary font-display">See all</Text></TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}>
            {CATEGORIES.map((cat) => (
              <TouchableOpacity key={cat.id} className="items-center gap-2 w-20">
                <View className={`size-16 items-center justify-center rounded-2xl ${cat.color} border border-primary/20`}>
                  <Icon name={cat.icon} size={30} className={cat.textColor} />
                </View>
                <Text className="text-xs font-bold text-slate-900 dark:text-slate-100 font-display">{cat.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Recommended */}
        <View className="mt-8 mb-24">
          <View className="flex-row items-center justify-between px-6 mb-4">
            <Text className="text-lg font-bold text-slate-900 dark:text-slate-100 font-display">Recommended for You</Text>
            <TouchableOpacity><Icon name="tune" size={24} color="#94a3b8" /></TouchableOpacity>
          </View>
          <View className="gap-4 px-6">
            {WORKERS.map((worker) => (
              <TouchableOpacity
                key={worker.id}
                onPress={() => navigation.navigate('WorkerProfile', { workerId: worker.id })}
                className="flex-row rounded-2xl bg-white dark:bg-slate-800 p-4 shadow-sm border border-slate-100 dark:border-slate-700"
              >
                <View className="relative size-20 shrink-0">
                  <Image source={{ uri: worker.img }} className="h-full w-full rounded-xl" />
                  {worker.verified && (
                    <View className="absolute -bottom-1 -right-1 size-6 items-center justify-center rounded-full bg-primary border-2 border-white dark:border-slate-800">
                      <Icon name="verified" size={14} color="white" />
                    </View>
                  )}
                </View>
                <View className="flex-1 ml-4 justify-between">
                  <View className="flex-row justify-between items-start">
                    <View>
                      <Text className="font-bold text-slate-900 dark:text-slate-100 font-display">{worker.name}</Text>
                      <Text className="text-sm text-slate-500 dark:text-slate-400 font-display">{worker.title}</Text>
                    </View>
                    <View className="flex-row items-center gap-1">
                      <Icon name="star" size={18} color="#13ec5b" />
                      <Text className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display">{worker.rating}</Text>
                    </View>
                  </View>
                  <View className="mt-2 flex-row items-center justify-between">
                    <View className="flex-row gap-2">
                      <View className="flex-row items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg">
                        <Icon name="work" size={12} color="#64748b" />
                        <Text className="text-[10px] text-slate-500 dark:text-slate-400 font-display">{worker.exp} exp</Text>
                      </View>
                      <View className="flex-row items-center gap-1 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded-lg">
                        <Icon name="location-on" size={12} color="#64748b" />
                        <Text className="text-[10px] text-slate-500 dark:text-slate-400 font-display">{worker.dist}</Text>
                      </View>
                    </View>
                    <Text className="text-sm font-bold text-primary font-display">{worker.rate}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      {/* Post a Job Floating Button */}
      <View className="absolute bottom-24 right-6">
        <TouchableOpacity
          onPress={() => navigation.navigate('PostJob')}
          className="bg-primary px-6 py-4 rounded-full flex-row items-center gap-2 shadow-lg shadow-primary/30"
        >
          <Icon name="add-circle" size={24} color="#102216" />
          <Text className="text-slate-900 font-bold font-display">Post a Job</Text>
        </TouchableOpacity>
      </View>

      {/* Navigation Placeholder */}
      <View className="fixed bottom-0 left-0 right-0 border-t border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 px-6 pb-8 pt-3 flex-row justify-between">
        <TouchableOpacity className="items-center gap-1">
          <Icon name="home" size={24} color="#13ec5b" />
          <Text className="text-[10px] font-bold text-primary">Home</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-1">
          <Icon name="chat" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-medium text-slate-400">Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-1">
          <Icon name="calendar-today" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-medium text-slate-400">Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-1">
          <Icon name="person" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-medium text-slate-400">Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
