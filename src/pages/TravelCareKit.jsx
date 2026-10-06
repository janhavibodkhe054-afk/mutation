import React from 'react'
import TravelCareHero from '../components/travel-care/TravelCareHero'
import TravelKitSection from '../components/travel-care/TravelKitSection'
import TravelCareAudience from '../components/travel-care/TravelCareAudience'
import TravelCustomBulk from '../components/travel-care/TravelCustomBulk'
import TravelCareCTA from '../components/travel-care/TravelCareCTA'

const TravelCareKit = () => {
  return (
    <div>
      <TravelCareHero/>
      <TravelKitSection/>
      <TravelCareAudience/>
      <TravelCustomBulk/>
      <TravelCareCTA/>
    </div>
  )
}

export default TravelCareKit
