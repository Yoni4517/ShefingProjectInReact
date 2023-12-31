import React from 'react'

//form of adding post to the posts list component
export default function AddPost(props) {
    function onSubmit(e) {
        e.preventDefault();
        let postObj = {
            id: props.id,
            userId: props.userId,
            title: title.value,
            body: body.value
        }
        props.setPostsData(data => [...data, postObj]);//adding the new post to the posts array
        props.setShowAddPost(false);
    }
    return (
        <div style={{ padding: "2vw 5vw", backgroundColor: "#ffffff85" }}>
            <button onClick={() => { props.setShowAddPost(false) }}>✖</button>
            <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column" }} >
                <label htmlFor="title">Title:</label>
                <textarea type="text" id="title" required />
                <label htmlFor="title">Body:</label>
                <textarea type="text" id="body" required />
                <button type='submit' style={{ margin: "1vw", backgroundColor: "#920748", color: "white" }}>Add</button>
            </form>
        </div>
    )
}