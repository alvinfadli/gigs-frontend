import Footer from "@/components/Footer";
import LandingNavbar from "@/components/LandingNavbar";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import Router from "next/router";
import cookies from "next-cookies";

export function getServerSideProps(context) {
  const allCookies = cookies(context);

  // console.log(allCookies.token);
  // if (allCookies.token) {
  //   return context.res
  //     .writeHead(302, {
  //       location: "/user/jobs",
  //     })
  //     .end();
  // }
  if (allCookies.token) {
    return {
      redirect: {
        destination: "user/jobs",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default function UserLogin() {
  const [fields, setFields] = useState({
    email: "",
    password: "",
  });

  const [status, setStatus] = useState("normal");
  const [isErrorAlert, setIsErrorAlert] = useState(false);

  // useEffect(() => {
  //   const token = Cookie.get("token");
  //   if (token) return Router.push("/user/jobs");
  // }, []);

  function fieldHandler(e) {
    const name = e.target.getAttribute("name");

    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }
  async function loginHandler(e) {
    e.preventDefault();

    const loginReq = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const loginRes = await loginReq.json();
    if (loginRes.status === "error") {
      // const errorMessage = loginRes.message;
      // console.log(errorMessage); // This will print "Email and password are incorrect" to the console
      setStatus(loginRes.message);
      setIsErrorAlert(true);
    }
    // console.log(fields);
    Cookie.set("token", loginRes.data.accessToken);
  }
  return (
    <>
      <LandingNavbar />
      <div className="pt-24 flex items-center justify-center h-[95vh]">
        <div className="container mx-auto">
          <div className="flex justify-center items-center align-middle w-full mx-auto lg:px-10">
            <div className="flex justify-center items-center py-5 border border-slate-200 rounded-2xl shadow-2xl ">
              <div className="hidden md:block mx-auto pr-5">
                {/* <Image
                  width={700}
                  height={200}
                  src="../hero-1.svg"
                  alt=""
                  srcSet=""
                  className="mx-auto"
                /> */}
                <img src="../register.png" className="" width={980} />
              </div>
              <form
                className="w-full max-w-md p-4 px-10 border-l border-slate-200"
                onSubmit={loginHandler.bind(this)}
              >
                <h2 className="text-2xl mb-4 text-center">Welcome Back</h2>
                <h2 className="text-xl mb-4 text-center font-light">
                  We are Happy to see you back
                </h2>
                {/* display error */}
                {isErrorAlert && (
                  <>
                    <div
                      className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:text-red-400"
                      role="alert"
                    >
                      <svg
                        className="flex-shrink-0 inline w-4 h-4 mr-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                      </svg>
                      <span className="sr-only">Info</span>
                      <div>
                        <span className="font-medium">Login error! </span>
                        {status}
                      </div>
                    </div>
                  </>
                )}
                {/* end display error */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl focus:ring focus:ring-blue-300"
                    onChange={fieldHandler.bind(this)}
                    autoFocus
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl focus:ring focus:ring-blue-300"
                    onChange={fieldHandler.bind(this)}
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-green-600 py-1 px-4 rounded-2xl w-[100px] hover:bg-green-600 hover:text-white border-2 border-green-600"
                  >
                    Sign in
                  </button>
                  {/* <Link
                  className="text-green-600 py-1 px-4 rounded-2xl w-[100px] hover:bg-green-600 hover:text-white  text-center border-2 border-green-600"
                  to="/index"
                >
                  Sign in
                </Link> */}
                </div>
                <p className="text-center pt-3 text-sm font-light">
                  Do not have an account?{" "}
                  {/* <a href="#" className="text-green-600">
                Sign up
              </a> */}
                  <a className="text-green-600" to="/sign-up">
                    Sign Up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
