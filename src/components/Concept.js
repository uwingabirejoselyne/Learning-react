import React from 'react'

const Concept = (props) => {
  return (
    <li>
          <img alt='todo'></img>
          <h2 > {props.name}</h2>
          <p> {props.description}</p>

        </li>
  )
}

export default Concept
