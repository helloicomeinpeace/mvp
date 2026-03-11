import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MessagingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
        {/* Navigation Bar */}
        <View className="bg-white/80 dark:bg-background-dark/80 px-4 py-3 flex-row items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity onPress={() => navigation.goBack()} className="size-8 items-center justify-center rounded-full">
              <Icon name="arrow-back-ios-new" size={20} color="#102216" className="dark:text-slate-100" />
            </TouchableOpacity>
            <View className="relative">
              <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBb-Nq7UUrx7_lWNVIOfxpxtTloc6okz-e1nFvCWWFXOEHeQgI5k0-RNRBnUtnOve3pNYDD_8cmZrG-kMTr_W6LAUWqdOtxd4Li8bEEruzL4g5WIEwSA8_A8yL2MS4fOmqwmQWSpOnPkp4zZYXfeCC8lMZy-VvvvFlgYBVC2sFtLWWS8Mu6SumB6GSr0ICG5RSlOSwWxM7sMcnYMElcGN3pSuPaSK_gx7or_qA171k75ZxNjA5b7eiPfZ9iqy19PHy21r8ThOWHiIll' }} className="size-10 rounded-full border border-slate-200 dark:border-slate-700" />
              <View className="absolute bottom-0 right-0 size-3 rounded-full bg-primary border-2 border-white dark:border-background-dark" />
            </View>
            <View>
              <Text className="text-slate-900 dark:text-slate-100 text-base font-bold leading-tight font-display">John Doe</Text>
              <Text className="text-slate-500 dark:text-slate-400 text-xs font-medium font-display">Online</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-1">
            <TouchableOpacity className="size-10 items-center justify-center rounded-full"><Icon name="call" size={20} color="#334155" /></TouchableOpacity>
            <TouchableOpacity className="size-10 items-center justify-center rounded-full"><Icon name="more-vert" size={20} color="#334155" /></TouchableOpacity>
          </View>
        </View>

        {/* Active Job Header */}
        <View className="flex-row items-center gap-3 px-4 py-2 bg-primary/10 dark:bg-primary/5 border-t border-primary/20">
          <View className="bg-primary/20 dark:bg-primary/30 rounded-lg p-2"><Icon name="directions-car" size={20} color="#13ec5b" /></View>
          <View className="flex-1">
            <Text className="text-slate-800 dark:text-slate-200 text-sm font-semibold font-display">Personal Driver for School Run</Text>
            <Text className="text-primary text-xs font-medium font-display">Application Active • 4.9 ★ Rating</Text>
          </View>
          <TouchableOpacity className="bg-primary px-3 py-1.5 rounded-lg"><Text className="text-slate-900 text-xs font-bold font-display">Hire Now</Text></TouchableOpacity>
        </View>

        {/* Chat Area */}
        <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
          <View className="items-center mb-6">
            <View className="bg-slate-200/50 dark:bg-slate-800/50 px-3 py-1 rounded-full">
              <Text className="text-slate-500 dark:text-slate-400 text-[10px] font-bold uppercase tracking-widest font-display">Today</Text>
            </View>
          </View>

          {/* Received */}
          <View className="flex-row items-end gap-2 mb-6 max-w-[85%]">
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC9aGDeq2kXSCzFmK493eLUU9CcRbj5ZRzaRpBzLVYeJ-UQg8wROiLhY8Q2A98IM942_zzXttoycObxzGTjBQliXSEOg6RBX-x1BSSwDDfgCkRRul6gcligwI4uUz0UAZzhdcJVPzEoJ24p2mgq0qNmsBhOyNslkjvGT8QN7NGstwpTqfWs9WzdELHAxU9dra6VoMdd418TLYbCsoYFmNu8EbM7I-z5t-twEygIuPxYxOe1dsgOlU69MvUh89zZAkVbgm2FeS8_sYm2' }} className="size-8 rounded-full mb-4" />
            <View className="bg-white dark:bg-slate-800 p-3.5 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700">
              <Text className="text-slate-800 dark:text-slate-100 text-sm font-display">Hello! I saw your request for a driver. I have 10 years of experience and a clean driving record.</Text>
              <Text className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-display">09:41 AM</Text>
            </View>
          </View>

          {/* Sent */}
          <View className="flex-row items-end justify-end mb-6">
            <View className="bg-primary p-3.5 rounded-2xl rounded-br-none shadow-sm max-w-[85%]">
              <Text className="text-slate-900 text-sm font-medium font-display">Hi John, thanks for reaching out. Can you send over your license and your latest background check certificate?</Text>
              <View className="flex-row items-center gap-1 justify-end mt-1">
                <Text className="text-[10px] text-slate-900/60 font-display">09:43 AM</Text>
                <Icon name="done-all" size={14} color="#102216" />
              </View>
            </View>
          </View>

          {/* Documents */}
          <View className="flex-row items-end gap-2 mb-6 max-w-[85%]">
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbKBO_3_eokAWWvdLweOv-44U0oHM6kpsnzT7s9TJ4jazwwWKyGePgwYafJr0nKK7sgAoOBKwveomN_vRBTLfSXOaHkUHexkrlTXwlLcH38lvdTYSQ2xddS_tEvl-RRsOKQ792dE29WjSn0LHXn8Z8AYxJzOFdhcIsqEJR5xoDQN5MqYbYQfPaaTotgk7uuFYRxYrW1RyEeDtDFdHidrGFf6YnA-FAP48uzU3ochbyp_fyYQujxNJgeen0TDz1upOXJ2E_PWVsXke1' }} className="size-8 rounded-full mb-4" />
            <View className="gap-2">
              <View className="bg-white dark:bg-slate-800 p-3.5 rounded-2xl rounded-bl-none shadow-sm border border-slate-100 dark:border-slate-700">
                <Text className="text-slate-800 dark:text-slate-100 text-sm font-display">Sure thing, here are the documents you requested.</Text>
              </View>
              {/* Document Cards */}
              <TouchableOpacity className="flex-row items-center gap-3 bg-white dark:bg-slate-800 p-3 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <View className="size-10 rounded-lg bg-red-100 dark:bg-red-900/30 items-center justify-center"><Icon name="description" size={24} color="#ef4444" /></View>
                <View className="flex-1">
                  <Text className="text-xs font-bold text-slate-900 dark:text-slate-100 font-display">Drivers_License_John.pdf</Text>
                  <Text className="text-[10px] text-slate-500 font-display">1.2 MB • PDF</Text>
                </View>
                <Icon name="download" size={20} color="#94a3b8" />
              </TouchableOpacity>
            </View>
          </View>

          <View className="bg-white dark:bg-slate-800 border border-primary/30 rounded-2xl p-4 shadow-sm items-center gap-3 mt-4 mb-32">
            <View className="size-12 rounded-full bg-primary/20 items-center justify-center"><Icon name="handshake" size={30} color="#13ec5b" /></View>
            <View className="items-center">
              <Text className="text-sm font-bold text-slate-900 dark:text-slate-100 font-display">Ready to hire John?</Text>
              <Text className="text-xs text-slate-500 dark:text-slate-400 font-display text-center">Lock in the details with a secure marketplace contract.</Text>
            </View>
            <TouchableOpacity className="w-full bg-primary py-2.5 rounded-xl items-center justify-center shadow-md"><Text className="text-slate-900 font-bold text-sm font-display">Create Contract</Text></TouchableOpacity>
          </View>
        </ScrollView>

        {/* Input Bar */}
        <View className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-2 pb-8">
          <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-2 px-2 py-1 mb-2">
            {[
              { label: 'Photos', icon: 'image' },
              { label: 'Documents', icon: 'attach-file' },
              { label: 'Location', icon: 'location-on' },
              { label: 'Quick Contract', icon: 'description', active: true }
            ].map((item) => (
              <TouchableOpacity key={item.label} className={`flex-row items-center gap-1.5 px-3 py-1.5 rounded-full border ${item.active ? 'bg-primary/20 border-primary/30' : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'}`}>
                <Icon name={item.icon} size={14} color={item.active ? '#13ec5b' : '#64748b'} />
                <Text className={`text-[11px] font-bold font-display ${item.active ? 'text-slate-800 dark:text-primary' : 'text-slate-600 dark:text-slate-400'}`}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View className="flex-row items-center gap-2 px-2">
            <TouchableOpacity className="size-10 items-center justify-center"><Icon name="add-circle" size={24} color="#94a3b8" /></TouchableOpacity>
            <View className="flex-1 bg-slate-100 dark:bg-slate-800 rounded-2xl px-4 py-2 min-h-[44px] flex-row items-center">
              <TextInput className="flex-1 text-sm text-slate-800 dark:text-slate-200 font-display" placeholder="Message..." placeholderTextColor="#94a3b8" />
              <TouchableOpacity><Icon name="mood" size={20} color="#94a3b8" /></TouchableOpacity>
            </View>
            <TouchableOpacity className="size-10 items-center justify-center rounded-full bg-primary shadow-sm"><Icon name="send" size={20} color="#102216" /></TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
