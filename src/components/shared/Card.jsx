import PropTypes from 'prop-types';

function Card({ children, reverse }) {
  return <div className={`card ${reverse && 'reverse'}`}>{children}</div>;
}

Card.defaultProps = {
  reverse: true,
};

Card.prototype = {
  children: PropTypes.node,
  reverse: PropTypes.bool,
};

export default Card;
