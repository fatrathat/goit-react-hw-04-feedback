import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

import styles from './container.module.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [options, setOptions] = useState(INITIAL_STATE);

  const leaveFeedback = buttonName => {
    setOptions(prev => {
      return {
        ...prev,
        [buttonName]: prev[buttonName] + 1,
      };
    });
  };

  const countTotalFeedback = () => {
    const states = Object.values(options);
    return states.reduce((a, b) => a + b, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    const { good } = options;
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <div className={styles.container}>
      <Section title="Please leave feedback">
        <FeedbackOptions onLeaveFeedback={leaveFeedback} />
      </Section>
      <Section>
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={options.good}
            neutral={options.neutral}
            bad={options.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};
