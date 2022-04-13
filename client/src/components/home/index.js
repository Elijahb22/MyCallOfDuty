import React from 'react';
import { useQuery } from '@apollo/client';
import { query_posts } from '../utils/queries';
const home = () => {
    const { loading, data } = useQuery(query_posts);
    const posts = data?.posts || [];
    console.log(posts)
    return(
        <main>
            <div className="flex-row justify-space-between">
                <div className="">
                    {loading (
                    <div>Loading</div>
                    )}
                </div>
            </div>
        </main>
    )
}

export default home;