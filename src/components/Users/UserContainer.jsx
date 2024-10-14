import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../HOC/AuthRedirect";
import { follow, followingProgress, getUsers, setCurrentPage, unfollow } from "../../Redux/UserReducer";
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalusersCount, getUser } from "../../Redux/UsersSelector";
import Preloader from "../common/preloader/preloader";
import Users from "./Users";



class UsersContainer extends React.Component {
    componentDidMount() {// метод классовой компоненты
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    render() { //render обязательно должен быть у класссовой компоненты возвращает jsx
        return <>
        {this.props.isFetching ? <Preloader/>: null}
        <Users totalUsersCount={this.props.totalUsersCount}
        pageSize={ this.props.pageSize}
        currentPage ={this.props.currentPage}
        onPageChanged={this.onPageChanged}
        users={this.props.users}
        unfollow={this.props.unfollow}
        follow={this.props.follow}
        followingInProgress={this.props.followingInProgress}/>
        </>
    }
}
let mapStateToProps= (state)=>{
    return{
        users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount:getTotalusersCount(state),
        currentPage:getCurrentPage(state),
        //setCurrentPage:state.userPage.currentPage,
        isFetching:getIsFetching(state),
        followingInProgress:getFollowingInProgress(state)
        
    }
}


export default compose(
    withAuthRedirect,
    connect (mapStateToProps,
        {follow,unfollow,setCurrentPage,followingProgress,getUsers }))(UsersContainer)