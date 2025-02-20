import { useState } from "react";
import { pages } from "../resources/pages";

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
    <header className="fixed top-0 right-0 left-0 z-1 flex items-center justify-between py-4 pr-8 pl-4">
      <h2 className="text-2xl font-bold text-nowrap text-white">Franco Popp</h2>
      <nav className="flex gap-10 md:mr-16">
        <NavLinks />
      </nav>
    </header>
  );
}

export default Header;
