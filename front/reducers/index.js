import { HYDRATE } from "next-redux-wrapper";
import { combineReducers } from "redux";

import user from "./user";
import post from "./post";

// 초기 데이터 구조 틀
const initialState = {
  user: {},
  post: {},
};

//async action creator

//action creator
const changeNickname = (data) => {
  return { type: "CHANGE_NICKNAME", data };
};

// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
  index: (state = {}, action) => {
    switch (action.type) {
      case HYDRATE:
        console.log("HYDRATE", action);
        return { ...state, ...action.payload };

      default:
        return state;
    }
  },
  user,
  post,
});

export default rootReducer;
