import Link from "next/link";
import DashboardDropdown from "../Dashboard/Dropdown";
function HrNavbar() {
  return (
    <>
      <header className="bg-transparent absolute top-0 left-0 w-full flex items-center z-10">
        <div className="mx-auto w-full">
          <div className="flex items-center justify-center">
            <header className="bg-transparent w-full border-b-[1px] border-slate-300">
              <div className="container mx-auto md:w-full">
                <div className="flex items-center justify-between ">
                  <div className="px-5 py-5">
                    <Link href="/">
                      <img src="../logo.png" className="w-20" />
                    </Link>
                  </div>
                  <div className="flex items-center px-5">
                    <DashboardDropdown />
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
export default HrNavbar;
