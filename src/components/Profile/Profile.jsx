import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './myposts/MyPostContainer';


const Profile = (props) => {
    
    return <div>
        <ProfileInfo profile={props.profile} status={props.status} updatestatus={props.updatestatus} isOwner={props.isOwner} savePhoto={props.savePhoto} saveProfile={props.saveProfile}/>
        <MyPostsContainer/>
    </div>

}
export default Profile;