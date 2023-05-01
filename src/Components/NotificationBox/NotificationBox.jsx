import React, { useEffect, useState } from 'react'
import './NotificationBox.css'
import Notification from './Notification/Notification'
import { useSelector } from 'react-redux';




function NotificationBox() {

  const UserProfile = useSelector((state)=>{ return state.user.data });

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // setIsLoading(true);
    // fetch(`http://localhost:8080/nuroms/notification/get/6426d0294ad2a77dfe8bc9d2`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     setData(data);
    //     alert(data);
    //     console.log(data);
    //     setIsLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     setIsLoading(false);
    //   });
  }, []);


  function Initializer(){
    if (isLoading) {
      return <div className='Loader'></div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  }



  return (
    <div className="Notification_Page">
       <div className="Notification_Cont">
        <div className="n_heading">
            <h1>Notification</h1>
        </div>

        <div className='Notification_inner_Container'>
        <Initializer/>
        <h1>{Text}</h1>
            {/* {data.map(val=>{
            return(
                <Notification key={val._id} val={val}/> 
            )
            })} */}
        </div>
        </div>
       
    </div>
  )
}

export default NotificationBox






