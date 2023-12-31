import React, { useState, useEffect } from 'react'
import AddPost from './AddPost'
export default function Posts(props) {
    //the url to recieve the posts posted by selected user id
    const UrlToPosts = `https://jsonplaceholder.typicode.com/posts/?userId=${props.userPosts.id}`;
    const [postsData, setPostsData] = useState([]);//the array of the relevant posts
    const [showAddPost, setShowAddPost] = useState(false);//a flag about showing the "AddPost" component
    const [fetchError, setFetchError] = useState("null");//the data about error during fetch
    const [onFetch, setOnFetch] = useState(true);//a flag that contains "true" if the request is during fetch
  
    //getting the posts of specific user each time the "userPost" was changed
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setOnFetch(true);
                const response = await fetch(UrlToPosts);
                if (!response.ok) throw "Did not recieved excepted data.";
                const posts = await response.json();
                setPostsData(posts);
                setFetchError("null");
                setOnFetch(false);
            }
            catch (err) {
                setFetchError(err.message);
            }
        }
        fetchPosts();
    }, [props.userPosts]);

    return (
        <>
            {props.showPosts &&
                <div style={{ backgroundColor: "#f0efef", padding: "3vw", marginLeft: "5vw", alignItems: 'center', width: '30vw' }}>
                    <button onClick={() => props.setShowPosts(false)}>✖</button>
                    {fetchError != "null" && <h2>{fetchError}, Try Again</h2>}
                    {onFetch && fetchError == "null" && <h2>Loading...</h2>}
                    {!onFetch && fetchError == "null" &&
                        <div>
                            <h3>Posts posted by {props.userPosts.name}</h3>
                            <ul style={{ textAlign: "start" }}>
                                {postsData.map((post) =>
                                    <li key={post.id}>{post.title}</li>
                                )}
                            </ul>
                            {!showAddPost && <button onClick={() => setShowAddPost(true)}>Create New Post</button>}
                            {showAddPost && <AddPost setPostsData={setPostsData} userId={props.userPosts.id} id={postsData.length} setShowAddPost={setShowAddPost} />
                            }
                        </div>
                    }
                </div>
            }
        </>
    )
}