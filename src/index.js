import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app.js'

/*
//stateless functional components
const MyFunctionalComponent = props => {
  return (
    <h1 className={props.color}>
    <span>{props.title}</span>
    </h1>
  )
}

//es6 class component
class MyClassComponent extends React.Component {
  
  constructor () {
    super()
    this.state = { title: 'Foo'}
  }
  
  render () {
    return (
      <h1 className={this.props.color}>
      <span>{this.props.title}</span>
      </h1>
    )
  }
}

//old way 
var MyComponent = React.createClass ({
  render: function () {
    return (
      <h1 className={this.props.color}>
      <span>{this.props.title}</span>
      </h1>
    )
  }  
})
*/
ReactDOM.render( 
  <App />,
  /*
  <div>
    <h1 className="red">Hello World</h1>
    <h2 className="green">Goodbye</h2> 
    <MyComponent color="blue" title="Stanley Cruse" />
    <MyClassComponent color="green" title="Stanley Class" />
    <MyFunctionalComponent color="red" title="Stanley Func" />
    <footer className="red">All rights..</footer> 
  </div>,
  */
    document.getElementById('root')
)

