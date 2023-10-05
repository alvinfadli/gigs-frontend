import Link from "next/link";
import Logo from "../Logo";

function LandingNavbar() {
  return (
    <>
      <header className="bg-transparent sticky top-0 left-0 w-full flex items-center z-10 backdrop-filter backdrop-blur-xl">
        <div className="mx-auto w-full">
          <div className="flex items-center justify-center">
            <header className="bg-transparent w-full border-b-[1px] border-slate-300 py-2">
              <div className="container mx-auto md:w-full">
                <div className="flex items-center justify-between ">
                  <div className="px-5 pt-4 pb-5 text-4xl">
                    <Link href="/">
                      {/* <img src="../logo.png" className="w-24" /> */}
                      <Logo />
                    </Link>
                  </div>
                  <div className="flex items-center gap-x-3 px-5">
                    {/* <button className="w-20 py-2">Sign In</button>
                <button className="w-28 bg-white border-2 border-slate-950 rounded-full px-3 py-2">
                  Sign Up
                </button> */}
                    <Link
                      href="/user/login"
                      className="bg-transparent px-3 py-2 text-center hover:text-orange-600 hidden md:block"
                    >
                      Sign In
                    </Link>
                    <Link
                      className="w-[6.5rem] bg-slate-950 border-2 border-slate-950 hover:bg-transparent hover:text-slate-950 font-medium  text-white rounded-lg px-3 py-1.5 text-center"
                      href="/user/register"
                    >
                      Sign Up
                    </Link>
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
