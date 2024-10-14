

import axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "894de25e-bdc2-469a-bfcc-c99fe917de3c"
    }

})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });


    },
    follow(userId) {
        return instance.post(`follow/${userId}`)

    },
    unfollow(userId) {
        return instance.delete(`follow/${userId}`)

    },
    getprofile(userId){
        console.warn('Obsolete method.Please profileAPI object')
        return profileAPI.getprofile(userId);
    }

}
export const profileAPI = {
    getprofile(userId){
        return instance.get(`profile/` + userId);
    },
    getstatus(userId){
        return instance.get(`profile/status/` + userId);
    },
    updatestatus(status){
        return instance.put(`profile/status`, {status:status});
        
    },
    savePhoto(photoFile){
        var formData = new FormData();
        formData.append("image", photoFile)
        return instance.put(`profile/photo`,formData,{
            headers:{
                'Content-Type':'multipart/form-data'
            }
        })
    },
    saveProfile(profile){
        return instance.put(`profile`, profile);
    }

}

export const authAPI={
    me() {
        return instance.get(`auth/me`)
    },
    login(email,password,rememberMe=false,captcha=null ) {
        return instance.post(`auth/login`,{email,password,rememberMe,captcha})
    },
    logout() {
        return instance.delete(`auth/login`)
    }
    

}

export const securityAPI={
    getCaptchaUrl() {
        return instance.get(`security/get-captcha-url`)
    }
    

}

