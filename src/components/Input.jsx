import { FaCopy } from "react-icons/fa";

function Input() {
  return (
    <div className="flex h-10 w-full items-center justify-between gap-10 rounded-full border-2 border-[#B326DC] px-4 py-2">
      <p className="text-md text-[#fff]">franco.a.popp9@gmail.com</p>
      <FaCopy className="text-[#737373]" size={16} />
    </div>
  );
}

export default Input;
