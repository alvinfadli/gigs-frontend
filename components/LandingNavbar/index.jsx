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
                      className="bg-transparent px-3 py-2 text-center hover:text-green-600"
                    >
                      Sign In
                    </Link>
                    <Link
                      className="w-[6.5rem] bg-green-600 border-2 border-green-600 hover:bg-white hover:text-green-600  text-white rounded-lg px-3 py-1.5 text-center"
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
