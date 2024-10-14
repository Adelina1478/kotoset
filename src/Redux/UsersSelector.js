import { createSelector } from "reselect";

export const getUsersSelector =(state)=>{
    return state.userPage.users;
}

export const getUser= createSelector(getUsersSelector,(users)=>{
    return users.filter(u=>true);
})

export const getPageSize=(state)=>{
    return state.userPage.pageSize;
}


export const getTotalusersCount=(state)=>{
    return state.userPage.totalUsersCount;
}
export const getCurrentPage=(state)=>{
    return state.userPage.currentPage;
}
export const getIsFetching=(state)=>{
    return state.userPage.isFetching;
}
export const getFollowingInProgress=(state)=>{
    return state.userPage.followingInProgress;
}


