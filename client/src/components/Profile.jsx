import { useSelector } from "react-redux"

const Profile = () => {
    const {user} = useSelector(state => state.auth)
    console.log(user)
    return (
    <div className="text-black w-full flex justify-center py-8">
      <div className="w-[90%] md:w-[70%] lg:w-[60%] bg-white rounded-lg shadow-lg p-6">
        {/* Profile Header */}
        <div className="flex items-center gap-6 pb-6 border-b border-gray-300">
          <img
            // src="https://images.pexels.com/photos/3769706/pexels-photo-3769706.jpeg?auto=compress&cs=tinysrgb&w=600"
            src={user.profileImage.url}
            alt="User Avatar"
            className="h-24 w-24 rounded-full object-cover border border-gray-300"
          />
          <div>
            <h1 className="text-2xl font-semibold">{user.name || "John Doe"}</h1>
            <p className="text-gray-500">{user.email || "email@example.com"}</p>
          </div>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
          <div>
            <h2 className="text-lg font-medium text-gray-700">Contact Information</h2>
            <p className="mt-2 text-gray-600">
              <strong>Phone:</strong> {user.phone || "Not provided"}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Email:</strong> {user.email || "Not provided"}
            </p>
          </div>
          <div>
            <h2 className="text-lg font-medium text-gray-700">Academic Details</h2>
            <p className="mt-2 text-gray-600">
              <strong>Branch:</strong> {user.branch || "Not provided"}
            </p>
            <p className="mt-2 text-gray-600">
              <strong>Year:</strong> {user.year || "Not provided"}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default (Profile)