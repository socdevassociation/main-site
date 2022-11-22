import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-4">
      <div className="flex flex-col justify-between gap-2">
        <div className="flex items-center gap-4">
          <Image src={logo} width="60" alt=""></Image>
          <h1 className="text-3xl">Socialist Developers Association</h1>
        </div>

        <nav className="flex gap-6 text-xl">
          <Link href="/">About</Link>
          <Link href="/work">Work</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
