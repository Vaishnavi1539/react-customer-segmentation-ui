import React from 'react'
import Section1 from './assets/components/section1/section1'
import Section2 from './assets/components/section2/section2'
const App=()=>{
  const users=[
    { img:'https://img.freepik.com/free-photo/portrait-beautiful-young-businesswoman-office_329181-11738.jpg?semt=ais_hybrid&w=740&q=80',
      intro:'',
      tag:'Satisfied'
    },
    {
      img:'https://img.freepik.com/free-photo/indian-woman-working-laptop-street-cafe-wearing-stylish-smart-clothes-jacket-glasses_1157-48457.jpg?semt=ais_rp_progressive&w=740&q=80',
      intro:'',
      tag:'Underserved'
    },
    {
      img:'https://images.unsplash.com/photo-1759903553693-844710c7b898?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2Zlc3Npb25hbCUyMG9uJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D',
      intro:'',
      tag:'Underbanked'
    },
     {
      img:'https://img.freepik.com/premium-photo/woman-sits-desk-office-smiling-camera_833331-89.jpg',
      intro:'',
      tag:'Digitally Active'
    },
    {
      img:'https://img.freepik.com/premium-photo/smile-confidence-portrait-man-office-with-laptop-working-corporate-project-happy-success-professional-male-employee-doing-business-research-computer-workplace_590464-164736.jpg',
      intro:'',
      tag:'Emerging'
    }
    
  ]
  return (
    <>
<div>
  <Section1 users={users}/>
  <Section2/>
</div>
    </>
  )
}

export default App
