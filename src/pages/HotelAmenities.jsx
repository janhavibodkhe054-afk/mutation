import React from 'react'
import HotelAmenitiesHero from '../components/hotel-amenities/HotelAmenitiesHero'
import HospitalitySolutions from '../components/hotel-amenities/HospitalitySolutions'
import HotelAmenityRange from '../components/hotel-amenities/HotelAmenityRange'
import HotelAmenitiesCTA from '../components/hotel-amenities/HotelAmenitiesCTA'

const HotelAmenities = () => {
  return (
    <div>
      <HotelAmenitiesHero/>
      <HotelAmenityRange/>
      <HospitalitySolutions/>
      <HotelAmenitiesCTA/>
    </div>
  )
}

export default HotelAmenities
