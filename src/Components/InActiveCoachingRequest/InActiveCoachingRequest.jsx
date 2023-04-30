import React, { useEffect, useState } from 'react'
import '../ViewCoachingServices/ViewCoachings.css'
import image from '../../resources/man.jpg'
import './InActiveCoachingRequest.css'
import PictureFrame from '../../PictureRoundFrame/PictureFrame'
import {FaReply} from 'react-icons/fa'

function InActiveCoachingRequest(props) {


    const [IsConterActive, setIsCounterActive] = useState(true); 
    const [disabling, setdisabling] =useState('disable-bg');
    const [counterMsg, setCounterMsg] =useState('');
    const [counterPrice, setCounterPrice]=useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
        if(!isChecked)
        setdisabling('')
        else
        setdisabling('disable-bg')
    }

    const handlePriceChange = (e)=>{

        setCounterPrice(e.target.value);
    }

    const handleMessageChange = (e)=>{
        setCounterMsg(e.target.value);

    }

    const handleCounterOfferSubmittion = async()=>{

    }

//   const isoDateString = props.val.DateCreated;
//   const date = new Date(isoDateString);
//   const DateCreated_= date.toLocaleDateString().split('/').join('-');;

//   const isoDateString2 = props.val.ClosingDate;
//   const date2 = new Date(isoDateString2);
//   const Closingdate = date2.toLocaleDateString().split('/').join('-');;
  
//   console.log("The Obj",props.val);

//   const str = props.val.Topic;
//   const words = str.split(" ");
//   const midpoint = Math.floor(words.length / 2);
//   const firstHalf = words.slice(0, midpoint).join(" ");
//   const secondHalf = words.slice(midpoint).join(" ");

//   const [insImage, setInsImage] =useState(image);
//   const [ownerImage, setOwnerImage] =useState(image);



//   const [reqOwner,setReqOwner]  =useState({});
//   const [instructor, setInstructor] =useState({});



//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`http://localhost:8080/nuroms/user/get/id/${props.val.RequestOwner}`);
//         const json = await response.json();
//         setReqOwner(json);
//         console.log(reqOwner);

//         try{
//           const ImgResponse = await fetch(`http://localhost:8080/nuroms/image/get/${reqOwner._id}`);
//           const img = await ImgResponse.json();
//           if(img.Image!=null)
//           setOwnerImage(img.Image);
//         }
//         catch(error){
//           console.error(error);
//         }

//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchData();
//   }, []);


//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch(`http://localhost:8080/nuroms/user/get/id/${props.val.Instructor}`);
//         const json = await response.json();
//         setInstructor(json);

//         console.log("Ins",instructor);

//         // try{
//         //   const ImgResponse = await fetch(`http://localhost:8080/nuroms/image/get/${instructor._id}`);
//         //   const img = await ImgResponse.json();
//         //   if(img.Image!=null)
//         //   setInsImage(img.Image);
//         // }
//         // catch(error){
//         //   console.error(error);
//         // }

//       } catch (error) {
//         console.error(error);
//       }
//     }

//     fetchData();


//   }, []);




  const SessionType =()=>{
    // if(props.val.SessionType ==0)
    // return(
    // <>Coaching</>
    // )
    // else if(props.val.SessionType==1)
    // return(
    //   <>Informative</>
    // )
    // else if(props.val.SessionType==2)
    return(
      <>Seminar</>
    )
  }


  return (

    <div className='CoachingServiceContainerInActiveRequest'>    
      <div className="Coaching-Request-Container-InActiveRequest">
        <div className='RequestContainer-InActiveRequest'>
          <div className='ImageCover'>
          </div>
          <div className='RequestDetails'>
            <h2>firstHalf</h2>
            <h2>secondHalf</h2>
            <p className='course-info'>props.val.Course</p>
            <p className='bid-overview'>props.val.Brief</p>
            </div>
          <div className='Separator'>
            <div className="Sp-line">
            </div>
          </div>


          <div className="Other-Details">

            <div className="Owner-Details">
              <PictureFrame  backgroundColor={`#FBAB7E`} backgroundImage={`linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`} />
              <div className='User-Poster-Details'>
                <h6>reqOwner.Name</h6>
                <p>reqOwner.Email</p>
              </div>
            </div>


            <div className="Request-Attributes">
              <div className="inner-div-1">  
                <p className='Big-Num'>50</p>
                <p className='little-text'>duration</p>
              </div>
              <div className="inner-div-2">
                <div className="child-div">
                  <h2>DateCreated_</h2>
                  <p>Request Date </p>
                </div>
               <div className="Sp"> </div>
                <div className="child-div">
                  <h2> Closingdate </h2>
                  <p> Closing Date </p>
                </div>
              </div>
            </div>


            <div className="Request-Attributes">
              <div className="inner-div-2">
                <div className="child-div">
                  <h2><SessionType/></h2>
                  <p>Session Type  </p>
                </div>
                <div className="Sp"> </div>
                <div className="child-div">
                  <h2> Active </h2>
                  <p> Status </p>
                </div>
              </div>
              <div className="inner-div-1">
                <p className='Big-Num'>10</p>
                <p className='little-text'>Students</p>
              </div>
            </div>
          </div>



          <div className='Separator'>   <div className="Sp-line"> </div> </div>


          <div className='Instructor-Details'>
            <div className="Det">
              <div className="Accept_Box">
                <p>Bidding Price</p>
              <h1 className='mg'>500/-</h1><p className='mg'>Per Student</p>
              </div>
            </div>
            <button className='Accept_button'>Accept Offer</button>
          </div>

          <div className='Separator'>   <div className="Sp-line"> </div> </div>

          <div className='Counter_Offer'>

            <div className='Counter_Offer_Setter'>


                <div className='Counter_Offer_Heading'>
                <FaReply/>
                <h3>Set Counter Offer</h3>
                <input type="checkbox" onChange={handleCheckboxChange} />
                </div>

                <div className="Hori_Sep"></div>


                <div className={`Setting_Offer_Attribute ${disabling}`}>
                    <div className='Setter_Attribute'>
                        <p>Set Counter Price : </p>
                        <input disabled={!isChecked} value={counterPrice} onChange={handlePriceChange} className='TextBox_Counter' type="number" id="t" placeholder='Rs 0.00/-' />
                    </div>
                    <textarea  disabled={!isChecked} value={counterMsg} onChange={handleMessageChange} placeholder='Write Message' className='TextArea_Counter' name="" id="" cols="30" rows="2"></textarea>
                    <button  disabled={!isChecked} className={`Counter_button`}>Counter Offer</button>
                </div>
              
                

            </div>
           
          </div>




          
        </div>
      </div>
    </div>
  )
}

export default InActiveCoachingRequest
