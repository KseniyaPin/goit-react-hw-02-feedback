import { Component } from 'react';

import Statistics from './feedback/Statistics/Statistics';
import FeedbackOptions from './feedback/FeedbackOptions/FeedbackOptions.js';
import Section from './feedback/Section/Section.js';
import Notification from './feedback/Notification/Notification.js';
import css from './feedback/Feedback.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // Використовується попереднє значення state. Зберігаємо значення: good, neutral, bad
  onLeaveFeedback = evt => {
    const name = evt.target.name;
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        {!this.countTotalFeedback() ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistic">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          </Section>
        )}
      </>
    );
  }
}

export default App;
