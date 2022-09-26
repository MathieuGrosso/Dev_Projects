import React, { Component } from 'react';

class Counter extends Component {

    constructor(props){
        super(props)
        this.state={
            count:0

        }
    }

	increment = () => {
		this.setState({
            count: this.state.count + 1,
        })

    }

	decrement = () => {
		this.setState({
            count: this.state.count - 1,
        })

    }
    render() {
        return (
            <div>
                <div>a quick counter
				<p>the count is: {this.state.count} </p>
				<button onClick={this.increment} >+</button>
				<button onClik={this.decrement}>-</button>
			</div>
            </div>
        );
    }
}

export default Counter;