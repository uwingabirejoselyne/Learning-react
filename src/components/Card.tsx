import React from 'react'
import { ReactElement } from 'react'

interface CardProps {
  title: string ,
  name : string 
}
const Card = ({title,name}:CardProps): ReactElement => {
  const handleClick = ()=>{
    console.log('button clicked');
    
  }
  return (
    <div className='bg-gray-400 h-24 flex justify-between items-center'>
        <div className='flex justify-between items-center mx-5'>
         <div>
        <div className='border border-white rounded-sm w-12 h-12  bg-black  '>
        </div>
        <h1> {title}</h1>
        </div>
        <div>
        <div className='border border-white rounded-sm w-12 h-12  bg-black  '>
        </div>
        <h1> {name}</h1>
        </div>
        <button onClick={handleClick}>Change Tittle</button>
        </div>
    </div>
  )
}

export default Card
