function Section({ className, children, ...props }) {
  return (
    <section
      className={`${className} relative flex min-h-[calc(100vh-64px)] w-full snap-start items-center justify-center px-10 py-[64px]`}
      {...props}
    >
      {children}
    </section>
  );
}

export default Section;
