import { getMessages } from '../static-data';
import { SEND_MESSAGE } from '../constant/action-types';
import _ from 'lodash';

export default (state = getMessages(10), action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            const { messages, userId } = action.payload;
            const allUserMsg = state[userId];
            console.log(allUserMsg);
            const number = +_.keys(allUserMsg).pop() + 1;
            return {
                ...state,
                [userId]: {
                    ...allUserMsg,
                    [number]: {
                        number,
                        text: messages,
                        is_user_msg: true
                    }
                }
            }
        default: return state;
    }
}