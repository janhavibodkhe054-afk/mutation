import React from 'react'
import PrivateLabelHero from '../components/private-lebel/PrivateLabelHero'
import PrivateLabelIntro from '../components/private-lebel/PrivateLabelIntro'
import PrivateLabelManufacturing from '../components/private-lebel/PrivateLabelManufacturing'
import PrivateLabelProcess from '../components/private-lebel/PrivateLabelProcess'
import PrivateLabelCTA from '../components/private-lebel/PrivateLabelCTA'

const PrivateLabel = () => {
  return (
    <div>
      <PrivateLabelHero/>
      <PrivateLabelIntro/>
      <PrivateLabelManufacturing/>
      <PrivateLabelProcess/>
      <PrivateLabelCTA/>
    </div>
  )
}

export default PrivateLabel
