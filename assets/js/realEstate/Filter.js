import React, {Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = { }
    this.neighbourhoods = this.neighbourhoods.bind(this)
    this.homeTypes = this.homeTypes.bind(this)
    this.bedrooms = this.bedrooms.bind(this)
  }
  componentWillMount() {
    this.props.populateAction()
  }

  neighbourhoods() {
    if (this.props.globalState.populateFormsData.neighbourhoods != undefined) {
      var {neighbourhoods} = this.props.globalState.populateFormsData
      return neighbourhoods.map((item, index)=>{
        return (<option key={index} value={item}>{item}</option>)
      })
    }

  }

  homeTypes() {
    if (this.props.globalState.populateFormsData.homeTypes != undefined) {
      var {homeTypes} = this.props.globalState.populateFormsData
      return homeTypes.map((item, index)=>{
        return (<option key={index} value={item}>{item}</option>)
      })
    }  
  }

  bedrooms() {
    if (this.props.globalState.populateFormsData.bedrooms != undefined) {
      var {bedrooms} = this.props.globalState.populateFormsData
      return bedrooms.map((item, index)=>{
        return (<option key={index} value={item}>{item}+ bedrooms</option>)
      })
    }  
  }

  render () {
    return (<section id='filter'>
      <h4>Filter</h4>
      <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
        <option value="all">Neighbourhood</option>
        {this.neighbourhoods()}
      </select>

      <select name="homeType" className="filters home-type" onChange={this.props.change}>
        <option value="any">Home Type</option>
        {this.homeTypes()}
      </select>

      <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
        <option value='any'># of bedroom</option>
        {this.bedrooms()}
      </select>

      <div className="filters price">
        <span className="title">Price</span>
        <input type="text" name="min_price"  onChange={this.props.change} value={this.props.globalState.min_price}/>
        <input type="text" name="max_price"  onChange={this.props.change} value={this.props.globalState.max_price}/>
      </div>

      <div className="filters space">
        <span className="title">Floor Space</span>
        <input type="text" name="min_space"  onChange={this.props.change} value={this.props.globalState.min_space}/>
        <input type="text" name="max_space"  onChange={this.props.change}  value={this.props.globalState.max_space}/>
      </div>


      <div className='filters extras'>
        <span className="title"> Extras </span>
        <label htmlFor='extras'>
          Elevators 
          <input type="checkbox" value="elevators" name="elevator" onChange={this.props.change}/>
        </label>

        <label htmlFor='extras'>
          Swimming pool
          <input type="checkbox" value="swimmingPool" name="pool" onChange={this.props.change}/>
        </label>

        <label htmlFor='extras'>
          Finished Basement
          <input type="checkbox" value="finishedBasement" name="basement" onChange={this.props.change}/>
        </label>

        <label htmlFor='extras'>
          Gym
          <input type="checkbox" value="gym" name="gym" onChange={this.props.change}/>
        </label>
      </div>

    </section>);
  };
}
