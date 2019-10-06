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
      listingsData,
      min_price: 0,
      max_price: 100000,
      min_space: 0,
      max_space: 100000,
      bedrooms: 'any',
      neighbourhood: 'all',
      homeType: 'any',
      elevator: false,
      pool: false,
      basement: false,
      gym: false,

      filteredData: listingsData
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForm = this.populateForm.bind(this)
  }


  change(event) {
    const name=event.target.name
    const value= (event.target.type === 'checkbox') ?  event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, ()=>{
      this.filteredData()
    })

  }

  filteredData () {
    var newData = this.state.listingsData.filter((listing) => {
      return (
        (listing.price >= this.state.min_price) &&
        (listing.price <= this.state.max_price) && 
        (listing.floorSpace >= this.state.min_space) &&
        (listing.floorSpace <= this.state.max_space) &&
        (listing.bedrooms >= this.state.bedrooms || this.state.bedrooms == 'any') &&
        (listing.neighbourhood == this.state.neighbourhood || this.state.neighbourhood == 'all') && 
        (listing.homeType == this.state.homeType || this.state.homeType == 'any') && 
        (this.state.gym ? listing.extras.includes('gym') : true) && 
        (this.state.elevator ? listing.extras.includes('elevator') : true) && 
        (this.state.pool ? listing.extras.includes('pool') : true) && 
        (this.state.basement ? listing.extras.includes('basement') : true)
      )
    })
    this.setState({
      filteredData: newData
    })
  }

  populateForm () {
    
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state}/>
        <Listings listingsData={this.state.filteredData}/>
      </section>
      <div className="footer">welp</div>
      
    </div>)
  }
}




const app = document.getElementById('app')
ReactDOM.render(<RealEstate />, app)
