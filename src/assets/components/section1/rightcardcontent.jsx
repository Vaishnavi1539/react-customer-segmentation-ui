import React from 'react'
const Rightcardcontent=(props)=>{
    return(
         <div className="absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between">
        <h2 className='bg-white text-xl font-bold rounded-full h-12 w-12 flex flex-col justify-center items-center'>{props.id+1}</h2>
        <div>
            <p className='text-xl leading-relaxed text-black mb-14'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis rerum modi soluta nisi pariatur veritatis?</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-8 py-3 rounded-full '>{props.tag}</button>
                <button className='bg-blue-600 text-white font-medium px-4 py-3 rounded-full '><i className="ri-arrow-right-line"></i></button>
            </div>
        </div>
    </div>
    )
}
export default Rightcardcontent