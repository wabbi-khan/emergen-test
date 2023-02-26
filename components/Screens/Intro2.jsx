import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import IntroImg1 from '../../public/assets/introImg1.png';
import IntroImg2 from '../../public/assets/introImg2.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';

const Intro2 = () => {
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
        <div className={css.introContent}>
          <p>
            {' '}
            <b> You’re not alone when it comes to sleep hygiene.</b>
          </p>
          <p>
            For some people, techniques like cutting coffee make little
            difference. If you think back to a time when you were a good
            sleeper, you probably never worried about things like that.
          </p>
          <p>
            The goal of Stellar Sleep is to move beyond sleep hygiene by
            reprogramming how your mind thinks about sleep.
          </p>
          <div className={css.introImg}>
            <div>
              <Image src={IntroImg1} alt="logo" />
            </div>
            <div>
              “Sleep hygiene...does not constitute an effective stand-alone
              therapy”
            </div>
          </div>{' '}
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

export default Intro2;
