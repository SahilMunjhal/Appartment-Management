import {useParams} from "react-router-dom"
import axios from "axios";
import {useState,useEffect} from "react";


export const FlatDetails=()=>{
    const[data,setData]=useState({});
     const{id}=useParams();
     console.log(id);
      
     useEffect(()=>{
        axios.get(`http://localhost:2345/flat/${id}`).then((res)=>{
            setData(res.data);
        });
     },[]);

     return(
         <div>
            <img height="300px" src="https://images.pexels.com/photos/892618/pexels-photo-892618.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
            <h2>Type:{data.type}</h2>
            <h2>Flat-No.{data.flatNo}</h2>
            <h2>Block:{data.block}</h2>
         </div>
     )
}