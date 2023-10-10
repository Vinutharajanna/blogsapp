import React, { useState,useEffect } from "react";
import {useStateValue} from '../StateProvider';
import { useNavigate } from "react-router-dom";

function EditBlog(){
    
    const navigate = useNavigate();

    const [{cur},dispatch]=useStateValue();
    const[title,setTitle] = useState(cur!=null ? cur.title : "");
    const[description,setDescription]=useState(cur!=null ? cur.description : "");
    const[subject,setSubject]=useState(cur!=null ? cur.subject: "");

    useEffect(()=>{ 
        if(cur===null){
            navigate("/");
        }
    },[])


    const editBlog = () =>{

        if((title.length===0 || description.length===0 || subject.length===0) || (title.length>30 || description.length>45 || subject.length>1000)){
            return;
        }
        dispatch({
            type:"editBlog",
            item:{
                id : cur.id,
                title : title,
                description : description,
                subject : subject
            }
        })
        navigate("/");
    }

    return (
        cur===null ? (<></>): (<div className='login'>
           
        <div className='login__container'>
            <h1>Edit Blog</h1>
            <form>
                <h5>Title</h5>
                <input type='text' value={title} name="title" onChange={e=>setTitle(e.target.value)}/>
                <p className={title.length>30 ? "reduce__topmargin" : ""}><small>{title.length>30 ? "write within 30 characters" : ""}</small></p>
                <h5>Description</h5>
                <input type='text' value={description} name="description" onChange={e=>setDescription(e.target.value)}/>
                <p className={description.length>45 ? "reduce__topmargin" : ""}><small>{description.length>45 ? "write within 30 characters" : ""}</small></p>
                <h5>Content</h5>
                <textarea rows="10" value={subject} name="subject" onChange={e=>setSubject(e.target.value)}/>
                <p className={subject.length>1000 ? "reduce__topmargin_1" : ""}><small>{subject.length>1000 ? "write within 1000 characters" : ""}</small></p>
            </form>
            <div></div>
            <button className='login__register' onClick={editBlog}>Edit</button>
        </div>
     </div> )
    
    );
}

export default EditBlog;