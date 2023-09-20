import Image from "next/image";

function Footer() {
  return (
    <>
      <div className="container mt-5 mx-auto w-11/12">
        <footer className="bg-transparent w-full border-t-[1px] border-slate-950 p-5">
          <div className="md:w-7/12 mx-auto">
            <div className="mx-auto md:flex">
              <div className="logo md:pt-2">
                <img src="../logo.png" className="w-24 mx-auto pr-5 md:pr-0" />
              </div>
              <p className="text-center md:text-left md:text-lg md:pl-5">
                Let us connect you with the perfect job opportunities. Our
                website makes job hunting a breeze
              </p>
            </div>
            <div>
              <p className="text-center pt-5 md:text-lg">
                Copyright © 2023, Gigs
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
export default Footer;
