import Footer from "@/components/Footer";
import LandingNavbar from "@/components/LandingNavbar";
import { useState, useEffect } from "react";
import Cookie from "js-cookie";
import Router from "next/router";
import { unAuthPage } from "@/middlewares/userAuth";
import Link from "next/link";

export async function getServerSideProps(context) {
  await unAuthPage(context);
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
      setStatus(loginRes.message);
      setIsErrorAlert(true);
    }
    // console.log(fields);
    if (loginRes.status === "success") {
      Cookie.set("token", loginRes.data.accessToken);
      Router.push("/user/jobs");
    }
  }
  return (
    <>
      <div className="bg-white font-family-karla h-screen">
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col">
            {/* <div className="mx-auto">
              <div class="flex justify-center mx-auto md:justify-start pt-12 md:pl-12 md:-mb-24">
                <a
                  href="#"
                  class="w-48 mx-auto text-white font-bold text-xl p-4"
                >
                  <img
                    class="mx-auto w-52 pr-1"
                    src="logo.png"
                    alt="Workflow"
                  />
                </a>
              </div>
            </div> */}

            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <div className="mx-auto">
                <a href="#" className=" text-white font-bold text-xl p-4">
                  <img
                    className="w-28 md:w-44 pr-3"
                    src="logo.png"
                    alt="Workflow"
                  />
                </a>
              </div>
              <h2 className="md:mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                or <span> </span>
                <a
                  href="#"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  sign in with an HR Account
                </a>
              </p>
              <form
                className="flex flex-col pt-3 md:pt-8"
                onSubmit={loginHandler.bind(this)}
              >
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
                <div class="flex flex-col pt-4">
                  <label htmlFor="email" class="text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    name="email"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={fieldHandler.bind(this)}
                    required
                  />
                </div>

                <div class="flex flex-col pt-4">
                  <label for="password" class="text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={fieldHandler.bind(this)}
                    required
                  />
                </div>

                <input
                  type="submit"
                  value="Sign in"
                  class="bg-green-600 rounded-lg text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                />
              </form>
              <div class="text-center pt-12 pb-12">
                <p>
                  Dont have an account?{" "}
                  <Link
                    href="/user/register"
                    class="underline font-semibold text-green-600 hover:text-gray-700"
                  >
                    Register here.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div class="w-1/2 shadow-2xl">
            <img
              class="object-cover w-full h-screen hidden md:block"
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
        </div>
      </div>
    </>
  );
}
