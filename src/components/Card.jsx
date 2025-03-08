import React from 'react'

export default function Card( { title, value } ) {
  return (
    <div>
        <p>{ title }</p>
        <h3>{ value }</h3>
    </div>
  )
}
