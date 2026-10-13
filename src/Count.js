import {React,useState,useEffect} from 'react'

const Count = () => {
    const [count,setcount]=useState(0);
    const [count2,setcount2]=useState(0);

    // useEffect(()=>{
    //     console.log("with dependencies")
    // },[count])

    // useEffect(()=>{
    //     console.log("without dependencies")
    // },[])

    // useEffect(()=>{
    //     console.log("empty dependencies")
    //     console.log("--------------")
    // })

//set timeout    
    function change1(){
        setTimeout(()=>{
            console.log("ok")
        },3000)
    }

//set interval    
    function change2(){
        setInterval(()=>{
            console.log("meow")
        },1000)
    }



  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>{setcount(count+1)}}>Increment</button>
      <button onClick={()=>{setcount(count-1)}}>Decrement</button>
      <button onClick={()=>{setcount(0)}}>Reset</button><br/>
      <button onClick={()=>{setcount2(count2+1)}}>Increment2</button><br/>
      <button onClick={change1}>set timeout</button><br/>
      <button onClick={change2}>set interval</button><br/>
      <h1>{count2}</h1>
    </div>
  )
}

export default Count
