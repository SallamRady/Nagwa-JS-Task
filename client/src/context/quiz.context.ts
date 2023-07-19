import React, { createContext, useContext, useReducer } from "react";
import IQuestion from "../models/question.interface";
import { type } from "os";

type quizState = {
  score: number;
  idx: number;
  questions: IQuestion[];
};
// Define the initial state
const initialState: quizState = {
  score: 0,
  idx: 0,
  questions: [],
};
// Define an enum for the action types
enum quizActionTypes {
  increaseIdx = "INCREASE_INDEX",
  start_quiz = "START_QUIZ",
  calc_result = "CALC_SCORE",
  reset = "RESET",
}

// Define a type for the actions
interface IncrementIdxAction {
  type: quizActionTypes.increaseIdx;
  payload: number;
}

interface StartQuizAction {
  type: quizActionTypes.start_quiz;
}

interface CalcScoreAction {
  type: quizActionTypes.calc_result;
  payload: number;
}

interface ResetAction {
  type: quizActionTypes.reset;
}

type quizActions =
  | IncrementIdxAction
  | StartQuizAction
  | CalcScoreAction
  | ResetAction;

// Create a context with the initial state
const quizContextApi = createContext<{
  state: quizState;
  dispatch: React.Dispatch<quizActions>;
}>({
  state: initialState,
  dispatch: () => {},
});

// Define a type for the reducer function
type QuizReducer = (state: quizState, action: quizActions) => quizState;

// Define a reducer function
const _quizReducer: QuizReducer = (state, action) => {
  switch (action.type) {
    case quizActionTypes.increaseIdx:
      return { ...state, idx: state.idx + 1 };
    default:
      return state;
  }
};

