import React, { useState } from 'react';
import userimg from "../../../assets/images/ava.jpg";
import Preloader from '../../common/preloader/preloader';
import ProfileDataForm from './ProfileDataForm';
import s from './ProfileInfo.module.css';
import ProfileStatusWithHoks from './ProfileStatusWithHoC';

const ProfileInfo = ({profile,status,updatestatus,isOwner,savePhoto, saveProfile}) => {
    let [editMode,setEditMode]= useState(false);

    if (!profile){
        return <Preloader/>
    }
    const ChangePhotoAva=(e)=>{
        if( e.target.files[0]){
            savePhoto(e.target.files[0])
        }
    }
    const onSubmit=(formData)=>{
        saveProfile(formData);
        setEditMode(false);

    }

    return (
        <div>
            <div className={s.img}>
                <img src='https://img.freepik.com/premium-photo/blue-pattern-panorama-banner-background_7954-22619.jpg'/>
            </div>
            <div className= {s.description}>
                <img src={profile.photos.large || userimg} className={s.mainphoto}/>
                <div>{isOwner && <input type={"file"} onChange={ChangePhotoAva}/>}</div>
                {editMode ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/> :<ProfileData
                goToEditMode={()=>{setEditMode(true)}}
                profile={profile} isOwner={isOwner}/>}
                <ProfileStatusWithHoks status = {status} updatestatus={updatestatus}/>
            </div>
        </div>
    )
}

const ProfileData=({profile, isOwner, goToEditMode})=>{
    return <div>
        {isOwner && <div><button onClick={goToEditMode}>Редактировать</button></div>}
        <div><b>Имя: </b>{profile.fullName}</div>
    <div><b>Ищу работу: </b>{profile.lookingForAJob ? "yes":"no"}</div>
    {profile.lookingForAJob &&
    <div>
        <b>Мои профессиональные навыки: </b>:{profile.lookingForAJobDescription}
    </div>
    }
    <div><b>Обо мне: </b>{profile.aboutMe}</div>
    <div>
        <b>Контакты: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
    </div>
    </div>
}



const Contact = ({contactTitle, contactValue})=>{
    return <div className= {s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}

export default ProfileInfo;