import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import {Link} from "react-router-dom";

export const Navbar=()=>{

    return(
        <div>
            <Button><Link to={"/"}>Home</Link></Button>
            <Button><Link to={"/register"}>Registration</Link></Button>
            <Button><Link to={"/logIn"}>LogIn</Link></Button>
            <Button ><Link to={"/add-flat"}>Add Flat</Link></Button>
        </div>

    )
}