import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const UpdateProfile = () => {
  const userData = useSelector((state) => state.user);

  const [name, setName] = useState(userData.name || "");
  const [phone, setPhone] = useState(userData.phone || "");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✨ You can send this data to your API
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    if (image) formData.append("profileImage", image);

    console.log("Submitting Profile Update:", {
      name,
      phone,
      image,
    });

    // TODO: Use fetch/axios to send formData to backend.
  };

  return (
    <div className="h-screen bg-gradient-to-r from-[#1e1e2e] via-[#252738] to-[#1e1e2e] flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1b1521] text-white p-8 rounded-xl shadow-lg w-full max-w-md space-y-6"
        encType="multipart/form-data"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Update Profile</h2>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center">
          <label className="cursor-pointer relative">
            {preview ? (
              <img
                src={preview}
                alt="Profile Preview"
                className="w-24 h-24 rounded-full object-cover border-4 border-[#6d54b5]"
              />
            ) : (
              <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center text-sm">
                Upload
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          <p className="text-sm text-gray-300 mt-2">
            Click to change profile picture
          </p>
        </div>

        {/* Name */}
        <div>
          <label className="block mb-1 text-sm font-medium">Name</label>
          <input
            type="text"
            className="w-full p-3 rounded bg-[#2d2338] text-white outline-none focus:ring-2 ring-[#6d54b5]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block mb-1 text-sm font-medium">Phone</label>
          <input
            type="tel"
            className="w-full p-3 rounded bg-[#2d2338] text-white outline-none focus:ring-2 ring-[#6d54b5]"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#6d54b5] hover:bg-[#7a7098] transition text-white py-3 rounded font-medium"
        > <Link to="/" className="">
          Save Changes
          </Link>
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
