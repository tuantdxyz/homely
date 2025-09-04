"use client";
import { navLinks } from "@/app/api/navlink";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRef, useState } from "react";
import NavLink from "./Navigation/NavLink";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header: React.FC = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const sideMenuRef = useRef<HTMLDivElement>(null);

  const isHomepage = pathname === "/";

  return (
    <header className="fixed h-24 py-1 z-50 w-full bg-transparent transition-all duration-300 lg:px-0 px-4 top-0">
      <nav className="container mx-auto max-w-8xl flex items-center justify-between py-4 duration-300 shadow-lg bg-white dark:bg-dark rounded-full px-4 top-0">
        <div className="flex justify-between items-center gap-2 w-full">
          {/* Logo */}
          <div>
            <Link href="/">
              <Image
                src="/images/header/dark-logo.svg"
                alt="logo dark"
                width={150}
                height={68}
                unoptimized
                className="block dark:hidden"
              />
              <Image
                src="/images/header/logo.svg"
                alt="logo light"
                width={150}
                height={68}
                unoptimized
                className="hidden dark:block"
              />
            </Link>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2 sm:gap-6">
            {/* Toggle Theme */}
            <button
              className="hover:cursor-pointer"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Icon
                icon="solar:sun-bold"
                width={32}
                height={32}
                className={`dark:hidden block ${
                  isHomepage ? "text-dark" : "text-dark"
                }`}
              />
              <Icon
                icon="solar:moon-bold"
                width={32}
                height={32}
                className="dark:block hidden text-white"
              />
            </button>

            {/* Phone number */}
            <div className="hidden md:block">
              <Link
                href="#"
                className={`text-base flex items-center gap-2 border-r pr-6 ${
                  isHomepage
                    ? "text-dark dark:text-white hover:text-primary border-dark dark:border-white"
                    : "text-dark hover:text-primary"
                }`}
              >
                <Icon icon="ph:phone-bold" width={24} height={24} />
                +1-212-456-789
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      {navbarOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40" />
      )}

      {/* Side Menu */}
      <div
        ref={sideMenuRef}
        className={`fixed top-0 right-0 h-full w-full bg-dark shadow-lg transition-transform duration-300 max-w-2xl ${
          navbarOpen ? "translate-x-0" : "translate-x-full"
        } z-50 px-20 overflow-auto no-scrollbar`}
      >
        <div className="flex flex-col h-full justify-between">
          {/* Close button */}
          <div className="flex items-center justify-start py-10">
            <button
              onClick={() => setNavbarOpen(false)}
              aria-label="Close mobile menu"
              className="bg-white p-3 rounded-full hover:cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="black"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col items-start gap-4">
            <ul className="w-full">
              {navLinks.map((item, index) => (
                <NavLink
                  key={index}
                  item={item}
                  onClick={() => setNavbarOpen(false)}
                />
              ))}
              <li className="flex items-center gap-4">
                <Link
                  href="/signin"
                  className="py-4 px-8 bg-primary text-base leading-4 block w-fit text-white rounded-full border border-primary font-semibold mt-3 hover:bg-transparent hover:text-primary duration-300"
                >
                  Sign In
                </Link>
                <Link
                  href="/"
                  className="py-4 px-8 bg-transparent border border-primary text-base leading-4 block w-fit text-primary rounded-full font-semibold mt-3 hover:bg-primary hover:text-white duration-300"
                >
                  Sign up
                </Link>
              </li>
            </ul>
          </nav>

          {/* Footer */}
          <div className="flex flex-col gap-1 my-16 text-white">
            <p className="text-base sm:text-xm font-normal text-white/40">
              Contact
            </p>
            <Link
              href="#"
              className="text-base sm:text-xm font-medium hover:text-primary"
            >
              hello@homely.com
            </Link>
            <Link
              href="#"
              className="text-base sm:text-xm font-medium hover:text-primary"
            >
              +1-212-456-7890
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
