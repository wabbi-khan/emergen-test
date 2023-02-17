import React from "react";
import css from "../styles/Home.module.css";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Router, { useRouter } from "next/router";
import ButtonCom from "./ButtonCom";
import quizes from "../data/quizes.json";
import screens from "../data/screens.json";
import { useAppContext } from "@/context/AppContext";

interface QuizComTypes {
  heading: string;
  options: string[];
}

const QuizCom = ({ heading, options = [] }: QuizComTypes) => {
  const router = useRouter();

  const { pageMethods, pageState } = useAppContext();

  return (
    <>
      <div className="s600">
        <h2>screen size should be less than 600px</h2>
      </div>
      <div className={css.QuizListScreen}>
        <div className={css.topHeading}>
          <div>
            <AiOutlineArrowLeft onClick={() => pageMethods.goBack()} />
          </div>
          <div>📋 Understanding your sleep profile</div>
        </div>
        <div className={css.progressBar}>
          <div className={css.bar}></div>
        </div>
        <div className={css.list}>
          <div className={css.heading2}> {quizes[screens[pageState.screenIndex].quizIndex || 0].heading} </div>
          {quizes[screens[pageState.screenIndex].quizIndex || 0].options.map((el) => (
            <ButtonCom btnText={el} />
          ))}
          <button
            onClick={() => {
              pageMethods.submitQuiz("");
            }}
            className="button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default QuizCom;
