import Link from "next/link";
import UserDropdown from "../ProfileDropdown";

function UserNavbar() {
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
                    <UserDropdown />
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
export default UserNavbar;
