import React from 'react'
import HeroSection from '../components/home/HeroSection'
import SolutionsSection from '../components/home/SolutionsSection'
import AboutSection from '../components/home/AboutSection'
import PersonalCareSection from '../components/home/PersonalCareSection'
import HotelAmenitiesSection from '../components/home/HotelAmenitiesSection'
import BulkOrdersSection from '../components/home/BulkOrdersSection'
import WhoWeServeSection from '../components/home/WhoWeServeSection'
import WhyChooseSection from '../components/home/WhyChooseSection'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <SolutionsSection/>
      <AboutSection/>
      <PersonalCareSection/>
      <BulkOrdersSection/>
      <HotelAmenitiesSection/>
      <WhoWeServeSection/>
      <WhyChooseSection/>
    </div>
  )
}

export default Home
