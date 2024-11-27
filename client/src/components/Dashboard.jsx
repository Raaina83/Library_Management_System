import { RxDashboard } from "react-icons/rx";
import { VscAccount } from "react-icons/vsc";
import { FaBookOpen } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-indigo-700 text-white flex flex-col">
        {/* Logo */}
        <div className="flex items-center justify-center h-16 border-b border-indigo-600">
          <span className="text-3xl">LMS</span>
        </div>
        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-4 text-md">
          <a
            href="#dashboard"
            className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-600"
          >
            <span className="material-icons"><RxDashboard/></span>
            <span>Dashboard</span>
          </a>

          <a
            href="#team"
            className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-600"
          >
            <span className="material-icons"><VscAccount /></span>
            <span>My Account</span>
          </a>

          <a
            href="#projects"
            className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-600"
          >
            <span className="material-icons"><FaBookOpen/></span>
            <span>Book report</span>
          </a>
          <a
            href="#calendar"
            className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-600"
          >
            <span className="material-icons">calendar_today</span>
            <span>Calendar</span>
          </a>
  
          <div className="mt-6">
            <h3 className="text-md font-semibold uppercase text-gray-300 mb-2">
              Your Teams
            </h3>
            <a
              href="#heroicons"
              className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-600"
            >
              <span className="bg-gray-500 rounded-full h-6 w-6 flex items-center justify-center">
                H
              </span>
              <span>Heroicons</span>
            </a>
            <a
              href="#tailwindlabs"
              className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-600"
            >
              <span className="bg-gray-500 rounded-full h-6 w-6 flex items-center justify-center">
                T
              </span>
              <span>Tailwind Labs</span>
            </a>
            <a
              href="#workcation"
              className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-600"
            >
              <span className="bg-gray-500 rounded-full h-6 w-6 flex items-center justify-center">
                W
              </span>
              <span>Workcation</span>
            </a>
          </div>
        </nav>
        {/* Settings */}
        <div className="border-t border-indigo-600">
          <a
            href="#settings"
            className="flex items-center space-x-2 py-4 px-4 text-sm hover:bg-indigo-600"
          >
            <span className="material-icons">settings</span>
            <span>Settings</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="h-16 bg-white flex items-center justify-between px-6 shadow">
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded focus:outline-none w-[50%]"
          />
          <div className="flex items-center space-x-4">
            <span className="material-icons">notifications</span>
            <img
              src="https://via.placeholder.com/30"
              alt="User avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">Tom Cook</span>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 flex items-center justify-center bg-gray-200">
          {/* <div className="border-2 border-dashed border-gray-400 w-3/4 h-3/4 bg-gray-100 flex items-center justify-center">
            <span className="text-gray-400">Main Content Area</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
