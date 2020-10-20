// create your App component here
import React from 'react'

class App extends React.Component {

    state = {
        spacePeople: []
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
            .then(resp => resp.json())
            .then(data => {
                this.setState({
                    spacePeople: data.people.map(p => p.name)
                })
            })
    }

    render() {
        return (
            <div>
                <div>{this.state.spacePeople}</div>
            </div>
        )
    }
}

export default App