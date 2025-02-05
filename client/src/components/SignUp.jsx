import { useState } from "react";
import './SignUp.css';
import axios from "axios";
import toast from "react-hot-toast";
import { useFileHandler } from "6pp";
import { useDispatch } from 'react-redux';
import { userExists } from "../redux/reducers/auth";
import { server } from "../constants/config";

const Signup = () => {
  const dispatch = useDispatch();
  const [userType, setUserTpe] = useState("student");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState("");
  const [email, setEmail] = useState("");

  const profile = useFileHandler("single");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Signing you up...");

    const config = {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };

    const formData = new FormData();
    formData.append("userType", userType);
    formData.append("name", name);
    formData.append("password", password)
    formData.append("confirmPassword", confirmPassword)
    formData.append("email", email)
    formData.append("profile", profile.file)
    formData.append("branch", branch)
    formData.append("year", year)

    console.log("form",formData)
      
    try {
      const response = await axios.post(`${server}/api/v1/auth/user/signup`, formData, config);
      console.log(response.data);
      dispatch(userExists(response.data.user));
      toast.success(response.data?.message, {
        id: toastId
      });
      window.location.href = "/";
    } catch (err) {
      console.log(err);
      toast.error(err.response?.data?.message || "Signup failed", {
        id: toastId
      });
    }
  };

  return (
    <div className="signup-form-container p-4">
      <h2 className="text-xl font-bold mb-4">Signup Form</h2>
      <form
        onSubmit={handleSubmit}
        className="signup  w-full max-w-xl mx-auto p-4 rounded-md shadow-md"
      >
        <label className="block mb-4">
          User Type:
          <select
            name="userType"
            value={userType}
            onChange={(e) => setUserTpe(e.target.value)}
            className="w-full p-2 rounded-md bg-white border border-gray-300 mt-1 font-normal"
          >
            <option value="student">Student</option>
            <option value="staff">Staff</option>
            <option value="librarian">Librarian</option>
          </select>
        </label>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <label className="block">
            Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 rounded-md bg-white border border-gray-300 mt-1 font-normal"
            />
          </label>
          <label className="block">
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 rounded-md bg-white border border-gray-300 mt-1 font-normal"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <label className="block">
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 rounded-md bg-white border border-gray-300 mt-1 font-normal"
            />
          </label>
          <label className="block">
            Confirm Password:
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 rounded-md bg-white border border-gray-300 mt-1 font-normal"
              required
            />
          </label>
        </div>

        {userType === "student" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <label className="block">
              Branch:
              <input
                type="text"
                name="branch"
                value={branch}
                onChange={(e) => setBranch(e.target.value)}
                className="w-full p-2 rounded-md bg-white border border-gray-300 mt-1 font-normal"
                required
              />
            </label>
            <label className="block">
              Year:
              <input
                type="number"
                name="year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="w-full p-2 rounded-md bg-white border border-gray-300 mt-1 font-normal"
                required
              />
            </label>
          </div>
        )}

        <label className="block mt-4">
          Profile:
          <input
            type="file"
            name="profile"
            onChange={profile.changeHandler}
            className="w-full p-2 rounded-md bg-white border border-gray-300 mt-1 font-normal"
          />
        </label>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
        >
          Signup
        </button>

        <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already a member?{' '}
            <a href="/login" className="font-semibold text-indigo-600 hover:text-indigo-500">
              Login
            </a>
          </p>
      </form>
    </div>

  );
};

export default Signup;
