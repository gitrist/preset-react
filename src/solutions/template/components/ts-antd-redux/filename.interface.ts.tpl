import { FormComponentProps } from "antd/lib/form";
import { RouteComponentProps } from "react-router-dom";

export interface IState{
  
}

export interface IProps extends FormComponentProps, RouteComponentProps, IReduxState{
  TestAction: Function;
}

export interface IReduxState {
  test: string;
}


export interface IAction {
  type: string;
  payload: Function;
}

