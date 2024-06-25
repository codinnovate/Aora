import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

export default function Subject({subject}) {
  return (
      <TouchableOpacity
          className='bg-white w-full h-[60px] m-2 justify-center border border-secondary-100 rounded-2xl flex  p-3'>
      <Text className='text-xl font-medium'>{subject}</Text>
    </TouchableOpacity>
  )
}