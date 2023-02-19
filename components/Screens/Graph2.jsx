import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import GraphImg from '../../public/assets/graph2.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';

const Graph2 = () => {
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
            Based on your input, it sounds like you might be getting pretty good
            sleep already!
          </p>
          <p>
            We recommend you continue with your current sleep habits, but if
            you'd like to optimize your sleep even further, you can give us a
            try.
          </p>
          <div>
            <span className={css.graph2ImgContent}>
              Your sleep latency: <i>2 min.</i> <br />
              Your sleep efficiency: <i>100%.</i>
            </span>
            <Image src={GraphImg} alt="graph img" />
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

export default Graph2;
