import React from 'react';
import Friend from './Friend';
import { useRouteMatch, Link } from 'react-router-dom';

function Friends(props) {
  let { path, url } = useRouteMatch();
  let { friends } = props.serverData;
  return (
      <div>
        <h2>My Friends</h2>
        <ul>
        {
          friends.map((friend) => {
            return (
              <li key={friend.id} >
                <Link to={`${path}/${friend.id}`}>{friend.name}</Link>
              </li>
            )
          })
        }
        </ul>
      </div>
  );
}

export default Friends;
