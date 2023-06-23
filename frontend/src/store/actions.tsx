import { CREATE_BOT, CREATE_FOLDER, DELETE_FOLDER, DELETE_BOT, EDIT_BOT, SELECT_FOLDER, EDIT_FOLDER } from "./types"

export const createFolder = (folder: FolderDetails) => {
    return {
        type: CREATE_FOLDER,
        payload: folder
    }
}
export const deleteFolder = (folder: FolderDetails) => {
    return {
        type: DELETE_FOLDER,
        payload: folder
    }
}

export const editFolder = (folder:  FolderDetails) => {
    return {
        type: EDIT_FOLDER,
        payload: folder
    }
}

export const selectFolder = (folderId: string) => {
    return {
        type: SELECT_FOLDER,
        payload: folderId
    }
}

export const createBot = (bot: BotCardDetails) => {
    return {
        type: CREATE_BOT,
        payload: bot
    }
}

export const editBot = (bot: BotCardDetails) => {
    return {
        type: EDIT_BOT,
        payload: bot
    }
}

export const deleteBot = (bot: BotCardDetails) => {
    return {
        type: DELETE_BOT,
        payload: bot
    }
}
