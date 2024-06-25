import { View, Text, ScrollView,Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import FormField from '@/components/FormField';
import CustomButton from '@/components/CustomButton';
import { Link, router } from 'expo-router';
import { signIn } from '@/lib/appwrite';
import { Alert } from 'react-native';


const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password:'',
  });
  // const [isSubmitting, setIsSubmitting ] = useState(false)

  // const submit = async () => {
  //   if (!form.email || !form.password) {
  //     Alert.alert("Error", "Please fill in all the fields")
  //   }
  //   setIsSubmitting(true);

    router.replace('/home');
    // try {
    //   await signIn(form.email, form.password, form.username)
    // } catch (error) {
    //   Alert.alert('Error', error.message)
    // } finally {
    //   setIsSubmitting(false)
    // }    


  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView>
        <View className='w-full justify-center h-full px-4 my-6'>
         <Image source={images.logo} className='w-[115px] h-[35px] '  />
          <Text className='text-2xl text-white text-semibold mt-10 font-psemibold'>Log in to Passpadi</Text>
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
            handlePress={() => router.replace('/home')}
            containerStyles="mt-7"
          />
          <View  className='justify-center  flex-row pt-5 gap-2'>
            <Text className='text-lg text-gray-100'>Don't have account ? </Text>
            <Link href='/home' className='font-psemibold text-secondary text-lg'>Sign Up</Link>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn 