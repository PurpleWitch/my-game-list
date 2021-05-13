const initState = {
  username: '',
  list: '',
};

var rootReducer = (state = initState, action) => {
  switch (action.type) {
    case 'username':return { ...state, username: action.username };
    case 'list':return { ...state, list: action.list };
    default:return state;
  }
};

export default rootReducer;
