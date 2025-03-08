import HeaderAuth from "@/components/header-auth";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <nav className="w-full flex justify-center fixed z-40 h-16 bg-white">
      {/* <nav className="w-full flex justify-center fixed z-40 border-b border-b-foreground/10 h-16"> */}
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-5 items-center font-semibold">
          <Link href={"/"} className="text-lg font-semibold">
            <img src="/img/blesssed-logo.png" alt="Blesssed" className="h-10" />
          </Link>
        </div>
        <HeaderAuth />
      </div>
    </nav>
  );
};

export default HomeHeader;
