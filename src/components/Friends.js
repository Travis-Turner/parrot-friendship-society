import React from 'react';
import Friend from './Friend';
import { useRouteMatch, Link } from 'react-router-dom';

import './Friends.css';



function Friends(props) {
  let { path, url } = useRouteMatch();
  let { friends } = props.serverData;
  
  return (
      <div className="friends">
        <ul className="friends__list">
        {
          friends.map((friend) => {
            return (
              <li className="friend-preview" key={friend.id} >
                <Link to={`${path}/${friend.id}`}>
                    <img className="friend-preview__image" src={friend.profilePicDark} alt=""/>
                    <span className="friend-preview__name">{friend.name}</span>
                </Link>
              </li>
            )
          })
        }
        </ul>
      </div>
  );
}

export default Friends;
