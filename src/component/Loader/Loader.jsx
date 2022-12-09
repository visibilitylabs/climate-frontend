import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Loader.css'

export default function Loader() {
    const state = useSelector(state => state.loader);
    useEffect(() => {
    }, [state])
  return (
    <div className={state.showLoader?'loader-container show-loader':'loader-container'}  >
        <div className="spinner-border  text-light" style={{height:'50px', width:'50px'}}>
            <span className="sr-only">Loading</span>
        </div>
    </div>
  )
}
