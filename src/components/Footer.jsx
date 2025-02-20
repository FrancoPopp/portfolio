import { pages } from "../resources/pages";

function Footer() {
  return (
    <footer className="relative flex w-full flex-col items-center justify-center gap-4 bg-[#1f1f1f] p-4">
      <div className="flex w-full justify-center gap-4 p-4">
        {pages.map((page) => (
          <a
            key={page.label}
            href={page.href}
            className="text-sm text-[#fff] transition-colors duration-200 hover:text-[#B326DC]"
          >
            {page.label}
          </a>
        ))}
      </div>
      <p className="text-sm text-[#e1e1e1]">
        &copy; 2025 by{" "}
        <span className="text-md font-semibold text-[#B326DC]">
          Franco Popp
        </span>
      </p>
    </footer>
  );
}

export default Footer;
