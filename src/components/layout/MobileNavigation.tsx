import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { RiMenu3Line } from "react-icons/ri";
import { navbarItems, socials } from "@/constants";
import Link from "next/link";

export default function MobileNavigation() {
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="rounded-full size-auto p-2.5">
            <RiMenu3Line className="text-2xl" />
          </Button>
        </SheetTrigger>
        <SheetContent
          className=" bg-slate-100 flex flex-col justify-between overflow-y-scroll"
          style={{ scrollbarWidth: "none" }}
        >
          <SheetHeader className="mt-10">
            <SheetTitle className="text-slate-900 capitalize font-semibold text-center text-2xl md:text-5xl">
              electronics zone
            </SheetTitle>
            <SheetDescription className="text-center md:text-3xl">
              Navigate through the website
            </SheetDescription>
          </SheetHeader>
          <ul className="flex justify-center text-slate-800 items-end md:text-5xl flex-col  gap-5 text-xl font-semibold">
            {navbarItems.map((item, index) => (
              <Link href={`#${item}`} key={index} className="w-full">
                <SheetClose
                  key={index}
                  className="border-b pb-3 md:pb-5 border-slate-300 w-full flex items-start justify-end"
                >
                  {item}
                </SheetClose>
              </Link>
            ))}
          </ul>
          <SheetFooter>
            <ul className="flex items-center justify-center gap-10 text-3xl md:text-5xl text-slate-500">
              {socials.map((item, index) => (
                <SheetClose key={index}>
                  <Link href={item.href} target="_blank">
                    <SheetClose>
                      <item.icon />
                    </SheetClose>
                  </Link>
                </SheetClose>
              ))}
            </ul>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
