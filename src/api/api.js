import * as axios from 'axios';


const instance = axios.create({
    withCredentials:true,
    baseURL:`https://social-network.samuraijs.com/api/1.0/`,
    headers:{
        "API-KEY":"b40b8b6d-2301-4de2-ae38-42cc8ad6ec01"
      
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