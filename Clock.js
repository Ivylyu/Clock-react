import React, { Component } from "react";
import "./Clock.css";
import  'moment-timezone';
import moment from "moment";


class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: moment().tz(`${this.props.region}/${this.props.city}`)};
  }

  componentDidMount() {
    this.updateTime();
  }

  updateTime() {
    setInterval(() => {
      this.setState( {time: moment().tz(`${this.props.region}/${this.props.city}`)});
    }, 1000);
  }

  render() {
    return (
      <div className="clock">
        <h2 className="region">{this.props.region}</h2>
      <div className="clock-container">
        <div className="day-mth-yr">
          {this.state.time.format("ddd MMM D YYYY")}
        </div>
        <div className="time">
          <span className="running-time">{this.state.time.format('hh').toString()}</span>:
          <span className="running-time">{this.state.time.format('mm').toString()}</span>:
          <span className="running-time">{this.state.time.format('ss').toString()}</span>
        </div>
      </div>
      </div>
    );
  }
}

export default Clock;
