import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT='UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';

const SEND_MESSAGE= 'SEND-MESSAGE';
let store={
   _state:{
    profilePage:{
      posts:[

        {id:1, message:'Hi,how are you?',likesCount:12},
        {id:2, message:'It is my first post',likesCount:2},
        {id:3, message:'very well',likesCount:2},
        {id:4, message:'react ii is nice',likesCount:2},
      ],
      newPostText:'it-kamasutra.com',
     
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
      newMessageBody:'',
    },
    sidebar:{

    }
    
  },
  _callsubscriber(){
    console.log('state is changed')
  },

  getState(){
    return this._state
  },

  subscribe(observer){
    this._callsubscriber=observer;
 },

  dispatch(action){
   this._state.profilePage= profileReducer(this._state.profilePage,action);
   this._state.dialogsPage= dialogsReducer(this._state.dialogsPage,action);
   this._state.sidebar= sidebarReducer(this._state.sidebar,action);

   this._callsubscriber(this._state);
  }

}

export const addPostActionCreator=()=>{
  return{
    type:ADD_POST,
  }
}

export const updateNewPosttextActionCreater=(text)=>{
  return{
    type:UPDATE_NEW_POST_TEXT,
    newText:text,
  }
}

export const sendMessageCreator=()=>{
  return{
    type:SEND_MESSAGE,
  }
}

export const updateNewMessageBodyCreater=(body)=>{
  return{
    type:UPDATE_NEW_MESSAGE_BODY,
    body:body,
  }
}
 
  export default store;
  window.store=store;