import React from 'react'
import MyFunctionalComponent from './components/my-func-component'
import MyComponent from './components/my-component'
import MyClassComponent from './components/my-class-component'

class App extends React.Component {
  render () {
    return (
      <div>
        <MyComponent color="blue" title="Stanley Cruse" />
        <MyClassComponent color="green" title="Stanley Class" />
        <MyFunctionalComponent color="red" title="Stanley Func" /> 
      </div>
    )
  }
}

export default App
