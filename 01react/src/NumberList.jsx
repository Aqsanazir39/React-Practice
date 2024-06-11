import React from 'react'

function NumberList() {
  const names = ['Bano' , 'Ali' , 'Jazib']
  return (
    <div>
      {
        names.map(name => <h2>{name}</h2>)
      }

    </div>
  )
}

export default NumberList