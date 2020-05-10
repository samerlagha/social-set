const UPDATE_NEW_MESSAGE_BODY='UPDATE-NEW-MESSAGE-BODY';

const SEND_MESSAGE= 'SEND-MESSAGE';

let initialState= {
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
  };
const dialogsReducer=(state = initialState,action)=>{
    switch(action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody=action.body;
            return state;
            case SEND_MESSAGE:
                let body = state.newMessageBody;
                state.newMessageBody='';
                state.messages.push(   {id: 5, message:body},)
                return state;
                default:
                    return state;    
    }

}

export default dialogsReducer;