import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
// import IntroImg1 from '../../public/assets/introImg1.png';
// import IntroImg2 from '../../public/assets/introImg2.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';

const Clinically = () => {
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
        <div className={css.clinicallyScreen}>
          <p>Based on what you've told us, your insomnia severity index* is</p>

          <div className={css.count}>0</div>
          <p>This means that you have</p>
          <div className={css.Clinically}>
            No clinically significant insomnia
          </div>
          <p>
            * Insomnia Severity Index (ISI) is the most widely recognized and
            validated screening tool used by clinicians to evaluate insomnia.
          </p>
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

export default Clinically;
