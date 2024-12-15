import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    available: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const toastId = toast.loading("Adding Book...");
    try {
      const {data} = await axios.post("http://localhost:8080/api/v1/librarian/addBook", formData, {withCredentials: true});
      console.log(data);
      toast.success(data?.message, {
        id: toastId
      });
      setFormData({
        title: "",
        author: "",
        available: "",
        image: "",
        description: "",
      });
      window.location.href = "/";
    } catch (error) {
      console.error("Error adding book:", error);
      toast.error(error?.response?.data?.message || "Something went wrong", {
        id: toastId
      })
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Author</span>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Available Copies</span>
          <input
            type="number"
            name="available"
            value={formData.available}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Image URL</span>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          ></textarea>
        </label>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBook;
