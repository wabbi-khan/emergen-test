import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
// import GraphImg from '../../public/assets/graph.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';

const Analyzing = () => {
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
              Sit tight! We’re building your perfect plan based on data points
              from successful Stellar Sleep users.
            </b>
          </p>
          <p style={{ textAlign: 'center' }}>Analyzing your sleep profile...</p>
          <div>
            <div className="circle-wrap">
              <div className="circle">
                <div class="mask half">
                  <div class="fill"></div>
                </div>
                <div class="mask full">
                  <div class="fill"></div>
                </div>
                <div class="inside-circle"> 75% </div>
              </div>
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

export default Analyzing;
