import { FaTimes } from 'react-icons/fa';
import Card from './shared/Card';
import PropTypes from 'prop-types';

function FeedbackItem({ item, handelDelete }) {
  const handelClick = (id) => {
    console.log(id);
  };
  return (
    <Card>
      <div className="num-display"> {item.rating} </div>
      <button onClick={() => handelDelete(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      <div className="text-display"> {item.text} </div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
