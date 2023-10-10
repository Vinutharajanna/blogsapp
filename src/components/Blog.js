import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {useStateValue} from '../StateProvider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import ModalPortal from '../ModalPortal';
import PopUpBlog from "./PopUpBlog";

function Blog({id,title,description,subject}) {

    const navigate = useNavigate();
    const [{state},dispatch]=useStateValue();
    const [click, setClick] = useState(true);
    const [view,setView] = useState(subject.length>40)

    const handleLikeClick = () => setClick(!click);

    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    const [isConfirmationOpenBlog, setIsConfirmationOpenBlog] = useState(false);

    const handleDeleteClick = () => {
      setIsConfirmationOpen(true);
    };

    const handleConfirmDelete = () => {
      removeBlog();
      setIsConfirmationOpen(false);
    };

    const handleCloseConfirmation = () => {
      setIsConfirmationOpen(false);
    };

    const handleCloseConfirmationBlog=()=>{
      setIsConfirmationOpenBlog(false);
    };

    const handlePopUpClick=()=>{
      setIsConfirmationOpenBlog(true);
    };

    const removeBlog=()=>{
        dispatch({
            type : "removeBlog",
            id : id,
        });
    };

    const toEditBlog =()=>{
        dispatch({
            type:"setCur",
            item:{
                id : id,
                title : title,
                description : description,
                subject : subject
            }
        });
        navigate("/edit-blog");
    };
    return (
        <div className='product'>            
          <div className='product__info'>
            <div className='product__title'>
              <div className="product__title__1"><strong>{title}</strong></div>
              <p className="product__title__2">
                <EditIcon className="product__title__edit" onClick={toEditBlog} /> 
                <DeleteIcon className="product__title__delete" onClick={handleDeleteClick} />  
              </p>
            </div>
            <p className='product__price'>
              {description}
            </p>
            <ModalPortal>
              <PopUpBlog 
                isOpen={isConfirmationOpenBlog} 
                onClose={handleCloseConfirmationBlog}
                id={id}
                title={title}
                description={description}
                subject={subject}
                like={handleLikeClick}
                isLiked={click}
              />
            </ModalPortal>
          </div>
          <span>{subject.substring(0,45) } 
            {view ? <span className="view__more" onClick={handlePopUpClick}><small><strong> ...view more</strong></small></span>:<></>} 
          </span>
          <div className='product__like' onClick={handleLikeClick}>
            {click ? <><FavoriteBorderIcon/><div>Like</div></> : <><FavoriteIcon style={{ color: 'darkred' }}/><div>Unlike</div></>}
          </div>  
          <ModalPortal>
          <DeleteConfirmationDialog isOpen={isConfirmationOpen} onDelete={handleConfirmDelete} onClose={handleCloseConfirmation} title={title}/>
          </ModalPortal>
        </div>
      );
};




export default Blog;