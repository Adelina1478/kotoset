import React from 'react';
import prof from './Post.module.css';

const Post = (props) =>{
    return <div className = {prof.item}>
        <img src = 'https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676296367166243426.png'/>
        {props.message}
                <div>
                <span>like</span> {props.likeCount}
                <span>dislike</span>{props.disCount}
                </div>
                
            </div>
            



}
export default Post;