import React from "react";
import "./index.css";

const Post = (props) => {

    let st ={
        backgroundImage:`url(${props.pic})`,
       backgroundSize:"contain",
       backgroundRepeat:"no-repeat",
       backgroundColor: "#fff"

    }
    return (
        <div className="post">
            {/* 
                background-image
                    + ставится именно так, как нам надо
                    - картинка не является картинкой
                img
                    + это - картинка
                    - кривая
            */}
            <div className="post" style={st}></div>
            <div className="card__price">{props.prise}</div>
            <div className="card__text">{props.text}</div>
        </div>
    )
}

export default Post;
