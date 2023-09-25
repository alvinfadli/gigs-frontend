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
                onSubmit={registerHandler.bind(this)}
              >
                <h2 className="text-2xl mb-2 text-center">Welcome</h2>
                <h2 className="text-xl mb-4 text-center font-light">
                  Join Gigs Community
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
                <div className="mb-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="name"
                    id="name"
                    name="name"
                    value={fields.name}
                    required
                    className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl bg-transparent"
                    onChange={fieldHandler.bind(this)}
                  />
                </div>
                <div className="mb-2">
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
                    value={fields.email}
                    onChange={fieldHandler.bind(this)}
                    required
                    className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl bg-transparent"
                  />
                </div>
                <div className="mb-2">
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
                    value={fields.password}
                    onChange={fieldHandler.bind(this)}
                    required
                    className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl bg-transparent"
                  />
                </div>
                <div className="mb-8">
                  <label
                    htmlFor="re_password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    id="re_password"
                    name="re_password"
                    value={fields.re_password}
                    onChange={fieldHandler.bind(this)}
                    required
                    className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl bg-transparent"
                  />
                </div>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="text-green-600 py-1 px-4 rounded-2xl w-1/2 hover:bg-white bg-green-600 text-white hover:text-green-600 border-2 border-green-600"
                  >
                    Sign Up
                  </button>
                </div>
                <p className="text-center pt-3 text-sm font-light">
                  Already have an account?{" "}
                  <a className="text-green-600" to="/sign-in">
                    Sign in
                  </a>
                </p>
              </form>
            </div>
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
                  className="text-green-600 py-2 px-4 rounded-2xl w-[100px] hover:bg-green-600 hover:text-white border-2 border-green-600"
                >
                  Sign in
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
