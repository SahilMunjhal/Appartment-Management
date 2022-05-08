import TextField from '@mui/material/TextField';
import {useState} from "react";
import axios from "axios";
import styled from "styled-components";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const Flat=()=>{

    const[flat,setFlat]=useState({
        block:"",
        flatNo:"",
        type:"",
        img:""
    });

    console.log(flat);

    const handle=(event)=>{
        const{id,value}=event.target;
        setFlat({...flat,[id]:value})
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post("http://localhost:2345/flat",flat)
    }



    return(
        <div>
            <form>
                <TextField id="flatNo" onChange={handle} label="Flat-Number" variant="filled"/><br/><br/>
                <TextField id="block" onChange={handle} label="Block" variant="filled"/><br/><br/>
                   <label>Role</label>
                   <Select
                      label="type"
                      onChange={handle}
                    >
                    <MenuItem value="owner">Resident</MenuItem>
                    <MenuItem value="tenat">Manager</MenuItem>
                 </Select><br/><br/>
                 <TextField id="manager" onChange={handle} label="manager" variant="filled"/><br/><br/>
                 <TextField id="img" onChange={handle} label="Block" variant="filled"/><br/><br/>
                <label>Manager</label>
                <input onChange={handle} type="text" id='manager'/><br/><br/>
                <label>Image</label>
                <input onChange={handle} type="text" id='img'/>
                <input type="submit" onClick={handleSubmit}/><br/><br/>
            </form>
        </div>
    )
}


