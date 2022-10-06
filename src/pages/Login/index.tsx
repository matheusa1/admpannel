import LoginImg from "../../assets/images/login-img.png";
import Logo from "../../assets/images/logo.png";
import { RiLoginCircleLine } from "react-icons/ri";
import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();

  function onHandleClick(event: FormEvent) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    console.log(data);

    navigate("/");
  }

  return (
    <div className="h-[100vh] relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  flex bg-white w-[780px] drop-shadow-login rounded-[30px]">
        <img src={LoginImg} className="h-[582px]" />
        <form
          onSubmit={onHandleClick}
          className="flex flex-col items-center pt-9 pl-7 pr-9 w-full"
        >
          <img src={Logo} className="w-[100px] h-[100px]" />

          <h1 className="mt-5 font-semibold font-base leading-7 text-[#252733]">
            Log In to Admin Panel
          </h1>
          <span className="mt-3 font-light text-xs text-subtitle">
            Enter your phone number and password below
          </span>

          <div className="flex flex-col w-full mt-12">
            <label
              htmlFor="phoneNumber"
              className="text-xs font-semibold text-bg-black mb-2"
            >
              PHONE NUMBER
            </label>
            <input
              name="phoneNumber"
              type="text"
              id="phoneNumber"
              className="bg-[#FCFDFE] h-10 py-3 px-4 text-subtitle text-sm border-solid border-[1px] border-bg-black rounded-lg"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="flex flex-col w-full mt-6">
            <label
              htmlFor="password"
              className="text-xs font-semibold text-bg-black mb-2"
            >
              PASSWORD
            </label>
            <input
              name="password"
              type="password"
              id="password"
              className="bg-[#FCFDFE] h-10 py-3 px-4 text-subtitle text-sm border-solid border-[1px] border-bg-black rounded-lg"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="bg-bg-black w-full rounded-lg text-white text-xs flex font-normal py-3 mt-10 justify-center items-center gap-4"
          >
            <RiLoginCircleLine className="w-5 h-5" />
            Log In
          </button>
          
          <p className="mt-8 text-sm font-normal text-subtitle">
            Don't have an account?
            <a className="text-bg-black ml-2" href="#">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
