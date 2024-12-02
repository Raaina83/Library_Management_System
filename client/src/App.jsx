import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Home from './components/Home';
import Login from './components/Login';
import ProtectRoute from "./components/auth/ProtectRoute";
import BooksDisplay from "./components/BooksDisplay";
import IssuedBooksTable from "./components/IssuedBooksTable";
import RequestsTable from './components/RequestsTable'
import './App.css';

function App() {
  const user = null;

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<BooksDisplay/>}></Route>
        <Route path="/issuedBooks" element={<IssuedBooksTable/>}></Route>
        <Route path="/requests" element={<RequestsTable/>}></Route>
        <Route path="/login" element={
          <ProtectRoute user={!user} redirect="/">
            <Login/>
          </ProtectRoute>
        }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
//general home page(change dashboard based on user type)
