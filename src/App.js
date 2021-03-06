/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from 'react';
import './App.css';

import ChatListItem from './components/ChatListItem';
import ChatIntro from './components/ChatIntro';
import ChatWindow from './components/ChatWindow';

import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchIcon from '@material-ui/icons/Search';

export default () => {

  const [chatlist, setChatList] = useState([
    {chatId: 1, title: 'Cristiano Ronaldo ', image: 'https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1'},
    {chatId: 2, title: 'Messi ', image: 'https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1'},
    {chatId: 3, title: 'Roberto Marinho', image: 'https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1'},
    {chatId: 4, title: 'GabiGol', image: 'https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1'}
  ]);
  const [activeChat, setActiveChat] = useState({});
  const [user, setUser] = useState({
    id: 1234,
    avatar: 'https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1',
    name: 'Alex Sodré'
  });

  return (
    <div className="app-window">
      <div className="sidebar">

       <header>
         <img className="header--avatar" src={user.avatar} alt="" />
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
                data={item}
                active={activeChat.chatId === chatlist[key].chatId}
                onClick={() => setActiveChat(chatlist[key])}
             />
         ))}
       </div>

       </div>
       <div className="contentarea">
         {activeChat.chatId !== undefined &&
            <ChatWindow 
              user = {user}
            />
         }
           {activeChat.chatId === undefined && 
        
           <ChatIntro />
          }
      </div>

    </div>
  );
}
