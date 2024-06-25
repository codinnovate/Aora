import { View, Text, ScrollView,Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { createUser } from '@/lib/appwrite';

const SignUp = () => {
  const [form, setForm] = useState({
    username:'',
    email: '',
    password:'',
  });
  // const [isSubmitting, setIsSubmitting ] = useState(false)

  // const submit = async () => {
  //   if (!form.username || !form.email || !form.password) {
  //     Alert.alert("Error", "Please fill in all the fields")
  //   }
  //   setIsSubmitting(true);

  //   try {
  //     const result = await createUser(form.email, form.password, form.username)
  //     router.replace('/home');
  //   } catch (error) {
  //     Alert.alert('Error', error.message)
  //   } finally {
  //     setIsSubmitting(false)
  //   }
    

  // }
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
         <Image source={images.logo} className='w-[115px] h-[35px] '  />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Sign up to Passpadi</Text>
          
          <FormField
            placeholder="Enter username"
            title="Username"
            value={form.username}
            handleChangeText={(e) => setForm({ ...form, username: e })}
            otherStyles='mt-7'
          />
          <FormField
            placeholder="Enter Email"
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles='mt-7'
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles='mt-7'
          />
          <CustomButton
            title="Sign In"
            handlePress={submit}
            containerStyles="mt-7"
          />
          <View  className='justify-center  flex-row pt-5 gap-2'>
            <Text className='text-lg text-gray-100'>Have an account already ? </Text>
            <Link href='/sign-in' className='font-psemibold text-secondary text-lg'>Sign Up</Link>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignUp 