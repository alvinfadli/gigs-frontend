import LandingNavbar from "@/components/LandingNavbar";
import { Inter } from "next/font/google";
import {
  Briefcase,
  Globe2,
  CircleDollarSign,
  SearchCheck,
  MonitorCheck,
} from "lucide-react";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between ${inter.className}`}
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
      <div className="flex flex-wrap container pt-10 justify-center">
        <div class="w-full md:w-1/2 max-w-sm rounded overflow-hidden text-center pb-5">
          <div className="flex justify-center">
            <Globe2 size={45} />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Wide Reach and Accessibility
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla!
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 max-w-sm rounded overflow-hidden text-center pb-5">
          <div className="flex justify-center">
            <CircleDollarSign size={45} />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Cost-Effective Recruitment</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla!
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 max-w-sm rounded overflow-hidden text-center pb-5">
          <div className="flex justify-center">
            <SearchCheck size={45} />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Advanced Search and Matching
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla!
            </p>
          </div>
        </div>
        <div class="w-full md:w-1/2 max-w-sm rounded overflow-hidden text-center pb-5">
          <div className="flex justify-center">
            <MonitorCheck size={45} />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">
              Data Analytics and Insights
            </div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla!
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 border-b-[1px] border-slate-300"></div>
      <div className="pt-8 text-center">
        <h1 className="font-bold text-3xl pb-10">Trusted by top companies</h1>
        {/* <div className="flex justify-center items-center mt-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
            alt="Company Logo 1"
            className="mx-4 h-20"
          />
          <img
            src="https://1000logos.net/wp-content/uploads/2021/10/logo-Meta.png"
            alt="Company Logo 3"
            className="mx-4 h-20"
          />
          <img
            src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/227_Netflix_logo-512.png"
            alt="Company Logo 3"
            className="mx-4 h-20"
          />
        </div> */}
      </div>
      {/* hero end */}
    </main>
  );
}
