import LandingNavbar from "@/components/LandingNavbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between py-24 ${inter.className}`}
    >
      {/* hero start */}
      <LandingNavbar />
      <div className="container px-8 md:px-1 py-5">
        <h1 className="text-center font-bold text-green-700 text-3xl md:text-5xl">
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
      <div className="container mx-auto w-11/12 border-b-[1px] border-slate-300"></div>
      <div className="pt-8 text-center">
        <h1 className="font-bold text-3xl"> Get ahead with Gigs</h1>
        <p className="text-lg w-3/4 mx-auto pt-5">
          We are serving up trusted insights from the people who know, so you
          will have the goods you need to succeed
        </p>
      </div>

      {/* hero end */}
    </main>
  );
}
