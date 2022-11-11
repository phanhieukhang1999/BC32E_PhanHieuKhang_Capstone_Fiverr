import React from 'react'
import HomeContent from '../../components/HomeContent/HomeContent'
import ServicesCarousel from '../../components/ServicesCarousel/ServicesCarousel'
import HomeCarousel from '../../templates/HomeTemplate/HomeCarousel/HomeCarousel'

export default function Home() {
  return (
    <div>
      <HomeCarousel />
      <ServicesCarousel/>
      <HomeContent/>
    </div>
  )
}
