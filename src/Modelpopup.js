import {React,useState} from 'react'

const Modelpopup = () => {
    const [count,setcount]=useState(false)

    function popup(){
        setcount(!count)
    }
    function close(){
        setcount(false)
    }
  return (
    <div>
        <div>
            <button onClick={popup}>Popup</button>
            <>
            {count === true }?
                <p>Builds the app for production to the `build` folder.\It correctly bundles React in production mode and optimizes the build for the best performance.
                </p> 
                <button onClick={close}>close</button> :  "" 
            </>
        </div>

    </div>
  )
}

export default Modelpopup
