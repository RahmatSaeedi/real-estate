import React, {Component} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faSquare, faList, faTh, faMapMarker} from '@fortawesome/free-solid-svg-icons'


export default class Listings extends Component {
  constructor () {
    super()
    this.state = {}
    this.listListings = this.listListings.bind(this)
  }

  listListings () {
    var {listingsData} = this.props
    if (listingsData == undefined || listingsData.length == 0) {
      return (
      <div className="error">
        Sorry, your filter did not match any listing. 
      </div>)
    } else {
      return listingsData.map((listing, index) => {
      return (
        <div className="listing" key={index}>
          <div className="listing-img" style={{background: `url("${listing.image}") no-repeat center center`}}>
            <span className="address">{listing.address}</span>
            <div className="details">
              <div className="user-img"></div>
              <div className="user-details">
                <span className="user-name">Jane Smith</span>
                <span className="post-date">2019/05/05</span>
              </div>
              <div className="listing-details">
                <div className="floor-space" > <FontAwesomeIcon icon={faSquare} className="fa" /> <span>{listing.floorSpace} ft&#178;</span> </div>
                <div className="bedrooms"><FontAwesomeIcon icon={faBed} className="fa" /> <span>{listing.bedrooms} bedrooms</span></div>
                <div className="view-listing-btn">View Listing</div>
              </div>
            </div>
          </div>
          <div className="bottom-info">
            <span className="rent">${listing.price} / month</span>
            <span className="location"><FontAwesomeIcon icon={faMapMarker}/> {listing.neighbourhood}, {listing.city}</span>
          </div>
        </div>
      )
      })
    }
  }

  render () {
    var listListingsClass
    if(this.props.globalState.view == 'box'){
      listListingsClass = "col-md-3";
    } else {
      listListingsClass = "col-md-12";
    }

    return (
    <section id='listings'>
      <section className="search-area" >
        <input type="text" name="search" onChange={this.props.change} />
      </section>
      <section className="sortby-area" >
        <div id="results">390 results found</div>
        <div id="sort-options">
          <select name="sortby" id="sortby" onChange={this.props.change}>
            <option value="price-asc">Lowest Price</option>
            <option value="price-dsc">Highest Price</option>
          </select>
          <div className="view">
            <FontAwesomeIcon icon={faList} className='fa' onClick={this.props.changeView.bind(null,"list")} />
            <FontAwesomeIcon icon={faTh} className='fa' onClick={this.props.changeView.bind(null,"box")} />
          </div>
        </div>
      </section>
      <section id="listings-results">

      <div className={listListingsClass}>
        {this.listListings()}
      </div>

      </section>
      <section id="pagination">
        <ul className="pages">
          <li>Prev</li>
          <li>1</li>
          <li className="active">2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
          <li>Next</li>
        </ul>
      </section>
    </section>
    )
  }
}