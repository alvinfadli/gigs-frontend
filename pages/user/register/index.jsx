import LandingNavbar from "@/components/LandingNavbar";
import { useState } from "react";
import Link from "next/link";

export default function UserLogin() {
  const [fields, setFields] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    re_password: "",
  });

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

    console.log();

    if (registerRes.status === "success") {
      // Registration was successful
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
      <div className="pt-20 ">
        <div className="container mx-auto mt-5">
          <div className="flex justify-center items-center align-middle w-full mx-auto">
            <div className="collapse md:visible"></div>
            <form
              className="w-full max-w-md p-4"
              onSubmit={registerHandler.bind(this)}
            >
              <h2 className="text-2xl mb-4 text-center">Welcome</h2>
              <h2 className="text-xl mb-4 text-center font-light">
                Join Gigs Community
              </h2>
              <div className="mb-4">
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
                  value={fields.email}
                  onChange={fieldHandler.bind(this)}
                  required
                  className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl bg-transparent"
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
                  value={fields.password}
                  onChange={fieldHandler.bind(this)}
                  required
                  className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl bg-transparent"
                />
              </div>
              <div className="mb-4">
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
                  className="text-green-600 py-1 px-4 rounded-2xl w-[100px] hover:bg-green-600 hover:text-white border-2 border-green-600"
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
                  stroke="#71c40b"
                  className="w-20 h-20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-xl mb-2 text-center">
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
    </>
  );
}
