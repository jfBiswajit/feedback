import {v4 as uuidv4} from 'uuid'
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbacks from './components/data/Feedbacks';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';

function App() {
  const [feedbacks, setFeedback] = useState(Feedbacks);
  
  const addFeedback = (feedback) => {
    feedback.id = uuidv4()
    setFeedback([feedback, ...feedbacks]);
  }

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedbacks.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
      <FeedbackForm handelAdd={addFeedback} />
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList handelDelete={deleteFeedback} feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
