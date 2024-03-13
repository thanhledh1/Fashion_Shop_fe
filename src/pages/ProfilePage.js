import React, { useEffect, useState } from "react";
import MasterLayout from "../layouts/MasterLayout";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function ProfilePage(props) {
  const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));
    const [formData, setFormData] = useState({
      name: user.name,
      email: user.email,
      password: user.password,
      address: user.address,
      phone: user.phone,
    });
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const token = localStorage.getItem("token"); // Lấy token từ localStorage
      
          const res = await axios.put(
            "http://127.0.0.1:8000/api/customer/update",
            formData,
            {
              headers: {
                Authorization: `Bearer ${token}`, // Thêm token vào header Authorization
              },
            }
          );
      
          console.log(res.data);
          alert("Profile updated successfully!");
          navigate("/");

          // Cập nhật thông tin người dùng trong localStorage
          localStorage.setItem("user", JSON.stringify(formData));
        } catch (error) {
          console.error(error);
          alert("Error updating profile");
        }
      };
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    return (
        <MasterLayout>
          <>
            <h2>Chỉnh sửa hồ sơ</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="fullname">Họ tên:</label>
              <input
                type="text"
                id="fullname"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="address">Địa chỉ:</label>
              <input
                type="text"
                id="address"
                name="address"
                required
                value={formData.address}
                onChange={handleChange}
              />
              <br />
              <br />
              <label htmlFor="phone">Số điện thoại:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
              />
              <br />
              <br />
              <input type="submit" defaultValue="Lưu hồ sơ" />
            </form>
          </>
        </MasterLayout>
      );
    }
    
    export default ProfilePage;