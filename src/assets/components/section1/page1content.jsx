import React from 'react'
import RightContent from './rightcontent'
import LeftContent from './leftcontent'
const Page1content=(props)=>{
    return(
        <div className='pb-16 pt-6 items-center gap-10 flex h-[90vh] px-18'>
         <LeftContent/>
          <RightContent users={props.users}/>
        </div>
    )
}
export default Page1content