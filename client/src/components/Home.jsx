import BooksDisplay from "./BooksDisplay";
import Dashboard from "./Dashboard";
import Header from "./Header";
import {Route, Routes, useNavigate} from 'react-router-dom'
import Profile from "./Profile";
import IssuedBooksTable from "./IssuedBooksTable";
import RequestsTable from "./RequestsTable";
import IndividualBook from "./IndividualBook";
import { useState } from "react";
import AddBook from "./AddBook";
import PreviousBookIssued from "./PreviousBookIssued";

const Home = () => {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";
  console.log("home", searchQuery);

  const [search, setSearch] = useState("");
  
    const handleSearchChange = (e) => {
      const value = e.target.value;
      setSearch(value);
  
      // Update the URL query parameter with the search value
      navigate(`?search=${value}`);
    };

    return (
    <div className="flex flex-col h-screen bg-gray-100 drawer w-screen">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col drawer-content">
        {/* Header */}
        <Header search={search} setSeach={setSearch} handler={handleSearchChange}/>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center bg-gray-200">
          <Routes>
            <Route path="/*" element={<BooksDisplay search={search}/>}></Route>
            <Route path="/book/:id" element={<IndividualBook/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/issuedBooks" element={<IssuedBooksTable/>}></Route>
            <Route path="/requests" element={<RequestsTable/>}></Route>
            <Route path="/addBook" element={<AddBook/>}></Route>
            <Route path="/previosBooks" element={<PreviousBookIssued/>}></Route>
          </Routes>
        </div>
      </div>

      <Dashboard/>

    </div>
  );
}

export default Home;
