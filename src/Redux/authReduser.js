
import { authAPI, securityAPI } from "../api/API";

const SETUSERDATA='SETUSERDDATA';
const GETCAPTCHAURL='GETCAPTCHAURL';

let initialstate={
    userId: null,
    email: null,
    login:null,
    isAuth:false,
    captchaUrl:null
    
};

const authreducer = (state=initialstate, action) => {
    switch (action.type) {
        case SETUSERDATA:
            return{
                ...state,
                ...action.data,
            }
        case GETCAPTCHAURL:
            return{
                ...state,
                ...action.data
            }
        default:
            return state;
        

    }
}


export const setUserData=(userId,email,login,isAuth)=>({type: SETUSERDATA , data:{userId,email,login,isAuth}})
export const getCaptchaUrlSuccess=(captchaUrl)=>({type: GETCAPTCHAURL , data:{captchaUrl}})

export const getAuthUserData =()=>(dispatch)=>{
    return authAPI.me()
    .then((response) => {
        if(response.data.resultCode===0){
            let {id,login,email}=response.data.data;
            dispatch(setUserData(id,email,login,true));
        }
        
    });

}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData());
            } else if (response.data.resultCode === 10) {
                console.error("Captcha error:", response.data.messages[0]);
                dispatch(getCaptchaUrl()); // Обновление каптчи
            }
        })
        .catch((error) => {
            console.error("Login error:", error);
        });
};

export const getCaptchaUrl =()=> async(dispatch)=>{
    const response= await securityAPI.getCaptchaUrl();
    const captchaUrl= response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));

}

export const logout =()=>(dispatch)=>{
    authAPI.logout()
    .then((response) => {
        if(response.data.resultCode===0){
            dispatch(setUserData(null,null,null,false));
        }
        
    });
}

export default authreducer;