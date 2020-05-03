import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

  // let posts=[

  //   {id:1, message:'Hi,how are you?',likesCount:12},
  //   {id:2, message:'It is my first post',likesCount:2},
  //   {id:3, message:'al hamdu li llah',likesCount:2},
  //   {id:4, message:'Allah akbar',likesCount:2},
  // ];

  let postselements = props.posts
  .map(p=> <Post message={p.message} likesCount={p.likesCount} />);
  return (
    <div className={s.postsBlock}>
     <h2> My posts</h2>
      <div>
        <div>
        <textarea></textarea>
        </div>
       <div>
       <button>Add post</button>
       </div>
       
      </div>
      <div className={s.posts}>
        {postselements}
    
       
      </div>
    </div>
  );
};

export default MyPosts;
