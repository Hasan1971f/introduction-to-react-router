

import { Link, useNavigate } from "react-router-dom";

const Post = ({post}) => {
    const {id, title} = post
  
    const navigate = useNavigate()

    
   


    const postStyle= {
        border: "2px solid green",
        padding: "5px",
        borderRadius: "20px"
    }

    const hadleShowDetail=()=>{
        navigate(`/post/${id}`)
    }
  

    return (
        <div style={postStyle}>
            <h4>Post of id: {id}</h4>
            <p>{title}</p>
           <Link to={`/post/${id}`}>Post Detail</Link>
           <Link to={`/post/${id}`}><button>Show Detils</button></Link>

         <button onClick={hadleShowDetail}>Click to show Deatils</button>
         
           
        </div>
    );
};

export default Post;