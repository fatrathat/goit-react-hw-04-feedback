import PropTypes from 'prop-types';

const Notification = props => <p>{props.message}</p>;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;
