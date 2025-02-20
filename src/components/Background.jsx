function Background() {
  return (
    <div className="fixed inset-0 z-[-1] h-screen w-screen bg-[#121212]">
      <div className="absolute top-3/12 left-1/6 h-[6vw] w-[6vw] rounded-full bg-[#fff] blur-2xl md:blur-3xl"></div>
      <div className="absolute top-1/12 right-1/6 h-[8vw] w-[8vw] rounded-full bg-[#fff] blur-2xl"></div>
      <div className="absolute top-7/12 right-1/5 h-[5vw] w-[4vw] rounded-full bg-[#fff] blur-2xl md:blur-3xl"></div>
      <div className="absolute top-5/6 left-3/12 h-[5vw] w-[4vw] rounded-full bg-[#fff] blur-2xl"></div>
    </div>
  );
}

export default Background;
