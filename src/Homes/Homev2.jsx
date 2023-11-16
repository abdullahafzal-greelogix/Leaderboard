import React from 'react'
import Header from '../components/Header'
import Webheading from '../components/Webheading'
import Logos from '../components/Logos'
import Timer from '../components/Timer'
import Card from '../components/Card'
import Tablelist from '../components/Tablelist'

const Homev2 = () => {
  return (
    <div className='version2-design'>
        <Header/>
        <Webheading/>
        <Logos/>
        <Card/>
        <Timer/>
        <Tablelist/>
    </div>
  )
}

export default Homev2