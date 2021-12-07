/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './ChatListItem.css';

export default () => {
   return (
       <div className="chatListItem">
          <img className="chatListItem--avatar" src="https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1" alt="" />
          <div className="chatListItem--lines">
             <div className="chatListItem--line">
                <div className="chatListItem--name">Alex Sodre</div>
                <div className="chatListItem--date">19:00</div>
             </div>
             <div className="chatListItem--line">
                 <div className="chatListItem--lastMsg">
                    <p>opa, tudo bem?</p>
                 </div>
             </div>
          </div>
       </div>
     );
}