export default function UserLogin() {
  return (
    <>
      <div className="pt-28 py-10">
        <div className="container mx-auto mb-10">
          <div className="flex justify-center items-center align-middle w-8/12 mx-auto">
            <div className="collapse lg:visible">
              <img src="" alt="" srcSet="" className="w-10/12" />
            </div>
            <form className="w-full max-w-md p-4 ">
              <h2 className="text-2xl mb-4 text-center">Welcome Back</h2>
              <h2 className="text-xl mb-4 text-center font-light">
                We are Happy to see you back
              </h2>
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
                  className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl focus:ring focus:ring-blue-300"
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
                  className="mt-1 p-2 w-full border-[2px] border-green-200 rounded-2xl focus:ring focus:ring-blue-300"
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
    </>
  );
}
