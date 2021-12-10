/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './ChatListItem.css';

export default ({onClick, active}) => {
   return (
       <div 
       className={`chatListItem ${active?'active':''}`}
       onClick={onClick}
       
       >
          <img className="chatListItem--avatar" src="https://i0.wp.com/maikon.biz/wp-content/uploads/2020/06/gerador-de-persona-maikonbiz.png?fit=1080%2C1080&ssl=1" alt="" />
          <div className="chatListItem--lines">
             <div className="chatListItem--line">
                <div className="chatListItem--name">Alex Sodre</div>
                <div className="chatListItem--date">19:00</div>
             </div>
             <div className="chatListItem--line">
                 <div className="chatListItem--lastMsg">
                    <p>A Live vai ficar gravada?A Live vai ficar gravada?A Live vai ficar gravada?</p>
                 </div>
             </div>
          </div>
       </div>
     );
}