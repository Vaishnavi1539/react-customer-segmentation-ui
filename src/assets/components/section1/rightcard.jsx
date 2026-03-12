import React from 'react'
 import Rightcardcontent from './rightcardcontent'

const Rightcard =(props)=>{
    return(
<div className='h-full overflow-x-auto shrink-0 overflow-hidden relative w-80 bg-red-500 rounded-4xl '>
    <img className="h-full w-full object-cover" src={props.img} alt=""/>
   <Rightcardcontent id={props.id}tag={props.tag}/>
   
</div>
    )
}
export default Rightcard