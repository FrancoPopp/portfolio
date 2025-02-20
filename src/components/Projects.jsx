import { Card, CardContent, CardFooter, CardTitle } from "./Card";
import Button from "./Button";
import TechIcon from "./TechIcon";
import { techs } from "../resources/techs";

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
            src="/src/assets/images/portfolioSS.jpeg"
            alt="screenshot of my personal portfolio"
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
            src="/src/assets/images/portfolioSS.jpeg"
            alt="screenshot of an inventory management system"
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

function ProjectCard({ title, src, alt, techs }) {
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
        <Button>Go to source</Button>
      </CardFooter>
    </Card>
  );
}

export default Projects;
