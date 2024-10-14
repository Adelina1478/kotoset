import { profileAPI, usersAPI } from "../api/API";

const ADD_POST = 'ADD-POST';
const SETUSERPROFILE = 'SETUSERPROFILE';
const SETUSERSTATUS = 'SETUSERSTATUS';
const DELETEPOST='DELETPOST';
const SAVEPHOTOSUCCESS='SAVEPHOTOSUCCESS';
const SETPROFILEERRORS = 'SETPROFILEERRORS';

let initialstate = {
    Posts: [
        { id: 1, message: 'This is my page', likeCount: '5', disCount: '0' },
        { id: 2, message: 'hello hello hello', likeCount: '10', disCount: '2' }
    ],
    profile: null,
    status: "",
    errors:{}

};
const profilereducer = (state = initialstate, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 15,
                disCount:0
            };
            return {
                ...state,
                Posts: [...state.Posts, newPost],
                newPostText: ''
            };
        }
        
        case SETUSERPROFILE:{
            return {
                ...state,
                profile: action.profile,
                errors:{}
            }
        }
        case SETUSERSTATUS:{
            return {
                ...state,
                status: action.status
            }
        }
        case DELETEPOST:{
            return{
                ...state,
                Posts:state.Posts.filter(p=>p.postId!= action.postId)
            }
        }
        case SAVEPHOTOSUCCESS:{
            return{
                ...state,
                profile: {...state.profile, photos:action.photos}
            }
        }
        case SETPROFILEERRORS:
            return {
                ...state,
                errors: action.errors
            };
        default:
            return state;
    }

}


export const addPostActionCreator = (newPostText) => ({ type: ADD_POST,newPostText })
export const setUserProfile = (profile) =>
    ({ type: SETUSERPROFILE, profile })
export const setstatus = (status) =>
    ({ type: SETUSERSTATUS, status })
export const deletePost = (postId) =>
    ({ type: DELETEPOST, postId })
export const  setPhotoSuccess= (photos) =>
    ({ type: SAVEPHOTOSUCCESS, photos })



export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getprofile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}
export const getstatus = (userId) => (dispatch) => {
    profileAPI.getstatus(userId)
        .then(response => {
            dispatch(setstatus(response.data));
        });
}

export const updatestatus = (status) => (dispatch) => {
    profileAPI.updatestatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setstatus(status));
            }
        });
}

export const savePhoto = (file) => (dispatch) => {
    profileAPI.savePhoto(file)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setPhotoSuccess(response.data.data.photos));
            }
        });
}

export const setProfileErrors = (errors) => ({ type: SETPROFILEERRORS, errors });
export const saveProfile = (profile) => (dispatch, getState) => {
    const userId = getState().auth.userId;
    profileAPI.saveProfile(profile)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getUserProfile(userId));
            } else {
                dispatch(setProfileErrors(response.data.messages));}
        });
}

export default profilereducer;