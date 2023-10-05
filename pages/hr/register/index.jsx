import { useState } from "react";
import Link from "next/link";
import { hrUnAuthPage } from "@/middlewares/hrAuth";
import Logo from "@/components/Logo";

export async function getServerSideProps(context) {
  await hrUnAuthPage(context);
  return {
    props: {},
  };
}

export default function HrRegister() {
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
    const registerReq = await fetch("http://localhost:3000/api/hr/register", {
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
      <div className="bg-white font-family-karla h-screen">
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col">
            {/* <div className="mx-auto">
              <div className="flex justify-center mx-auto md:justify-start pt-12 md:pl-12 md:-mb-24">
                <a
                  href="#"
                  className="w-48 mx-auto text-white font-bold text-xl p-4"
                >
                  <img
                    className="mx-auto w-52 pr-1"
                    src="logo.png"
                    alt="Workflow"
                  />
                </a>
              </div>
            </div> */}

            <div className="flex flex-col justify-center md:justify-start my-auto md:pt-0 px-8 md:px-24 lg:px-32">
              <div className="mx-auto">
                <Link
                  href="/"
                  className=" text-white font-bold text-4xl sm:text-7xl p-4"
                >
                  {/* <img
                    className="w-28 md:w-44 pr-3"
                    src="../logo.png"
                    alt="Workflow"
                  /> */}
                  <Logo />
                </Link>
              </div>
              <h2 className="text-center text-xl sm:text-3xl font-extrabold text-gray-900 -mt-5">
                Hr Sign Up
              </h2>
              <p className="mt-2 text-center text-sm text-gray-600">
                or <span> </span>
                <Link
                  href="/user/register"
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  sign up as a Job Seeker
                </Link>
              </p>
              <form
                className="flex flex-col pt-3 md:pt-8"
                onSubmit={registerHandler.bind(this)}
              >
                {/* display error */}
                {isErrorAlert && (
                  <>
                    <div
                      className="absolute top-10 left-0 right-0 mx-auto w-max flex items-center p-4 mb-4 text-sm text-red-600 border border-red-100 rounded-lg bg-red-50 bg-opacity-95"
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
                        <span className="font-medium">Sign up error! </span>
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
                <div className="flex flex-col pt-4">
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    name="email"
                    value={fields.email}
                    onChange={fieldHandler.bind(this)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <div className="flex flex-col pt-4">
                  <label htmlFor="password" className="text-lg">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    name="password"
                    value={fields.password}
                    onChange={fieldHandler.bind(this)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>
                <div className="flex flex-col pt-4">
                  <label htmlFor="password" className="text-lg">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="re_password"
                    placeholder="Confirm Password"
                    name="re_password"
                    value={fields.re_password}
                    onChange={fieldHandler.bind(this)}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                    required
                  />
                </div>

                <input
                  type="submit"
                  value="Sign up"
                  className="bg-orange-600 rounded-lg text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                />
              </form>
              <div className="text-center pt-12 pb-12">
                <p>
                  Already have an account?{" "}
                  <Link
                    href="/hr/login"
                    className="underline font-semibold text-orange-600 hover:text-gray-700"
                  >
                    Sign in.
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2 shadow-2xl">
            <img
              className="object-cover w-full h-full hidden md:block"
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
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
                  href="/hr/login"
                  onClick={closeModal}
                  className="bg-orange-600 text-white py-2 px-4 rounded-lg w-[100px] hover:bg-white hover:text-orange-600 border-2 border-orange-600"
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
