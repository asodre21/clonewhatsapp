/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const [chatlist, setChatList] = useState([{},{},{},{}]);

  return (
    <div className="app-window">
      <div className="sidebar">

       <header>
         <img className="header--avatar" src="https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1" alt="" />
         <div className="header--buttons">
           <div className="header--btn">
              <DonutLargeIcon style={{color: '#919191'}} />
           </div>
           <div className="header--btn">
              <ChatIcon style={{color: '#919191'}} />
           </div>
           <div className="header--btn">
              <MoreVertIcon style={{color: '#919191'}} />
           </div>
         </div>
       </header>

       <div className="search">
         <div className="search--input">
             <SearchIcon style={{color: '#919191'}} />
             <input type="search" placeholder="Procurar ou começar uma nova conversa" />
         </div>
       </div>

       <div className="chatlist">
         {chatlist.map((item, key) => (
             <ChatListItem 
                key={key}
             />
         ))}
       </div>

       </div>
       <div className="contentarea">
        ...
      </div>

    </div>
  );
}
