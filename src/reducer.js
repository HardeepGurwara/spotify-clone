export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token:
  //   "BQDDGtbEXDmQMmwpXTBtjxkrbj5ZKqUTfc9NOnzknFQ9PVfYlgf52xARgPPWeVOaCLQi1HEQshT-6CFlOkV2k5s4cga4WWNRAi4sEd6yTyqYCBmeaxutKJUU6WYzt6wSXUJdXWJcX8yEmx5QSb33pHtu-9PKJNgcUoeWhgAF0_7gNWbX",
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
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
