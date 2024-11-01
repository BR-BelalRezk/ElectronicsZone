import { navbarItems } from "@/constants";
import Link from "next/link";
import MenuListItem from "./MenuListItem";

export default function DesktopNavigation() {
  return (
    <ul className="hidden lg:flex flex-row-reverse gap-5 text-xl font-semibold text-slate-500">
      {navbarItems.map((item, index) => (
        <MenuListItem index={index} key={index}>
          <Link href={`#${item}`}>{item}</Link>
        </MenuListItem>
      ))}
    </ul>
  );
}
