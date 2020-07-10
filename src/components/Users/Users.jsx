import React from 'react';
import Paginator from '../common/Paginator/Paginator';
import User from './User';

let Users = ({ currentPage,onPageChanged,totalUsersCount,pageSize,
    follow,unfollow,followingInProgress,users,...props}) => {

    return <div>

        <Paginator currentPage={currentPage}
           onPageChanged={onPageChanged}
           totalUsersCount={totalUsersCount}
           pageSize ={pageSize}
        
        />
        <div>
      
        {
            users.map(u => <User key={u.id}
                user={u}
                followingInProgress={followingInProgress}
                follow={follow}
                unfollow={unfollow}
            
            />
               
            )
        }
        </div>
    </div>
}

export default Users;