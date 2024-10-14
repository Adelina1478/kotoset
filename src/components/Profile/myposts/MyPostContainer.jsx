import { connect } from 'react-redux';
import { addPostActionCreator } from '../../../Redux/ProfileReducer';
import MyPosts from './MyPosts';

const mapStateToProps =(state)=>{
    return{
        Posts : state.profilePage.Posts,
        newPostText :state.profilePage.newPostText
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        addPost:(newPostText)=>{
            dispatch(addPostActionCreator(newPostText));
        }
    }
}



const MyPostsContainer= connect( mapStateToProps ,mapDispatchToProps)(MyPosts);

export default MyPostsContainer;