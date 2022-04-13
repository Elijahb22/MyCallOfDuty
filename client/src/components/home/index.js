import React from 'react';
import { useQuery } from '@apollo/client';
import { Query_posts } from '../utils/queries';

const Home = () => {
    const { loading, data } = useQuery(Query_posts);
    const posts = data?.posts || [];
    console.log(posts)
    console.log(loading)
    return(
        <main>
            <div className="flex-row justify-space-between">
                <div className="">

                    <div>Loading</div>
            
                </div>
            </div>
        </main>
    )
}

export default Home;