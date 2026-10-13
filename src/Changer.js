import {React,useState} from 'react'

const Changer = () => {
  const [color,setcolor]=useState("");
  const[res,setres]=useState("");

    function changecolor(e){
        setcolor(e.target.value)
    }

    function set_colour(e){
      e.preventDefault();
      setcolor(color)
    }
  return (
    <div>
        <h1>Background color changer using input box</h1>

      <form >
        <input type='text' placeholder='Enter color' value ={color} onChange={changecolor} 
        style={{backgroundColor:{color}}}>
        </input><br/>
        
      </form>
    </div>
  )
}

export default Changer;
