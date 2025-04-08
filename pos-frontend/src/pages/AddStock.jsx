import React, { useState } from "react";
import SideNavbar from "../components/inventory/SideNavbar";
import { Link } from "react-router-dom";

const AddStock = () => {
  const [formData, setFormData] = useState({
    name: "",
    category: "meat",
    quantity: "",
    unit: "kg",
    expiry: "",
    storage: "Room Temperature",
    alertThreshold: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Stock Added:", formData);
  };

  return (
    <div className="flex h-screen bg-[#f3eee5] text-[#3a302a] font-serif overflow-hidden">
      <SideNavbar />
      <main className="flex-1 p-6 bg-[url('/vintage-bg.png')] bg-cover bg-center overflow-y-auto">
        <div className="bg-[#fff8f0] p-6 rounded-lg shadow-md border border-[#d6c3b2] max-w-xl mx-auto">
          <div className="mb-4 text-sm">
            <p className="text-[#7e6b5a]">
              New to adding stock?
              <Link
                to="/guide.pdf"
                className="text-yellow-700 underline ml-1 hover:text-yellow-800"
              >
                Click here for the beginner's guide.
              </Link>
            </p>
          </div>

          <h1 className="text-xl font-bold mb-4 text-yellow-700">
            Add New Stock Item
          </h1>

          <form onSubmit={handleSubmit} className="space-y-3 text-sm">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                type="text"
                className="w-full p-1.5 rounded-md border border-[#d6c3b2] bg-[#f8f1e7] focus:outline-none"
                placeholder="Item name"
                required
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full p-1.5 rounded-md border border-[#d6c3b2] bg-[#f8f1e7]"
              >
                <option value="meat">Meat</option>
                <option value="dairy">Dairy</option>
                <option value="frozen">Frozen</option>
                <option value="beverages">Beverages</option>
                <option value="pantry">Pantry</option>
                <option value="alcohol">Alcohol</option>
              </select>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block mb-1 font-medium">Quantity</label>
                <input
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  type="number"
                  className="w-full p-1.5 rounded-md border border-[#d6c3b2] bg-[#f8f1e7]"
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-medium">Unit</label>
                <select
                  name="unit"
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full p-1.5 rounded-md border border-[#d6c3b2] bg-[#f8f1e7]"
                >
                  <option value="kg">Kg</option>
                  <option value="litres">Litres</option>
                  <option value="packs">Packs</option>
                  <option value="pieces">Pieces</option>
                  <option value="bottles">Bottles</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block mb-1 font-medium">Expiry Date</label>
              <input
                name="expiry"
                value={formData.expiry}
                onChange={handleChange}
                type="date"
                className="w-full p-1.5 rounded-md border border-[#d6c3b2] bg-[#f8f1e7]"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Storage Condition</label>
              <select
                name="storage"
                value={formData.storage}
                onChange={handleChange}
                className="w-full p-1.5 rounded-md border border-[#d6c3b2] bg-[#f8f1e7]"
              >
                <option value="Room Temperature">Room Temperature</option>
                <option value="Refrigerated">Refrigerated</option>
                <option value="Frozen">Frozen</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">Alert Threshold</label>
              <input
                name="alertThreshold"
                value={formData.alertThreshold}
                onChange={handleChange}
                type="number"
                className="w-full p-1.5 rounded-md border border-[#d6c3b2] bg-[#f8f1e7]"
                placeholder="e.g., 10"
              />
            </div>

            <button
              type="submit"
              className="bg-yellow-700 text-white w-full py-2 rounded-md hover:bg-yellow-800 transition"
            >
              Add Stock
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default AddStock;
