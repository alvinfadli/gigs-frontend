/* eslint-disable react/no-unescaped-entities */
import { Rowdies as Mono } from "@next/font/google";

const mono = Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["300", "400", "700"],
});

function Logo() {
  return (
    <>
      <p className={`p-0 m-0 -mt-1 text-orange-700 ${mono.className}`}>gigs</p>
    </>
  );
}
export default Logo;
