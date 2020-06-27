import React from 'react';
import {Field, reduxForm} from "redux-form";
import { Textarea } from '../../common/FormsControls/FormsControls';
import { required, maxLengthCreator, minLengthCreator } from '../../../utils/validators/validators';

const maxLength100= maxLengthCreator(100);
const minLength2= minLengthCreator(2);
 export const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea}
                 validate={[required, maxLength100,minLength2]}
                placeholder='Enter your message' name="newMessageBody" />
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

export default reduxForm({form: 'dialog-add-message-form'})(AddMessageForm);

























