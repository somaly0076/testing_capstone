import React from 'react'
import Profile from './reusable/Profile'
import Navbar from './reusable/Navbar'
import Footer from './reusable/Footer'
const UserProfile = () => {
  const user = {
    entity : "sisowath",
    firstName : "Sisowath",
    lastName : "Kumara",
    location : "Colombo",
    email : "sisowath@gmail.com",
    password : "password123"
  }

  console.log(user)
  return (
    <>
    <div>
    <Navbar />
    <Profile userData={user}/>
    </div>
    <Footer />
    </>
  )
}

export default UserProfile