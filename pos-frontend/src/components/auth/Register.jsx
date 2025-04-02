import React, { useState } from "react";

const Register = ({ setIsRegister }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRoleSelection = (selectedRole) => {
    setFormData({ ...formData, role: selectedRole });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Clicked:", formData); // Just logs input values, no backend
    setTimeout(() => {
      setIsRegister(false);
    }, 1500);
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        {/*****************Employee Name******************/}
        <div className="mt-4 mb-3">
          <div className="flex items-center rounded-lg p-4 px-4 bg-[#3c364c]">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        {/*****************Employee Email******************/}
        <div className="flex justify-center gap-10">
          <div className="w-1/2 mt-4 mb-3">
            <div className="flex items-center rounded-lg p-4 px-4 bg-[#3c364c]">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="bg-transparent flex-1 text-white focus:outline-none"
                required
              />
            </div>
          </div>
          {/*****************Employee Phone******************/}
          <div className="w-1/2 mt-4 mb-3">
            <div className="flex items-center rounded-lg p-4 px-4 bg-[#3c364c]">
              <input
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="bg-transparent flex-1 text-white focus:outline-none"
                required
              />
            </div>
          </div>
        </div>
        {/*****************Employee Password******************/}
        <div className="mt-4 mb-3">
          <div className="flex items-center rounded-lg p-4 px-4 bg-[#3c364c]">
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="bg-transparent flex-1 text-white focus:outline-none"
              required
            />
          </div>
        </div>
        {/*****************Employee Role******************/}
        <div className="mt-4 mb-4">
          <label className="block text-[#ababab] mb-2 mt-3 text-base font-medium">
            Choose your role
          </label>

          <div className="flex items-center gap-3 ">
            {["Waiter", "Cashier", "Admin"].map((role) => (
              <button
              key={role}
              type="button"
              onClick={() => handleRoleSelection(role)}
              className={`px-3 py-3 w-full rounded-2xl text-[#c7acf3] transition-all duration-200 ${
                formData.role === role
                  ? "bg-[#6b46c1]"
                  : "bg-[#451e6e7e] hover:bg-[#5a3b99] active:bg-[#764abc]"
              }`}
            >
              {role}
            </button>
            
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full rounded-lg mt-6 py-3 text-lg bg-[#6d54b5] text-gray-200 "
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default Register;
