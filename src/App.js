import { v4 as uuidv4 } from 'uuid';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import Feedbacks from './components/data/Feedbacks';
import { useState } from 'react';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';

function App() {
  const [feedbacks, setFeedback] = useState(Feedbacks);

  const addFeedback = (feedback) => {
    feedback.id = uuidv4();
    setFeedback([feedback, ...feedbacks]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure?')) {
      setFeedback(feedbacks.filter((item) => item.id !== id));
    }
  };

  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedbackForm handelAdd={addFeedback} />
                <FeedbackStats feedbacks={feedbacks} />
                <FeedbackList
                  handelDelete={deleteFeedback}
                  feedbacks={feedbacks}
                />
              </>
            }
          ></Route>
          <Route path="/about" element={<AboutPage/>}>Hi there!</Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
