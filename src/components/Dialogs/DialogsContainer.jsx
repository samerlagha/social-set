//import React from 'react';
import { updateNewMessageBodyCreater, sendMessageCreator } from '../../redux/store';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
//import { Redirect} from "react-router-dom";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToprops =(state)=>{
    return {
       dialogsPage:state.dialogsPage,
    
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

export default compose(
    connect(mapStateToprops,mapDispatchToProps),
    withAuthRedirect
)(Dialogs);