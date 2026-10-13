import {React,useEffect,useState} from 'react'
import axios from 'axios'

const Getdata = () => {
    const[user,setuser]=useState([]);
    useEffect(()=>{
         axios.get('https://dummyjson.com/c/5f59-a623-42e6-a545')
          .then((res)=>setuser(res.data));
    },[])
https://jsonplaceholder.typicode.com/users
  return (

    <div>
         <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                
                    {user.map((i)=>{
                        return(
                            <><tbody>
                                <tr>
                                    <td>{i.id}</td>
                                    <td>{i.name}</td>
                                    <td>{i.email}</td>
                                </tr>
                                </tbody>
                            </>
                        )
                    })}
                   
                
            </table>
      
    </div>
  )
}

export default Getdata
