import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'

class RealEstate extends Component {
  constructor () {
    super()
    this.state = { };
  }

  render () {
    return (<div>
      <Header />
    </div>);
  }
}




const app = document.getElementById('app')
ReactDOM.render(<RealEstate />, app)
