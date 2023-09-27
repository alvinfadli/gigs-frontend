import Image from "next/image";

function Footer() {
  return (
    <>
      <footer className="bg-transparent w-full border-t-[1px] mt-5 border-slate-300 p-5">
        <div className="md:w-7/12 mx-auto">
          <div className="mx-auto md:flex">
            <div className="logo md:pt-2">
              <img src="../logo.png" className="w-24 mx-auto pr-5 md:pr-0" />
            </div>
            <p className="text-center md:text-left md:text-lg md:pl-5">
              Let us connect you with the perfect job opportunities. Our website
              makes job hunting a breeze
            </p>
          </div>
          <div>
            <p className="text-center pt-5 md:text-lg">
              Copyright © 2023, Gigs
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
