import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";


import './user-info.scss'


const UserInfo = () => {
  const {user, isAuthenticated, isLoading} = useAuth0()
  const allUser = useSelector ((state) => state.DashboardUsersR.allUsers);
  const usuario = user && allUser.find  (u =>u.email === user.email)

  if(isLoading){
    return <p> Loading... </p>
  }

  return (
    usuario.username && (
      <div className='user-info'>
        <div className="user-info__img">
          <img src={usuario.picture} alt="" />
        </div>
        <div className="user-info__name">
          <span>{usuario.username}</span>
        </div>
        </div>

    )
  )
}

export default UserInfo