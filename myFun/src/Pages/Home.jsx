import React from 'react'
import Header from '../component/Header'
import Card from '../component/Card'
import data from '../Data/Data'

function Home() {
  return (
    <div>
      <Header/>
      <Card props={data}/>
      Welcome this is your Home!
    </div>
  )
}

export default Home
