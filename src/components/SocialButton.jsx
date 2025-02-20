function SocialButton({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex size-10 items-center justify-center rounded-full border-2 border-[#B326DC] bg-[#B326DC]/0 p-2 shadow-[0px_0px_10px_#B326DC] transition-all duration-200 hover:bg-[#B326DC]/100"
    >
      {icon}
    </a>
  );
}

export default SocialButton;
