import { SET_ACTIVE_USER_ID, SET_TYPING_VALUE, SEND_MESSAGE } from '../constant/action-types';

export const setActiveUserId = id => ({ type: SET_ACTIVE_USER_ID, payload: id });
export const setTypingValue = text => ({ type: SET_TYPING_VALUE, payload: text });
export const sendMessage = (messages, userId) => ({ type: SEND_MESSAGE, payload: { messages, userId } });