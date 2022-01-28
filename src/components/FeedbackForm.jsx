import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';

function FeedbackForm() {
  const [ratText, setRatText] = useState('');

  const handelOnChange = (e) => {
    setRatText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate us?</h2>
        <div className="input-group">
          <input
            onChange={handelOnChange}
            type="text"
            placeholder="Write a review"
            value={ratText}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
