import Image from "next/image";
import logo from "/public/ez.png";
import { socials } from "@/constants";
import Link from "next/link";
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full relative scroll-mt-40 bg-slate-100/95 mt-20">
      <div className="container mx-auto px-3 md:px-5 py-3">
        <div className="w-full flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-between w-full">
            <Image src={logo} alt="logo" width={50} height={50} />
            <ul className="flex items-center justify-center gap-5">
              {socials.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} target="_blank">
                    <item.icon className="text-3xl text-slate-500" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <pre className="text-xs sm:text-base">
            &copy; {year}{" "}
            <span className="text-slate-700 text-base font-semibold">
              Electronics Zone
            </span>
            . All rights reserved.
          </pre>
        </div>
      </div>
    </footer>
  );
}
