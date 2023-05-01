import React, { useEffect, useState } from 'react'
import '../ViewCoachingServices/ViewCoachings.css'
import '../GlobalStyles/Modal.css'
import image from '../../resources/man.jpg'
import './InActiveCoachingRequest.css'
import PictureFrame from '../../PictureRoundFrame/PictureFrame'
import { ToastContainer, toast } from 'react-toastify';
import {FaReply} from 'react-icons/fa'
import Modal from 'react-modal';
import { useSelector } from 'react-redux'
import {FaLink} from 'react-icons/fa'


function InActiveCoachingRequest(props) {



    const UserProfile = useSelector((state)=>{ return state.user.data })
    const [IsConterActive, setIsCounterActive] = useState(true); 

   
    const [counterMsg, setCounterMsg] =useState('');
    const [counterPrice, setCounterPrice]=useState('');
   

    const [meetTime, setMeetTime]  =useState('');
    const [meetMsg, setMeetMsg] =useState('');

    const [isOpen, setIsOpen] = useState(false);

    const handleOpenModal = () => {
      setIsOpen(true);
    };

    const handleCloseModal = () => {
      setIsOpen(false);
    };

  

    const handlePriceChange = (e)=>{

        setCounterPrice(e.target.value);
    }

    const handleMessageChange = (e)=>{
        setCounterMsg(e.target.value);

    }

    const handleCounterOfferSubmittion = async()=>{

    }

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

    const handleFailure = (string) => {
    toast.error(string, {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    };

    const  handleAcceptOffer =async()=>{
     
      let upReq = {
        Instructor: UserProfile._id,
        id: props.val._id,
        Status: "Active"
      }
  
      try{
          const response = await fetch('http://localhost:8080/nuroms/request/put-status/ins',{
            method:'PUT',
            body:JSON.stringify(upReq),
            headers: {
                'Content-Type':'application/json'
            }
            })
            handleCongratulation("The Request is Accepted");
            const data = await response.json();
            console.log(data);  
          }
          catch(error)
          {
              handleFailure("Failure Accepting the Request");
              handleCloseModal();
              alert(error);
          }


    }

  const isoDateString = props.val.DateCreated;
  const date = new Date(isoDateString);
  const DateCreated_= date.toLocaleDateString().split('/').join('-');;

  const isoDateString2 = props.val.ClosingDate;
  const date2 = new Date(isoDateString2);
  const Closingdate = date2.toLocaleDateString().split('/').join('-');;
  
  console.log("The Obj",props.val);

  const str = props.val.Topic;
  const words = str.split(" ");
  const midpoint = Math.floor(words.length / 2);
  const firstHalf = words.slice(0, midpoint).join(" ");
  const secondHalf = words.slice(midpoint).join(" ");

  const [insImage, setInsImage] =useState(image);
  const [ownerImage, setOwnerImage] =useState(image);



  const [reqOwner,setReqOwner]  =useState({});
  const [instructor, setInstructor] =useState({});



  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/nuroms/user/get/id/${props.val.RequestOwner}`);
        const json = await response.json();
        setReqOwner(json);
        console.log(reqOwner);

        try{
          const ImgResponse = await fetch(`http://localhost:8080/nuroms/image/get/${reqOwner._id}`);
          const img = await ImgResponse.json();
          if(img.Image!=null)
          setOwnerImage(img.Image);
        }
        catch(error){
          console.error(error);
        }

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:8080/nuroms/user/get/id/${props.val.Instructor}`);
        const json = await response.json();
        setInstructor(json);

        console.log("Ins",instructor);

        try{
          const ImgResponse = await fetch(`http://localhost:8080/nuroms/image/get/${instructor._id}`);
          const img = await ImgResponse.json();
          if(img.Image!=null)
          setInsImage(img.Image);
        }
        catch(error){
          console.error(error);
        }

      } catch (error) {
        console.error(error);
      }
    }

    fetchData();


  }, []);




  const SessionType =()=>{
    if(props.val.SessionType ==0)
    return(
    <>Coaching</>
    )
    else if(props.val.SessionType==1)
    return(
      <>Informative</>
    )
    else if(props.val.SessionType==2)
    return(
      <>Seminar</>
    )
  }



  const Counter_Link_Generator_Conditional_Component = ()=>{
    const [isChecked, setIsChecked] = useState(false);
    const [disabling, setdisabling] =useState('disable-bg');
    const handleCheckboxChange = (event) => {
      setIsChecked(event.target.checked);
      if(!isChecked)
      setdisabling('')
      else
      setdisabling('disable-bg')
    }
    if(props.val.Status=="Active"){
      return(
        <div className='Counter_Offer'>
          <div className='Counter_Offer_Setter'>
              <div className='Counter_Offer_Heading'>
              <FaLink/>
              <h3>Generate Meeting Link</h3>
              </div>
              <div className="Hori_Sep"></div>
              <div className={`Setting_Offer_Attribute`}>
                  <div className='Setter_Attribute'>
                      <p>Set Time: </p>
                      <input   className='Time_box'  type="time" id="t" placeholder='time' />
                  </div>
                  <textarea   placeholder='Write Message' className='TextArea_Counter' name="" id="" cols="30" rows="2"></textarea>
                  <button  className={`Counter_button`}>Generate Link</button>
              </div>
          </div>
        </div>
        )

    }
    else if(props.val.Status=="InActive"){
      
      return(
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
      )
      

    }
  }


  return (

    <div className='CoachingServiceContainerInActiveRequest'>    
      <div className="Coaching-Request-Container-InActiveRequest">
        <div className='RequestContainer-InActiveRequest'>
          <div className='ImageCover'>
          </div>
          <div className='RequestDetails'>
            <h2>{firstHalf}</h2>
            <h2>{secondHalf}</h2>
            <p className='course-info'>{props.val.Course}</p>
            <p className='bid-overview'>{props.val.Brief}</p>
            </div>
          <div className='Separator'>
            <div className="Sp-line">
            </div>
          </div>


          <div className="Other-Details">

            <div className="Owner-Details">
              <PictureFrame  backgroundColor={`#FBAB7E`} backgroundImage={`linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`} image={ownerImage} />
              <div className='User-Poster-Details'>
                <h6>{reqOwner.Name}</h6>
                <p>{reqOwner.Email}</p>
              </div>
            </div>


            <div className="Request-Attributes">
              <div className="inner-div-1">  
                <p className='Big-Num'>{props.val.Duration}</p>
                <p className='little-text'>duration</p>
              </div>
              <div className="inner-div-2">
                <div className="child-div">
                  <h2>{DateCreated_}</h2>
                  <p>Request Date </p>
                </div>
               <div className="Sp"> </div>
                <div className="child-div">
                  <h2> {Closingdate} </h2>
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
                  <h2> {props.val.Status} </h2>
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
              <h1 className='mg'>{`${props.val.BiddingPrice}/-`}</h1><p className='mg'>Per Student</p>
              </div>
            </div>
            { props.val.Status == "Active" ? <p style={{marginTop: '20px', paddingLeft:'15px', fontSize: '12px', fontWeight: 500 }}>The Request is Accepted Generate the link to conduct the session</p> : <button className='Accept_button' onClick={()=>{handleOpenModal()}} >Accept Offer</button>  }
          
            <Modal
              isOpen={isOpen}
              onRequestClose={handleCloseModal}
              contentLabel="Example Modal"
              style={{
                overlay: {
                  backgroundColor: 'rgba(0, 0, 0, 0.5)'
                },
                content: {
                  backgroundColor: '#fff',
                  borderRadius: '10px',
                  padding:'0px',
                  width: '450px',
                  height: '200px',
                  margin: 'auto'
                }
              }}
            >

              <div className="Modal_Container">
                <div className='Modal_heading'></div>
                <div className="Modal_Content">
                <h2>Accepting Offer</h2>
                <p>Are you sure you want to accept this coaching request.</p>
              
                </div>
                <div className="Modal_Button">
                  <button className='Modal_Yes' onClick={()=>{handleAcceptOffer()}}>Yes</button>
                  <button className='Modal_No' onClick={handleCloseModal}>No</button>
                </div>
                <style>
                {`
                    .Toastify__toast-container {
                        margin-top: 5px;
                        margin-right: 30px;
                    }
                `}
                </style>

                <ToastContainer />
              </div>
              
            </Modal>
          </div>

          <div className='Separator'>   <div className="Sp-line"> </div> </div>
          <Counter_Link_Generator_Conditional_Component/>
          
        </div>
      </div>
    </div>
  )
}

export default InActiveCoachingRequest
