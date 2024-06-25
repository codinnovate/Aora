import { SafeAreaView, View, Text, StatusBar, } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';


export default function Cbt() {
  return (
      <SafeAreaView className='h-full bg-primary p-2'>
          <View className='flex flex-row w-full items-center justify-between p-3'>
              <Link
                  href='/home'
                  className='border-1 border-white  rounded-full flex items-center justify-center p-2 w-12'>
                  <Ionicons
                      name="chevron-back-outline"
                      size={24} color="white" />
              </Link>
              <Text className='text-white text-2xl font-medium'>CBT Mode</Text>
              <View>
                  <Text className='text-white'>
                  20mis
                  </Text>
              </View>
          </View>
          
    </SafeAreaView>
  )
}