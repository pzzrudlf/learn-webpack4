import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';

class App extends Component {
  constructor(){
    super();
    this.state = {
      homeLink: 'Home 0'
    }
  }
  onGreet(age){
    alert("greet in app " + age);
  }
  onChangeLink(newName){
    this.setState({
      homeLink: newName
    })
  }  
  render() {
    const user = {
      name: 'pzzrudlf',
      hobbies: ['reading', 'coding']
    }
    return (
      <div className="container">
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <Header homeLink={this.state.homeLink} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-1 col-xs-offset-11">
          <Home 
            name={"zouxiaojie"} 
            initialAge={6} 
            user={user} 
            greet={this.onGreet} 
            changeLink={this.onChangeLink.bind(this)} 
            initialName={this.state.homeLink}
            />
        </div>
      </div>
    </div>
    );
  }
}

export default App;