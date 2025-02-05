import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { userExists, userNotExists } from "./redux/reducers/auth";
import Home from "./components/Home";
import {Toaster} from "react-hot-toast";
import Signup from "./components/SignUp";
import ProtectRoute from "./components/auth/ProtectRoute";
import LayoutLoader from "./components/layout/LayoutLoader";
import { server } from "./constants/config";

function App() {
  const {user, loader} = useSelector(state => state.auth);
  console.log(user);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`${server}/api/v1/user/profile`, { withCredentials: true })
      .then(({ data }) => {
        dispatch(userExists(data.profile))
      })  
      .catch((err) => dispatch(userNotExists()));

      // if(window.location.href == 'http://localhost:5173/') window.location.href = "/dashboard";

      // if(user) {
      //   if(window.location.href == 'http://localhost:5173/login') window.location.href = 'http://localhost:5173/dashboard';
      // }
  }, [dispatch]);

  if(loader) return <LayoutLoader/>


  return (
    <BrowserRouter>
      <Routes>
        <Route element = {
          <ProtectRoute user={user}/>
        }>
          <Route path="/*" element={<Home/>}></Route>
          <Route path="/dashboard/*" element={<Home/>}></Route>
          {/* {user ? <Route path="/*" element={<Home/>}></Route> : <Route path="/login" element={<Login/>}></Route>}
          {user ? <Route path='/dashboard/*' element={<Home/>}></Route> : <Route path="/login" element={<Login/>}></Route>} */}
        </Route>
        <Route
            path="/login"
            element={
              <ProtectRoute user={!user} redirect="/">
                <Login />
              </ProtectRoute>
            }
          />
        <Route path="/signup" element={<Signup/>}></Route>
      </Routes>
      <Toaster/>
    </BrowserRouter>
  )
}

export default App;
//general home page(change dashboard based on user type)\
//admin will update issued books. 
