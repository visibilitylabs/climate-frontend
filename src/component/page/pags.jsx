import React from "react";
import { useEffect } from "react";
import BookItem from "../BookItem/BookItem";
const Page =(posts,loading)=>{
    return(
        <div className="item-grid">
            {
                posts.posts.map((item)=>{
                    return <BookItem key={item._id} data={item}/>
                })
            }

        </div>
    )
}
export default Page;