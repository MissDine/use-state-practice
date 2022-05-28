import React, { Component } from 'react'

class Count extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    increament (){
        this.setState({count:this.state.count + 1})
    }
  render() {
    return (
        <>
            <div>Count - {this.state.count}</div>
            <button onClick = {() => this.increament()}>Increament</button>
        </>
    )
  }
}

export default Count