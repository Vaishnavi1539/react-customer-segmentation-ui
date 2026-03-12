import React from 'react'
import Navbar from './nvbar'
import Page1content from "./page1content";
const Section1=(props)=>{
   
    return(
        <div className='h-screen w-full'>
        <Navbar/>
         <Page1content users={props.users}/>
        </div>
    )
}
export default Section1