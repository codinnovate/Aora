import { View,Image, Text, ScrollView } from 'react-native'
import React, { useContext } from 'react'
import { Link, Redirect,router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import CustomButton from '@/components/CustomButton'
import { StatusBar } from 'expo-status-bar'

const App = () => {

  // if(!isLoading && isLoggedIn ) return <Redirect href='/home' />
  return (
    <SafeAreaView className='bg-primary h-full '>
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className='w-full  justify-center items-center h-full px-4'>
          <Image
            source={images.logo}
            className='w-[130px] h-[84px]'
            resizeMode="contain"
          />
          <Image
            className='max-w-[380px] w-full h-[300px]'
            resizeMode='contain'
            source={images.cards} />
          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center'>
              Discover How Brilliant You're with {''}
              <Text className='text-secondary-200'>Passpadi</Text>
            </Text>
              <Image
                source={images.path}
                resizeMode='contain'
                className='-bottom-2 -right-8 h-[15px] absolute w-[136px]' />
            </View>
          <Text className='text-sm font-pregular  mt-7 text-center text-gray-100'>passpadi is the platform for students who wants to get it, built for students by students..</Text>
          <CustomButton
            title='Continue with Email'
            handlePress={() => router.push('/sign-in')}
            containerStyles='w-full mt-7'
          />
          
        </View>
        
    </ScrollView>
    </SafeAreaView>
  )
}

export default App