import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export const MessagingScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView className="flex-1 bg-background-light dark:bg-background-dark">
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1">
        {/* Chat Header */}
        <View className="flex-row items-center justify-between border-b border-primary/10 bg-background-light/50 dark:bg-background-dark/80 px-4 py-3">
          <View className="flex-row items-center gap-3">
            <TouchableOpacity onPress={() => navigation.goBack()} className="p-2">
              <Icon name="arrow-back-ios-new" size={20} color="#102216" className="dark:text-slate-100" />
            </TouchableOpacity>
            <View className="relative">
              <Image
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3xKPkZHKdgKLsTCdCSPjpI4YzEbVNr1RLdJxhUe41zhdlG_QFB7nbUv4TmkX1ZUfzZ1J-pOAmVKvloq30OpzCxJ9i3KswfviLhHVm9WoO-A7s8mg8TFRoqervZTVZklsdlm2E5lT8x26MRWsTqLlF7i7zxq5cMZ3z2Or3kPzmafHHldw8SY_vS5bCJ5PYOIiH2jmtWbeZHit2sdWNbDlLdql6joIfCUey3LHTv87UuGnuZZeCLu7uVs2bcy-ER6H-98IoPBEle12y' }}
                className="h-10 w-10 rounded-full"
              />
              <View className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white dark:border-background-dark bg-primary" />
            </View>
            <View>
              <Text className="text-sm font-bold text-slate-900 dark:text-white font-display">Alex Johnson</Text>
              <Text className="text-[10px] text-primary font-display">Online • Active now</Text>
            </View>
          </View>
          <View className="flex-row items-center gap-1">
            <TouchableOpacity className="p-2 hover:bg-primary/10 rounded-full">
              <Icon name="call" size={20} color="#13ec5b" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 hover:bg-primary/10 rounded-full">
              <Icon name="videocam" size={20} color="#13ec5b" />
            </TouchableOpacity>
            <TouchableOpacity className="p-2 hover:bg-primary/10 rounded-full">
              <Icon name="info" size={20} color="#94a3b8" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Messages Area */}
        <ScrollView className="flex-1 p-4" showsVerticalScrollIndicator={false}>
          {/* Date Separator */}
          <View className="flex-row items-center justify-center mb-6">
            <View className="h-px flex-1 bg-primary/10" />
            <Text className="mx-4 text-[10px] font-medium uppercase tracking-widest text-slate-400 font-display">Today</Text>
            <View className="h-px flex-1 bg-primary/10" />
          </View>

          {/* Received Message */}
          <View className="flex-row items-start gap-3 mb-6">
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBm4BsPhDV14JYiCECWBMsz3k85IMxLnFvj-FpA3enBGpiF6EKYNiieaD27uwVMJFqN6wD5kRmKOmF_30bJlSUA7ePBFNPHb4lL1JVm2941YHjXxclwbIm2jY3CXZcEZWtlm2-Bgl5zKkIeAHiN8n7tLj2owEK3684j1qklPJWxkVMi0N33vgkhk7VCMJhihbYFgP0pIGYW7H5bdJDuKtD_z8fpvS-XGQvCB-SUDKOsttN4TTTaEbQwIuvpdrPW-KTnmaGwjTk-s60Z' }}
              className="h-8 w-8 rounded-full"
            />
            <View className="max-w-[75%] gap-1">
              <View className="rounded-2xl rounded-tl-none bg-primary/10 p-3">
                <Text className="text-sm text-slate-800 dark:text-slate-200 font-display">Hey! I finished the design review for the new dashboard.</Text>
              </View>
              <Text className="text-[10px] text-slate-400 font-display">10:15 AM</Text>
            </View>
          </View>

          {/* Sent Message */}
          <View className="flex-row items-start justify-end gap-3 mb-6">
            <View className="max-w-[75%] items-end gap-1">
              <View className="rounded-2xl rounded-tr-none bg-primary px-4 py-2">
                <Text className="text-sm font-medium text-slate-900 font-display">Awesome! Does it include the updated dark mode palette?</Text>
              </View>
              <View className="flex-row items-center gap-1">
                <Text className="text-[10px] text-slate-400 font-display">10:17 AM</Text>
                <Icon name="check-circle" size={12} color="#13ec5b" />
              </View>
            </View>
          </View>

          {/* Received Message with Attachment */}
          <View className="flex-row items-start gap-3 mb-6">
            <Image
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP0qAEAHi5D6aLKkChunJkWRYKxQFfz5n6_C8Q-r6Z3ZtivTtmMv2mf9YqYUNUJmLH6OUkBM7oFqqAsMLfVdjNqa3L1qW2ZmjbtfXTxL3lQgY45-7mLoiM3Nj_9jeEnLSVJ4A1N_sFyUYKrKMJ1Y1CDsp63OmJuzjbYma4ih8xc09aWt1eTFL39oo2K1gyTeDc_ihBpMdnIKHxhCi5mGxJYwbAihPCK-UWb-k5iPzdFeL_FIRcl0w5t5VYCcLXLjtXjrb1k7Hw4qbP' }}
              className="h-8 w-8 rounded-full"
            />
            <View className="max-w-[75%] gap-2">
              <View className="rounded-2xl rounded-tl-none bg-primary/10 p-3">
                <Text className="text-sm text-slate-800 dark:text-slate-200 font-display">Yes, it's all in there. Can you send the files?</Text>
              </View>
              {/* File Attachment Card */}
              <View className="flex-row items-center gap-3 rounded-xl border border-primary/20 bg-white dark:bg-black/20 p-3 shadow-sm">
                <View className="h-10 w-10 items-center justify-center rounded bg-primary/20">
                  <Icon name="description" size={20} color="#13ec5b" />
                </View>
                <View className="flex-1">
                  <Text className="text-xs font-semibold text-slate-900 dark:text-white font-display" numberOfLines={1}>Q4_Project_v2.fig</Text>
                  <Text className="text-[10px] text-slate-400 font-display">12.4 MB • Figma Design</Text>
                </View>
                <TouchableOpacity className="p-1">
                  <Icon name="download" size={20} color="#13ec5b" />
                </TouchableOpacity>
              </View>
              <Text className="text-[10px] text-slate-400 font-display">10:18 AM</Text>
            </View>
          </View>

          {/* Quick Action Buttons */}
          <View className="flex-row justify-center gap-2 py-4 mb-24">
            {['Got it!', 'Checking now', 'On it!'].map(text => (
              <TouchableOpacity key={text} className="rounded-full border border-primary/30 bg-primary/5 px-4 py-1.5">
                <Text className="text-xs font-medium text-primary font-display">{text}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Message Input Area */}
        <View className="border-t border-primary/10 bg-background-light/50 dark:bg-background-dark/80 p-4 pb-8">
          <View className="flex-row items-end gap-3 rounded-2xl bg-white dark:bg-black/20 border border-primary/10 p-2 shadow-sm">
            <View className="flex-row">
              <TouchableOpacity className="p-2">
                <Icon name="add-circle" size={24} color="#94a3b8" />
              </TouchableOpacity>
              <TouchableOpacity className="p-2">
                <Icon name="image" size={24} color="#94a3b8" />
              </TouchableOpacity>
            </View>
            <TextInput
              className="flex-1 border-none bg-transparent py-2 text-sm text-slate-900 dark:text-white font-display min-h-[40px] max-h-32"
              placeholder="Type a message..."
              placeholderTextColor="#94a3b8"
              multiline
            />
            <View className="flex-row items-center gap-2">
              <TouchableOpacity className="p-2">
                <Icon name="sentiment-satisfied" size={24} color="#94a3b8" />
              </TouchableOpacity>
              <TouchableOpacity className="h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/20">
                <Icon name="send" size={20} color="#102216" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
