// import { RxDashboard } from "react-icons/rx";

const DashboardItems = ({attribute, link, icon}) => {
  return (
    <a  
        href={link}
        className="flex items-center space-x-2 py-2 px-3 rounded hover:bg-indigo-600">
        <span className="material-icons">{icon}</span>
        <span>{attribute}</span>
    </a>
  )
};

export default DashboardItems;