import React from 'react';
import Logo from '../../public/assets/logo.png';
import Image from 'next/image';
import css from '../../styles/Home.module.css';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import LocIcon from '../../public/assets/locations.svg';
// import IntroImg2 from '../../public/assets/introImg2.png';
import { SCREEN_TYPES, useAppContext } from '../../context/AppContext';

const Location = () => {
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
        <div className={css.locationContent}>
          <div className={css.locIcon}>
            <Image src={LocIcon} alt="location icon" />
          </div>
          <p>
            Sleep is personal, and shouldn’t be a one-size-fits-all approach.
          </p>
          <p>
            A psychology-based approach to improving your sleep is unique and
            isn’t for everyone.
          </p>
          <p>
            Tell us about yourself in the next few questions so we can determine
            if Stellar Sleep is the right program for you at this time.
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

export default Location;
