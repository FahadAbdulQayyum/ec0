import FlashSale from '@/components/FlashSale'
import FirstLook from '@/components/FirstLook'
import Hero from '@/components/Hero'
import NikeApp from '@/components/NikeApp'
import React from 'react'
import Featured from '@/components/Featured'
import GearUp from '@/components/Gearup'

const page = () => {
  return (
    <div>
      <NikeApp />
      <Hero />
      <FirstLook />
      <FlashSale />
      <Featured />
      <GearUp />
    </div>
  )
}

export default page
