import React, { useState } from 'react'
import { setNavigation } from '../../store/slices/navigationSlice'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { setIsLogin } from '../../store/slices/loginSlice';
import { setUser } from '../../store/slices/userSlice'
import {FiTrello} from 'react-icons/fi'
import {SlBell} from 'react-icons/sl'



export default function Navbar() {

   
    const dispatch =useDispatch();
    // dispatch(setNavigation(0));

    function logout(){
        //logout
        dispatch(setNavigation(0));
        dispatch(setIsLogin(0));
        dispatch(setIsLogin(0));
        dispatch(setUser(null)); 
    }

    function profilePage(){
        dispatch(setNavigation(5));
    }

    function PostPage(){
        dispatch(setNavigation(1));
    }

    function CoachingService(){
        dispatch(setNavigation(4));
    }

    function CreateRequest(){
        dispatch(setNavigation(6));
    }

    function MyRequests(){
        dispatch(setNavigation(7));
    }
    function NotificationBox(){
        dispatch(setNavigation(8));
    }

    const Menu_Items= ()=>{
        const LoginBit= useSelector((state)=>{ return state.loginbit.data });
        if(LoginBit)
        return(
            <>
              <div className="Nav-Item" onClick={()=>{PostPage()}} >
                    <span className="material-symbols-outlined"  >home</span>
                </div>
                <div className="Nav-Item" onClick={()=>{profilePage()}} >
                    <span className="material-symbols-outlined"  >account_circle</span>
                </div>
                <div className="Nav-Item"  onClick={()=>{CreateRequest()}} >
                    <span className="material-symbols-outlined">post_add</span>
                </div>
                <div className="Nav-Item"  onClick={()=>{CoachingService()}} >
                    <span className="material-symbols-outlined">cast_for_education</span>
                </div>
                <div className="Nav-Item"  onClick={()=>{MyRequests()}} >
                  <FiTrello size={20}/>
                </div>
                <div className="Nav-Item"  onClick={()=>{NotificationBox()}} >
                  <SlBell size={20}/>
                </div>
            </>
        )
        else
        return(
            <>
            <div></div>
            </>
        )
    }
    


   


  return (
    <div>
        <nav className='Navbar'>
            <div className="Nav-Container">
                <div className="Nav-Item" >
                    <span className="material-symbols-outlined">login</span>
                </div>
                <Menu_Items/>
                <div className="Nav-Last-Item" onClick={()=>{logout()}} >
                    <span className="material-symbols-outlined" >logout</span>
                </div>
            </div>
        </nav>
    </div>
  )
}
