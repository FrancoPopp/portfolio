function Button({ className, children, ...props }) {
  return (
    <div
      className={`${className} flex h-10 w-fit cursor-pointer flex-nowrap items-center justify-around gap-4 rounded-full border-2 border-[#B326DC] bg-[#B326DC] px-4 py-2 shadow-[0px_0px_10px_#B326DC] transition-all duration-200 hover:bg-[#B326DC]/100 md:bg-[#B326DC]/0`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Button;
