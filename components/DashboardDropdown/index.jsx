import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";

function DashboardDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    // Clear the data from localStorage when signing out
    localStorage.clear(); // This clears all data in localStorage
    // You can also specify specific keys to remove if needed, e.g., localStorage.removeItem('token');
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // Add event listener when the component mounts
    window.addEventListener("click", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* User Icon */}
      <button
        onClick={toggleDropdown}
        className="flex items-center gap-x-2 rounded-md text-green-600 hover:text-gray-900 focus:outline-none focus:ring-offset-2 focus:ring-offset-white focus:ring-gray-500"
      >
        <Menu />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <ul className="absolute space-y-2 bg-white border border-gray-300 rounded-md shadow-lg w-48 top-10 right-0">
          <li>
            {/* <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-t-md"
            >
              Profile
            </a> */}
            <Link
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-t-md"
              href="/user/profile"
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              href="/user/my-jobs"
            >
              My Jobs
            </Link>
          </li>
          <li>
            {/* <a
              href="#"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Sign Out
            </a> */}
            <a className="block px-4 py-2 text-gray-700 hover:bg-gray-100 hover:rounded-b-md">
              Sign out
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default DashboardDropdown;
