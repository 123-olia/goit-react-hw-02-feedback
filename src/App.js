import React, { Component } from "react";
import "./App.css";

import FeedbackEditor from "./Components/Feedback/FeedbackEditor";
import Stats from "./Components/Stats/Stats";
import Notification from "./Components/Notification/Notification.js";
import Section from "./Components/Section/Section";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });

    this.countTotalFeedback();
  };

  onNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });

    this.countTotalFeedback();
  };

  onBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });

    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    let total = Object.values(this.state).reduce((a, b) => a + b, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    return total > 0 ? Math.round((this.state.good / total) * 100) : "0";
  };

  render() {
    return (
      <div className="App">
        <Section title="Please leave feedback">
          <FeedbackEditor
            onClickGood={this.onGood}
            onClickNeutral={this.onNeutral}
            onClickBad={this.onBad}
          />

          {this.countTotalFeedback() > 0 ? (
            <Stats
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification notif="No feedback given" />
          )}
        </Section>
      </div>
    );
  }
}
