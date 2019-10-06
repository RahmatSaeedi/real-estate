import React, { Component} from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Filter from './Filter'
import Listings from './Listings'
import listingsData from './data/listingsData'


class RealEstate extends Component {
  constructor () {
    super()
    this.state = {
      listingsData
    }
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
