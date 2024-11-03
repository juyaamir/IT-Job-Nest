import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(import.meta.env.VITE_USER_REGISTER_API, formData);
      setMessage(response.data.message);
      console.log(response.data);
      setFormData({
        name: "",
        email: "",
        password: ""
      });
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.log(err.message);
        setError(err.response?.data.message || "An unexpected error occurred");
      } else {
        console.log("An unexpected error occurred");
        setError("An unexpected error occurred");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full border border-gray-300 flex items-center justify-center flex-col p-4 gap-3 rounded-lg shadow-lg form-width"
    >
      {message && <p className="text-blue-500 font-bold">{message}</p>}
      {error && <p className="text-red-400">{error}</p>}
      <input
        type="text"
        placeholder="Your name"
        name="name"
        onChange={handleChange}
        value={formData.name}
        className="border border-gray-300 rounded-md p-2 w-full md:w-96"
      />
      <input
        type="email"
        placeholder="Your email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 w-full md:w-96"
      />
      <input
        type="password"
        placeholder="Your password..."
        value={formData.password}
        onChange={handleChange}
        className="border border-gray-300 rounded-md p-2 w-full md:w-96"
        name="password"
      />
      <button
        className="border border-gray-300 rounded-md p-2 w-full md:w-96 px-4 py-2 bg-green-600 text-white font-semibold hover:bg-green-700"
        type="submit"
      >
        Register
      </button>
    </form>
  );
};

export default Register;