 
import React from "react";
import Hero from './components/Hero'
import Card from './components/Card'
import data from "./data"
import './App.css'

export default function App() {  
  const cardElements = data.map(item => {
    return <Card 
      key = {item.id}
      {...item}/>
  }
  )

  return (
    <>
      <Hero />
      <section className="cardList">
                {cardElements}  
            </section>
    </>
  )
}
 
