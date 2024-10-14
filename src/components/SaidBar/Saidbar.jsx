import React from 'react';
import SaidBar from './SaidBar.module.css';



const Saidbar = () => {
    return (
        <div className={SaidBar.fr}> FRIENDS
            <div className={SaidBar.said}>
                <div className={SaidBar.name} >
                    <img src='https://avatars.mds.yandex.net/get-shedevrum/11511289/cc2855ebcbb411eea6ebbaaee90618f0/orig' />
                    <a > Misha </a>
                </div>
                <div className={SaidBar.name}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS60Q0HVRXcJDXj3l6ZadnZpETkgVYKwRzEgA&s'/>
                    <a> Masha</a>
                </div>
                <div className={SaidBar.name}>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUTcwXsNfU_2Fzr88U_wwJwoo0hHJZkAc6UQ&s'/>
                    <a>Karina</a>
                </div>
                <div className={SaidBar.name}>
                    <img src='https://masterpiecer-images.s3.yandex.net/df0c6044571f11ee8131aaafe6635749:upscaled'/>
                    <a>Adelina</a>
                </div>
            </div>
        </div>
    )
}
export default Saidbar;
