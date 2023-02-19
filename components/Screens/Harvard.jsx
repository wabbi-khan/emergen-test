import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import GraphImg from '../../public/assets/harvard.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';

const Harvard = () => {
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
        <div className={css.GraphContent}>
          <p>
            <b>
              Stellar Sleep uses a personalized, science-backed approach to
              improve your sleep.
            </b>
          </p>
          <p>
            We partnered with top sleep experts and have already helped over
            10,000 users fall asleep faster, spend more time asleep, and wake up
            less during the night
          </p>
          <div className={css.harvardLogo}>
            {/* <span className={css.graph2ImgContent}>
              Your sleep latency: <i>2 min.</i> <br />
              Your sleep efficiency: <i>100%.</i>
            </span> */}
            <Image src={GraphImg} alt="graph img" />
          </div>
          <div>
            Our clinical research partners include Harvard Medical School and
            Brigham and Women's Hospital.
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

export default Harvard;
