import React, { useState } from 'react'
import './Notification.css'
import '../../PostPage/Comment/Comment.css'
import image from '../../../resources/man.jpg'
import PictureFrame from '../../../PictureRoundFrame/PictureFrame'
import { useSelector } from 'react-redux'



function Notification(props) {

  const UserProfile = useSelector((state)=>{ return state.user.data });


function MeetingLink(){
    return(
        <>
         <div className='MeetNotBox'>
            <div className='Attr_Note'>
              <h6>Meeting Link : </h6><a href={props.val.MeetingLink}>{props.val.MeetingLink}</a>
            </div>
            <div className='Attr_Note'>
              <h6>Coaching Topic : </h6><a href="">{props.val.CoachingTopic}</a>
            </div>
        </div>
         <div className='Time_Note'>
            <h6>Time : </h6><p>3:00 AM</p>
         </div>
        
        
        </>
       
    )
}


function OfferAcceptence(){
    return(
        <>
         <div className='MeetNotBox'>
            <div className='Attr_Note'>
            <h6>{props.val.Text}</h6>
            </div>
            <div className='Attr_Note'>
              <h6>Coaching Topic : </h6><a href="">{props.val.CoachingTopic}</a>
            </div>
        </div>
         <div className='Time_Note'>
            <h6> Closing Date: </h6><p>{props.val.MeetingDate}</p>
         </div>  
        </>
       
    )
}


function Simple_Notification(){
  if(props.val.MeetingLink!=null)
  return(
      <MeetingLink/>
  )
  else if(props.val.MeetingLink==null && props.val.CoachingTopic!=null)
  return(
    <OfferAcceptence/>
  )
  else
  return(
    <Simple_Notification/>
  )
}


function Notification_Selector(){
  return(
      <>
       <div className='MeetNotBox'>
          <div className='Attr_Note'>
            <h6 style={{fontWeight  : 600}}>Dear {UserProfile.Name},</h6>
          </div>
          <div className='Attr_Note'>
            <h6>Your Request is Accepted</h6>
          </div>
      </div>
      </>
     
  )
}






  return (
    <div className='Notification_Cont_T'>
         <div className="Sender-Details">
            <PictureFrame width={`45px`} padding1={`2px`} padding2={`1px`} backgroundColor={`#FBAB7E`} backgroundImage={`linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`} image={image}  />
            <p className='Commentee-Name' >Anique</p>
        </div> 

        <div className="Message_Note">
            <Simple_Notification/>
        </div>
      
    </div>
  )
}

export default Notification
