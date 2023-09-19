import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between py-24 ${inter.className}`}
    >
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
