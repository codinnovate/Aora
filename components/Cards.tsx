import { View,Image, Text, TouchableOpacity } from 'react-native';
import React from 'react'
import assets from '@/assets';
import { router } from 'expo-router';

const Cards = () => {
  return (
      <View className='bg-secondary relative p-2 h-[200px] rounded-3xl mt-5'>
          <Image
              src={assets.pattern}
              alt='pattern'
              height={200}
              width={200}
              className='h-49 w-30 top-0 right-0'
          />
          <View className='flex h-full justify-evenly ml-3'>
              <View >
                  <Text className='text-white text-3xl font-medium'>Cbt Mode</Text>
              </View>
              <TouchableOpacity
                  onPress={() => router.push('/cbt')}
                  className='bg-white rounded-2xl h-[60px] flex justify-center items-center'>
                  <Text className='text-xl font-medium'>Start Now</Text>
              </TouchableOpacity>
          </View>
     </View>
  )
}
export default Cards

