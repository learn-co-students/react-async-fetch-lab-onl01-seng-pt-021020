import React, {Component} from 'react';

export default class App extends Component {

  state = {
    data: null
  }

  componentDidMount(){
    fetch('http://api.open-notify.org/astros.json')
    .then((r)=> r.json())
    .then((data)=> {
      this.setState({
        data: data
      })
    })
  }

  render(){
    return(
      <div>
        <button>Click Me</button>
      </div>
    )
  }
}
