import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const BOOKINGS = [
  { id: '1', name: 'Marcus Thorne', title: 'Master Gardener', date: 'Tomorrow, Oct 24', time: '10:00 AM - 1:00 PM', status: 'Confirmed', icon: 'local-florist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIXA1VmivJ6-rbimArK0GuGXYIy0rWBz5UcSm2QmehKjn5f4GR8UYZ10lq3gqb6eUqaagmNFc3WmSSW7AfajSpAq2Pm9I2uqLJXaRmL52ElC0FCSmjmSS9lSH1eY37abTCWaQO9l25Ttv4qBqpNkRi_dTIiggMU7VPEc2w-zY_a8d1kBsdAZsppTf4fv6LHcfB_VM2IMkXqZBCWTUHzSTv8zgtQVvE1ULBmFKRNfzYJz_pTnedXiTjXBU4sDlXkN5OBvJWoLptKoCV' },
  { id: '2', name: 'Elena Rodriguez', title: 'Private Chef', date: 'Saturday, Oct 26', time: '6:00 PM - 9:00 PM', status: 'Pending', icon: 'restaurant', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMkusJHf68CBZZsQWNXggun_Yt1B3Vf6mqVaAlwoue-f0HxH6LITbqzp6Eg6egdck8Cg6u6nSV7mOMmpVGPriQf0SnJ_E1J_2T5-HaajBI_ZjCd3hVSTPMLTPRcC280XpFzercSB-VFGFs9CVHPYTdLPE9Wpit9Z7xbRLVpGaOGDkP8PQvsIbKTt2OvLPmTWq6Pmkhve_5s_AAB1GLBxojp4MwmsWpZfmxXUNhPj6FKxIF8krChMAJLHkINoY4teea08_x-3JI4_b2' },
];

export const BookingsScreen = () => {
  const [activeTab, setActiveTab] = useState('upcoming');
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <View className="sticky top-0 z-50 bg-background-light/80 dark:bg-background-dark/80 px-4 py-4 flex-row items-center justify-between border-b border-primary/10">
        <TouchableOpacity onPress={() => navigation.goBack()} className="size-10 items-center justify-center rounded-full">
          <Icon name="arrow-back-ios-new" size={20} color="#102216" className="dark:text-slate-100" />
        </TouchableOpacity>
        <Text className="text-lg font-bold tracking-tight text-slate-900 dark:text-slate-100 font-display">My Bookings</Text>
        <TouchableOpacity className="size-10 items-center justify-center rounded-full"><Icon name="calendar-month" size={20} color="#102216" className="dark:text-slate-100" /></TouchableOpacity>
      </View>

      {/* Segmented Control */}
      <View className="px-4 pb-4 mt-2">
        <View className="flex-row p-1 bg-slate-200/50 dark:bg-white/5 rounded-xl">
          <TouchableOpacity
            onPress={() => setActiveTab('upcoming')}
            className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'upcoming' ? 'bg-white dark:bg-primary shadow-sm' : ''}`}
          >
            <Text className={`text-sm font-semibold font-display ${activeTab === 'upcoming' ? 'text-slate-900 dark:text-background-dark' : 'text-slate-500'}`}>Upcoming</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('history')}
            className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'history' ? 'bg-white dark:bg-primary shadow-sm' : ''}`}
          >
            <Text className={`text-sm font-semibold font-display ${activeTab === 'history' ? 'text-slate-900 dark:text-background-dark' : 'text-slate-500'}`}>History</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1 px-4 py-4" showsVerticalScrollIndicator={false}>
        <Text className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 px-1 font-display">Active Bookings</Text>
        <View className="gap-4">
          {BOOKINGS.map((booking) => (
            <View key={booking.id} className="bg-white dark:bg-white/5 rounded-2xl p-4 shadow-sm border border-primary/5">
              <View className="flex-row justify-between items-start mb-4">
                <View className="flex-row items-center gap-3">
                  <View className="size-12 rounded-full bg-slate-100 items-center justify-center overflow-hidden border border-slate-100 dark:border-slate-800">
                    <Image source={{ uri: booking.img }} className="w-full h-full" />
                  </View>
                  <View>
                    <Text className="font-bold text-slate-900 dark:text-white font-display">{booking.name}</Text>
                    <Text className="text-xs font-medium text-slate-500 dark:text-slate-400 font-display">{booking.title}</Text>
                  </View>
                </View>
                <View className={`px-3 py-1 rounded-full border ${booking.status === 'Confirmed' ? 'bg-primary/20 border-primary/30' : 'bg-slate-100 dark:bg-white/10 border-slate-200 dark:border-white/10'}`}>
                  <Text className={`text-[10px] font-bold uppercase tracking-wider font-display ${booking.status === 'Confirmed' ? 'text-primary' : 'text-slate-500'}`}>{booking.status}</Text>
                </View>
              </View>

              <View className="gap-2 mb-4">
                <View className="flex-row items-center gap-2">
                  <Icon name="event" size={16} color="#13ec5b" />
                  <Text className="text-sm text-slate-600 dark:text-slate-300 font-display">{booking.date}</Text>
                </View>
                <View className="flex-row items-center gap-2">
                  <Icon name="schedule" size={16} color="#13ec5b" />
                  <Text className="text-sm text-slate-600 dark:text-slate-300 font-display">{booking.time}</Text>
                </View>
              </View>

              <View className="flex-row gap-2">
                <TouchableOpacity className="flex-1 py-2.5 bg-primary rounded-xl flex-row items-center justify-center gap-2">
                  <Icon name="chat-bubble" size={18} color="#102216" />
                  <Text className="text-background-dark font-bold text-sm text-slate-900 font-display">Message</Text>
                </TouchableOpacity>
                <TouchableOpacity className="px-4 py-2.5 border border-slate-200 dark:border-white/10 rounded-xl items-center justify-center">
                  <Icon name="more-horiz" size={18} color="#64748b" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>

        <Text className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 mt-8 px-1 font-display">Book Again</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 16 }}>
          {[
            { name: 'James K.', title: 'Driver', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAGF0zrTf4vYBiwnORKycmyRyl_Bnb7uCTyQkcU_eC1dxVnJGsE68NrTVZGjsZx9T_bLLXU0aUZKvDHeHb2Nd1c65w9KZ8hJLcvGYx0iHf8nzjuSMp_8-GuHKTZ6MMShDakJJ0PbIAdZPSF8EoKOk5gwK2SBD2MdQGmXNfVpwmUtlZgLR_PPEeHAziG90Jvz0giIsw3RXFXIPTiwFv5R6HPLgI18gHo32kLNWNEtyH7Lz0KpWjyf3_pMDhtP870G6CQcac067kvhBhy' },
            { name: 'Sarah L.', title: 'Cook', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXeIvJGIarudubLVXAr7qcq441q6QYMSVUq_WFMLh1J5zRBHAxc9TNNyM6vdLFt0Y7P6O8WqspIuSeEQEaHMuCwAQyoOKmGduD8Rytq1-RxfojVxmOO57E_ImUEcxOtOw40Lx5aOEVPnLhWqhcAl94QQTpjkkZx23EUGjuXxs5y0JZ2MzwE97qsSrvHJm0jfnT2uEXpPWwMmM77UmllhIC0TXMSDd7ZuuOGD0cEjNhF12Y-PvakevgBc6u6sUDMdhoYjpxT6OyQECo' },
            { name: 'David W.', title: 'Handyman', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcenHQJv6kTqpvYRpGJhLmpBWE61VPt_0T7yJHGMds1j8YjL_8_5VRlwZLnd5zsL2MEKkE6RqAupCFvnHSNOp8m9EtbpcYajjwG_TkQRMZp6c6mKDfDKpMb9l0-kseY7loFJkOkJciTearWep2OV4P_alUG8aE9ojYJv0pgPXckjHZ3TMbxOWbzdpu3LHSmP6t-ZrixfVVfQSdR-Z2qEWPg3Rph0-S4lCrtDFQWaAkXsNlmVMcam5CdjWQ-1gevpsEMnFSKuN1GpdY' }
          ].map((item) => (
            <View key={item.name} className="items-center gap-1 w-20">
              <View className="size-16 rounded-full bg-slate-200 border border-primary/20 items-center justify-center overflow-hidden">
                <Image source={{ uri: item.img }} className="w-full h-full" />
              </View>
              <Text className="text-xs font-bold text-slate-900 dark:text-slate-100 text-center font-display truncate w-full">{item.name}</Text>
              <Text className="text-[10px] text-slate-500 font-display">{item.title}</Text>
            </View>
          ))}
        </ScrollView>
        <View className="h-24" />
      </ScrollView>

      {/* Navigation Placeholder */}
      <View className="fixed bottom-0 left-0 right-0 bg-white dark:bg-background-dark border-t border-slate-100 dark:border-white/5 px-6 pb-6 pt-3 flex-row justify-between items-center z-50">
        <TouchableOpacity className="items-center gap-1 group">
          <Icon name="home" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Explore</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-1 group">
          <Icon name="calendar-today" size={24} color="#13ec5b" />
          <Text className="text-[10px] font-bold text-primary uppercase tracking-tighter">Bookings</Text>
        </TouchableOpacity>
        <View className="relative -top-6">
          <TouchableOpacity className="size-14 bg-primary rounded-full shadow-lg shadow-primary/40 items-center justify-center border-4 border-background-light dark:border-background-dark">
            <Icon name="add" size={30} color="#102216" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="items-center gap-1 group">
          <Icon name="chat-bubble" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Messages</Text>
        </TouchableOpacity>
        <TouchableOpacity className="items-center gap-1 group">
          <Icon name="person" size={24} color="#94a3b8" />
          <Text className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Profile</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
