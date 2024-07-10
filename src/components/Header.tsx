import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold tracking-tight text-orange-500"
        >
          MernEats.com
        </Link>
        {/* md is predefined breakpoint given by tailwind & it hides this component for medium and larger size screens */}
        <div className="md:hidden">
          <MobileNav />
        </div>
        {/* in tailwind styling goes from mobile to desktop */}
        {/* initially it is hidden next in medium and larger size screen visible (display block) */}
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
}
