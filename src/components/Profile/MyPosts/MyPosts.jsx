import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import  { updateNewPosttextActionCreater, addPostActionCreator } from "../../../redux/store";


const MyPosts = (props) => {


  let postselements = props.posts
  .map(p=> <Post message={p.message} likesCount={p.likesCount} />);

  let newPostElement=React.createRef();

  let addPost= ()=>{
    // let action = {type:'ADD-POST'};
    props.dispatch(addPostActionCreator());
 
  };

  let onPostChange=()=>{
     let text = newPostElement.current.value;
    // store.dispatch({type:'UPDATE-NEW-POST-TEXT',newText:text});
    let action =updateNewPosttextActionCreater(text);
    props.dispatch(action);
  }
  return (
    <div className={s.postsBlock}>
     <h2> My posts</h2>
      <div>
        <div>
        <textarea onChange={onPostChange} 
        ref={newPostElement}
        value={props.newPostText}
        />
        </div>
       <div>
       <button onClick={addPost}>Add post</button>
       </div>
       
      </div>
      <div className={s.posts}>
        {postselements}
    
       
      </div>
    </div>
  );
};

export default MyPosts;
