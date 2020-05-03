import React from "react";
import s from "./ProfileInfo.module.css";


const ProfileInfo = (props) => {
  return (
    <>
      <div>
        <img className={s.mainPhoto} src="https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350" alt='im' />
      </div>
      <div className={s.descriptionBlock}>ava + description profile</div>
      </>
  );
};

export default ProfileInfo;
