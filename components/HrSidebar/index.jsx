import {
  MoreVertical,
  ChevronLast,
  ChevronFirst,
  LogOut,
  Menu,
} from "lucide-react";
import { useContext, createContext, useState, useEffect } from "react";
import Cookie from "js-cookie";
import Router from "next/router";

const SidebarContext = createContext();

export default function Sidebar({ children }) {
  function logoutHandler(e) {
    e.preventDefault();
    Cookie.remove("token");
    Router.replace("/hr/login");
  }
  const [expanded, setExpanded] = useState(false);

  // Update the state when the window is resized
  useEffect(() => {
    // Check if window is defined (available in the client/browser)
    if (typeof window !== "undefined") {
      // Determine the initial state based on the screen width
      setExpanded(window.innerWidth >= 768);

      // Update the state when the window is resized
      const handleResize = () => {
        setExpanded(window.innerWidth >= 768);
      };

      window.addEventListener("resize", handleResize);

      // Clean up the event listener when the component unmounts
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <aside
      className={`sticky top-0 h-screen transition-all z-10 hidden md:block ${
        expanded ? "w-full sm:w-full md:w-3/12 lg:w-2/12" : "w-0 md:w-min"
      }`}
    >
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 mb-5 flex justify-between items-center">
          <img
            src="../logo.png"
            className={`overflow-hidden transition-all  ${
              expanded ? "w-20" : "w-0"
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <ChevronFirst /> : <Menu />}
          </button>
        </div>

        <SidebarContext.Provider value={{ expanded }}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>

        <div className="border-t flex p-3">
          <img
            src="https://ui-avatars.com/api/?background=c7d2fe&color=3730a3&bold=true"
            alt=""
            className="w-10 h-10 rounded-md"
          />
          <div
            className={`
              flex justify-between items-center
              overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
          `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">johndoe@gmail.com</span>
            </div>
            <button
              className="hover:bg-slate-200 p-2 rounded-lg"
              onClick={logoutHandler.bind(this)}
            >
              <LogOut size={20} />
            </button>
          </div>
        </div>
      </nav>
    </aside>
  );
}

export function SidebarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? "bg-gradient-to-tr from-green-200 to-green-100 text-green-800"
            : "hover:bg-green-50 text-grey-600"
        }
    `}
    >
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0 hidden ml-3"
        }`}
      >
        {text}
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? "" : "top-2"
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}
        >
          {text}
        </div>
      )}
    </li>
  );
}
