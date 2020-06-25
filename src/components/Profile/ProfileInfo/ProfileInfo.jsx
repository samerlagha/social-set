import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = ({profile,status,updateStatus}) => {
  if(!profile){
    return <Preloader/>
  }
  return (
    <>
      {/* <div>
        <img className={s.mainPhoto} 
        src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt='im' />
      </div> */}
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt=''/>
        <ProfileStatus status={status} updateStatus={updateStatus}/> 
         </div>
      </>
  );
};

export default ProfileInfo;
