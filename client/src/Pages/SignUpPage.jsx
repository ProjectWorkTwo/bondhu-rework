import React, { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "./Login.css";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";
import LoginSignUpSlider from "../Components/Simple/LoginSIgnUpSlider";
import { baseURL } from "../Constant/Constant";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showHideState, setShowHideState] = useState({
    password: false,
    confirmPassword: false,
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData["password"].trim() !== formData["confirmPassword"].trim())
      return;

    setFormData((prev) => ({
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    }));
    const { fullName, email, password } = formData;
    if (!fullName || !email || !password) return;
    axios
      .post(`${baseURL}/createuser`, {
        fullName,
        email,
        password,
      })
      .then((res) => {
        res = res.data;
        if (res?.error)
          return Swal.fire({
            icon: "error",
            title: "Oops...",
            text: res?.error,
          });
        if (res?.success) {
          navigate("/login");
          return Swal.fire({
            icon: "success",
            title: "Successfully",
            text: res?.success,
          });
        }
      });
  };
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className="w-full h-full min-h-screen p-5 grid grid-cols-1 md:grid-cols-2 place-items-center gap-5 bg-secondaryColor relative">
      <span
        className="absolute top-0 left-0 w-full h-full bg-whiteColor z-0"
        style={{
          clipPath: `polygon(50% 0, 75% 38%, 50% 100%, 19% 100%, 0 93%, 0 0)`,
        }}
      ></span>
      <div className="relative z-10 w-full max-w-md min-h-[400px] p-5 shadow-2xl rounded-md flex flex-col justify-center items-center gap-5 bg-whiteColor">
        <h3 className="text-3xl md:text-5xl text-center font-extrabold select-none text-primaryColor">
          Bondhu
        </h3>
        <form
          className="w-full flex flex-col justify-center items-start gap-3"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            className="input1"
            placeholder="Full Name"
            name="fullName"
            value={formData["fullName"]}
            onChange={handleChange}
          />
          <input
            type="email"
            className="input1"
            placeholder="Email"
            name="email"
            value={formData["email"]}
            onChange={handleChange}
          />
          <div className="w-full flex justify-between items-center gap-2 input1">
            <input
              type={showHideState["password"] ? "text" : "password"}
              className="input2"
              placeholder="Password"
              name="password"
              value={formData["password"]}
              onChange={handleChange}
            />
            <span
              className="flex-shrink-0 w-10 h-10 rounded-full grid place-items-center hover:bg-grayColor/20 cursor-pointer text-xl commonAnim"
              onClick={() =>
                setShowHideState((prev) => ({
                  ...prev,
                  password: !prev["password"],
                }))
              }
            >
              {showHideState["password"] ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div className="w-full flex justify-between items-center gap-2 input1">
            <input
              type={showHideState["confirmPassword"] ? "text" : "password"}
              className="input2"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={formData["confirmPassword"]}
              onChange={handleChange}
            />
            <span
              className="flex-shrink-0 w-10 h-10 rounded-full grid place-items-center hover:bg-grayColor/20 cursor-pointer text-xl commonAnim"
              onClick={() =>
                setShowHideState((prev) => ({
                  ...prev,
                  confirmPassword: !prev["confirmPassword"],
                }))
              }
            >
              {showHideState["confirmPassword"] ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <Link
            to="/login"
            className="text-primaryColor underline text-sm select-none py-2"
          >
            Already Have an account?
          </Link>
          <button className="btnFill1 w-full">Sign Up</button>
        </form>
        {/* <Link
          to="/"
          className="text-center w-full bg-primaryColor text-whiteColor px-3 py-2 rounded-md capitalize"
        >
          Visit Home Page
        </Link> */}
      </div>
      <div className="hidden md:block relative z-10 w-full max-w-md shadow-2xl">
        <LoginSignUpSlider />
      </div>
    </section>
  );
};

export default SignUpPage;
