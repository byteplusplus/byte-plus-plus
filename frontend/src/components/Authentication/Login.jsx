import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import "./authentication.css";
import LoginImage from "../../assets/LoginImage.png";
import LoginBack from "../../assets/LogSignBack.png";

const Login = () => {

    const [loginMethod, setLoginMethod] = useState("mobile");
    const [user, setUser] = useState({
        mobile: "",
        email:"",
        password: "",
    });

    const navigate = useNavigate();

    const toastOptions = {
        position: "bottom-right",
        autoClose: 5000,
        closeOnClick: true,
        draggable: true,
        theme: "dark",
    };

    // useEffect(() => {
    //   if (localStorage.getItem("byte-user")) {
    //     navigate("/dashboard");
    //   }
    // }, [navigate]);

    const resetForm = () => {
      setUser({
          mobile: "",
          email: "",
          password: "",
      });
};

    // to handle input field values dynamically
    const handleInput = (e) => {
        const { name, value } = e.target;

        setUser({
          ...user,
          [name]: value,
        });
    };
    
    const submitHandler = async(e) => {
        e.preventDefault();
        console.log(`Login Successfully with ${loginMethod}`);
        console.log(user.mobile, user.email, user.password);

        resetForm();

        // try {
        //     const config = { headers: { "Content-type": "application/json" } };
            
        //     const loginData = loginMethod === 'mobile'
        //         ? { mobile: user.mobile, password: user.password }
        //         : { email: user.email, password: user.password };
            
        //     const { data } = await axios.post(
        //         // "/api/user/login",
        //       "http://localhost:5000/api/user/login",
        //       loginData, config
        //     );

        //     toast.success("Login Successful", toastOptions);
        //     localStorage.setItem("byte-user", JSON.stringify(data));
        //     resetForm();
        //     navigate("/dashboard");
        //   } catch (error) {
        //     const errorMessage = error.response?.data?.message || "Login Failed!";
        //     toast.error(errorMessage, toastOptions);
        // }
    };

  return (
    <div
      className="h-screen flex justify-center items-center w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${LoginBack})` }}
    >
      {/* Container */}
        <div className="flex parent-login w-[70%] h-[514px]">
              
        {/* Image */}
        <div className="w-[45%]">
          <img src={LoginImage} alt="Login Illustration" className="w-full h-full object-cover" />
        </div>
              
        {/* Right Side - Login Form */}
        <div className="w-[55%] bg-gray-950 p-5 text-center">
          <h1 className="my-8 text-3xl text-indigo-600 font-semibold">Get Started</h1>
          <h4 className="my-6 font-semibold">Log in with</h4>

          {/* Toggle Section */}
          <div className="flex justify-around">
            <div
              onClick={() => {
                  setLoginMethod("mobile");
                  resetForm();
              }}
              className={`px-9 cursor-pointer font-semibold py-3 relative ${
                loginMethod === "mobile"
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                  : "text-gray-300"
              } transition-all duration-300`}
            >
              Mobile No.
            </div>
                      
            <div
              onClick={() => {
                  setLoginMethod("email");
                  resetForm();
              }}
              className={`px-9 cursor-pointer font-semibold py-3 relative ${
                loginMethod === "email"
                  ? "text-white after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-white"
                  : "text-gray-300"
              } transition-all duration-300`}
            >
              Email Id.
            </div>
          </div>
                  
        {/* Login Form */}
        <form onSubmit={submitHandler} className="my-8 px-6">
            {loginMethod === "mobile" ? (
                <input
                    name="mobile" 
                    onChange={handleInput}
                    className="w-full p-1.5 rounded-md bg-white text-black border-2 border-gray-800 my-2 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                    type="number"
                    placeholder="Mobile No."
                    value={user.mobile} 
                    required
                />
            ) : (
                <input
                    name="email" 
                    onChange={handleInput}
                    className="w-full p-1.5 rounded-md bg-white text-black border-2 border-gray-800 my-2 placeholder-gray-500 focus:outline-none focus:border-purple-500"
                    type="email"
                    placeholder="Email"
                    value={user.email} 
                    required
                />
            )}
          
          <input
              name="password"
              onChange={handleInput}
              value={user.password}
              className="w-full p-1.5 rounded-md bg-white text-black border-2 border-gray-800 mt-2 mb-8 placeholder-gray-500 focus:outline-none focus:border-purple-500"
              type="password"
              placeholder="Password"
              required
            />
                      {/* <div className="remember-me flex my-1">
            <input onChange={(e)=>setIsRemember(e.target.checked)} type="checkbox" className="mr-1" />
                      <p className="text-sm">Remember me</p>
                    </div> */}
                          
            <button
              type="submit"
              className="bg-indigo-600 py-2 font-semibold rounded-2xl hover:bg-indigo-700 transition-all duration-300"
             >
              Login
            </button>
          </form>
                  
          <p className="text-center">
            Not Registered yet?{" "}
            <span className="text-red-700 cursor-pointer hover:underline" onClick={() => navigate("/signup")}>
              Create an account
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
