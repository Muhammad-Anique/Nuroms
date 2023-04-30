import React, { useEffect } from 'react'
import '../LoginPage.css'
import '../TextBox.css'
import logo from '../../../resources/Nuroms_Logo.png'
import { useState } from 'react'
import { EmailCheck, RollExtract, PhoneCheck, PasswordCheck, DegreeCheck } from '../ValidityCheck'
import { setFormType } from '../../../store/slices/formTypeSlice';
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {image} from '../../../resources/man.jpg';


function RegisterForm(props) {

    const handleCongratulation = (string) => {
        toast.success(string, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      };
    

    const dispatch =useDispatch();

    //userDetails
    const [activeCheckbox, setActiveCheckbox] = useState(null);
    const[Name,setName]=useState('');
    const[Email,SetEmail]  =useState('');
    const [RollNo,setRollNo]=useState('');
    const[Password,setPassword]=useState('');
    const[confirmPassword,setConfirmPassword] = useState('');
    const[Phone,setPhone]=useState('');
    const[Degree,setDegree]=useState('');
    const[UserType,setUserType]=useState(activeCheckbox);
    const[Status,setStatus]=useState('active');
    const[AccountType,setAccountType]=useState('user');
    const[OTP_, setOTP] =useState(Math.floor(Math.random() * 9000) + 1000);



    const[Error, setError] = useState("")
   



    const SettingConfirmPassword=(e)=>{ setConfirmPassword(e.target.value);}
    const SettingPassword=(e)=>{ setPassword(e.target.value);}
    const SettingPhone=(e)=>{ setPhone(e.target.value);}
    const SettingEmail=(e)=>{ SetEmail(e.target.value);}
    const SettingName=(e)=>{ setName(e.target.value);}
    const SettingDegree=(e)=>{ setDegree(e.target.value);}


   const  Validate = async ()=>{
        if(Email === '' || Degree === '' || Password === '' || Phone === '')
        {
            console.log("Error");
            setError("Error : All Entries are Required")    

        }
        else{
            if(EmailCheck(Email)===0){
                setError("Invalid Email Format");
            }
          
            else {
                if(PhoneCheck(Phone)===0)
                setError("Invalid Phone Format");
                else{
                    if(DegreeCheck(Degree)===0)
                    setError("Invalid Degree");
                    else {
                        if(Password!==confirmPassword){
                            setError("Password Does Not Match");
                        }else{                       
                            return 1;
                        }
                    }

                }

            }
            
        }

        return 0;

    }

   

    const handleCheckboxChange = (e) => {
      const checkboxName = e.target.name;

      if (checkboxName === activeCheckbox) {
        // The active checkbox was clicked again, so deactivate it
        setActiveCheckbox(null);
      } else {
        // Another checkbox was clicked, so activate it and deactivate the previous one
        setUserType(checkboxName);
        setActiveCheckbox(checkboxName);
      }

      console.log(checkboxName);
    };


    

    const handleRegisterSubmit = async (e)=>{

        const done = await Validate();
        if(done){
            let User  = {
                Name:Name,
                Email:Email,
                RollNo:RollExtract(Email),
                Degree:Degree,
                Status:Status,
                Phone:Phone,
                Password:Password,
                AccountType:AccountType,
                UserType:UserType,
                OTP:OTP_,
            }
            console.log(User);

            console.log("Sending");
            const response = await fetch('http://localhost:8080/nuroms/user/add',{
            method:'POST',
            body:JSON.stringify(User),
            headers: {
                'Content-Type':'application/json'
            }
            })
            const data = await response.json();
            let imgDoc = {
                base64:null,
                imgHolder:data._id,
              }
             
                try{
                  const response = await fetch('http://localhost:8080/nuroms/image/add',{
                      method:'POST',
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


            if(response.status==201)
            {
              setError("");
              handleCongratulation("You have Successfully Registered");
              setTimeout(() => {
                dispatch(setFormType(0));
              }, 6000);
            }
            else
            {
                console.log("Account Already Exist or Network Error ");
                setError("Account Already Exist or Network Error");
            }
           
        }


    }
  
  return (
    <div className="RegisterFormArea hs" >
            
            <div className="LogoImage LogoAtStart">
                <img style={{ width: 160, height:70 }} src={logo} alt="" />
            </div>

            <div className='Register-Form-Container'>
                <div className='Register-Form'>
                    <div className='col'>
                        <input  type="text" value={Name} onChange={SettingName}  className='textbox' placeholder='Name' name='Name' /><span className="focus-border"></span>
                    </div>
             
                    <div className='col'>
                        <input  onChange={SettingEmail}  value={Email} className='textbox tp-mar-7' placeholder='Email' name='Email' type="text" /><span className="focus-border"></span>
                    </div>

                    <div className='col'>
                        <input  onChange={SettingDegree} value={Degree}  className='textbox tp-mar-7' placeholder='Degree' name='Degree' type="text"  /><span className="focus-border"></span>
                    </div>

                    <div className='col'>
                        <input onChange={SettingPhone} value={Phone}  className='textbox tp-mar-7' placeholder='Phone' name='Phone' type="text"  /><span className="focus-border"></span>
                    </div>

                    <div className='col'>
                        <input onChange={SettingPassword} value={Password}  className='textbox tp-mar-7' placeholder='Password' name='Password' type="password"  /><span className="focus-border"></span>
                    </div>

                    <div className='col'>
                        <input  className='textbox tp-mar-7' placeholder='Confirm Password' onChange={SettingConfirmPassword} value={confirmPassword}  type="password" /><span className="focus-border"></span>
                    </div>

                    <div className='col' style={{ marginTop: 12}}>
                        <div className='CheckBoxes'>
                            <label className='Label1'>
                                <input
                               
                                type="checkbox"
                                name="Student"
                                checked={activeCheckbox === 'Student'}
                                onChange={handleCheckboxChange}
                                />
                                &nbsp;&nbsp;Student
                            </label>
                            <label className='Label1'>
                                <input
                                type="checkbox"
                                name="Instructor"
                                checked={activeCheckbox === 'Instructor'}
                                onChange={handleCheckboxChange}
                                />
                                &nbsp;&nbsp;Instructor
                            </label>
                        </div>
                    </div>

                   
                    <div className="Login-Buttons">
                    <button className="button-65 tp-mar-20" onClick={()=>{handleRegisterSubmit()}} >Register</button>
                    <style>
                        {`
                        .Toastify__toast-container {
                            margin-top: 20px;
                            margin-right: 50px;
                        }
                        `}
                    </style>
                    </div> 

                    <p className='LocalError'>{Error}</p>
                    <ToastContainer />

                


                </div>
            </div>
            <div className="Login-Info">
            <p className='Login-Text'>Already have an account? </p>
            <a className='Login-Link'  onClick={()=>{dispatch(setFormType(0))}}  >&nbsp;Login Here</a>
            </div>

        
        </div>
  )
}

export default RegisterForm

