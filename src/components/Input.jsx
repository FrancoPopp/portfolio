function Input({ className, children, ...props }) {
  return (
    <div
      className={`${className} flex h-10 w-full items-center justify-between gap-10 rounded-full border-2 border-[#B326DC] px-4 py-2`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Input;
