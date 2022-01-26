import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbacks from './components/data/Feedbacks';
import { useState } from 'react';

function App() {
  const [feedbacks, setFeedback] = useState(Feedbacks);
  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedbacks={feedbacks} />
      </div>
    </>
  );
}

export default App;
