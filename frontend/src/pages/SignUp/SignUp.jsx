import React, { useState } from "react";
import "../SignUp/SignUp.css";
import SignupImage from "../../assets/SignupImage.png";
import SignupBack from "../../assets/LogSignBack.png";

const SignUp = () => {

    const [signMethod, setSignUpMethod] = useState("mobile");

    const [name,setName] = useState("");
    const [mobile,setMobile] = useState(0);
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log("SignUp Handle")
        console.log(name,mobile,email,password)
    }

  return (
    <div
      className="flex justify-center h-[100vh] items-center w-[100%]"
      style={{
        backgroundImage: `url(${SignupBack})`,
        backgroundSize: "cover",
      }}
    >
      <div className="parent-signup w-[70%] h-[534px]">
        <div className="main-signup flex">
          <div
            className="left-login w-[55%]"
            style={{
              backgroundImage: `url(${SignupImage})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="right-signup w-[45%] h-[100%] bg-[#080925] p-5">
            <h1 className="my-8 text-3xl text-[#5529f0] font-semibold text-center">
              Get Started
            </h1>
            <h4 className="my-8 text-center font-semibold">Sign up with</h4>

            <div className="inputs">
              <div className="signup-methods flex justify-around">
                <div
                  onClick={() => {
                    setSignUpMethod("mobile");
                  }}
                  className={`mob-no px-9 cursor-pointer font-semibold py-3 ${
                    signMethod === "mobile"
                      ? "border-b-white"
                      : "border-transparent"
                  } border-b-2 `}
                  style={{ transition: "border 0.5s ease-in-out" }}
                >
                  Mobile No.
                </div>
                <div
                  onClick={() => {
                    setSignUpMethod("email");
                  }}
                  className={`email-id px-9 cursor-pointer font-semibold py-3 ${
                    signMethod === "email"
                      ? "border-b-white"
                      : "border-transparent"
                  } border-b-2`}
                  style={{ transition: "border 0.5s ease-in-out" }}
                >
                  Email Id.
                </div>
              </div>
              <div className="mob-method my-10 px-6">

                <form action="" onSubmit={handleSignUp}>
                  <div className="fields">
                    <input onChange={(e)=>setName(e.target.value)}
                      className="bg-white my-2 w-[100%] focus:outline-none text-black rounded-md p-0.5 placeholder:text-sm placeholder:px-2 placeholder-gray-500"
                      type="text"
                      placeholder="Name"
                    />
                    {signMethod === "mobile" ? (
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

                    <div className="signup-btn my-7 w-[100%] flex justify-center">
                      <button type="submit" className="bg-[#5529f0] rounded-2xl">
                        Sign up
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* <p className="text-center">Not Register yet ? <Link className="text-red-700" to="">Create an account</Link></p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
