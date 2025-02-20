const pages = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
];

function NavLinks() {
  return (
    <>
      {pages.map((page) => (
        <a
          key={page.label}
          href={page.href}
          className={`${page.href === "#about" ? "open-link text-[#B326DC]" : "text-[#e1e1e1]"} transition-colors duration-200 hover:text-[#B326DC]`}
        >
          {page.label}
        </a>
      ))}
    </>
  );
}

function Header() {
  return (
    <header className="fixed top-0 right-0 left-0 flex items-center justify-between py-4 pr-8 pl-4">
      <h2 className="text-2xl font-bold text-white">Franco Popp</h2>
      <nav className="flex gap-10 md:mr-16">
        <NavLinks />
      </nav>
    </header>
  );
}

export default Header;
