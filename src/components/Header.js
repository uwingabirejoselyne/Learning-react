import React from 'react'
import person from '../assets/images/person.jpg.jpg'


const Header = () => {
  return (
    <div>
       <header>
        <img src={person} alt='person'></img>
        <h1>React concepts</h1>
        <p>Selecte key concept you should know about</p>
      </header>
    </div>
  )
}

export default Header
