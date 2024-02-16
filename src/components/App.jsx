import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';
import Notification from './Notification/Notification';

const App = () => {
    const [feedbacks, setFeedbacks] = useState(() => {
    const savedValues = window.localStorage.getItem('saved-feedback');

    if (savedValues !== null) {
      return JSON.parse(savedValues);
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
    });
    
    useEffect(() => {
    window.localStorage.setItem('saved-feedback', JSON.stringify(feedbacks));
  }, [feedbacks]);
  
 const updateFeedback = feedbackType => {
  setFeedbacks({
      ...feedbacks,
      [feedbackType]: feedbacks[feedbackType] + 1
  });
 };
  
  const resetFeedback = () => {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0
  })
    }
    
  const totalFeedback = feedbacks.good + feedbacks.neutral + feedbacks.bad;
  const percentGoodFeedback = Math.round(((feedbacks.good + feedbacks.neutral) / totalFeedback) * 100)
  const minimalFeedback = totalFeedback > 0;

  
  useEffect(() => {
    totalFeedback === 0 && resetFeedback();
  }, [totalFeedback]);


    return (
      <div>
        <Description />
         <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        total={totalFeedback} />
        {minimalFeedback && (
        <Feedback
          feedbacks={feedbacks}
          total={totalFeedback}
          percent={percentGoodFeedback}
        />
        )}
        {!minimalFeedback && <Notification total={totalFeedback} />}
      </div>
    )
};

export default App