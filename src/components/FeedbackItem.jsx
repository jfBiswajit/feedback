import { useState } from 'react';

function FeedbackItem() {
  const [rating, setRating] = useState(1);
  const [text, setText] = useState('This is rating text');

  const handelClick = () => {
    setRating((prev) => ++prev);
  };

  return (
    <div>
      <div className="card">
        <div className="num-display"> {rating} </div>
        <div className="text-display"> {text} </div>
        <button onClick={handelClick}>Increase Value</button>
      </div>
    </div>
  );
}

export default FeedbackItem;
