import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import IntroImg1 from '../../public/assets/introImg1.png';
import IntroImg2 from '../../public/assets/introImg2.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';

const SendEmail = () => {
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
            <b>
              We’ve built you a custom sleep plan. Enter your email to see your
              sleep plan.
            </b>
          </p>

          <div className={`${css.InputFiled} ${css.InputFiledEmail}`}>
            <input type="email" placeholder="Email" />
          </div>
          <div>
            <p>
              Stellar Sleep ensures the confidentiality of your personal
              information. We’ll email you a copy of your results for convenient
              access.
            </p>
          </div>
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

export default SendEmail;
