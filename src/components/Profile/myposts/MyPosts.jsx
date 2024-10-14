import { Field, Form, Formik } from 'formik';
import React from 'react';
import prof from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts =(props)=>{
    let PostsElement = props.Posts.map(p => <Post key={p.id} message={p.message} likeCount={p.likeCount} disCount={p.disCount} />)
    let newPostElement = React.createRef();

    /*let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }*/


    return <div className={prof.postBlocs}>
        <h3>my posts</h3>
        <div>
            <AddNewPostForm addPost={props.addPost}/>
        </div>
        <div className={prof.posts}>
            {PostsElement}
        </div>
        
        </div>
}
let AddNewPostForm = (props) =>{
    let onAddPost = (values) => {
        props.addPost(values);
    }
    return(
        <Formik
            initialValues={{newPostText: ""}
            }
            onSubmit={(values, {resetForm}) => {
                onAddPost( values.newPostText );
                resetForm( {values: ''} );
                }}>
            {() => (
                <Form>
                    <div>
                        <Field name={'newPostText'} as={'textarea'}/>
                    </div>
                    <div>
                <button type={'submit'}>AddPost</button>
            </div>
                </Form>
            )}
        </Formik>
    )
}

export default MyPosts;
