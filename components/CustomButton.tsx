import { View,TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyles, textStyles, isLoading}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      disabled={isLoading}
      className={`${containerStyles} bg-secondary rounded-xl min-h-[62px] justify-center items-center ${isLoading ? "opacity-50": ""}`}>
      <Text className={`${textStyles} text-primary font-psemibold text-lg `}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton