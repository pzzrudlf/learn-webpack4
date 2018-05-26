import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.initialAge,
      homeLink: props.initialName
    }
  }
  onMakeOlder() {
    this.setState({
      age: this.state.age + 3
    })
  }
  handleGreet(){
    this.props.greet(this.state.age);
  }
  handleChangeLink(){
    this.props.changeLink(this.state.homeLink)
  }
  onHandleChange(event){
    this.setState({
      homeLink: event.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-1 col-xs-offset-11">
            <h1>Home</h1>
            <div>{this.state.age}</div>
            <button onClick={()=>{this.onMakeOlder()}} className="btn btn-primary">Make me older</button>
            <br />
            <br />
            <button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older</button>
            <br />
            <br />
            <button onClick={()=>{this.handleGreet()}} className="btn btn-primary">greet</button>
            <br />
            <br />
            <button onClick={this.handleGreet.bind(this)} className="btn btn-primary">greet</button>
            <br />
            <br />
            <button onClick={this.handleChangeLink.bind(this)} className="btn btn-primary">change home link</button>
            <br />
            <br />
            <input 
              type="text"
              value={this.state.homeLink}
              onChange={(event)=>{this.onHandleChange(event)}}
             /> 
            <button onClick={()=>{this.handleChangeLink()}} className="btn btn-primary">change home link</button>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  user: PropTypes.object,
  initialName: PropTypes.string
}