import React from 'react';
import css from '../../styles//Home.module.css';
import Link from 'next/link';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import Router, { useRouter } from 'next/router';

import { useAppContext } from '@/context/AppContext';

const InputTime3 = () => {
  const router = useRouter();

  const { pageMethods, pageState } = useAppContext();

  return (
    <>
      <div className="s600">
        <h2>screen size should be less than 600px</h2>
      </div>
      <div className={css.QuizListScreen}>
        <div className={css.topHeading}>
          <div>
            <AiOutlineArrowLeft onClick={() => pageMethods.goBack()} />
          </div>
          <div>📋 Understanding your sleep profile</div>
        </div>
        <div className={css.progressBar}>
          <div className={css.bar}></div>
        </div>
        <div className={css.list}>
          <div className={css.heading2}>
            <p>How much time do you spend asleep?</p>
            <p>
              We realize you might not know this perfectly, so an estimate is
              fine.
            </p>
          </div>
          <div>
            <div>
              <b>Time asleep on a typical night</b>
            </div>
            <div className={css.InputFiled}>
              <input type="number" /> <p>hours</p>
            </div>
          </div>

          <button
            onClick={() => {
              pageMethods.submitQuiz('');
            }}
            className="button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default InputTime3;
