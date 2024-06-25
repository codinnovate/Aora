import { Image, View, Text, FlatList, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { images } from '@/constants'
import SearchInput from '@/components/SearchInput'
import Header from '@/components/Header'
import Cards from '@/components/Cards'
import Subject from '@/components/subject'


const subjects = [
  {name:"Mathematics", link:'/math' , id:1},
  {name:"English", link:'/english' , id:2},
  {name:"General Paper", link:'/gp' , id:3},
]
const Home = () => {
  return (
    <SafeAreaView
      className='bg-primary h-full p-3 w-full'>
      <ScrollView>
      <View className='flex w-full '>
        <Header />
        <View className='flex  flex-col'>
          <Cards />
          <View className='flex flex-row flex-wrap p-2 items-center justify-center'>
            {subjects.map(item => (
              <Subject
                key={item.id}
                subject={item.name}
              />

            ))}
            </View>
            
        </View>

        
      </View>



            <StatusBar
            backgroundColor='#161622'
            style='light'
            />
            </ScrollView>
    </SafeAreaView>
  )
}

export default Home