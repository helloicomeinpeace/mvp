import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BOOKINGS = [
  {
    id: '1',
    title: 'Project Strategy Deep-dive',
    date: '24',
    month: 'Oct',
    day: 'Thu',
    time: '10:00 AM - 11:30 AM (1.5h)',
    status: 'Confirmed',
    person: 'Sarah Jenkins',
    location: 'Google Meet',
    type: 'video-call',
  },
  {
    id: '2',
    title: 'Brand Identity Review',
    date: '26',
    month: 'Oct',
    day: 'Sat',
    time: '02:00 PM - 03:00 PM (1h)',
    status: 'Pending',
    person: 'Creative Hub',
    location: 'Studio 4B',
    type: 'location-on',
  },
  {
    id: '3',
    title: 'Tech Stack Consultation',
    date: '28',
    month: 'Oct',
    day: 'Mon',
    time: '09:00 AM - 10:00 AM (1h)',
    status: 'Confirmed',
    person: 'David Chen',
    location: 'Zoom Call',
    type: 'video-call',
  }
];

export const BookingsScreen = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-4 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
        <View className="flex-row items-center gap-3">
          <View className="size-10 bg-primary rounded-lg items-center justify-center">
            <Icon name="hub" size={20} color="#102216" />
          </View>
          <Text className="text-slate-900 dark:text-white text-xl font-bold font-display">WorkConnect</Text>
        </View>
        <View className="flex-row gap-3">
          <TouchableOpacity className="size-10 items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800">
            <Icon name="notifications" size={20} color="#64748b" />
          </TouchableOpacity>
          <View className="size-10 rounded-full bg-primary/20 border border-primary/30 items-center justify-center">
            <Icon name="person" size={20} color="#13ec5b" />
          </View>
        </View>
      </View>

      <ScrollView className="flex-1 px-6 py-8" showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View className="flex-row justify-between items-center mb-8">
          <View>
            <Text className="text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white font-display">My Bookings</Text>
            <Text className="text-slate-500 dark:text-slate-400 mt-1 font-display">Easily track and manage all your sessions.</Text>
          </View>
          <TouchableOpacity className="bg-primary size-12 rounded-xl items-center justify-center shadow-lg shadow-primary/20">
            <Icon name="add" size={28} color="#102216" />
          </TouchableOpacity>
        </View>

        {/* Tabs */}
        <View className="flex-row border-b border-slate-200 dark:border-slate-800 mb-6">
          <TouchableOpacity
            onPress={() => setActiveTab('upcoming')}
            className={`pb-4 mr-8 flex-row items-center gap-2 ${activeTab === 'upcoming' ? 'border-b-2 border-primary' : ''}`}
          >
            <Text className={`font-bold text-sm font-display ${activeTab === 'upcoming' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Upcoming</Text>
            <View className="bg-primary/20 px-2 py-0.5 rounded-full">
              <Text className="text-primary text-[10px] font-bold font-display">3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('past')}
            className={`pb-4 mr-8 ${activeTab === 'past' ? 'border-b-2 border-primary' : ''}`}
          >
            <Text className={`font-bold text-sm font-display ${activeTab === 'past' ? 'text-slate-900 dark:text-white' : 'text-slate-500'}`}>Past</Text>
          </TouchableOpacity>
        </View>

        {/* Next 7 Days */}
        <View className="mb-6">
          <View className="flex-row items-center gap-2 mb-4">
            <Icon name="event-note" size={20} color="#13ec5b" />
            <Text className="text-lg font-bold text-slate-900 dark:text-white font-display">Next 7 Days</Text>
          </View>

          <View className="gap-4">
            {BOOKINGS.map(booking => (
              <View key={booking.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                <View className="flex-row gap-5 mb-4">
                  <View className="bg-slate-100 dark:bg-slate-800 rounded-xl p-3 items-center justify-center min-w-[70px] border border-slate-200 dark:border-slate-700">
                    <Text className="text-xs font-bold uppercase text-slate-500 font-display">{booking.month}</Text>
                    <Text className="text-2xl font-black text-slate-900 dark:text-white font-display">{booking.date}</Text>
                    <Text className="text-xs font-medium text-slate-500 font-display">{booking.day}</Text>
                  </View>
                  <View className="flex-1">
                    <View className="flex-row justify-between items-start">
                      <Text className="text-lg font-bold text-slate-900 dark:text-white font-display flex-1 mr-2" numberOfLines={1}>{booking.title}</Text>
                      <View className={`px-2 py-1 rounded-full border ${booking.status === 'Confirmed' ? 'bg-green-100 border-green-200' : 'bg-amber-100 border-amber-200'}`}>
                        <Text className={`text-[8px] font-black uppercase font-display ${booking.status === 'Confirmed' ? 'text-green-700' : 'text-amber-700'}`}>{booking.status}</Text>
                      </View>
                    </View>
                    <View className="flex-row items-center gap-1 mt-1">
                      <Icon name="schedule" size={14} color="#64748b" />
                      <Text className="text-xs text-slate-500 font-display">{booking.time}</Text>
                    </View>
                    <View className="flex-row items-center gap-4 mt-3">
                      <View className="flex-row items-center gap-1.5">
                        <View className="size-6 rounded-full bg-primary/20 items-center justify-center">
                          <Icon name="person" size={14} color="#13ec5b" />
                        </View>
                        <Text className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-display">{booking.person}</Text>
                      </View>
                      <View className="flex-row items-center gap-1.5">
                        <View className="size-6 rounded-full bg-primary/20 items-center justify-center">
                          <Icon name={booking.type} size={14} color="#13ec5b" />
                        </View>
                        <Text className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-display">{booking.location}</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View className="flex-row gap-3">
                  <TouchableOpacity className="flex-1 py-2.5 bg-slate-100 dark:bg-slate-800 rounded-xl items-center">
                    <Text className="font-bold text-sm text-slate-900 dark:text-white font-display">Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity className={`flex-1 py-2.5 bg-slate-900 dark:bg-slate-700 rounded-xl items-center ${booking.id === '3' ? 'opacity-50' : ''}`}>
                    <Text className="font-bold text-sm text-white font-display">Join</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Calendar Summary Placeholder */}
        <View className="bg-primary/10 rounded-3xl border border-primary/20 p-6 mb-32">
          <Text className="font-black text-slate-900 dark:text-white mb-4 font-display">Availability Overview</Text>
          <View className="gap-4">
            <View className="flex-row justify-between items-center">
              <Text className="text-sm font-semibold text-slate-600 dark:text-slate-400 font-display">Total Bookings</Text>
              <Text className="text-lg font-black text-slate-900 dark:text-white font-display">24</Text>
            </View>
            <View className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
              <View className="h-full bg-primary w-2/3" />
            </View>
            <Text className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter font-display">You're at 67% of your target capacity</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
