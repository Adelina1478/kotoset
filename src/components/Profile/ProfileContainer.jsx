/*import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setUserProfile } from '../../Redux/ProfileReducer';
import Profile from './Profile';

class ProfileContainer extends React.Component {
    
    componentDidMount() {
        let userId = useParams();;
        if (!userId) {
            userId=2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId).then((response) => {
            this.props.setUserProfile(response.data);
        });
    }
    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />)

    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});


let WithUrlDataContainerComponent = useParams(ProfileContainer);
export default useSelector(mapStateToProps, { setUserProfile })(WithUrlDataContainerComponent);*/
import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/AuthRedirect';
import { getstatus, getUserProfile, savePhoto, saveProfile, updatestatus } from '../../Redux/ProfileReducer';
import Profile from "./Profile";

function ProfileContainer(props) {
    let { userId } = useParams();
    if (!userId) {
        userId = 31422;
    }
    useEffect(() => {
        props.getUserProfile(userId);
        props.getstatus(userId);
        }, [userId]);
    
    
    return (
        <div>
            <Profile profile={props.profile} status={props.status} updatestatus={props.updatestatus} isOwner={userId===31422} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
        </div>
    );
}

let mapStateToProps = (state)=> ({
    profile: state.profilePage.profile,
    status:state.profilePage.status,
    isOwner: state.auth.userId,
})

export default  compose(
    withAuthRedirect,
    connect (mapStateToProps, {getUserProfile,getstatus,updatestatus, savePhoto, saveProfile}),
    /*withAuthRedirect*/
)(ProfileContainer);

