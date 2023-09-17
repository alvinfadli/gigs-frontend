import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between py-24 ${inter.className}`}
    >
      {/* header */}
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="container mx-auto w-11/12">
          <div className="flex items-center justify-center">
            <header className="bg-transparent w-full border-b-[1px] border-slate-950">
              <div className="container mx-auto md:w-full">
                <div className="flex items-center justify-between ">
                  <div className="px-5 py-5">
                    <img src="logo.png" className="w-24" />
                  </div>
                  <div className="flex items-center gap-x-3 px-5">
                    {/* <button className="w-20 py-2">Sign In</button>
                <button className="w-28 bg-white border-2 border-slate-950 rounded-full px-3 py-2">
                  Sign Up
                </button> */}
                    <a
                      className="w-24 bg-white md:border-2 md:border-slate-950 md:rounded-full px-3 py-2 text-center hover:text-[#71c40b] md:hover:bg-[#71C40B] md:hover:border-[#71C40B] md:hover:text-white hove"
                      to="/sign-in"
                    >
                      Sign In
                    </a>
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
      {/* header end */}
      {/* hero start */}
      <div className="py-5">
        <h1 className="text-center font-bold text-5xl">
          Connecting Futures, One Job at a Time.
        </h1>
        <div className="container mx-auto w-11/12 px-10">
          <div className="flex items-center justify-between">
            <img
              src="hero-1.svg"
              alt=""
              srcSet=""
              className="hidden md:block md:w-4/12"
            />
            <img
              src="hero-2.svg"
              alt=""
              srcSet=""
              className="w-full md:w-4/12"
            />
            <img
              src="hero-3.svg"
              alt=""
              srcSet=""
              className="hidden md:block md:w-4/12"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 border-b-[1px] border-slate-950"></div>
      {/* hero end */}
    </main>
  );
}
