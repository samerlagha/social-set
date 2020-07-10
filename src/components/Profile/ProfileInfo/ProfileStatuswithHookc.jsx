import React from 'react';

import { useState } from 'react';
import { useEffect } from 'react';

const  ProfileStatusWithHookc = (props)=> {
     
       const  [editMode, setEditMode]= useState(false)
       const  [status , setstatus]= useState(props.status)

       useEffect(()=>{
           setstatus(props.status)
       },[props.status])

       const activateMode=()=>{
           setEditMode(true)
       }

      const  deactivateEditMode=()=> {
        setEditMode(false);
        props.updateStatus(status)
    }

   const onStatusChange = (e) => {
        setstatus(e.currentTarget.value)
    }

    
        return (
            <div>
                {!editMode &&  
                 <div>
                        <span onClick={activateMode}>
                            {props.status || "-------"} </span>
                    </div>}
                  
                
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} 
                         onBlur={deactivateEditMode}
                         value={status}
                        />
                    </div>
                }
            </div>
        )
    }


export default ProfileStatusWithHookc;