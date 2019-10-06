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
      max_price: 10000,
      min_space: 0,
      max_space: 10000,
    }
    this.change = this.change.bind(this)
  }

  change(event) {
    const name=event.target.name;
    const value= (event.target.type === 'checkbox') ?  event.target.checked : event.target.value;
    this.setState({
      [name]: value
    }, ()=>{
      console.log(this.state);
    });

  }
  render () {
    return (<div>
      <Header />
      <section id="content-area">
        <Filter change={this.change} globalState={this.state}/>
        <Listings listingsData={this.state.listingsData}/>
      </section>
      <div className="footer">welp</div>
      
    </div>);
  }
}




const app = document.getElementById('app')
ReactDOM.render(<RealEstate />, app)
