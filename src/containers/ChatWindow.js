import React from "react";
import Header from '../components/Header';
import store from '../store';
import Chats from '../components/Chat';
import MessageInput from '../containers/MessageInput';
import _ from 'lodash';
import './ChatWindow.css';


const ChatWindow = ({ activeUserId }) => {
    const state = store.getState();
    const activeUser = state.contacts.contacts[activeUserId];
    const activeUserMessage = state.messages[activeUserId];
    const { typing } = state;
    return (
        <div className="ChatWindow">
            <Header user={activeUser} />
            <Chats messages={_.values(activeUserMessage)} />
            <MessageInput value={typing} />
        </div>
    );
};

export default ChatWindow;
