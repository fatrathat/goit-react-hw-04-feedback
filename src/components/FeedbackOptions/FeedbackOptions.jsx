import styles from './style.module.css';

import PropTypes from 'prop-types';

const FeedbackOptions = props => {
  const IncrementFeedback = e => {
    const { name } = e.target;
    props.onLeaveFeedback(name);
  };

  return (
    <div className={styles.FeedBackButtons}>
      <button
        className={styles.FeedBackButton}
        name="good"
        type="button"
        onClick={IncrementFeedback}
      >
        Good
      </button>
      <button
        className={styles.FeedBackButton}
        name="neutral"
        type="button"
        onClick={IncrementFeedback}
      >
        Neutral
      </button>
      <button
        className={styles.FeedBackButton}
        name="bad"
        type="button"
        onClick={IncrementFeedback}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
