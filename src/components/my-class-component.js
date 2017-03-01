import React from 'react'
//es6 class component
class MyClassComponent extends React.Component {
  /*
  constructor () {
    super()
    this.state = { title: 'Foo'}
  }
  */
  render () {
    return (
      <h1 className={this.props.color}>
      <span>{this.props.title}</span>
      </h1>
    )
  }
}

export default MyClassComponent 