import { Field, Form, Formik } from 'formik';
import React from 'react';
import { Navigate } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';



const Dialogs = (props) => {
    let state = props.dialogPage;

    let dialogElement = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />);
    let messageElement = state.messages.map(m => <Message message={m.message} key={m.id} />);
    let newMessageBody = state.newMessageBody;



    if (!props.isAuth) return <Navigate to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogElement}
            </div>
            <div className={s.messages}>
                <div>{messageElement}</div>
            </div>
            <AddNewMessageForm sendMessage={props.sendMessage}/>
    </div>
    )
}

const AddNewMessageForm =(props)=>{
    let addNewMessage = (values) => {
        props.sendMessage(values);
    }
    
    return(
            <Formik
            initialValues={{newMessageBody: ""}
            }
            onSubmit={(values, {resetForm}) => {
                addNewMessage( values.newMessageBody );
                resetForm( {values: ''} );
                }}>
            {() => (
                <Form>
                    <div>
                        <Field as={'textarea'} name={'newMessageBody'} placeholder={'message'}/>
                    </div>
                    <button type={'submit'}>Send</button>
                </Form>
            )}
        </Formik>

    )
}

export default Dialogs;


