import React from 'react';
import css from '../styles/Home.module.css';
import Link from 'next/link';
const QuizCom = ({ heading2, option1, option2, option3 }) => {
  return (
    <>
      <div className={css.QuizListScreen}>
        <div className={css.topHeading}>
          📋 Understanding your sleep profile
          <div className={css.progressBar}>
            <div className={css.bar}></div>
          </div>
        </div>
        <div className={css.list}>
          <div className={css.heading2}> {heading2} </div>
          <button className={css.optionBtn}> {option1} </button>
          <button className={css.optionBtn}> {option2} </button>
          <button className={css.optionBtn}> {option3} </button>
          <Link href={'/'} className="button">
            Next
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuizCom;
