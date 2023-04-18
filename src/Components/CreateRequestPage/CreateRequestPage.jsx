import React from 'react'
import './CreateRequestpage.css'

import '../../Components/LoginPage/TextBox.css'
import PictureFrame from '../../PictureRoundFrame/PictureFrame'


function TeacherComponent(){
    return(
        <div className='T-Item'>
            <div className='Teacher-Component'>
                <PictureFrame width={`50px`} padding1={`2px`} padding2={`4px`} backgroundColor={`#FBAB7E`} backgroundImage={`linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`}  />
                <div className="Teacher-Name-Email">
                    <h1>Abeeda Akram</h1>
                    <p>Abeeda.Akram@lhr.nu.edu.pk</p>
                </div>
            </div>     
            <div className="Teacher-Name-Email">
                    <h1>Type</h1>
                    <p>Senior</p>
            </div>     
        </div>
    )
}


function CreateRequestPage() {


    




  return (
    <div className='CreateRequestPage'>
        <div className='RequestSection'>
            <div className="IntroSection">
                <div className="Brief-Div">
                    <div className="Heading">
                        {/* <div className='hexagon'>
                        </div> */}
                    </div>
                    <div className="InfoBox" style={{marginTop:"30px"}}>
                        <div className="CourseCol">
                            <div className='col'>
                            <input  className='textbox' style={{fontWeight:"400",fontSize:"15px", background: "transparent"}} placeholder='Topic' name='Email' type="text" /><span className="focus-border"></span>
                            </div>           
                        </div>
                    </div>
                    <div className="InfoBox" style={{marginTop:"20px"}}>
                        <div className="CourseCol">
                            <div className='col'>
                            <input  className='textbox'  style={{fontWeight:"400",fontSize:"15px", background: "transparent"}} placeholder='Course' name='Email' type="text" /><span className="focus-border"></span>
                            </div>           
                        </div>
                    </div>
                    <div className="InfoBox-Brief">
                        <textarea name="" className='Brief-Area' placeholder='Breif' id="" cols="30" rows="10"></textarea>       
                    </div>
                </div>

            </div>
            <div className="PriceSection">
                <div className="PriceBox">
                    <div className="Pricing-Div">
                        <div className="Heading">
                        {/* <div className='hexagon'> </div> */}
                        </div>
                        <div className='Instructor-Selected'>
                        <PictureFrame width={`60px`} padding1={`4px`} padding2={`4px`} backgroundColor={`#FBAB7E`} backgroundImage={`linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)`}  />
                        <div className="Instructor-Name-Email">
                            <h1>Abeeda Akram</h1>
                            <p>Abeeda.Akram@lhr.nu.edu.pk</p>
                        </div>
                        </div>
                        <div className="PriceSelection">
                            <div className="Price-Statement">
                                <h1>Set</h1>
                                <h1>Bidding</h1>
                                <h1>Price</h1>
                            </div>
                            <input className='Price-Input' type="text" />
                            <h1>/-</h1>
                        </div>
                        <div className="Submission-button">
                            <button className='BTN-SUBMIT'>Submit</button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="AttributeSection">
                <div className="Attribute-Setting">

                    <div className="Att-Heading">
                       {/* <div className='hexagon'>
                        </div> */}
                    </div>

                    <div className="Section-Row">
                    <div className="Inner-Section">

                        <h1>Duration</h1>
                        <p>*Set expected duration of the requested session</p>
                        <input className='Duration-Box' type="text" />

                    </div>
                    <div className="Inner-Section">
                        <h1>Closing Date</h1>
                        <p>*Set Closing date for the requested session</p>
                        <input className='Date-Box' type="date" />

                    </div>
                    <div className="Inner-Section">
                    <h1>Visibility</h1>
                        <p>*Specify whether your request will be visible to public or not</p>
                        <button className='Selection-button'>Private</button>
                        <button  className='Selection-button'>Public</button>

                    </div>
                    <div className="Inner-Section">
                    <h1>Session Type</h1>
                        <p>*Set the Session Type</p>
                        <button className='Selection-button-2'> Coaching </button>
                        <button className='Selection-button-2'> Informative </button>
                        <button className='Selection-button-2'> Seminar  </button>

                    </div>
                    </div>
                    

                </div>

            </div>
        </div>

        <div className="TeacherSection">
            <div className='TeacherContainer'>
                <div className="TeacherBox">
                    <div className="Heading"></div>
                    <div className='Tabs'>
                        <button className='tab-button'>Online</button>
                        <div className='btn-Sp'></div>
                        <button className='tab-button' >All</button>

                    </div>
                    <div className="TeacherItems">
                        <TeacherComponent/>
                        <TeacherComponent/>
                        <TeacherComponent/>
                      
                        <TeacherComponent/>
                        <TeacherComponent/>
                      
                        <TeacherComponent/>
                        <TeacherComponent/>
                        <TeacherComponent/>
                        
                       

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreateRequestPage
