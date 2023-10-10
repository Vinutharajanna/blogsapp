import React, { useState } from "react";
import background from '../images/backHome.jpg';
import SearchIcon from "@material-ui/icons/Search";
import {useStateValue} from '../StateProvider';
import Blog from "./Blog";
import SearchBlog from "./SearchBlog";

function HomePage() {
    const [{blogs} ]=useStateValue();
    const [currentPage,setCurrentPage] = useState(1);

    const blogsToDisplay = (blog_arg)=>{
        return blog_arg.slice(((currentPage-1)*5),((currentPage-1)*5)+5);
    };

    const visiblePageRange = 1; 
    const totalPages = Math.ceil(blogs.length/5);

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
    if(totalPages<=2){
        switch(totalPages){
            case 1 : displayPages=[1];break;
            case 2 : displayPages=[1,2];break;
        }
    }

    const [ search,setSearch]=useState('');
    return (
        <>
        <div className="search__div">
           <h3>Search Your Blogs here</h3>
        <div className="header__search">
           <input placeholder='Search Blogs' id="search_text" className="header__searchInput" type="text" onChange={(e)=>{setSearch(e.target.value)}}/>
               <SearchIcon className="header__searchIcon"/>
       </div>
        </div>
        {search.length>0 ? <SearchBlog seachSub={search}/>:<>
        <div className="home">
            <div className="home__container">
                <img className="home__img" src={background} alt="Blogs Background" />
                <div className="home__row">
                    {blogsToDisplay(blogs).map(item=>(<Blog key={item.id} id={item.id} title={item.title} description={item.description} subject={item.subject} />))}
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
        }  
    </>
    );
}

export default HomePage;