import { getAuthUserData } from "./authReduser";

const SETINITIALISED='SETINITIALISED';

let initialstate={
    initialized:false
    
};

const appreducer = (state=initialstate, action) => {
    switch (action.type) {
        case SETINITIALISED:
            return{
                ...state,
                initialized:true
            }
        default:
            return state;
        

    }
}

export const initializedSuccess=()=>({type: SETINITIALISED})

export const initializeApp =()=>(dispatch)=>{
    let promise =dispatch(getAuthUserData());
    
    promise.then(()=>{
        dispatch(initializedSuccess())
    })
    
    
}

export default appreducer;

