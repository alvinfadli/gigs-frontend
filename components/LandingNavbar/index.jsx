import Link from "next/link";

function LandingNavbar() {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container mx-auto w-11/12">
          <div className="flex items-center justify-center">
            <header className="bg-transparent w-full border-b-[1px] border-slate-950">
              <div className="container mx-auto md:w-full">
                <div className="flex items-center justify-between ">
                  <div className="px-5 py-5">
                    <Link href="/">
                      <img src="../logo.png" className="w-24" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-x-3 px-5">
                    {/* <button className="w-20 py-2">Sign In</button>
                <button className="w-28 bg-white border-2 border-slate-950 rounded-full px-3 py-2">
                  Sign Up
                </button> */}
                    <Link
                      href="/user"
                      className="w-24 bg-transparent md:border-2 md:border-slate-950 md:rounded-full px-3 py-2 text-center hover:text-[#71c40b] md:hover:bg-[#71C40B] md:hover:border-[#71C40B] md:hover:text-white hove"
                    >
                      Sign In
                    </Link>
                    {/* <a
                      className="w-28 bg-[#71C40B] border-2 border-[#71C40B] hover:bg-white hover:text-[#71C40B]  text-white rounded-full px-3 py-2 text-center"
                      to="/sign-up"
                    >
                      Sign Up
                    </a> */}
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </header>
    </>
  );
}
export default LandingNavbar;
