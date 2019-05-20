import React from 'react';
import reactLogo from './../react-logo.svg'
import './Clock.css';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        this.state = { hours, minutes, seconds };
    }

    componentDidMount() {
        setTimeout(this.updateClock, 1000);
    }

    componentDidUpdate() {
        setTimeout(this.updateClock, 1000);
    }

    updateClock = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 10) {
            hours = "0" + hours;
        }

        if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        this.setState({ hours, minutes, seconds })
    }

    render() {
        return (
            <div className="clock-frame">
                <img src={reactLogo} className="react-logo-right" alt="logo" />
                <div className="clock">
                    {this.state.hours} : {this.state.minutes} : {this.state.seconds}
                </div>
                <img src={reactLogo} className="react-logo-left" alt="logo" />
            </div>
        );
    }

}

export default Clock;