/* eslint-disable react/no-unescaped-entities */
import LandingNavbar from "@/components/LandingNavbar";
import { Inter } from "next/font/google";
import {
  Briefcase,
  Globe2,
  CircleDollarSign,
  SearchCheck,
  MonitorCheck,
} from "lucide-react";
import Logo from "@/components/Logo";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex flex-col items-center justify-between ${inter.className}`}
    >
      {/* hero start */}
      <LandingNavbar />
      <div className="container px-8 md:px-1 py-5">
        <h1 className="text-center font-bold text-orange-700 text-3xl md:text-5xl">
          Connecting Futures, One Job at a Time.
        </h1>
        <div className="container mx-auto w-11/12 px-10">
          <div className="flex items-center justify-between">
            <img
              src="photographer.svg"
              alt=""
              srcSet=""
              className="hidden md:block md:w-4/12"
            />
            <img
              src="man-riding-a-rocket.svg"
              alt=""
              srcSet=""
              className="w-full md:w-4/12"
            />
            <img
              src="home-office.svg"
              alt=""
              srcSet=""
              className="hidden md:block md:w-4/12"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 border-b-[1px] border-slate-300"></div>
      <div className="pt-8 text-center">
        <h1 className="font-bold text-3xl md:text-4xl"> Get ahead with Gigs</h1>
        <p className="text-lg w-3/4 mx-auto pt-5">
          We are serving up trusted insights from the people who know, so you
          will have the goods you need to succeed
        </p>
      </div>
      <div className="flex flex-wrap container pt-10 justify-center">
        <div className="w-full md:w-1/2 max-w-sm rounded overflow-hidden text-center pb-5">
          <div className="flex justify-center">
            <Globe2 size={45} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Wide Reach and Accessibility
            </div>
            <p className="text-gray-700 text-base">
              Achieve a global reach and ensure accessibility for all users with
              ease.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-sm rounded overflow-hidden text-center pb-5">
          <div className="flex justify-center">
            <CircleDollarSign size={45} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Cost-Effective Recruitment
            </div>
            <p className="text-gray-700 text-base">
              Streamline your recruitment process and save on costs efficiently.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-sm rounded overflow-hidden text-center pb-5">
          <div className="flex justify-center">
            <SearchCheck size={45} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              AI Powered Search and Matching
            </div>
            <p className="text-gray-700 text-base">
              Harness the power of AI for intelligent search and precise
              matching.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 max-w-sm rounded overflow-hidden text-center pb-5">
          <div className="flex justify-center">
            <MonitorCheck size={45} />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              Data Analytics and Insights
            </div>
            <p className="text-gray-700 text-base">
              Gain valuable insights through comprehensive data analytics.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 border-b-[1px] border-slate-300"></div>
      <div className="container w-9/12 pt-8">
        <h1 className="font-bold text-3xl md:text-4xl text-center">
          What people say
        </h1>
        <div className="-mx-3 md:flex items-start mt-8 ">
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=1" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Kenzie Edgar.
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-base leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  sunt ratione dolor exercitationem minima quas itaque saepe
                  quasi architecto vel! Accusantium, vero sint recusandae cum
                  tempora nemo commodi soluta deleniti.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=2" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Stevie Tifft.
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-base leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Lorem ipsum, dolor sit amet, consectetur adipisicing elit.
                  Dolore quod necessitatibus, labore sapiente, est, dignissimos
                  ullam error ipsam sint quam tempora vel.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=3" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Tommie Ewart.
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-base leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae, obcaecati ullam excepturi dicta error deleniti sequi.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=4" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Charlie Howse.
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-base leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto inventore voluptatum nostrum atque, corrupti, vitae
                  esse id accusamus dignissimos neque reprehenderit natus, hic
                  sequi itaque dicta nisi voluptatem! Culpa, iusto.
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="px-3 md:w-1/3">
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=5" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Nevada Herbertson.
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-base leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nobis, voluptatem porro obcaecati dicta, quibusdam sunt ipsum,
                  laboriosam nostrum facere exercitationem pariatur deserunt
                  tempora molestiae assumenda nesciunt alias eius? Illo, autem!
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
            <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
              <div className="w-full flex mb-4 items-center">
                <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
                  <img src="https://i.pravatar.cc/100?img=6" alt="" />
                </div>
                <div className="flex-grow pl-3">
                  <h6 className="font-bold text-base uppercase text-gray-600">
                    Kris Stanton.
                  </h6>
                </div>
              </div>
              <div className="w-full">
                <p className="text-base leading-tight">
                  <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                    "
                  </span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatem iusto, explicabo, cupiditate quas totam!
                  <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                    "
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      {/* hero end */}
    </main>
  );
}
