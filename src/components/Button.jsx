import { FaDownload } from "react-icons/fa";

function Button({ className, children, ...props }) {
  return (
    <div
      className={`${className} flex h-10 w-fit cursor-pointer flex-nowrap items-center justify-around gap-4 rounded-full bg-[#B326DC] px-4 py-2 shadow-[0px_0px_10px_#B326DC]`}
      {...props}
    >
      <p className="text-md text-nowrap text-[#fff]">{children}</p>
      <FaDownload className="text-sm text-[#fff]" />
    </div>
  );
}

export default Button;
