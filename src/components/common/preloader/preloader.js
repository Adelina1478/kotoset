import React from 'react';
import loader from './../../../assets/images/loading.svg';
import img from './preloader.module.css';

let Preloader=(props)=>{
    return <div >
        <img className={img.preloader} src={loader}/>
    </div>
    
}
export default Preloader;