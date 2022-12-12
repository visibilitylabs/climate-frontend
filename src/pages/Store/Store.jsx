import React from 'react'
import { useEffect, useState } from 'react'
//import BookItem from '../../component/BookItem/BookItem'
import './Store.css'
import Page from '../../component/page/pags'
import { Link, ScrollRestoration, useParams, useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/loader/loaderActions'
import { useRef } from 'react'
//import Pagination from '../../component/pagination/pagination'
function Store() {

    const dummyData=[
        {
            id:1,
            title:'The Alchemist',
            author:'Paulo Coelho',
            currentPrice:200,
            previousPrice:250,
            description:'The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there. ',
coverImage:'https://picsum.photos/2000',
            availableQuantity:10,
            isOnSale:true,
            tags:['Adventure','Fiction','Fantasy','Novel']
        },
        {
            id:2,
            title:'The Subtle Art of Not Giving a F*ck',
            author:'Mark Manson',
            currentPrice:200,
            previousPrice:250,
            description:'The Subtle Art of Not Giving a F*ck is a self-help book by Mark Manson. Manson argues that the modern Western obsession with positive thinking is harmful, and that people should instead embrace their fears and faults in order to live a more authentic life. ',
coverImage:'https://picsum.photos/2000',
            availableQuantity:10,
            isOnSale:true,
            tags:['Self Help','Non Fiction','Novel']
        },
        {
            id:3,
            title:'The Monk Who Sold His Ferrari',
            author:'Robin Sharma',
            currentPrice:200,
            previousPrice:250,
            description:'The Monk Who Sold His Ferrari is a self-help book by Robin Sharma, first published in 1997. The book is based on Sharma’s own experiences as a lawyer, and describes his spiritual journey to India and a fabled Himalayan guru, from whom he learned life’s essential lessons. ',
coverImage:'https://picsum.photos/2000',
            availableQuantity:10,
            isOnSale:true,
            tags:['Self Help','Non Fiction','Novel']
        },
        {
            id:4,
            title:'The 5 AM Club',
            author:'Robin Sharma',
            currentPrice:200,
            previousPrice:250,
            description:'The 5 AM Club is a self-help book by Robin Sharma, first published in 2015. The book is a guide to waking up early in the morning and using the extra time to achieve personal and professional goals. Sharma argues that early risers have a competitive advantage over their peers, who are “sleepwalking through life”. ',
coverImage:'https://picsum.photos/2000',
            availableQuantity:10,
            isOnSale:true,
            tags:['Self Help','Non Fiction','Novel']
        }
    ]
    const dispatch=useDispatch();
    const [bookData, setBookData] = useState([]);
    const [currPage,SetCurrPage]= useState(1);
    const [postsPerPage,setpostsPerPage]= useState(12);
    // get params from url
    const categoryFromUrl=useParams().category;
    const [loadingArea, setLoadingArea]=useState(false);
    const [currentCategory, setCurrentCategory] = useState(categoryFromUrl||'ALL');
    let url=`https://beta.blissbookstore.in/climate/products?pageNo=${currPage}&pageSize=${postsPerPage}`;
    
    useEffect(()=>{
        window.scrollTo(0,0);
    }, [currentCategory])
    
    useEffect( ()=>{
        dispatch(setLoading(true));
            fetch(url, {
                method: 'GET'
            })
           .then(res=>res.json())
           .then(data=>{
            console.log(data);
            if(currPage==1){
               setBookData([...data.data], console.log(bookData.length));
            }
            else{
               setBookData([...bookData, ...data.data]);
            }
            //    console.log('done loading',data.data)
                dispatch(setLoading(false));
           })
           .catch(err=>{
            // console.log(err);
            dispatch(setLoading(false));
        })
    }, [currentCategory, currPage])
   useEffect(()=>{
    if(loadingArea){
        if(bookData!=[]){
            SetCurrPage(currPage+1, console.log(currPage));
        }
    }
   }, [loadingArea])
    // useEffect(()=>{
    //     console.log('category change',currentCategory)
    //     SetCurrPage(1);
    // }, [categoryFromUrl])
    const categories=[
        {name:'All', link:'ALL'},
        {name:'Best Sellers', link:'BESTSELLERS'},
        {name:'New Arrivals', link:'NEW ARRIVALS'},
        {name:'Fiction', link:'FICTION'},
        {name:'Non Fiction', link:'NON FICTION'},
        // {name:'Combos', link:'COMBOS'},
        {name:'Finance', link:'FINANCE%2FMONEY'},
        {name:'Self Help', link: 'SELF HELP'},
        {name:'Classics', link:'CLASSICS'},
        {name:'Romance', link:'ROMANCE'},
       {name: 'Sci-Fi', link:'SCI-FI'},
    ]
    const loaderRef=useRef(null);
    // create intersection observer with loadingEl
    const observer=new IntersectionObserver((entries)=>{
        if(entries[0].isIntersecting){
            setLoadingArea(true);
        }
        else
        {
            setLoadingArea(false);
        }
    }, {threshold:1})
    
    if(loaderRef.current)
    observer.observe(loaderRef.current);
    // create two functions: one to increment the page, one to decrement. Pass these to the paginator, and hook up the buttons with the function. Manage the state of the page numbner and the page size
    return (
    <div className='padded-container'>
        <div className="row justify-content-center  category-bar-container">
            <div className="col-12 col-lg-10">
                {/* <div className="category-bar ">
                   {categories.map((item)=>{
                       return <Link style={{textDecoration:'none'}} key={item.link} className={currentCategory==item.link?"category-bar-item active":"category-bar-item"} to={`/store/category/${item.link}`} onClick={()=>{setCurrentCategory(item.link, SetCurrPage(1))}} >{item.name}</Link>  

                   })}
                   </div> */}
                   <div className="my-5"></div>
                <Page posts={bookData} loading={false} /> 
                {/*<Pagination postsperpage={postsPerPage} totalposts={bookData.length}/>*/}
                {/* <div className="pages container p-3 ">
                    <div className="row text-center fs-2">
                        <div className="col-3 d-flex ">
                        <div className="prev col">
                            <i className="bi bi-arrow-left-short" onClick={()=>{if(currPage>1){SetCurrPage(currPage-1);}window.scrollTo(0, 0)}}></i>
                        </div>
                        <div className="curr col" id="currp">
                            {currPage}
                        </div>
                        <div className="next col" >
                            <i className="bi bi-arrow-right-short" onClick={()=>{SetCurrPage(currPage+1);window.scrollTo(0, 0)}}></i>
                        </div>
                        </div>
                    </div>
                </div> */}
                <div ref={loaderRef}>
                    Loading
                </div>
            </div>
        </div>
        </div>
  )
}

export default Store