import { useEffect, useState } from "react"
import axios  from "axios";
import {Link} from "react-router-dom";
import styled from "styled-components";
// import styled from 'styled-components';
import Button from '@mui/material/Button';
import { useSelector,useDispatch } from "react-redux";
import { homedatafn } from "./Redux/Home/action";

export const Home = ()=>{
    const [data , setData ] = useState([]);

    const dispatch=useDispatch();
    const {home}=useSelector((store)=>store.home);
    console.log(home);

    useEffect(()=>{
        axios.get("http://localhost:2345/flat").then(({data})=>{
           dispatch(homedatafn(data));
        })
    },[]);

    const handleAsc=()=>{
        const res=[...data];
        setData(res.sort((a,b)=>{
            return +(a.flatNo)-b.flatNo;
        }));
    }

    const handleDsc=()=>{
        const res=[...data];
        console.log(res);
        setData(res.sort((a,b)=>{
            return +(b.flatNo)-a.flatNo;
        }));
    }

    const filterbytype =(filtervalue)=>{
        axios.get("http://localhost:2345/flat").then(({data})=>{
            console.log(data);
            console.log(filtervalue.target.value);
            const b = data.filter((element)=>{
                return (element.type === filtervalue.target.value)
            })
            setData(b);
        })
    }

    const Main=styled.div`
       display:grid;
       grid-template-columns:300px 300px 300px;
       grid-template-rows: 300px;
       grid-gap:150px;
    `

    return (
        <div>

          <div id="home-sorting">
             <Button variant="contained" onClick={handleAsc}>Flat Low to High</Button><br/><br/>
             <Button variant="contained" onClick={handleDsc}>Flat High to Low</Button><br/><br/>          <label>Sort By Type</label>
             <select onClick={filterbytype}>
                 <option value="">-----</option>
                 <option value="owner">Owner</option>
                 <option value="tenat">Tenant </option>
             </select><br/><br/>
          </div>   

          <Main>
             {data.map((e)=>{
              return(
                 <div>
                     <img src={e.img} height="300px" width="350px" />
                     <h2>Type:{e.type}</h2>
                     <h2>Block:{e.block}</h2>
                     <h2>FlatNumber:{e.flatNo}</h2>
                 </div>
                )
              })
             }
           </Main>
       </div>
    )
}