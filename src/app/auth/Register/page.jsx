"use client";

import { registerUser } from "@/redux/slices/authSlice";
import axiosClient from "@/utils/axiosClient";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function Register() {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mob1: "",
    pincode: "",
    district: "",
    state: "",
    dob: "",
    house_name: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Dispatch the registerUser action
      const resultAction = await dispatch(registerUser(form));

      if (registerUser.fulfilled.match(resultAction)) {
        const message = resultAction.payload?.message || "Registered successfully!";
        alert(message);
      } else {
        throw new Error(resultAction.payload || "Registration failed");
      }
    } catch (error) {
      console.error(error.message);
      alert(error.message || "An unexpected error occurred.");
    }
  };

  return (
    <form onSubmit={handleSubmit}  style={{display:"flex", flexDirection:"column",color:"black"}}>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="mob1"
        placeholder="Mobile Number"
        value={form.mob1}
        onChange={handleChange}
        pattern="\d{10}"
        title="Enter a 10-digit mobile number"
        required
      />
      <input
        type="text"
        name="pincode"
        placeholder="Pincode"
        value={form.pincode}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="district"
        placeholder="District"
        value={form.district}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="state"
        placeholder="State"
        value={form.state}
        onChange={handleChange}
        required
      />
      <input
        type="date"
        name="dob"
        placeholder="Date of Birth"
        value={form.dob}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="house_name"
        placeholder="House Name"
        value={form.house_name}
        onChange={handleChange}
        required
      />
      <button type="submit">Register</button>
    </form>
  );
}
