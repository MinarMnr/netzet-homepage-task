import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center md:items-start md:justify-between">
        <Image
          src="/images/logo.svg"
          width={107.78}
          height={46.07}
          alt="Logo"
          className="md:hidden"
        />
        <Image
          src="/images/logo.svg"
          width={173.12}
          height={74}
          alt="Logo"
          className="hidden md:block"
        />

        <Image
          className="md:hidden absolute right-[29px] gap-6"
          src="/images/menu.svg"
          width={20}
          height={12}
          alt="Menu"
        />
        <div className="hidden md:flex items-center gap-10 text-[#A9A9A9] text-[18px] font-semibold">
          <Link href="#">About us</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


