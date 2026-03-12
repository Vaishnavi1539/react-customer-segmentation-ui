import React from 'react'
import 'remixicon/fonts/remixicon.css'
import RightCard from './rightcard'   
const RightContent=(props)=>{
    console.log(props.users);
    return(
     <div className='h-full flex-nowrap overflow-x-auto gap-10 flex p-6 w-2/3'>
      {props.users.map(function(elem,idx){
      return <RightCard key={idx} id={idx}img={elem.img} tag={elem.tag}/>
      })}
        </div>
    )
}
export default RightContent