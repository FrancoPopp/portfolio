import { Card, CardContent, CardFooter, CardTitle } from "./Card";
import Button from "./Button";
import TechIcon from "./TechIcon";
import { techs } from "../resources/techs";
import { FaArrowCircleRight } from "react-icons/fa";

function Projects() {
  return (
    <section
      id="projects"
      className="relative flex min-h-screen w-full flex-col items-center px-8 pt-[64px]"
    >
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-[#fff]">Projects</h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <ProjectCard
            title="Personal Portfolio"
            src="/public/assets/images/portfolioSS.jpeg"
            alt="screenshot of my personal portfolio"
            href="https://github.com/FrancoPopp/portfolio"
            techs={[
              techs.javascript,
              techs.react,
              techs.tailwind,
              techs.html,
              techs.css,
            ]}
          />
          <ProjectCard
            title="Iventory Management"
            src="/public/assets/images/portfolioSS.jpeg"
            alt="screenshot of an inventory management system"
            href="https://github.com/FrancoPopp/inventory-management-system"
            techs={[
              techs.react,
              techs.springboot,
              techs.tailwind,
              techs.postgres,
              techs.html,
              techs.css,
            ]}
          />
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, src, alt, techs, href }) {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <CardContent>
        <img src={src} alt={alt} />
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap gap-4">
          {techs.map((tech) => (
            <TechIcon key={tech.name} src={tech.icon} alt={tech.alt} />
          ))}
        </div>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="size-fit"
        >
          <Button>
            <p className="text-md text-nowrap text-[#fff]">Go to source</p>
            <FaArrowCircleRight className="text-sm text-[#fff]" />
          </Button>
        </a>
      </CardFooter>
    </Card>
  );
}

export default Projects;
