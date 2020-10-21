import React from 'react'

class App extends React.Component {

    state = {
        data: []
    }

    fetchData = () => {
        fetch('http://api.open-notify.org/astros.json')
        .then(resp => resp.json())
        .then(data => {
            this.setState({data: data})
        })

    }

    componentDidMount() {
        this.fetchData()
        console.log(this.state.data)
    }

    render() {
        console.log(this.state.data)
        console.log(this.state.data.people)
        return(
            <div>App</div>
        )
    }
}

export default App;