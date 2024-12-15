import { IoIosNotifications } from "react-icons/io"
import { Notifications } from "./Notifications"
import axios from "axios"
import { useDispatch } from "react-redux"
import { userNotExists } from "../redux/reducers/auth"
import toast from "react-hot-toast"

const Header = ({search, setSeach, handler}) => {
  const dispatch  = useDispatch();

  const handleLogout = async() => {
    try {
      const {data} = await axios.get("http://localhost:8080/api/v1/auth/user/logout", {
        withCredentials: true
      })
      dispatch(userNotExists());
      console.log("log",data)
      toast.success(data.message)
      window.location.href = "/login"
      // dispatch(api.util.resetApiState())
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message || "Something went wrong")
    }
  }

  return (
    <div className="h-16 bg-white flex items-center justify-between px-6 shadow">
      <div className="w-[50%] flex gap-10">
        <a href="/">
          <img
              alt="Your Company"
              src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
              className="h-8 w-auto cursor-pointer"
          />
        </a>
        <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded focus:outline-none w-[100%] text-md"
            value={search}
            onChange={handler}
          />
      </div>

      <div className="flex items-center space-x-6 mr-8">
        {/* <span className="material-icons cursor-pointer" 
          onClick={()=>document.getElementById('my_modal_1').showModal()}><IoIosNotifications size={28}/></span>
          <Notifications/> */}
        <label htmlFor="my-drawer" className="drawer-button">
        <img
          src="https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="User avatar"
          className="w-12 h-12 rounded-full cursor-pointer"
        />
        </label>
        <div onClick={handleLogout} className="cursor-pointer text-red-950">
          Logout
        </div>
        </div>
    </div>
  )
}

export default Header