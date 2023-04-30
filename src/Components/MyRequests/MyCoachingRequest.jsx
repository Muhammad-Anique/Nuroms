import React, { useEffect, useState } from 'react'
import '../ViewCoachingServices/ViewCoachings.css'
import image from '../../resources/course.png'
import PictureFrame from '../../PictureRoundFrame/PictureFrame'
import CoachingRequest from '../CoachingRequest/CoachingRequest'
import InActiveCoachingRequest from '../InActiveCoachingRequest/InActiveCoachingRequest'
import {BsGridFill} from 'react-icons/bs'
import { useSelector } from 'react-redux'



function MyCoachingRequest() {
  
    const UserProfile = useSelector((state)=>{ return state.user.data })


    // useEffect(() => {
    // async function fetchData() {
    //   try {
    //     const response = await fetch(`http://localhost:8080/nuroms/request/get-owner/6426d0294ad2a77dfe8bc9d2`);
    //     const json = await response.json();
    //     console.log(json);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }

    // fetchData();
    // }, []);

   const [data1, setData1] =useState([]);

   const [data, setData] = useState([]);
   useEffect(() => {
    fetch(`http://localhost:8080/nuroms/request/get-owner/${UserProfile._id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      
      })
      .catch((error) => {
      });
  }, []);


    const [rcvBtn, setRcvBtn] = useState(0);
    const [allBtn, setAllBtn] = useState(0);
    const [sentbtn, setSentBtn] = useState(0);
  
  
    const [ac1,setAc1] =useState('')
    const [ac2,setAc2] =useState('')
    const [ac3,setAc3] =useState('')
  
  
    const handleCoachAll=()=>{
  
      if(allBtn==0){
        setAllBtn(1);
        setRcvBtn(0);
        setSentBtn(0);
  
        setAc1('Flt-Active');
        setAc2('');
        setAc3('');
      }
      
      else{
        setAllBtn(0);
        setRcvBtn(0);
        setSentBtn(0);
  
  
        setAc1('');
        setAc2('');
        setAc3('');
       
  
      }
  
    }
  
    const handleCoachRcv=()=>{
  
      if(!rcvBtn){
        setAllBtn(0);
        setRcvBtn(1);
        setSentBtn(0);
        setAc1('');
        setAc2('');
        setAc3('Flt-Active');
      }
      else
      {
        setAllBtn(0);
        setRcvBtn(0);
        setSentBtn(0);
        setAc1('');
        setAc2('');
        setAc3('');
  
      }
  
  
    }
  
    const handleCoachSent=()=>{
  
  
      if(!sentbtn){
        setAllBtn(0);
        setRcvBtn(0);
        setSentBtn(1);
  
  
        setAc1('');
        setAc2('Flt-Active');
        setAc3();
        
      }else{
        setAllBtn(0);
        setRcvBtn(0);
        setSentBtn(0);
  
        setAc1('');
        setAc2('');
        setAc3('');
  
      }
  
  
    }
  
  

  
    return (
      <div className="CoachingServicePage">
        <div className="FilterBar">
          <div className='Bar'>
            <div className="Filter-Options">
              <button className={`Flt-Btn ${ac1}`}  onClick={()=>{handleCoachAll()}}  ><BsGridFill size={20}/></button>
              <div className='Bt-sp'></div>
              <button className={`Flt-Btn ${ac2}`}   onClick={()=>{handleCoachSent()}} >Sention Request Sent</button>
              <div className='Bt-sp'></div>
              <button className={`Flt-Btn ${ac3}`}   onClick={()=>{handleCoachRcv()}}  >Sention Request Recieved</button>
            </div>
          </div>
  
        </div>
        <div className="Scrollable_Service_Container">  
        {data.map(val=>{
              return(
                  <CoachingRequest key={val._id} val={val}/> 
              )
        })}
        </div>
      </div>
      
    )
}

export default MyCoachingRequest
