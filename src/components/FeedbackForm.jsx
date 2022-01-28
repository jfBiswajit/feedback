import Card from './shared/Card';
import { useState } from 'react';
import Button from './shared/Button';

function FeedbackForm() {
  const [ratText, setRatText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [errMsg, setErrMsg] = useState('');

  const handelOnChange = (e) => {
    if (ratText === '') {
      setBtnDisabled(true);
      setErrMsg(null);
    }else if (ratText !== '' && ratText.trim().length < 9) {
      setBtnDisabled(true);
      setErrMsg('Text must be at least 10 charecter');
    }else {
      setBtnDisabled(false);
      setErrMsg(null);
    }
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
          <Button type="submit" isDisabled={btnDisabled}>Submit</Button>
        </div>
          {errMsg && <div className='message'>{errMsg}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
