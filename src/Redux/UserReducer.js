import { usersAPI } from "../api/API";

const FOLLOW='FOLLOW';
const UNFOLLOW ='UNFOLLOW';
const SETUSERS='SETUSERS';
const SETCURRENTPAGE='SETCURRENTPAGE';
const SETTOTALCOUNT='SETTOTALCOUNT';
const LOADER='LOADER';
const FOLLOWINGPROGRESS='FOLLOWINGPROGRESS';

let initialstate={
    users: [],
    pageSize:4,
    totalUsersSCount:0,
    currentPage:1,
    isFetching: true,
    followingInProgress: []
};

const userreducer = (state=initialstate, action) => {
    switch (action.type) {
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id=== action.userId){
                        return{...u, followed: true}
                    }return u;
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u=>{
                    if(u.id=== action.userId){
                        return{...u, followed: false}
                    }return u;
                })
            }

        case SETUSERS:
            return{
                ...state,
                users : action.users
            }
        case SETCURRENTPAGE:
            return{
                ...state,
                currentPage: action.currentPage
            }
        case SETTOTALCOUNT:
            return{
                ...state,
                totalUsersCount:action.count
            }
        case LOADER:
            return{
                ...state,
                isFetching:action.isFetching
            }
        case FOLLOWINGPROGRESS:{
            return{
                ...state,
                followingInProgress: action.isFetching?
                [...state.followingInProgress, action.userId]
                :state.followingInProgress.filter(id=>id!=action.userId)
            }
        }

        default:
            return state;
        

    }
}


export const followSuccess=(userId)=>({type:FOLLOW , userId})
export const unfollowSuccess=(userId)=>({type: UNFOLLOW,userId})
export const setusers=(users)=>({type: SETUSERS,users})
export const setCurrentPage=(currentPage)=>({type: SETCURRENTPAGE, currentPage})
export const setTotalUsersCount=(totalUsersCount)=>({type: SETTOTALCOUNT, count: totalUsersCount})
export const setFetching=(isFetching)=>({type:LOADER,isFetching})
export const followingProgress=(isFetching,userId)=>({type:FOLLOWINGPROGRESS,isFetching , userId})

export const getUsers =(page,pageSize)=>{
    return (dispatch)=>{
    dispatch (setFetching(true));
    dispatch (setCurrentPage(page));
        usersAPI.getUsers(page,pageSize)
        .then(data => {
            dispatch(setusers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setFetching(false));
        });

}
}

export const follow =(userId)=>{
    return (dispatch)=>{;
    dispatch(followingProgress(true, userId));
    usersAPI.follow(userId)
    .then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(followSuccess(userId));
        }
        dispatch(followingProgress(false, userId));

    });

}
}
export const unfollow =(userId)=>{
    return (dispatch)=>{;
    dispatch(followingProgress(true, userId));
    usersAPI.unfollow(userId)
    .then((response) => {
        if (response.data.resultCode === 0) {
            dispatch(unfollowSuccess(userId));
        }
        dispatch(followingProgress(false, userId));

    });

}
}


export default userreducer;