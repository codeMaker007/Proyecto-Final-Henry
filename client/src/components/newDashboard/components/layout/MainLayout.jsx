import React from 'react'
import './main-layout.scss'
import { Outlet } from 'react-router-dom'
import SideBar from '../sideBar/SideBar'
import TopNav from '../topNav/TopNav'
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Error404NotAdmin from "../../../error404/Error404NotAdmin"

const MainLayout = () => {
  const { user, isAuthenticated } = useAuth0();
  const users = useSelector((state) => state.DashboardUsersR.allUsers);
  let findedUser;
  if (isAuthenticated) {
      findedUser = users.find(e => e.email === user.email)
  }
  return (
    <>
    {(isAuthenticated && findedUser?.isAdmin)? <div>
        <SideBar />
        <div className="main">
            <div className="main__content">
                <TopNav />
                <Outlet />
            </div>
        </div>
    </div> : <Error404NotAdmin/>
        }
    </>
  ) 
}

export default MainLayout