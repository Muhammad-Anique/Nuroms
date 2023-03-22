import React, { useState } from 'react'
import './Navbar.css'
export default function Navbar() {

    const [btnState, setBtnState] = useState(0)

    const HandleClick = ()=>{
        setBtnState(btnState => !btnState)
    }


  return (
    <div>
        <nav className='Navbar'>
            
            <div className="Nav-item">
                <button onClick={HandleClick}>Login</button>
                <button onClick={HandleClick}>Home</button>
            </div>
        </nav>
    </div>
  )
}
