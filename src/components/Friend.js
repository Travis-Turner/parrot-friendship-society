import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import './Friend.css';

function Friend(props) {
  let { id } = useParams();
  let history = useHistory();
  let { friends } = props.serverData;
  
  return (
      <div className="friend">
        {
          friends.map((friend) => {
            if (id === friend.id){
              return (
                <>
                <div className="friend__card">
                  <img className="friend__userpic" src={friend.profilePicLight} alt={friend.name}/>
                  <div className="friend__details">
                    <h3 className="friend__name">{friend.name}</h3>
                    <p className="friend__location">Location: {friend.location}</p>
                    <p className="friend__quantity">Number of parrots: {friend.parrotsOwned.length}</p>
                    <p className="friend__fav-quote">Favorite bird quote: "{friend.favBirdQuote}"</p>
                  </div>
                </div>
                <button className="button button_type_back" onClick={() => history.goBack()}></button>
                </>
              )
            }
          })
        }
      </div>
  );
}

export default Friend;


