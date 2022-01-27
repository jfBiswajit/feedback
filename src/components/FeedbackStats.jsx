import PropTypes from 'prop-types';

function FeedbackStats({ feedbacks }) {
  let avgRat = feedbacks.reduce(
    (acc, cur) => acc + cur.rating / feedbacks.length,
    0
  );

  avgRat = avgRat.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className="feedback-stats">
      <h4> {feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(avgRat) ? 0 : avgRat}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedbacks: PropTypes.array.isRequired,
};

export default FeedbackStats;
