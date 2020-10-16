import React, { Component } from 'react'


export default class App extends Component {
    state = {
        content: 'Loading content'
    }

    render() {
        return (
            <div>
                {this.state.content}
            </div>
        )
    }

    componentDidMount() {
        fetch('http://api.open-notify.org/astros.json')
        .then(response => response.json())
        .then(json => this.setState({
            content: <ul>{Array.from(json.people).map(astro => { return <li>{JSON.stringify(astro)}</li> })}</ul>
        }))
    }
}
