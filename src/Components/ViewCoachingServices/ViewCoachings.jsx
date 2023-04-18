import React from 'react'
import './ViewCoachings.css'
import image from '../../resources/course.png'
import PictureFrame from '../../PictureRoundFrame/PictureFrame'

function ViewCoachings() {


  return (
    <div className='CoachingServiceContainer'>
      <div className="Coaching-Request-Container">

        <div className='RequestContainer'>
          <div className='ImageCover'>
          </div>
          <div className='RequestDetails'>
            <h2>Neural</h2>
            <h2>Network</h2>
            <p className='course-info'>Artificial Intlleigence</p>
            <p className='bid-overview'>I want to have breif overview of nueral network kindly teach me. It would be great fro me and other students </p>
            </div>
          <div className='Separator'>
            <div className="Sp-line">
            </div>
          </div>


          <div className="Other-Details">

            <div className="Owner-Details">
              <PictureFrame/>
              <div className='User-Poster-Details'>
                <h6>Muhammad Anique</h6>
                <p>l202171@lhr.nu.edu.pk</p>
              </div>
            </div>


            <div className="Request-Attributes">
              <div className="inner-div-1">  
                <p className='Big-Num'>60</p>
                <p className='little-text'>duration</p>
              </div>
              <div className="inner-div-2">
                <div className="child-div">
                  <h2>  03/02/23</h2>
                  <p>   Request Date </p>
                </div>
               <div className="Sp"> </div>
                <div className="child-div">
                  <h2>  04-03-23  </h2>
                  <p> Closing Date </p>
                </div>
              </div>
            </div>


            <div className="Request-Attributes">
              <div className="inner-div-2">
                <div className="child-div">
                  <h2> Seminar</h2>
                  <p>Session Type  </p>
                </div>
                <div className="Sp"> </div>
                <div className="child-div">
                  <h2> Active  </h2>
                  <p> Status </p>
                </div>
              </div>
              <div className="inner-div-1">
                <p className='Big-Num'>10</p>
                <p className='little-text'>Students</p>
              </div>
            </div>

            


          </div>
          <div className='Separator'>
            <div className="Sp-line">
            </div>
          </div>


          <div className='Instructor-Details'>
          <PictureFrame width={`100px`} padding1={`4px`} padding2={`4px`} backgroundColor={`#FBAB7E`} backgroundImage={`linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`}  />
          <h1>Abeeda Akram</h1>
          <h2>Instructor (FAST LHR)</h2>
          <p>PHD Doctor</p>
          </div>


        </div>
      </div>


      <div className="Coaching-Request-Container-2">
        <div className="RequestContainer-2">
            <div className="Det">
             

              <div className="Buy">
              <h1>Rs. 300/-</h1><p>Per Student</p>
              </div>
           
            </div>
            <button className='Enroll-button'>Enroll Now</button>
        </div>
      </div>


    </div>
  )
}

export default ViewCoachings
