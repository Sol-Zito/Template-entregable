import React from 'react'

const Card = ( {data} ) => {
    const {nombre, apellido } = data
  return (
    <div>
      <h2>Hola {nombre} {apellido}!!</h2>
    </div>
  )
}

export default Card
