import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import TextField from '@mui/material/TextField';
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const Registration=()=>{

    const[form,setForm]=useState({
        name:"",
        age:"",
        role:"",
        gender:"",
        email:"",
        password:""
    });

    const navigate=useNavigate();

    const handle=(event)=>{
        const{id,value}=event.target;
        setForm({...form,[id]:value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:2345/register",form).then(({data})=>{
            // console.log(data);
            if(data.status==1){
                alert('You are Sucessfully registered');
            }
            navigate("/logIn")  
        }).catch((err)=>{
            alert("You are already registered");
        });
    }

    return(
        <div>
            <form>
                <TextField id="name" onChange={handle} label="Name" variant="filled"/><br/><br/>
                <TextField id="age" onChange={handle} label="Age" variant="filled"/><br/><br/>
                   <label>Role</label>
                   <Select
                      label="role"
                      onChange={handle}
                    >
                    <MenuItem value="resident">Resident</MenuItem>
                    <MenuItem value="manager">Manager</MenuItem>
                 </Select><br/><br/>
                   <label>Gender</label>
                   <Select
                      label="gender"
                      onChange={handle}
                    >
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="female">Female</MenuItem>
                 </Select><br/><br/>
                <TextField id="email" onChange={handle} label="Email" variant="filled"/><br/><br/>
                <TextField id="password" onChange={handle} label="Password" variant="filled"/><br/><br/> 
                <input id="form-button" type="submit" onClick={handleSubmit}/><br/><br/>
            </form>
        </div>
    )
}