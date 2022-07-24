import PropTypes from 'prop-types';

const Statistics = props => (
  <ul className="StatiscticsList">
    <li className="StatiscticsList__item">
      <p>
        Good:
        <span className="StatiscticsList__item-value">{props.good}</span>
      </p>
    </li>
    <li className="StatiscticsList__item">
      <p>
        Neutral:
        <span className="StatiscticsList__item-value">{props.neutral}</span>
      </p>
    </li>
    <li className="StatiscticsList__item">
      <p>
        Bad:
        <span className="StatiscticsList__item-value">{props.bad}</span>
      </p>
    </li>
    <li className="StatiscticsList__item">
      <p>
        Total:
        <span className="StatiscticsList__item-value">{props.total}</span>
      </p>
    </li>
    <li className="StatiscticsList__item">
      <p>
        Positive feedback:
        <span className="StatiscticsList__item-value">
          {props.positivePercentage}%
        </span>
      </p>
    </li>
  </ul>
);

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default Statistics;
