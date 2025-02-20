import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Button from "./Button";
import Input from "./Input";
import SocialButton from "./SocialButton";

function About() {
  return (
    <section className="relative grid h-[calc(100vh-64px)] items-center px-10 md:grid-cols-2">
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl font-bold text-nowrap text-[#fff]">
            I'm Franco Popp
          </h1>
          <h2 className="text-center text-2xl font-semibold text-[#B326DC] md:text-nowrap">
            Software Engineer / Full-Stack Developer
          </h2>
        </div>
        <p className="text-md text-center text-[#fff]">
          I specialize in Spring Boot, React.js, and PostgreSQL, building
          scalable and user-friendly applications. Passionate about clean code
          and problem-solving, I love turning ideas into reality through
          technology.
        </p>
        <div className="flex size-fit flex-col items-center gap-4">
          <Input />
          <div className="flex w-full items-center justify-between">
            <Button>Download CV</Button>
            <SocialButton
              icon={<FaGithub className="text-md text-[#fff]" />}
              href={"https://github.com/FrancoPopp"}
            />
            <SocialButton
              icon={<FaLinkedinIn className="text-md text-[#fff]" />}
              href="https://www.linkedin.com/in/francopopp/"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
