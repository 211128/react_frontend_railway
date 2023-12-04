import React from 'react'
import Muscles from '../components/muscles'
import Back from '../components/back'
import Abdominales from '../components/abdominales'
import Arm from '../components/arm'
import Leg from '../components/leg'
import FooterA from '../components/footer'
import NavbarC from '../components/navbar'

function Exercises() {
  return (
    <>
        <NavbarC></NavbarC>
        <Muscles></Muscles>
        <Back></Back>
        <Abdominales></Abdominales>
        <Arm></Arm>
        <Leg></Leg>
        <FooterA></FooterA>
    </>
  )
}

export default Exercises;