import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import LoginImage from "../../assets/LoginImage.png";
import LoginBack from "../../assets/LogSignBack.png";

const Login = () => {

    const [loginMethod, setLoginMethod] = useState("mobile");

    const [mobile,setMobile] = useState(0);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [isremember,setIsRemember] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        console.log("Login Successfully");
        console.log(mobile,password,email,isremember)
    }

  return (
    <div
      className="flex justify-center h-[100vh] items-center w-[100%]"
      style={{
        backgroundImage: `url(${LoginBack})`,
        backgroundSize: "cover",
      }}
    >
      <div className="parent-login w-[70%] h-[514px]">
        <div className="main-login flex">
          <div
            className="left-login w-[55%]"
            style={{
              backgroundImage: `url(${LoginImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="right-login w-[45%] h-[100%] bg-[#080925] p-5">
            <h1 className="my-8 text-3xl text-[#5529f0] font-semibold text-center">
              Get Started
            </h1>
            <h4 className="my-8 text-center font-semibold">Sign in with</h4>

            <div className="inputs">
              <div className="login-methods flex justify-around">
                <div
                  onClick={() => {
                    setLoginMethod("mobile");
                  }}
                  className={`mob-no px-9 cursor-pointer font-semibold py-3 ${
                    loginMethod === "mobile"
                      ? "border-b-white"
                      : "border-transparent"
                  } border-b-2 `}
                  style={{ transition: "border 0.5s ease-in-out" }}
                >
                  Mobile No.
                </div>
                <div
                  onClick={() => {
                    setLoginMethod("email");
                  }}
                  className={`email-id px-9 cursor-pointer font-semibold py-3 ${
                    loginMethod === "email"
                      ? "border-b-white"
                      : "border-transparent"
                  } border-b-2`}
                  style={{ transition: "border 0.5s ease-in-out" }}
                >
                  Email Id.
                </div>
              </div>
              <div className="mob-method my-10 px-6">

                <form action="" onSubmit={handleLogin}>
                  <div className="fields">
                    {loginMethod === "mobile" ? (
                      <>
                        <input onChange={(e)=>setMobile(e.target.value)}
                          className="bg-white my-2 w-[100%] focus:outline-none text-black rounded-md p-0.5 placeholder:text-sm placeholder:px-2 placeholder-gray-500"
                          type="number"
                          placeholder="Mobile No"
                        />{" "}
                        <br />
                      </>
                    ) : (
                      <>
                        <input onChange={(e)=>setEmail(e.target.value)}
                          className="bg-white my-2 w-[100%] focus:outline-none text-black rounded-md p-0.5 placeholder:text-sm placeholder:px-2 placeholder-gray-500"
                          type="email"
                          placeholder="Email"
                        />{" "}
                        <br />
                      </>
                    )}

                    <input onChange={(e)=>setPassword(e.target.value)}
                      className="bg-white my-2 w-[100%] focus:outline-none text-black rounded-md p-0.5 placeholder:text-sm placeholder:px-2 placeholder-gray-500"
                      type="password"
                      placeholder="Password"
                    />

                    <div className="remember-me flex my-1">
                      <input onChange={(e)=>setIsRemember(e.target.checked)} type="checkbox" className="mr-1" />
                      <p className="text-sm">Remember me</p>
                    </div>

                    <div className="login-btn w-[100%] flex justify-center">
                      <button type="submit" className="bg-[#5529f0] rounded-2xl">
                        Login
                      </button>
                    </div>
                  </div>

                </form>

              </div>
              <p className="text-center">
                Not Register yet ?{" "}
                <Link className="text-red-700" to="">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
