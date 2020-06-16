import * as axios from 'axios';


const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"95c27151-5647-427c-b62a-2bf2fac40004"
      
    }
})

export const userAPI={
     getUsers(currentPage=1,pageSize=10){
        return  instance.get( `users?page=${currentPage}
        &count=${pageSize}`)
        .then(response=>response.data);
      },
      follow(userId){
        return instance.post(`follow?${userId}`)
      },
     
      unfollow(userId){
         return instance.delete(`follow?${userId}`)
     },

     getProfile(userId){

     return instance.get(`/profile/` + userId)
    
     }
}

export const authAPI ={

  me(){
      return instance.get(`auth/me` )
  },
}