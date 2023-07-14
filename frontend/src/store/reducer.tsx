import {
  CREATE_BOT,
  DELETE_BOT,
  EDIT_BOT,
  LOGIN, 
  ADMIN
} from "./types";

const initialState: State = {
  isUserLoggedIn: false,
  isAdmin: false,
  botList: [],
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case ADMIN:
      console.log(state.isAdmin, action.payload)
      return {
        ...state,
        isAdmin: action.payload
      }
    case LOGIN: 
    return {
      ...state, 
      isUserLoggedIn: !state.isUserLoggedIn
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
