import React from 'react';
import Posts from '../posts';

import { useQuery } from '@apollo/client';
import { Query_posts } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(Query_posts);
    const posts = data?.posts || [];
    return(
        <main>
            <div className="flex-row justify-space-between">
                <div className="">
                {loading ? (
                    <div>Loading...</div>
                ) : (
                    <Posts posts={posts} title="What would you like to post?" />
                )}
                </div>
            </div>
        </main>
    )
}

export default Home;