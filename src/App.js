import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbacks from './components/data/Feedbacks';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';

function App() {
  const [feedbacks, setFeedback] = useState(Feedbacks);

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedbacks.filter((item) => item.id !== id));
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackStats feedbacks={feedbacks} />
        <FeedbackList handelDelete={deleteFeedback} feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
