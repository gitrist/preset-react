import { TYPES } from "./types";
import {IReduxState,IAction} from "./%_ComponentName_%.interface";

const defaultState: IReduxState = {
  test: "",
};

export const reducer = (state = defaultState,action:IAction) => {
  const { type, payload } = action;
  switch(type){
    case TYPES.TEST:
      return{
        ...state,
        test:payload,
      };
    default:
      return state;
  }
};