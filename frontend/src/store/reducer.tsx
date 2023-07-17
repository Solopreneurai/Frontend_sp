import {
  CREATE_BOT,
  DELETE_BOT,
  EDIT_BOT,
  LOGIN, 
  ADMIN,
  USER,
  LOGOUT
} from "./types";

const initialState: State = {
  userDetails: null,
  isUserLoggedIn: false,
  isAdmin: false,
  botList: [],
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case USER: 
     return {
      ...state,
      userDetails: action.payload
     }
    case ADMIN:
      return {
        ...state,
        isAdmin: action.payload
      }
    case LOGIN: 
    return {
      ...state, 
      isUserLoggedIn: true
    }
    case LOGOUT: 
    return {
      ...state, 
      isUserLoggedIn: false,
      userDetails: null,
      isAdmin: false
    }
    case DELETE_BOT:
      return {
        ...state,
        botList: state.botList.filter((item) => {
          if (!(item.id === action.payload.id)) {
            return item;
          }
        }),
      };
    case EDIT_BOT:
      return {
        ...state,
        botList: state.botList.map((bot) =>
          bot.id === action.payload.id
            ? {
                id: action.payload.id,
                name: action.payload.name,
              }
            : bot
        ),
      };
    case CREATE_BOT: {
      return {
        ...state,
        botList: [
          ...state.botList,
          {
            id: action.payload.id,
            name: action.payload.name,
          },
        ],
      };
    }
    default:
      return state;
  }
}
