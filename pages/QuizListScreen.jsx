import React from 'react';
import QuizCom from '../components/QuizCom';
const QuizListScreen = () => {
  return (
    <>
      <QuizCom
        heading2={'What is your sleep goal?'}
        option1="Falling asleep quicker"
        option2="Staying asleep (or falling back asleep after waking)"
        option3={'Both'}
      />
    </>
  );
};

export default QuizListScreen;
