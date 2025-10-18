import React from 'react'
import AboutHero from "../components/AboutHero"
import Testimonials from "../components/Testimonials"
import StatsSection from "../components/StatsSection"
import HowWeWork from '../components/HowWeWork'
import OurTeamSouthIndia from '../components/OurTeam'
import FAQAns from '../components/Faq'

const About = () => {
  return (
    <>
    <AboutHero/>
    <HowWeWork/>
    <Testimonials/>
    <OurTeamSouthIndia/>
    <StatsSection/>
    <FAQAns/>
    </>
  )
}

export default About