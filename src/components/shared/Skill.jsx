import React from 'react'

const Skill = ({title, percentage}) => {
  return (
    <li><label htmlFor={title}>{title}</label><progress id={title} value={percentage} max="100"> 32% </progress></li>
  )
}

export default Skill