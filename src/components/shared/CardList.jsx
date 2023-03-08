import React from 'react'
import Card from './Card'

const CardList = ({list}) => {
  return (
    <div className='cards'>
        {list.map(c => (<Card key={c.id} title={c.title} description={c.description} img={c.img} />))}
    </div>
  )
}

export default CardList