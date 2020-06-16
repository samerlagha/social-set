//import React from 'react';

import { updateNewMessageBodyCreater, sendMessageCreator } from '../../redux/store';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';



let mapStateToprops =(state)=>{
    return {
       dialogsPage:state.dialogsPage,
       isAuth: state.auth.isAuth,
    }
}

let mapDispatchToProps =(dispatch)=>{
    return {
        updateNewMessageBody: (body)=>{
            
            dispatch(updateNewMessageBodyCreater(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator());
           
        },

    }
}
const DialogsContainer= connect(mapStateToprops,mapDispatchToProps)(Dialogs);

export default DialogsContainer;