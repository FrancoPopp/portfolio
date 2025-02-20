import { useState } from "react";
import { pages } from "../resources/pages";
import { LuMenu, LuX } from "react-icons/lu";

function NavLinks() {
  const [currentPage, setCurrentPage] = useState("#about");

  return (
    <>
      {pages.map((page) => (
        <a
          key={page.label}
          href={page.href}
          onClick={() => setCurrentPage(page.href)}
          className={`${
            currentPage === page.href
              ? "open-link text-[#B326DC]"
              : "text-[#e1e1e1]"
          } transition-colors duration-200 hover:text-[#B326DC]`}
        >
          {page.label}
        </a>
      ))}
    </>
  );
}

function Header() {
  return (
    <>
      <DesktopHeader />
      <MobileHeader />
    </>
  );
}

function DesktopHeader() {
  return (
    <header className="fixed top-0 right-0 left-0 z-1 hidden items-center justify-between py-4 pr-8 pl-4 md:flex">
      <h2 className="text-2xl font-bold text-nowrap text-white">Franco Popp</h2>
      <nav className="flex gap-10 md:mr-16">
        <NavLinks />
      </nav>
    </header>
  );
}

function MobileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed z-50 flex flex-col overflow-hidden md:hidden">
      <header className="fixed top-0 right-0 left-0 z-20 px-2 py-4">
        <div className="flex items-center justify-between px-4 py-2">
          <div className="px-2">
            <h2 className="text-2xl font-bold text-nowrap text-[#fff]">
              Franco Popp
            </h2>
          </div>
          <button
            className="size-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <LuMenu className="size-8 text-[#fff]" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 transform ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } z-30 w-64 bg-[rgba(32,32,32,0.75)]/75 shadow-lg transition-transform duration-300 ease-in-out`}
      >
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-end p-4">
            <button
              className="flex size-10 items-center justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <LuX className="size-10 text-[#fff]" />
            </button>
          </div>
          <nav className="flex flex-col items-center gap-4 pt-16">
            <NavLinks />
          </nav>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-10 bg-[#1f1f1f]/50 transition-opacity duration-300 ease-in-out"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}

export default Header;
