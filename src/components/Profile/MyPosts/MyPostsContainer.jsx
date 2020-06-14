//import React from "react";
import  { updateNewPosttextActionCreater, addPostActionCreator } from "../../../redux/store";
import MyPosts from "./MyPosts";
import { connect } from 'react-redux';


const mapStateToprops =(state)=>{
  return {
      posts: state.profilePage.posts,
      newPostText:state.profilePage.newPostText
  }
}

const  mapDispatchToProps =(dispatch)=>{
  return {
     
   updateNewPostText:(text)=>{

    let action =updateNewPosttextActionCreater(text);
        dispatch(action);
   },
   addPost: ()=>{
    dispatch(addPostActionCreator());
   }
  }
}
const MyPostsContainer= connect(mapStateToprops,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
