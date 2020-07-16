import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

function Friend(props) {
  let { id } = useParams();
  let history = useHistory();
  let { friends } = props.serverData;
  
  return (
      <div>
        {
          friends.map((friend) => {
            if (id === friend.id){
              return (
                <div>
                  <button onClick={() => history.goBack()}>Back</button>
                  <h3>{friend.name}</h3>
                  <p>Location: {friend.location}</p>
                  <p>Number of parrots {friend.parrotsOwned.length}</p>
                  <p>Favorite bird quote: "{friend.favBirdQuote}"</p>
                </div>
              )
            }
          })
        }
      </div>
  );
}

export default Friend;


