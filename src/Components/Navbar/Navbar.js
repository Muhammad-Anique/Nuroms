import React, { useState } from 'react'
import './Navbar.css'
export default function Navbar() {

  return (
    <div>
        <nav className='Navbar'>
            <div className="Nav-Container">
                <div className="Nav-Item">
                    <span class="material-symbols-outlined">login</span>
                </div>
                <div className="Nav-Item">
                    <span class="material-symbols-outlined">home</span>
                </div>
                <div className="Nav-Item">
                    <span class="material-symbols-outlined">account_circle</span>
                </div>
                <div className="Nav-Item">
                    <span class="material-symbols-outlined">post_add</span>
                </div>
                <div className="Nav-Item">
                    <span class="material-symbols-outlined">cast_for_education</span>
                </div>
                <div className="Nav-Last-Item">
                    <span class="material-symbols-outlined">logout</span>
                </div>
            </div>
        </nav>
    </div>
  )
}
