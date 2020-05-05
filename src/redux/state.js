import { rerenderEntireTree } from "../render";

  
  let state={
    profilePage:{
      posts:[

        {id:1, message:'Hi,how are you?',likesCount:12},
        {id:2, message:'It is my first post',likesCount:2},
        {id:3, message:'al hamdu li llah',likesCount:2},
        {id:4, message:'Allah akbar',likesCount:2},
      ],
     
    },

    dialogsPage:{
      messages:[
  
        {id: 1 , message:'Hi'},
        {id: 2 , message:'I am fine and you '},
        {id: 3 , message:'I like React'},
        {id: 4 , message:'learn react and js '},
      ],
      dialogs:[
        {id:1 , name:'Samer'},
        {id:2 , name:'Varya'},
        {id:3 , name:'Alex'},
        {id:4, name:'Maxim'},
        {id:5 , name:'Ali'},
        {id:6, name:'joe'},
      ],
    },
    sidebar:{

    }
    
  }

  export let addPost = postMessage=>{
    let newPost={
      id:5,
      message:postMessage,
      likesCount:0,
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
  }

  export default state;