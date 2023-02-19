import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import IntroImg1 from '../../public/assets/introImg1.png';
import IntroImg2 from '../../public/assets/introImg2.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';
import { FcAlarmClock } from 'react-icons/fc';
const AverageTime2 = () => {
  const { pageDataSets, pageMethods, pageState } = useAppContext();

  return (
    <section>
      <div className="s600">
        <h2>screen size should be less than 600px</h2>
      </div>
      <div className={css.IntroScreen}>
        <div className={css.IntroTop}>
          <AiOutlineArrowLeft onClick={() => pageMethods.goBack()} />

          <div className={css.introLogo}>
            <Image src={Logo} width={150} />
          </div>
        </div>
        <div className={css.averageTimeContent}>
          <p>The average man in their 60s sleeps</p>
          <div className={css.time}>
            <FcAlarmClock />
            <h2>7.24 hr</h2>
          </div>
          <p>per night...</p>

          <p>You currently sleep</p>
          <div className={css.time}>
            <FcAlarmClock />
            <h2>2 hr</h2>
          </div>
          <div>on a typical night...</div>
          <p>The average user who completes our program sleeps</p>
          <div className={css.time}>
            <FcAlarmClock />
            <h2>74 min</h2>
          </div>
          <p>more than before, and spends 52% less time awake at night.</p>
          <button
            className="button"
            onClick={() => {
              pageMethods.submitQuiz('');
            }}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default AverageTime2;
