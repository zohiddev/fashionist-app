const SET_HEADER_CONTENT = "SET_HEADER_CONTENT";

const defaultState = {
  content: "",
};

function HeaderReducer(state = defaultState, action) {
  switch (action.type) {
    case SET_HEADER_CONTENT:
      return {
        content: action.content,
      };

    default:
      return state;
  }
}

export const setHeaderContent = content => ({ type: SET_HEADER_CONTENT, content });

export default HeaderReducer;
