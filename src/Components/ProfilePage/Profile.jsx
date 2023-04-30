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

  const [EditButton, setEditButton] =useState(0)

  const [DegreeEdit, setDegreeEdit] = useState("BSCS");
  const [SemesterEdit, setSemesterEdit] = useState("6th");
  const [TypeEdit, setTypeEdit] = useState("Junior");
  const [campus, setCampus] = useState("ISL");
  const [SubmitBtn, setSubmitButton] =useState(0);





  const Bio_Component =(props)=>{
    // const [eVal, setEVal]= useState(props.value);

    // const go=()=>{
    //   props.func(eVal);
    //   console.log("Had Hai = ",eVal);
    // }

    // const change=(e)=>{
    // setEVal(e.target.value);
    // }

    if(EditButton)
    return(
      <div className='Wrapper'>
       <textarea name=""  className='Bio_Area' id="" cols="30" rows="10"></textarea>
      </div>
        
    )
    else
    return(
      <h6>{props.value}</h6>
    )
  }


  const Att_Comp =(props)=>{
    const [eVal, setEVal]= useState(props.value);

    const go=()=>{
      props.func(eVal);
      console.log("Had Hai = ",eVal);
    }

    const change=(e)=>{
    setEVal(e.target.value);
    }

    if(EditButton)
    return(
      <div className='Wrapper'>
        <input value={eVal} onChange={change} className='EditText_mini' type="text" /> 
        <button className="text-input-button" onClick={()=>{go()}}><MdOutlineDoneOutline size={15} /></button>
      </div>
        
    )
    else
    return(
      <h1>{props.value}</h1>
    )
  }






  const EditClick =()=>{
    if(!EditButton) setEditButton(1); else setEditButton(0);
  }


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


  const changeIt1 =(val)=>{
    setDegreeEdit(val);
  }
  const changeIt2 =(val)=>{
    setSemesterEdit(val);
  }
  const changeIt3 =(val)=>{
    setTypeEdit(val);
  }
  const changeIt4 =(val)=>{
    setCampus(val);
  }

 const uploadButton = async ()=> {

   if(SubmitBtn) setSubmitButton(0); else {setSubmitButton(1); setEditButton(0)};
   console.log("Anique", image);
    let imgDoc = {
      base64:image,
      imgHolder:UserProfile._id,
    }

    console.log("UFF ALAH")
    console.log(imgDoc);
   
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
                <Bio_Component value={`Adolf Hitler was a Gerrmany in 1933. Hitler's aggressive expansionist posponsible for the genocide s of others during the Holocaust. `}/>
              </div>

              <div className='DivCols'>
                <div className='Semester'>
                  <Att_Comp value={DegreeEdit} func={changeIt1}/>
                  <p>Degree</p>
                </div>
                <div className='Semester'>
                <Att_Comp value={SemesterEdit} func={changeIt2}/>
                  <p>Semester</p>

                </div>
                <div className='Semester'>
                <Att_Comp value={TypeEdit} func={changeIt3}/>
                  <p>Type</p>
                </div>
                <div className='Semester'>                 
                <Att_Comp value={campus} func={changeIt4}/>
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
          <button className='Pencil-button' onClick={()=>{EditClick()}}><FaPencilAlt size={25} /></button>
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

