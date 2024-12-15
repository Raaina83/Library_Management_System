import { IoIosNotifications } from "react-icons/io"
import { Notifications } from "./Notifications"
import axios from "axios"
import { useDispatch } from "react-redux"
import { userNotExists } from "../redux/reducers/auth"
import toast from "react-hot-toast"

const Header = ({search, setSeach, handler}) => {
  const dispatch  = useDispatch();
  // const navigate = useNavigate();

  // const [search, setSearch] = useState("");

  // const handleSearchChange = (e) => {
  //   const value = e.target.value;
  //   setSearch(value);

  //   // Update the URL query parameter with the search value
  //   navigate(`?search=${value}`);
  // };

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
      <div className="w-[50%] px-10">
        <input
            type="text"
            placeholder="Search..."
            className="bg-gray-100 px-4 py-2 rounded focus:outline-none w-[100%] text-md"
            value={search}
            onChange={handler}
          />
      </div>

      <div className="flex items-center space-x-6 mr-8">
        <span className="material-icons cursor-pointer" 
          onClick={()=>document.getElementById('my_modal_1').showModal()}><IoIosNotifications size={28}/></span>
          <Notifications/>
        <label htmlFor="my-drawer" className="drawer-button">
        <img
          src="https://via.placeholder.com/30"
          alt="User avatar"
          className="w-10 h-10 rounded-full cursor-pointer"
        />
        </label>
        <div onClick={handleLogout} className="cursor-pointer">
          Logout
        </div>
        </div>
    </div>
  )
}

export default Header