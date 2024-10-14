import React, { useEffect, useState } from 'react';


const ProfileStatusWithHoks = (props)=>{
    let [editMode,setEditMode]= useState(false);
    let [status,setStatus]= useState(props.status);

    useEffect(()=>{//хук нельзя писать в условиях  в циклах тое нельзя читать документацию!!
        setStatus(props.status);}, [props.status]);

    const activateEditMode=()=>{
        setEditMode(true);
    }
    const deactivateEditMode=()=>{
        setEditMode(false)
        props.updatestatus(status);
    }

    const onStatusChange=(e)=>{
        setStatus(e.currentTarget.value);
    }
        return (
            <div>
                {!editMode &&
                    <div>
                        <b>Status: </b><span onDoubleClick={activateEditMode}>{props.status || "--------"}</span>
                    </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur= {deactivateEditMode}value={status}/>
                    </div>
                }
            </div>


            )
    }


export default ProfileStatusWithHoks;