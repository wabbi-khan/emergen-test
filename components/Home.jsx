import React from 'react';
import css from '../styles/Home.module.css';
import Image from 'next/image';
import logo from '../public/assets/logo.png';
// import { AiOutlineDown } from 'react-icons/ai';
import GIF from '../public/assets/starting-quiz.gif';
// import Link from 'next/link';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  return (
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
            onClick={() => router.push('/QuizListScreen')}
            className="button"
          >
            Start
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
