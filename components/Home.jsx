import React from "react";
import logo from "../public/assets/logo.png";
import css from "../styles/Home.module.css";
import GIF from "../public/assets/starting-quiz.gif";
import QuizCom from "../components/QuizCom";
import Image from "next/image";
import screens from "../data/screens.json";
import { SCREEN_TYPES, useAppContext } from "../context/AppContext";

const QuizListScreen = () => {
  const { pageDataSets, pageMethods, pageState } = useAppContext();

  return (
    <>
      {screens[pageState.screenIndex].type === SCREEN_TYPES.HOME ? (
        <section>
          <div className="s600">
            <h2>screen size should be less than 600px</h2>
          </div>
          <div className={css.bgImg}>
            <div className={css.logo}>
              <Image src={logo} width={150} />
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
        <section>
          <div className="s600">
            <h2>screen size should be less than 600px</h2>
          </div>
          <div className={css.bgImg}>
            <div className={css.logo}>
              <Image src={logo} width={150} />
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
                INTRO
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {screens[pageState.screenIndex].type === SCREEN_TYPES.QUIZ ? <QuizCom heading={"What is your sleep goal?"} options={pageState.quizOptions} /> : null}
    </>
  );
};

export default QuizListScreen;
