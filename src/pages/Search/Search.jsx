import React from 'react'
import { useEffect, useState } from 'react'
//import BookItem from '../../component/BookItem/BookItem'
import '../Store/Store.css'
import Page from '../../component/page/pags'
import { useParams } from 'react-router-dom';
import { getSearchResults } from '../../redux/searchStore/searchActions';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../redux/loader/loaderActions';
//import Pagination from '../../component/pagination/pagination'
function SearchPage() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(6);
    const dispatch=useDispatch();
    const params=useParams();
    const searchQuery=params.query;
    const state=useSelector(state=>state.search);
    useEffect(()=>{
        // console.log(state)
        // dispatch(setLoading(true));
        dispatch(getSearchResults(searchQuery));
        // dispatch(setLoading(false));
    }, [searchQuery]);
    return (
    <div className='padded-container'>
        { state.length!=0&&<div className='search-container'>
            Showing results for "{searchQuery}"
        </div>}
        <div className="row justify-content-center  category-bar-container">
            <div className="col-10">
            { state.length!=0&&<Page posts={state} loading={false} /> }
                {/*<Pagination postsperpage={postsPerPage} totalposts={bookData.length}/>*/}
               { state.length==0&&<div className="no-results" style={{textAlign:'center'}} >
                        <div>No Results found</div>
                        
                    </div>
                }
                 </div>
            
        </div>
        </div>
  )
}

export default SearchPage