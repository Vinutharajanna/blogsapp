import React,{useState} from 'react';
import { useNavigate } from "react-router-dom";
import {useStateValue} from '../StateProvider';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteConfirmationDialog from './DeleteConfirmationDialog';
import ModalPortal from '../ModalPortal';
import ClearIcon from '@material-ui/icons/Clear';


const PopUpBlog = ({ isOpen, onClose,id,title,description,subject,like,isLiked }) => {
    const navigate = useNavigate();
    const [{state},dispatch]=useStateValue();
    
    const [isConfirmationOpen, setIsConfirmationOpen] = useState(false);
    
    const handleDeleteClick = () => {setIsConfirmationOpen(true);};

    const handleConfirmDelete = () => {
        removeBlog();
        setIsConfirmationOpen(false);
    };

    const handleCloseConfirmation = () => {
        setIsConfirmationOpen(false);
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
    isOpen && (
      <div className="modal-backdrop__blog">
        <div className="confirmation-dialog__blog">
          <div className='popupblog__info'>
            <div className='popupblog__title'>
              <div className="popupblog__title__1"><strong>{title}</strong></div>
              <p className="popupblog__title__2">
              <span className='popupblog__close' onClick={like}>
            {isLiked ? <FavoriteBorderIcon/> : <FavoriteIcon style={{ color: 'darkred' }}/>}
          </span>
                 <EditIcon className="product__title__edit" onClick={toEditBlog} /> 
                 <DeleteIcon className="product__title__delete" onClick={handleDeleteClick} />  
                 <ClearIcon className="popupblog__close" onClick={onClose}/> 
              </p>
            </div>
            <p className='product__price'>
              {description}
            </p>
          </div>
          {subject}
            
          <ModalPortal>
          <DeleteConfirmationDialog isOpen={isConfirmationOpen} onDelete={handleConfirmDelete} onClose={handleCloseConfirmation} title={title}/>
          </ModalPortal>
        </div>
      </div>
    )
  );
};


export default PopUpBlog;