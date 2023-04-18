import React, { useState } from 'react'
import { setNavigation } from '../../store/slices/navigationSlice'
import './Navbar.css'
import { useDispatch } from 'react-redux';


export default function Navbar() {
    const dispatch =useDispatch();

    function logout(){
        dispatch(setNavigation(0));
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

  return (
    <div>
        <nav className='Navbar'>
            <div className="Nav-Container">
                <div className="Nav-Item">
                    <span className="material-symbols-outlined">login</span>
                </div>
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
                <div className="Nav-Last-Item" onClick={()=>{logout()}} >
                    <span className="material-symbols-outlined" >logout</span>
                </div>
            </div>
        </nav>
    </div>
  )
}
