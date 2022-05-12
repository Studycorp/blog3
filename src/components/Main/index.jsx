import React from "react";
import "./index.css";



const Main = () => {
    return (
        <main>
            <div className="post">
            {posts.map((post, i) => <div key={i} className="post">{post.title}</div>)}
            </div>
        </main>
    )

}
export default Main;

