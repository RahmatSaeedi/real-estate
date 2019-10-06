import React, {Component} from 'react';

export default class Filter extends Component {
  constructor () {
    super()
    this.state = { }
  }
  render () {
    return (<section id='filter'>
      <h4>Filter</h4>
      <select name="neighbourhood" className="filters neighbourhood" onChange={this.props.change}>
        <option value="Castle Downs">Castle Downs</option>
        <option value="Northgate">Northgate</option>
        <option value="Southgate">Southgate</option>
        <option value="Downtown">Downtown</option>
      </select>

      <select name="house-type" className="filters house-type" onChange={this.props.change}>
        <option value="Townhouse">Townhouse</option>
        <option value="Semi-detached">Semi-detached</option>
        <option value="Duplex">Duplex</option>
        <option value="Apartment">Apartment</option>
      </select>

      <select name="bedrooms" className="filters bedrooms" onChange={this.props.change}>
        <option value='1'>1 bedroom</option>
        <option value='2'>2 bedroom</option>
        <option value='3'>3 bedroom</option>
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
