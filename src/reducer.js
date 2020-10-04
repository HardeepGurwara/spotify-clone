export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token: null,
};

// this takes two thigns, state and the action
//the action means how we going to manipulate the data layer
//the state is how it is currently look
//action is like set this and set that
const reducer = (state, action) => {
  //debugging tool
  console.log(action);
  //ACtion --> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};

export default reducer;
