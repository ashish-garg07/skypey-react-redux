import React from 'react';
import './Sidebar.css';
import User from '../containers/User';

const Sidebar = ({ contacts }) => {
    return (
        <aside className='Sidebar'>
            {contacts.map(contact => {
                return (<User user={contact} key={contact.user_id} />)
            })}
            Sidebar
        </aside>
    );
}

export default Sidebar;