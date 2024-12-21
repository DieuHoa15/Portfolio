import React from 'react'
import Navbar from '../components/Navbar'
import Contact from '../components/Contact'

const ContactPage = () => {
  return (
    <div className="bg-stone-200 h-screen">
      <Navbar/>
      <main className="animate-fade">
        <Contact/>
      </main>
    </div>
  )
}

export default ContactPage