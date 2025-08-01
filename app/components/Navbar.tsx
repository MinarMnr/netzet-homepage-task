import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-center items-center lg:items-start lg:justify-between">
        <Image
          src="/images/logo.svg"
          width={107.78}
          height={46.07}
          alt="Logo"
          className="lg:hidden"
        />
        <Image
          src="/images/logo.svg"
          width={173.12}
          height={74}
          alt="Logo"
          className="hidden lg:block"
        />

        <Image
          className="lg:hidden absolute right-[9px]"
          src="/images/menu.svg"
          width={20}
          height={12}
          alt="Menu"
        />
        <div className="hidden lg:flex items-center gap-10 text-[#A9A9A9] text-[18px] font-semibold">
          <Link href="#">About us</Link>
          <Link href="#">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


