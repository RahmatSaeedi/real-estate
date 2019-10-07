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
      sortby: 'price-dsc',
      view: 'box',

      filteredData: listingsData,
      populateFormsData: ''
    }
    this.change = this.change.bind(this)
    this.filteredData = this.filteredData.bind(this)
    this.populateForm = this.populateForm.bind(this)
  }

  componentWillMount(){
    var listingsData =  this.state.listingsData.sort((a,b) => {
      return a.price - b.price
    })
    
    this.setState({
      listingsData
    })
  }


  change(event) {
    const name=event.target.name
    const value= (event.target.type === 'checkbox') ?  event.target.checked : event.target.value
    this.setState({
      [name]: value
    }, ()=>{
      this.filteredData()
    },     console.log(this.state.sortby))

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

    if (this.state.sortby == 'price-asc') {
      newData = newData.sort((a,b)=> {
        return a.price - b.price
      })
    } else {
      newData = newData.sort((a,b)=> {
        return b.price - a.price
      })
    }

    this.setState({
      filteredData: newData
    })
  }

  populateForm () {
    // Neighbourhood
    var neighbourhoods = this.state.listingsData.map((item) => {
      return item.neighbourhood
    })
    neighbourhoods = new Set(neighbourhoods)
    neighbourhoods = [...neighbourhoods].sort()

    // Home Type
    var homeTypes = this.state.listingsData.map((item) => {
      return item.homeType
    })
    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes].sort()


    // Bedrooms
    var bedrooms = this.state.listingsData.map((item) => {
      return item.bedrooms
    })
    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms].sort()

    this.setState({
      populateFormsData: {
        neighbourhoods,
        homeTypes,
        bedrooms       
      }
    })
  }

  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state} populateAction={this.populateForm}/>
        <Listings change={this.change} globalState={this.state} listingsData={this.state.filteredData}/>
      </section>
      <div className="footer">welp</div>
      
    </div>)
  }
}




const app = document.getElementById('app')
ReactDOM.render(<RealEstate />, app)
