import React from 'react'
import AboutSection from '../components/home/AboutSection'
import AboutHero from '../components/about/AboutHero'
import WhoWeAre from '../components/about/WhoWeAre'
import FounderSection from '../components/about/FounderSection'
import MissionVision from '../components/about/MissionVision'
import WhyChooseUs from '../components/about/WhyChooseUs'

const About = () => {
  return (
    <div>
      <AboutHero/>
      <WhoWeAre/>
      <FounderSection/>
      <MissionVision/>
      <WhyChooseUs/>
    </div>
  )
}

export default About
