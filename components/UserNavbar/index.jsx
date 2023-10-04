import Link from "next/link";
import UserDropdown from "../ProfileDropdown";
import Logo from "../Logo";

function UserNavbar() {
  return (
    <>
      <header className="bg-white sticky sm:absolute top-0 left-0 w-full flex items-center z-10 border-b-[1px] border-slate-300">
        <div className="container mx-auto w-11/12">
          <div className="flex items-center justify-center">
            <header className="bg-transparent w-full backdrop-filter backdrop-blur-sm">
              <div className="container mx-auto md:w-full">
                <div className="flex items-center justify-between ">
                  <div className=" py-5 text-3xl">
                    <Link href="/user/jobs">
                      <Logo />
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
