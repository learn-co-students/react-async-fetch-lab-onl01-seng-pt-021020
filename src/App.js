// create your App component here
import React from 'react';

class App extends React.Component {

    state={
        peopleInCosmos:[]
    }

    updatePeople = data =>{
        this.setState({
            peopleInCosmos: data
        })
    }
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(resp=>resp.json())
        .then(data=>this.updatePeople(data.people))
    }

    render() {
        return( 
            this.state.peopleInCosmos.map(person=>{
                return (
                    <div>Person: {person.name} - Craft: {person.craft}</div>
                )
            })
       )


    }
}
export default App;