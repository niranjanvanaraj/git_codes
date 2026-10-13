
// import './App.css'
import {React,  useState, useEffect } from 'react';
import {Routes, Route, Link } from "react-router-dom"
import axios from 'axios';
import Changer from './Changer';
import Modelpopup from './Modelpopup';

// import Product from "./Product"
// import Mec from "./Mec"
// import img1 from './shoe1.jpg'
// import img2 from './shoe2.jpg'
// import img3 from './shoe3.jpg'
// import img4 from './sock1.jpg'
// import img5 from './sock2.jpg'
// import img6 from './sock3.jpg'

// import Count from "./Count";
// import Getdata from "./Getdata";

import Home_task1 from "./Task1/Home_task1";
import Accordion_task1 from "./Task1/Accordion_task1"
import Login_task1 from "./Task1/Login_task1"
import Contact_task1 from './Task1/Contact_task1'
import About_task1 from './Task1/About_task1'
import Projects_task1 from './Task1/Projects_task1'
import Skills_task1 from './Task1/Skills_task1'

function App() {
  
  // const productObj = [
  //   {name: "Adidas", price: "2599", strikePrice: "5099",image: img1},
  //   {name: "Puma", price: "599", strikePrice: "3500",image: img2},
  //   { name: "Nike", price: "4199", strikePrice: "6999",image: img3}
  // ]

  // const productSOCK = [
  //   {name: "Cotton SOCKS", price: "200", strikePrice: "299",image: img4},
  //   {name: "LINEN", price: "200", strikePrice: "299",image: img5},
  //   {name: "VELVET", price: "2199", strikePrice: "2999",image: img6}
  // ]


  //   const [list, setList] = useState([]);
  //  const [active, setActive] = useState(null);

  // useEffect(() => {
  //   axios.get("https://dummyjson.com/c/d6cd-6307-453b-9c16")
  //     .then((res) => {
  //       setList(res.data);
  //       setActive(res.data[0]); 
  //     });https://api.coinpaprika.com/v1/cickers
  // }, []);

  return (
    <>
    <Changer/>
    {/* <Modelpopup />+ */}
    {/*  <Link to='/'>Home</Link>&nbsp;
    //   <Link to='/contact'>Contact</Link> &nbsp;
    //   <Link to='/socks'>Socks</Link> &nbsp;
    //   <Link to='/Mec'>Admission</Link> 

     <Routes>9876
    //     <Route path='/' element={<Home_task1/>}/>
    //     {/* <Route path='/shoes' element={<Product productObj={productObj}/>}/>
    //     <Route path='/socks' element={<Product productObj={productSOCK}/>}/> 
    //     {/* <Route path='/Mec' element={<Mec/>}/> 
    //   </Routes> */}



{/* <div className="headerdata">
        <div className="link_task1">
        <Link to='./'>Home</Link>
        <Link to='./Login'>Login</Link>
        <Link to='./Contact'>Contact</Link>
        <Link to='./Accordion'>Accordion</Link>
        <Link to='./About'>About</Link>
        <Link to='./Skills'>Skills</Link>
        <Link to='./Projects'>Projects</Link>
      </div>

      <Routes>
        <Route path='/' element={<Home_task1 active={active} />}></Route>
        <Route path='/Login' element={<Login_task1 active={active} />}></Route>
        <Route path='/Contact' element={<Contact_task1 active={active} />}></Route>
        <Route path="./Accordion" element={<Accordion_task1 active={active} />}></Route>
        <Route path='/About' element={<About_task1 active={active} />}></Route>
        <Route path='/Skills' element={<Skills_task1 active={active} />}></Route>
        <Route path='/Projects' element={<Projects_task1 active={active} />}></Route>

      </Routes> 
      </div> */}


    </>

  )
}

export default App;