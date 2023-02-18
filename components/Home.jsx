import React from 'react';
import logo from '../public/assets/logo.png';
import css from '../styles/Home.module.css';
import GIF from '../public/assets/starting-quiz.gif';
import QuizCom from '../components/QuizCom';
import Image from 'next/image';
import screens from '../data/screens.json';
import { SCREEN_TYPES, useAppContext } from '../context/AppContext';
import IntroScreen from '../components/Screens/Intro';
import ClinicallyScreen from '../components/Screens/Clinically';
import GraphScreen from '../components/Screens/Graph';
const QuizListScreen = () => {
  const { pageDataSets, pageMethods, pageState } = useAppContext();

  return (
    <>
      {/* <ClinicallyScreen /> */}

      {screens[pageState.screenIndex].type === SCREEN_TYPES.HOME ? (
        <section>
          <div className="s600">
            <h2>screen size should be less than 600px</h2>
          </div>
          <div className={css.bgImg}>
            <div className={css.logo}>
              <Image src={logo} width={150} alt="logo" />
            </div>
            <div className={css.home_container}>
              <div className={css.gif}>
                <Image src={GIF} />
              </div>

              <button
                onClick={() => {
                  pageMethods.moveScreen(SCREEN_TYPES.QUIZ);
                }}
                className="button"
              >
                Start
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {/* Add Intro Screen Component Here */}
      {screens[pageState.screenIndex].type === SCREEN_TYPES.INTRO ? (
        <IntroScreen />
      ) : null}

      {screens[pageState.screenIndex].type === SCREEN_TYPES.QUIZ ? (
        <QuizCom
          heading={'What is your sleep goal?'}
          options={pageState.quizOptions}
        />
      ) : null}
      {screens[pageState.screenIndex].type === SCREEN_TYPES.CLINICALLY ? (
        <ClinicallyScreen />
      ) : null}

      {screens[pageState.screenIndex].type === SCREEN_TYPES.GRAPH ? (
        <GraphScreen />
      ) : null}
    </>
  );
};

export default QuizListScreen;
