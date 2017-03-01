import React from 'react'

//stateless functional components
const MyFunctionalComponent = props => {
  return (
    <h1 className={props.color}>
    <span>{props.title}</span>
    </h1>
  )
}

export default MyFunctionalComponent