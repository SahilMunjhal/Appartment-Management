import {useState} from "react";
import axios from "axios";
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import {useNavigate} from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { logIn } from "./Redux/LogIn/action";

export const LogIn=()=>{
    const[data,setData]=useState({
        "email":"",
        "password":"",
    });
    
    const dispatch=useDispatch();
    const {log}=useSelector((store)=>{
        return store.log;
    })
    
    console.log(log);
    
    const handle=(event)=>{
         const{id,value}=event.target;
         setData({...data,[id]:value})
    }

    const navigate=useNavigate();

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:2345/logIn",data).then(({data})=>{
            if(data.status==1){
                dispatch(logIn(data));
                alert("you are Sucessfully login")
                navigate('/');
            }
        }).catch((err)=>{
            alert("Please Enter valid Email or password");
        })
    }

    return (
        <div>
          <form>
          <TextField id="email" onChange={handle} label="Email" variant="filled"/><br/><br/>
          <TextField id="password" onChange={handle} label="Password" variant="filled"/><br/><br/>
            <input id="logIn-submit" type="submit" onClick={handleSubmit}/><br/><br/>
         </form>
        </div>
    )
}