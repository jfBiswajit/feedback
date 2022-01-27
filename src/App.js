import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbacks from './components/data/Feedbacks';
import { useState } from 'react';

function App() {
  const [feedbacks, setFeedback] = useState(Feedbacks);

  const deleteFeedback = (id) => {
    setFeedback(feedbacks.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList handelDelete={deleteFeedback} feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
