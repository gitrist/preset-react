import { TYPES } from "./types";
// 新增编辑作废
export const TestAction = () => {
  return async(dispatch:Function) => {
    dispatch({
        type: TYPES.TEST,
        payload: 123,
    })
  }
}