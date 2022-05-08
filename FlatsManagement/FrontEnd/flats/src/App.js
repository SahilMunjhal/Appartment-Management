import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import {Routes,Route} from "react-router-dom";
import {Registration} from "./components/Registration";
import {Home} from "./components/Home";
import {LogIn} from "./components/LogIn"
import {Flat} from "./components/Flats";
import {FlatDetails} from "./components/FlatDetails";

function App() {

  return (
    <div className="App">
      <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/register' element={<Registration/>}/>
            <Route path='/logIn' element={<LogIn/>}/>
            <Route path='/add-flat' element={<Flat/>}/>
            <Route path='/flat/:id' element={<FlatDetails/>}/>
        </Routes>
    </div>
  );
}

export default App;
