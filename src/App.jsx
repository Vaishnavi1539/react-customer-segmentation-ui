import React from 'react'
import Section1 from './assets/components/section1/section1'
import Section2 from './assets/components/section2/section2'
const App=()=>{
  const users=[
    { img:'https://img.freepik.com/free-photo/portrait-beautiful-young-businesswoman-office_329181-11738.jpg?semt=ais_hybrid&w=740&q=80',
      intro:'she satisfied professional stable career comfortable finances focused on consistent growth.',
      tag:'Satisfied'
    },
    {
      img:'https://img.freepik.com/free-photo/indian-woman-working-laptop-street-cafe-wearing-stylish-smart-clothes-jacket-glasses_1157-48457.jpg?semt=ais_rp_progressive&w=740&q=80',
      intro:'She ambitious professional underserved yet striving for opportunities growth and financial stability.',
      tag:'Underserved'
    },
    {
      img:'https://images.stockcake.com/public/d/e/c/decbd3cb-9c9c-401f-a441-a4716e4ee72b_large/professional-woman-working-stockcake.jpg',
      intro:'She hardworking professional underbanked seeking accessible financial services for stability and growth.',
      tag:'Underbanked'
    },
     {
      img:'https://img.freepik.com/premium-photo/woman-sits-desk-office-smiling-camera_833331-89.jpg',
      intro:'She digitally active professional leveraging technology apps platforms for productivity growth.',
      tag:'Digitally Active'
    },
    {
      img:'https://img.freepik.com/premium-photo/smile-confidence-portrait-man-office-with-laptop-working-corporate-project-happy-success-professional-male-employee-doing-business-research-computer-workplace_590464-164736.jpg',
      intro:'He emerging professional building skills exploring opportunities shaping successful career journey.',
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
