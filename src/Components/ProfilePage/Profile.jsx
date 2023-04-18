import React, { useEffect, useState } from 'react'
import './Profile.css'
import {AiOutlinePlus} from 'react-icons/ai'

import {FaPencilAlt} from 'react-icons/fa'
import {MdOutlineDoneOutline} from 'react-icons/md'
import { useSelector } from 'react-redux';
import image1 from '../../resources/man.PNG'
import { upload } from '@testing-library/user-event/dist/upload';


export default function Profile() {

  
  const [image, setImage] = useState(image1);
  const UserProfile = useSelector((state)=>{ return state.user.data })

  const fullName = UserProfile.Name;
  const namesArray = fullName.split(' ');
  const firstName = namesArray[0];
  const lastName = namesArray[namesArray.length - 1];


  useEffect(() => {


    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/nuroms/image/get/${UserProfile._id}`);
      const data = await response.json();
      if(data==null)
      setImage(image1);
      else
      setImage(data.Image);
    };
    fetchData();

  }, []);



  const handleImageChange = e => {

    console.log(e);
    var reader = new FileReader();

    reader.readAsDataURL(e.target.files[0]);
    reader.onloadend =()=>{
      console.log("Hello",reader.result);
      setImage(reader.result);
     
    };
    reader.onerror = error =>{
      console.log("Error" ,error);
    }; 

  }


 const uploadButton = async ()=> {


   console.log("Anique", image);
    let imgDoc = {
      base64:image,
      imgHolder:UserProfile._id,
    }
   
      try{
        const response = await fetch('http://localhost:8080/nuroms/image/put',{
            method:'PUT',
            body:JSON.stringify(imgDoc),
            headers: {
                'Content-Type':'application/json'
            }
            })

        const data = await response.json();
        console.log(data);
        
        // window.location.reload();
    }catch(error)
    {
        alert(error);
    }
  }


  return (
    <div className='ProfilePage'>
        <div className="ProfileOutlook">
          <div className='ProfileOverview'>
            <div className="TextualInformation">
              <div className="ProName">
                <h1>{firstName}</h1><br />
                <h1>{lastName}</h1>
              </div>
              <div className="ProEmail">
                <h4>{UserProfile.Email}</h4>
              </div>
              <div className="ProBio">
                <h6>Adolf Hitler was a Gerrmany in 1933. Hitler's aggressive expansionist posponsible for the genocide s of others during the Holocaust. </h6>
              </div>

              <div className='DivCols'>
                <div className='Semester'>
                  <h1>BSCS</h1>
                  <p>Degree</p>


                </div>
                <div className='Semester'>
                <h1>6th</h1>
                  <p>Semester</p>

                </div>
                <div className='Semester'>
                  <h1>Junior</h1>
                  <p>Type</p>
                </div>
                <div className='Semester'>                 
                  <h1>LHR</h1>
                  <p>Campus</p>
                </div>
               
              </div>
             
            </div>
            <div className="ImageContainer">
              <div className='ImageCircle-Outer'>
                <div className='ImageCircle-Inner'>
                  <div className='round-image'>
                    <img src={image}  alt="" />
                  </div>
                </div>
              </div>
              <input type="file" id="input" onChange={handleImageChange} />
              <label htmlFor="input" className='Add-Button'>
                <div className='-Btn'>
                  <AiOutlinePlus size={20} />
                </div>
              </label>
            </div>
            <div className='edit-button'>
          <button className='Pencil-button'><FaPencilAlt size={25} /></button>
           </div>

           <div className='done-button'>
          <button className='Pencil-button' onClick={()=>{uploadButton()}} ><MdOutlineDoneOutline size={25} /></button>
           </div>
           
          </div>
        


        </div>

      
        <div className="Reviews">

        </div>
      
    </div>
  )
}

