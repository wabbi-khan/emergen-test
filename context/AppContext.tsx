import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { parseURLParams } from './AppContext.helper';
import data from '../data/quizes.json';

export const SCREEN_TYPES = {
  HOME: 'HOME',
  QUIZ: 'QUIZ',
  INTRO: 'INTRO',
  CLINICALLY: 'CLINICALLY',
  GRAPH: 'GRAPH',
  LOCATION: 'LOCATION',
  INPUTTIME: 'INPUTTIME',
  AVERAGETIME: 'AVERAGETIME',
  INPUTTIME2: 'INPUTTIME2',
  INPUTTIME3: 'INPUTTIME3',
  AVERAGETIME2: 'AVERAGETIME2',
};

// Page State =============================
interface IPageState {
  utm_term: string;
  gclid: string;
  promo: string;
  ignore: string;

  quizIndex: number;
  screenIndex: number;
}
const defaultPageState: IPageState = {
  utm_term: '',
  gclid: '',
  ignore: '',
  promo: '',

  quizIndex: 0,
  screenIndex: 0,
};

// Page Data Set ======================
interface IPageDataSets {}
const defaultPageDataSets: IPageDataSets = {};

// Page Methods ==============================
interface IPageMethods {
  moveScreen: () => void;
  goBack: () => void;
  submitQuiz: (quizAnswer: string) => void;
}
const defaultPageMethods: IPageMethods = {
  moveScreen: () => {},
  goBack: () => {},
  submitQuiz: () => {},
};

interface AppContext {
  pageDataSets: IPageDataSets;
  pageState: IPageState;
  pageMethods: IPageMethods;
}

const AppContext = createContext<AppContext>({
  pageState: defaultPageState,
  pageDataSets: defaultPageDataSets,
  pageMethods: defaultPageMethods,
});

export const useAppContext = () => useContext<AppContext>(AppContext);

export function AppContextProvider({ children }: { children: ReactNode }) {
  const [pageState, setPageState] = useState<IPageState>(defaultPageState);

  function submitQuiz(quizAnswer: string) {
    // setPageState((prev) => ({
    //   ...prev,
    //   quizIndex: prev.quizIndex + 1,
    // }));

    moveScreen();
  }

  function moveScreen() {
    setPageState((prev) => ({
      ...prev,
      screenIndex: prev.screenIndex + 1,
    }));
  }

  function goBack() {
    setPageState((prev) => ({
      ...prev,
      screenIndex: prev.screenIndex !== 0 ? prev.screenIndex - 1 : 0,
    }));
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);

    const values = parseURLParams(urlParams);

    setPageState((prev) => ({
      ...prev,
      values,
    }));
  }, []);

  const values: AppContext = useMemo(
    () => ({
      pageDataSets: {},
      pageState,
      pageMethods: {
        moveScreen,
        goBack,
        submitQuiz,
      },
    }),
    [pageState]
  );

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
}
