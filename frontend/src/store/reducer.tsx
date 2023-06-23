import {
  CREATE_BOT,
  DELETE_FOLDER,
  DELETE_BOT,
  CREATE_FOLDER,
  EDIT_BOT,
  EDIT_FOLDER,
  SELECT_FOLDER,
} from "./types";

const initialState: State = {
  isUserLoggedIn: false,
  currentFolderId: "1",
  folderList: [
    {
      id: "1",
      name: "New Folder",
    },
  ],
  botList: [],
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {
    case SELECT_FOLDER: 
     return {
        ...state,
        currentFolderId: action.payload
     }
    case DELETE_FOLDER:
        console.log("in reducer calling delete folder")
      return {
        ...state,
        folderList: state.folderList.filter((item) => {
          if (!(item.id === action.payload.id)) {
            return item;
          }
        }),
      };

    case CREATE_FOLDER:
      return {
        ...state,
        folderList: [
          ...state.folderList,
          {
            id: action.payload.id,
            name: action.payload.name,
          },
        ],
      };
    case EDIT_FOLDER:
        console.log("in reducer calling edit folder function")
      return {
        ...state,
        folderList: state.folderList.map((folder) =>
          folder.id === action.payload.id
            ? {
                id: action.payload.id,
                name: action.payload.name,
              }
            : folder
        ),
      };
    case DELETE_BOT:
      return {
        ...state,
        botList: state.botList.filter((item) => {
          if (
            !(
              item.id === action.payload.id &&
              item.folderId === state.currentFolderId
            )
          ) {
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
                folderId: state.currentFolderId,
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
            folderId: state.currentFolderId,
          },
        ],
      };
    }
    default:
      return state;
  }
}
