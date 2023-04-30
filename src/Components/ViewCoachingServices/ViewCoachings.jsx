import React, { useEffect, useState } from 'react'
import './ViewCoachings.css'
import image from '../../resources/course.png'
import PictureFrame from '../../PictureRoundFrame/PictureFrame'
import CoachingRequest from '../CoachingRequest/CoachingRequest'
import InActiveCoachingRequest from '../InActiveCoachingRequest/InActiveCoachingRequest'
import {BsGridFill} from 'react-icons/bs'

function ViewCoachings() {

  const [ data, setData]  =useState([]);
  const [reqBtn, setReqBtn] = useState(0);
  const [allBtn, setAllBtn] = useState(0);
  const [sessbtn, setSessBtn] = useState(0);


  const [ac1,setAc1] =useState('')
  const [ac2,setAc2] =useState('')
  const [ac3,setAc3] =useState('')


  const handleCoachAll=()=>{

    if(allBtn==0){
      setAllBtn(1);
      setReqBtn(0);
      setSessBtn(0);

      setAc1('Flt-Active');
      setAc2('');
      setAc3('');
    }
    
    else{
      setAllBtn(0);
      setReqBtn(0);
      setSessBtn(0);


      setAc1('');
      setAc2('');
      setAc3('');
     

    }

  }

  const handleCoachReq=()=>{

    if(!reqBtn){
      setAllBtn(0);
      setReqBtn(1);
      setSessBtn(0);
      setAc1('');
      setAc2('');
      setAc3('Flt-Active');
    }
    else
    {
      setAllBtn(0);
      setReqBtn(0);
      setSessBtn(0);
      setAc1('');
      setAc2('');
      setAc3('');

    }


  }

  const handleCoachSess=()=>{


    if(!sessbtn){
      setAllBtn(0);
      setReqBtn(0);
      setSessBtn(1);


      setAc1('');
      setAc2('Flt-Active');
      setAc3();
      
    }else{
      setAllBtn(0);
      setReqBtn(0);
      setSessBtn(0);

      setAc1('');
      setAc2('');
      setAc3('');

    }


  }



    useEffect(() => {
      async function fetchData() {
        try {
          const response = await fetch('http://localhost:8080/nuroms/request/get-all');
          const json = await response.json();
          setData(json);
        } catch (error) {
          console.error(error);
        }
      }

      fetchData();
    }, []);


  return (
    <div className="CoachingServicePage">
      <div className="FilterBar">
        <div className='Bar'>
          <div className="Filter-Options">
            <button className={`Flt-Btn ${ac1}`}  onClick={()=>{handleCoachAll()}}  ><BsGridFill size={20}/></button>
            <div className='Bt-sp'></div>
            <button className={`Flt-Btn ${ac2}`}   onClick={()=>{handleCoachSess()}} >Coaching Sessions</button>
            <div className='Bt-sp'></div>
            <button className={`Flt-Btn ${ac3}`}   onClick={()=>{handleCoachReq()}}  >Coaching Requests</button>
          </div>
        </div>

      </div>
      <div className="Scrollable_Service_Container">

        {/* {data.map(val=>{
              return(
                  <CoachingRequest key={val._id} val={val}/> 
              )
        })} */}
        <InActiveCoachingRequest/>

      </div>
    </div>
    
  )
}

export default ViewCoachings
