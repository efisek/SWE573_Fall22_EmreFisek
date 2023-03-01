import React from "react";
import Post from "../Post/Post";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Home() {

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const {postList, setPostList} = useState([]);


    useEffect(() => {
        axios.get("/post/flow")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setPostList(result)
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    },[])

    if(error) {
        return <div> Error </div>;
    } else if(!isLoaded) {
        return <div> Loading.. </div>;
    } else {
        return(
            <div className="container">
            Congrats!
            {postList?.map(post => (
                <Post title={post.reference} text={post.message}></Post>
            ) ) }

            </div>
        );
    }     
}

export default Home;

    /*
            <Link to ={{pathname: 'user/' + userId}}>User!</Link>

     
           


{{postList.map(post => (
                <Post title={post.reference} text={post.message}></Post>
            ) ) }
----------------------------------------
         

            <ul>
                {postList.map(post =>(
                    <li>
                        {post.message} {post.reference} 
                    </li>
                ))}
            </ul>
*/