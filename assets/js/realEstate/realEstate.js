import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'

class RealEstate extends Component {
  constructor () {
    super()
    this.state = { };
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter />
        <Listings />
      </section>
      <div className="footer">welp</div>
      
    </div>);
  }
}




const app = document.getElementById('app')
ReactDOM.render(<RealEstate />, app)
