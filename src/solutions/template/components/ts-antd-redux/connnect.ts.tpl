import {connect as originalConnect} from "react-redux";
import {TestAction} from "./store";
import {IReduxState} from "./%_ComponentName_%.interface";
/**
 *  实际开发中需要将reducer注册到全局
 */
const mapStateToProps = (state: { %_ComponentName_%Reducer: IReduxState}) => {
  return {
    test:state.%_ComponentName_%Reducer.currentStep,
  };
};

const mapDispatchToProps = {
  TestAction,
};

export const connect = originalConnect(
  mapStateToProps,
  mapDispatchToProps
) as any;