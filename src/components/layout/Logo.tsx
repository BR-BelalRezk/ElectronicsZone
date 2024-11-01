import Image from "next/image";
import Link from "next/link";
import logo from "/public/ez.png";

export default function Logo() {
  return (
    <Link href={"#home"}>
      <figure>
        <Image src={logo} alt="electronics zone logo" className="size-20" />
      </figure>
    </Link>
  );
}
