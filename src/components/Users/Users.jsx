import React from "react";
import { NavLink } from "react-router-dom";
import Paginator from "../common/preloader/Paginators/paginator";
import userimg from './../../assets/images/ava.jpg';
import style from './user.module.css';

let Users = (props) => {
    return (
        <div>
            <div>
                <Paginator
                    totalItemsCount={props.totalUsersCount}
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    onPageChanged={props.onPageChanged}
                />
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userimg} className={style.userphoto} />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.unfollow(u.id); }}>UNFOLLOW</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { props.follow(u.id); }}>FOLLOW</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;