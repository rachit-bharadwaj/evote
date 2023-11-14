import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";

// icons
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="bg-primary text-gray-200 p-3 flex justify-between items-center">
      <h1 className="text-2xl font-bold">eVote</h1>

      {/* mobile menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <HiMenu className="text-2xl" />
          </SheetTrigger>
          <SheetContent>
            <ul className="my-14 p-5 flex flex-col gap-5 justify-center items-center">
              <li className="hover:text-secondary">
                <Link href="/your-issues">Your Issues</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/vote">Vote</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/post/issue">Issue</Link>
              </li>
              <li className="hover:text-secondary">
                <Link href="/post/complain">Complain</Link>
              </li>
            </ul>
          </SheetContent>
        </Sheet>
      </div>

      {/* menu for large screens */}
      <div className="hidden md:flex">menu</div>
    </nav>
  );
};

export default Navbar;
