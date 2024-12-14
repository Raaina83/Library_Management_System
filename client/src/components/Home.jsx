import BooksDisplay from "./BooksDisplay";
import Dashboard from "./Dashboard";
import Header from "./Header";
import {Route, Routes} from 'react-router-dom'
import Profile from "./Profile";
import IssuedBooksTable from "./IssuedBooksTable";
import RequestsTable from "./RequestsTable";

const Home = () => {

    return (
    <div className="flex flex-col h-screen bg-gray-100 drawer w-screen">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col drawer-content">
        {/* Header */}
        <Header/>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center bg-gray-200">
          <Routes>
            <Route path="/" element={<BooksDisplay/>}></Route>
            <Route path="/profile" element={<Profile/>}></Route>
            <Route path="/issuedBooks" element={<IssuedBooksTable/>}></Route>
            <Route path="/requests" element={<RequestsTable/>}></Route>
          </Routes>
        </div>
      </div>

      <Dashboard/>

    </div>
  );
}

export default Home;
