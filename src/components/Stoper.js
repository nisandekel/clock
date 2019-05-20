import React from 'react';
import "./Stoper.css";

class Stoper extends React.Component {

    state = { miliseconds: "00", seconds: "00", minutes: "00", hours: "00", isRunning: false };
    interval = null;

    run = () => {
        this.setState({ isRunning: true });
        this.interval = setInterval(this.updateStoper, 10);
    }

    stop = () => {
        this.setState({ isRunning: false });
        clearInterval(this.interval);
    }

    reset = () => {
        clearInterval(this.interval);
        this.setState({ miliseconds: "00", seconds: "00", minutes: "00", hours: "00", isRunning: false })
    }

    updateStoper = () => {
        if (this.state.miliseconds < 99) {
            const miliseconds = parseInt(this.state.miliseconds);
            const newMiliseconds = miliseconds + 1 < 10 ? "0" + (miliseconds + 1) : miliseconds + 1;
            this.setState({ miliseconds: newMiliseconds })
        }
        else if (this.state.seconds < 59) {
            const seconds = parseInt(this.state.seconds);
            const newSeconds = seconds + 1 < 10 ? "0" + (seconds + 1) : seconds + 1;
            this.setState({ miliseconds: "00", seconds: newSeconds });
        }
        else if (this.state.minutes < 59) {
            const minutes = parseInt(this.state.minutes);
            const newMinutes = minutes + 1 < 10 ? "0" + (minutes + 1) : minutes + 1;
            this.setState({ seconds: "00", minutes: newMinutes });
        }
        else if (this.state.hours < 59) {
            const hours = parseInt(this.state.hours);
            const newHours = hours + 1 < 10 ? "0" + (hours + 1) : hours + 1;
            this.setState({ minutes: "00", hours: newHours });
        }
    }

    render() {

        let btnText = null;
        let btnFunc = null;

        if (!this.state.isRunning) {
            btnText = "run";
            btnFunc = this.run;
        }
        else {
            btnText = "pause";
            btnFunc = this.stop;
        }

        return (
            <div className="stoper-frame">
                <div className="stoper">{this.state.hours} : {this.state.minutes}: {this.state.seconds} : {this.state.miliseconds}</div>
                <div className="stoper-buttons">
                    <button className="stoper-btn" onClick={btnFunc}>{btnText}</button>
                    <button className="stoper-btn" onClick={this.reset}>reset</button>
                </div>
            </div>
        )
    }
}

export default Stoper;