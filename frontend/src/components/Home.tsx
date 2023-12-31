import { useState } from "react";
import bg from "../assets/9091671.jpg";
const Home = () => {
  const [log, setLog] = useState<string>("login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleChange = (e: any) => {
    setData(e.target.value);
  };
  const handleLog = () => {
    setLog("login");
  };
  const handleReg = () => {
    setLog("signup");
  };
  const signup =
    log === "signup" ? (
      <div className="relative z-0 w-full mb-6 group">
        <input
          onChange={(e) => handleChange(e)}
          type="password"
          name="repeat_password"
          id="floating_repeat_password"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor="floating_repeat_password"
          className="peer-focus:font-medium absolute text-sm  text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Confirm password
        </label>
      </div>
    ) : null;
  const signup2 =
    log === "signup" ? (
      <div className="relative z-0 w-full mb-6 group">
        <input
          onChange={(e) => handleChange(e)}
          type="text"
          name="name"
          id="floating_first_name"
          className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          value={data.name}
          required
        />
        <label
          htmlFor="floating_first_name"
          className="peer-focus:font-medium absolute text-sm  text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Username
        </label>
      </div>
    ) : null;
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center relative">
      <img
        src={bg}
        className="absolute inset-0 w-full h-full object-cover"
        alt="Background"
      />
      <h1 className="text-2xl font-bold bg-gray-500 w-[50%] text-center p-3 mb-5 rounded-lg z-10">
        Omi-Chat
      </h1>

      <div className="relative flex w-[30%] justify-center mb-5 bg-gray-900 rounded-lg">
        <button
          className="text-white px-20 py-3 rounded-lg mr-12 hover:bg-blue-400"
          onClick={handleLog}
        >
          Login
        </button>
        <button
          className="text-white px-20 py-3 rounded-lg ml-12 hover:bg-blue-400"
          onClick={handleReg}
        >
          Sign Up
        </button>
      </div>
      <form className="w-[50%]">
        {signup2}
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={(e) => handleChange(e)}
            type="email"
            name="email"
            id="floating_email"
            className="block py-2.5 px-0 w-full text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={data.email}
            required
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm  text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            onChange={(e) => handleChange(e)}
            type="password"
            name="password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            value={data.password}
            required
          />
          <label
            htmlFor="floating_password"
            className="peer-focus:font-medium absolute text-sm  text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        {signup}
        <button
          type="submit"
          className="z-10 relative text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {log === "login" ? "Login" : "Sign up"}
        </button>
      </form>
    </div>
  );
};

export default Home;
