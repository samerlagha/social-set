import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs=(props)=>{

    let dialogsElemnets= props.state.dialogs
        .map(d=> <DialogItem name={d.name} id ={d.id}/>);

  

    let messagesElements=props.state.messages
    .map(m=> <Message message={m.message} id={m.id}/>);

    let newPostElement=React.createRef();

    let addPost= ()=>{
      let text = newPostElement.current.value;
      alert(text)
    };

    return(
        <div className={s.dialogs}>
           
        <div className={s.dialogsItems}>
           
            {dialogsElemnets}
 
         </div>
        <div className={s.messages}>
            
            {messagesElements}
           
        </div>
        <div>
        <div>
        <textarea ref={newPostElement}></textarea>
        </div>
       <div>
       <button onClick={addPost}>Add post</button>
       </div>
       
      </div>
        </div>
    )
}

export default Dialogs;