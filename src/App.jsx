import React, { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Header from './components/Header';
import Main from './components/Main';
import Post from './components/post';



export default () => {
    const [posts, getPosts] = useState([]);

    useEffect(() =>     {
        let token = localStorage.getItem("token");
        if (token) {
            fetch("https://api.react-learning.ru/posts", {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(ans => {
                    console.log(ans);
                    getPosts(ans);
                })
            }
    }, []);
   
    return <>
    <Header/>
    {/*<Main/>*/}
      
        {posts.map((post, i) => <div key={i} className="post">{post.title}</div>)}
        {posts.map((post, n) => <div key={n} className="post">{post.img}</div>)}
        <Footer/>
    </>
}
