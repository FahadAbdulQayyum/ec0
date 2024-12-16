import FlashSale from '@/components/FlashSale'
import FirstLook from '@/components/FirstLook'
import Hero from '@/components/Hero'
import NikeApp from '@/components/NikeApp'
import React from 'react'
import Featured from '@/components/Featured'
import GearUp from '@/components/Gearup'
import DontMiss from '@/components/DontMiss'
import Essential from '@/components/Essential'
import CategoryList from '@/components/CategoryList'

import { Provider } from 'react-redux';
import { store } from './store/store';

const page = () => {
  return (
    <div>
      <Provider store={store}>
        <NikeApp />
        <Hero />
        <FirstLook />
        <FlashSale />
        <Featured />
        <GearUp />
        <DontMiss />
        <Essential />
        <CategoryList />
      </Provider>
    </div>
  )
}

export default page
