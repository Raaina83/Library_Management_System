// import { IoIosNotifications } from "react-icons/io";
// import { Notifications } from "./Notifications";
// import BooksDisplay from "./BooksDisplay";
import Dashboard from "./Dashboard";
import Header from "./Header";
// import Profile from "./Profile";
// import IssuedBooksTable from './IssuedBooksTable'
// import RequestsTable from "./RequestsTable";

const Home = () => (WrappedComponent) => {
  return function WC(props) {
    return (
    <div className="flex flex-col h-screen bg-gray-100 drawer w-screen">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="flex-1 flex flex-col drawer-content">
        {/* Header */}
        <Header/>

        {/* Content */}
        <div className="flex-1 flex items-center justify-center bg-gray-200">
          <WrappedComponent {...props}/>
        </div>
      </div>

      <Dashboard/>

    </div>
  );}
};

// WrappedComponent.displayName = 'Home';

export default Home;
