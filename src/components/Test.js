import React from 'react'

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({ number: this.state.number + 1 })
    }

    render() {
        return <div>{this.state.number}<button onClick={this.handleClick}>Click</button></div>
    }
}

export default Test;