import LandingNavbar from "@/components/LandingNavbar";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

export default function UserLogin() {
  const [fields, setFields] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const [status, setStatus] = useState("normal");
  const [isErrorAlert, setIsErrorAlert] = useState(false);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  async function registerHandler(e) {
    e.preventDefault();
    true;
    const registerReq = await fetch("http://localhost:3000/api/register", {
      method: "POST",
      body: JSON.stringify(fields),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const registerRes = await registerReq.json();

    if (registerRes.status === "error") {
      // const errorMessage = registerRes.message;
      // console.log(errorMessage); // This will print "Email and password are incorrect" to the console
      setStatus(registerRes.message);
      setIsErrorAlert(true);
    }

    if (registerRes.status === "success") {
      // Registration was successful
      setIsErrorAlert(false);
      setIsSuccessModalOpen(true);
      // Reset the input fields
    }
  }
  function indexHandler() {
    Router.push("/user/jobs");
  }

  function fieldHandler(e) {
    const name = e.target.getAttribute("name");

    setFields({
      ...fields,
      [name]: e.target.value,
    });
  }

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    setFields({
      username: "",
      name: "",
      email: "",
      password: "",
      re_password: "",
    });
  };

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
                <Link href="/" className=" text-white font-bold text-xl p-4">
                  <img
                    className=" w-44 pr-3"
                    src="../logo.png"
                    alt="Workflow"
                  />
                </Link>
              </div>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign up to Gigs
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                or <span> </span>
                <a
                  href="#"
                  className="font-medium text-green-600 hover:text-green-500"
                >
                  sign up an HR Account
                </a>
              </p>
              <form
                className="flex flex-col pt-3 md:pt-8"
                onSubmit={registerHandler.bind(this)}
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
                <div className="flex flex-col pt-4">
                  <label htmlFor="name" className="text-lg">
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={fields.name}
                    required
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    onChange={fieldHandler.bind(this)}
                  />
                </div>
                <div class="flex flex-col pt-4">
                  <label htmlFor="email" class="text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    name="email"
                    value={fields.email}
                    onChange={fieldHandler.bind(this)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    autoFocus
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
                    value={fields.password}
                    onChange={fieldHandler.bind(this)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div class="flex flex-col pt-4">
                  <label for="password" class="text-lg">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="re_password"
                    placeholder="Confirm Password"
                    name="re_password"
                    value={fields.re_password}
                    onChange={fieldHandler.bind(this)}
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <input
                  type="submit"
                  value="Log In"
                  class="bg-green-600 rounded-lg text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                />
              </form>
              <div class="text-center pt-12 pb-12">
                <p>
                  Dont have an account?{" "}
                  <a
                    href="register.html"
                    class="underline font-semibold text-green-600 hover:text-gray-700"
                  >
                    Register here.
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div class="w-1/2 shadow-2xl">
            <img
              class="object-cover w-full h-screen hidden md:block"
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            />
          </div>
        </div>
      </div>
      {isSuccessModalOpen && (
        <>
          <div
            className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50`}
          >
            <div
              className={`bg-white p-8 rounded-lg shadow-md modal-popup relative`}
            >
              <div className="w-min mx-auto mb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#16a34a"
                  className="w-20 h-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl mb-2 pt-5 text-center">
                Registration Successful
              </h2>
              <p className="text-center mb-5">
                Your registration is success! Lets sign in
              </p>
              <div className="text-center">
                <Link
                  href="/user"
                  onClick={closeModal}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg w-[100px] hover:bg-white hover:text-green-600 border-2 border-green-600"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
