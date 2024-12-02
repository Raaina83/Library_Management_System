import { IoIosNotifications } from "react-icons/io"
import { Notifications } from "./Notifications"

const Header = () => {
  return (
    <div className="h-16 bg-white flex items-center justify-between px-6 shadow">
      <div className="w-[50%] px-10">
        <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded focus:outline-none w-[100%] text-md"
          />
      </div>

      <div className="flex items-center space-x-6 mr-10">
        <span className="material-icons cursor-pointer" 
          onClick={()=>document.getElementById('my_modal_1').showModal()}><IoIosNotifications size={28}/></span>
          <Notifications/>
        <label htmlFor="my-drawer" className="drawer-button">
        <img
          src="https://via.placeholder.com/30"
          alt="User avatar"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
        </label>
        </div>
    </div>
  )
}

export default Header