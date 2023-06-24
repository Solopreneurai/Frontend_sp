import { LOGIN,CREATE_BOT, DELETE_BOT, EDIT_BOT } from "./types"

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

export const login = () => {
    return {
        type: LOGIN
    }
}