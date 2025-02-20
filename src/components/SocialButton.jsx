function SocialButton({ icon, href }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex size-10 items-center justify-center rounded-full bg-[#B326DC] p-2 shadow-[0px_0px_10px_#B326DC]"
    >
      {icon}
    </a>
  );
}

export default SocialButton;
