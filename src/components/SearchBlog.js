import React,{useState} from "react";
import {useStateValue} from '../StateProvider';
import background from '../images/white.jpg';
import Blog from "./Blog";

function SearchBlog({seachSub}){

    const [{blogs}]=useStateValue();

    const filteredBlogs = blogs.filter(item=> item.title.toLowerCase().includes(seachSub.toLowerCase()));

    const [currentPage,setCurrentPage] = useState(1);

    const blogsToDisplay = (blog_arg)=>{
        return blog_arg.slice(((currentPage-1)*5),((currentPage-1)*5)+5);
    };

    const visiblePageRange = 1; 
    const totalPages = Math.ceil(filteredBlogs.length/5);

    const pages = [];


    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }

    let displayPages = [];
    let ellipsisStart = currentPage - visiblePageRange;
    let ellipsisEnd = currentPage + visiblePageRange;

    if (ellipsisStart < 1) {
        ellipsisEnd += Math.abs(ellipsisStart) + 1;
        ellipsisStart = 1;
    }

    if (ellipsisEnd > totalPages) {
        ellipsisStart -= ellipsisEnd - totalPages;
        ellipsisEnd = totalPages;
    }

    if (ellipsisStart > 1) {
        displayPages.push(1);
        if (ellipsisStart > 2) {
        displayPages.push('...');
        }
    }

    for (let i = ellipsisStart; i <= ellipsisEnd; i++) {
        displayPages.push(i);
    }

    if (ellipsisEnd < totalPages) {
        if (ellipsisEnd < totalPages - 1) {
        displayPages.push('...');
        }
        displayPages.push(totalPages);
    }
    if(totalPages<=3){
        switch(totalPages){
            case 1 : displayPages=[1];break;
            case 2 : displayPages=[1,2];break;
            case 3 : displayPages=[1,2,3];break;
            default : displayPages=[];break;
        }
    }
    
    
    
    return (
        <>
        <div className="home">
           <div className="home__container">
               <img className="home__img" src={background} alt="Blogs Background" />
               <div className="home__row">
                   {blogsToDisplay(filteredBlogs).map( item=><Blog key={item.id} id={item.id} title={item.title} description={item.description} subject={item.subject}/>)}
               </div>
           </div>
       </div>
       <div className="pagination__blogs">
            <div className="pages">
                {displayPages.map((number,index)=>
                    <span 
                        key={index}
                        className={number === currentPage ? 'active__page' : ''}
                        onClick={() => {
                            if (typeof number === 'number') {
                                setCurrentPage(number);
                            }
                        }}
                    > {number}</span>
                )}
            </div>
        </div>
       </>
    );

}




export default SearchBlog;