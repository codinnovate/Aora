import { View, Text } from 'react-native'
import React from 'react'

const Header = () => {
  return (
      <View className='w-full  flex-row justify-between p-2 mt-2'>
          <View className='text-white'>
              <Text className='text-white text-xl'>Hello!</Text>
              <Text className='text-secondary text-2xl font-psemibold'>Cody</Text>
          </View>
          <View className='rounded-full w-12 h-15 border border-secondary'>
          </View>
    </View>
  )
}

export default Header