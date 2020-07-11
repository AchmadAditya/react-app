import React, { Component } from 'react';

class Clock extends Component {
    state = {
        date: new Date()
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(), 1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({date: new Date()});
    } 

    render() {
        return(
                <p className='right'>Time : {this.state.date.toLocaleTimeString()}</p>
        )
    }
};

export default Clock;