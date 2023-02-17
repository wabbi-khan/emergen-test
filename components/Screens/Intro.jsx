import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import IntroImg1 from '../../public/assets/introImg1.png';
import IntroImg2 from '../../public/assets/introImg2.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';

const Intro = () => {
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
          <p>Stellar Sleep can help you fall asleep faster.</p>
          <p>
            Our behavioral therapy based curriculum is supported by clinical
            evidence and is the gold standard for insomnia treatment.
          </p>
          <div className={css.introImg}>
            <div>
              <Image src={IntroImg1} alt="logo" />
            </div>
            <div>
              "The guideline includes one strong recommendation — which is one
              that clinicians should follow under most circumstances — for the
              use of [behavioral therapy]"
            </div>
          </div>{' '}
          <div className={css.introImg}>
            <div>
              <Image src={IntroImg2} alt="logo" />
            </div>
            <div>
              "The guideline includes one strong recommendation — which is one
              that clinicians should follow under most circumstances — for the
              use of [behavioral therapy]"
            </div>
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

export default Intro;
