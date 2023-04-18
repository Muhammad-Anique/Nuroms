import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import './PostPage.css'
import Comment from './Comment/Comment'
import '../GlobalStyles/Loader.css'
import './Post.css'
import { BiDownvote, BiUpvote } from "react-icons/bi";
import CreatePostBox from './CreatePostBox'
import CreateCommentBox from './CommentBox/CreateCommentBox'
import image1 from '../../resources/man.PNG'

function Post(props) {
    // let commentsDisplay = ["Comments"]

    const [commentClick, setCommentClick] = useState(false);
    const [commentClass, setCommentClass] = useState("Comments-None");
    const [noofComments, setNoofComments] = useState(0);

    const isoDateString = props.val.Date;
    const date = new Date(isoDateString);
    const dateString = date.toLocaleDateString();

    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const [postUserProfile, setPostUserProfile] =useState([]);
    const [image, setImage] = useState(image1);


    

    const addCommentDynammically= (newComment)=>{
      setData([newComment,...data]);
    }


    useEffect(()=>{
      fetch(`http://localhost:8080/nuroms/user/get/${props.val.AuthorRoll}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setPostUserProfile(data);
          console.log(data); 
        })
        .catch((error) => {
          console.log(error);
        });

    },[])
  

    useEffect(()=>{
      const fetchimage = async () => {
        const response = await fetch(`http://localhost:8080/nuroms/image/get/${postUserProfile._id}`);
        const data = await response.json();
        if(data==null){
        setImage(image1);
        console.log("here We go")
        }
        else{
        setImage(data.Image);
        console.log("here We go again")
        }
      };
      fetchimage();
    },[postUserProfile])



    useEffect(() => {
      setIsLoading(true);
      fetch(`http://localhost:8080/nuroms/comment/get/${props.val._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          const count = Array.isArray(data) ? data.length : Object.keys(data).length;
          setNoofComments(count);
          console.log(data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
          setIsLoading(false);
        });
    }, []);
  





  
    function Initializer(){
      if (isLoading) {
        return <div className='Loader'></div>;
      }
    
      if (error) {
        return <div>Error: {error.message}</div>;
      }
    }

    

    function handleComments(){
        if(!commentClick) {
        setCommentClick(true)
        setCommentClass("Comments");
        }
        else{
        setCommentClick(false)
        setCommentClass("Comments-None");
        }
    }



  return (
    <div key={props.val.PostId} className="ViewPostBox">
        <div className="UserProfileInfo">
            <div className="PictureCont PosterPic">
                <div className="PictureCircle">
                    <div className="PictureFrame">
                      <img src={image}  className='CreatePostBox-image' alt="" />
                    </div>
                </div>
            </div>
            <div className="TextDetails">

                {/* <div class="tooltip user-name">Muhammad Anique
                <span class="tooltiptext">Tooltip text</span>
                </div> */}
                <p className='user-name'>{postUserProfile.Name}</p>
                <p className='user-roll'>{props.val.AuthorRoll}</p>
                <p className='post-date'>{dateString}</p>
            </div>
        </div>


        <div className="ViewPostText">
            <div className='View-Post-Text-Container'>
                <p className='post-content'>{props.val.PostText}</p>
            </div>
            <div className='LineBreak'>
            </div>
        </div>


        <div className="ResponseControls">
            <button className='bt-comment' onClick={()=>{handleComments()}}> {`${noofComments} \u00A0 Comments`}</button>

            <div className='CoupleButton'>
                <div className='btn-cont'>
                <button className='bt-upvote'><BiUpvote size={17}/>&nbsp;{`Upvote \u00A0 ${78}`}</button>
                </div>

                <div className='btn-cont'>
                <button className='bt-report' >Report</button>
                </div>

                
            </div>
          
        </div>



        <Initializer/>
        <div className= {commentClass}>
        {data.map(val=>{
            return(
                <Comment key={val._id} val={val}/> 
            )
        })}
        <CreateCommentBox PostId={props.val._id} commentIT={addCommentDynammically} />
        </div>

        




    </div>
  )
}

export default Post
