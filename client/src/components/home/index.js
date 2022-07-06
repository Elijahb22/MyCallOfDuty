import React from 'react';
import Posts from '../posts';
import Friends from '../friends';
import { useQuery } from '@apollo/client';
import { Query_posts, Query_mes } from '../../utils/queries';
import Auth from '../../utils/auth';
const Home = () => {
    const { loading, data } = useQuery(Query_posts);
    const posts = data?.posts || [];
    const loggedIn = Auth.loggedIn();
    const { data: userData } = useQuery(Query_mes);
    return(
        <main>
            <div className="flex-row justify-space-between">
                <div className={`${loggedIn && 'col-lg-8'}`}>
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Posts posts={posts} title="What would you like to post?" />
                )}
                </div>
                {loggedIn && userData ? (
                <div className="col-12 col-lg-3 mb-3">
                    <Friends username={userData.me.username} friendCount={userData.me.friendCount} friends={userData.me.friends}/>
                </div> ) : null}
            </div>
        </main>
    )
}

export default Home;