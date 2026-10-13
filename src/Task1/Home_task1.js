// import React from 'react'


// const Home_task1 = () => {
  
//   const data=[
//     {id:"1" ,
//       name:"Niranjan" ,
//       username:"NiranjanKutty" ,
//       contact:"9597969601" ,
//       role:"Student" ,
//       skill:["java","c","Mern"] ,
//       email:"niranjanvanaraj@gmail.com" ,
//       location:"theni" ,
//       about:"I am a student" ,
//       projects:[
//         {title:"Movie match",discription:"A watchlist to add movies and review them"},
//         {title:"Smart inventory",discription:"A browser to check inventory"},
//         {title:"water management",discription:"A list of water usage to reduce wastage"}
//       ] ,
//       social:"niranjanvanaraj/linkedin/profile" ,
//       accordion:[{}]},
   
//   ]
import React from 'react';
function Home_Task1({ active }) {
  return (
    <div style={{ border: "1px solid black", padding: "10px", marginTop: "25px" ,backgroundColor: "lightgray" ,width:"50%" ,height:"300%"}}>
      <h1>Welcome to My Website</h1>
      <h2>I am {active.name}</h2>
      <p>Role: {active.job}</p>
    </div>
  );
}
export default Home_Task1;
