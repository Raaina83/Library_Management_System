import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
// import Home from './components/Home';
import Login from './components/Login';
import ProtectRoute from "./components/auth/ProtectRoute";
import BooksDisplay from "./components/BooksDisplay";
import IssuedBooksTable from "./components/IssuedBooksTable";
import RequestsTable from './components/RequestsTable'
import './App.css';
import Profile from "./components/Profile";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { userExists, userNotExists } from "./redux/reducers/auth";
import Home from "./components/Home";

function App() {
  const {user} = useSelector(state => state.auth);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/v1/user/profile", { withCredentials: true })
      .then(({ data }) => {
        dispatch(userExists(data.profile))
      })  
      .catch((err) => dispatch(userNotExists()));

      if(window.location.href == 'http://localhost:5173/') window.location.href = "/dashboard";

      if(user) {
        if(window.location.href == 'http://localhost:5173/login') window.location.href = 'http://localhost:5173/dashboard';
      }

      // if(!user) {
      //   if(window.location.href == 'http://localhost:5173/dashboard') window.location.href = 'http://localhost:5173/login'
      // }

  }, [dispatch]);


  return (
    <BrowserRouter>
      <Routes>
          {user ? <Route path='/dashboard/*' element={<Home/>}></Route> : <Route path="/login" element={<Login/>}></Route>}
      </Routes>
    </BrowserRouter>
  )
}

export default App;
//general home page(change dashboard based on user type)\
//admin will update issued books. 
