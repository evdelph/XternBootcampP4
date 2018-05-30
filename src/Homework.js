import React, {Component} from 'react'

import './Homework.css'

class Homework extends Component{
  state = {
      lat: '',
      long: '',
  }

  handleChange= (ev) => {
      this.setState({lat: ev.target, long: ev.target})
  }

  render(){

  return (
    <div className="googleMap">
        <div className = "input">
            <form>
                Enter Latitude Coordinate:
                <input type="decimal" onChange={this.handleChange}/>
            </form>
        </div>
        <br/>
        <div className = "input">
            <form>
                Enter Longitude Coordinate:
                <input type="decimal" onChange={this.handleChange}/>
            </form>
        </div>
        <div className="button">
            <button type="submit">Enter</button>
        </div>
    </div>
  )
 }
}

export default Homework