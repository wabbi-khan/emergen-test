import React from 'react';
import css from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
// import { AiOutlineDown } from 'react-icons/ai';
import GIF from '../public/assets/starting-quiz.gif';
import Link from 'next/link';
const Home = () => {
  return (
    <section>
      <div className={css.s600}>
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
          {/* <div className={css.icon}>
            <AiOutlineDown />
          </div> */}
          <Link href={'/QuizListScreen'} className={'button'}>
            start
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
