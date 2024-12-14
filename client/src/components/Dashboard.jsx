import { FaBookOpen } from "react-icons/fa"
import DashboardItems from "./DashboardItems"
import { RxDashboard } from "react-icons/rx"
import { VscAccount } from "react-icons/vsc"
import { useSelector } from "react-redux"

const Dashboard = () => {
  const {user} = useSelector(state => state.auth);
  const userDashboardItems = [
    {
      attribute: "My Account",
      icon:  <VscAccount/>,
      link: "/dashboard/profile"
    },
    {
      attribute: "Books Issues",
      icon: <FaBookOpen/>,
      link: "/dashboard/issuedBooks",
    },
  ]

  const librarianDashboardItems = [
    {
      attribute: "My Account",
      icon: <VscAccount/>,
      link: "/dashboard/profile",
    },
    {
      attribute: "Requests",
      icon: <RxDashboard/>,
      link: "/dashboard/requests",
    },
    {
      attribute: "Issued Books",
      icon: <FaBookOpen/>,
      link: "/dashboard/issuedBooks",
    }
  ]

  
  return (
    <div className="w-64 text-white flex flex-col drawer-side">
      <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <nav className="flex-1 p-4 space-y-4 text-md bg-indigo-700">
          {user?.userType == "student" ? userDashboardItems.map((item , key) => (
            <DashboardItems attribute={item.attribute} link={item.link} icon={item.icon} key={key}/>
          )): 
            librarianDashboardItems.map((item, key) => (
              <DashboardItems attribute={item.attribute} link={item.link} icon={item.icon} key={key}/>
            ))
          }
        </nav>
    </div>
  )
}

export default Dashboard