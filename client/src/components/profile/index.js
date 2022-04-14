import React from 'react'
import Select from 'react-select';
import { Redirect, useParams } from 'react-router-dom';
import Friends from '../friends';
import Posts from '../posts';
import { useQuery, useMutation } from '@apollo/client';
import { Query_user, Query_me } from '../utils/queries';
import Auth from '../utils/auth';
import { Add_friend } from '../utils/mutations';

const Profile = () => {
const [addFriend] = useMutation(Add_friend);
const { username: userParam } = useParams();
const { loading, data } = useQuery(userParam ? Query_user : Query_me, {
    variables: { username: userParam }
});
const user = data?.me || data?.user || {};
if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
}

if (loading) {
    return <div>Loading...</div>;
}
const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
};
const rank = [
    { label: "Contender", value: 1 },
    { label: "Specialist", value: 2 },
    { label: "Advance", value: 3 },
    { label: "Expert", value: 4 },
    { label: "Elite", value: 5 },
    { label: "Master", value: 6 },
    { label: "Challenger", value: 7 },
    { label: "Top 250", value: 8 },
    { label: " Warzone", value: 9 }
]
return (
    <div>
        <div className="">
            <h2 className="">{user.username}'s profile.</h2>
                <div>
                    <label>Bio:</label>
                    <input placeholder=''></input>
                </div>
                <div>
                    <label>Rank or Warzone: </label>
                    <Select placeholder="N/A" options={rank}></Select>
                </div>
            <button className="btn " onClick={ handleClick }>Add Friend</button>
        </div>
        <div className="flex-row justify-space-between">
            <div className="">
            <Posts  posts={user.posts} title={`${user.username}'s posts...`} />
            </div>
            <div className=""><Friends username={user.username} friendCount={user.friendCount} friends={user.friends}/></div>
        </div>
    </div>
  );
}

export default Profile;