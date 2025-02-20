import { Card, CardContent, CardFooter, CardTitle } from "./Card";
import Button from "./Button";
import TechIcon from "./TechIcon";

function Projects() {
  return (
    <section className="relative flex min-h-screen w-full flex-col items-center">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-4xl font-bold text-[#fff]">Projects</h1>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardTitle>Personal Portfolio</CardTitle>
            <CardContent>
              <img
                src="/src/assets/images/portfolioSS.jpeg"
                alt="screenshot of my personal portfolio"
              />
            </CardContent>
            <CardFooter>
              <div className="flex gap-4">
                <TechIcon
                  src="/src/assets/images/reactLogo.webp"
                  alt="react logo"
                />
                <TechIcon
                  src="/src/assets/images/tailwindLogo.webp"
                  alt="tailwind logo"
                />
                <TechIcon
                  src="/src/assets/images/htmlLogo.webp"
                  alt="html5 logo"
                />
                <TechIcon
                  src="/src/assets/images/css3Logo.webp"
                  alt="css3 logo"
                />
              </div>
              <Button>Go to source</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardTitle>Iventory Management</CardTitle>
            <CardContent>
              <img
                src="/src/assets/images/portfolioSS.jpeg"
                alt="screenshot of an inventory management system"
              />
            </CardContent>
            <CardFooter>
              <div className="flex flex-wrap gap-4">
                <TechIcon
                  src="/src/assets/images/reactLogo.webp"
                  alt="react logo"
                />
                <TechIcon
                  src="/src/assets/images/springbootLogo.webp"
                  alt="springboot logo"
                />
                <TechIcon
                  src="/src/assets/images/tailwindLogo.webp"
                  alt="tailwind logo"
                />
                <TechIcon
                  src="/src/assets/images/postgresLogo.svg.webp"
                  alt="postgres logo"
                />
                <TechIcon
                  src="/src/assets/images/htmlLogo.webp"
                  alt="html5 logo"
                />
                <TechIcon
                  src="/src/assets/images/css3Logo.webp"
                  alt="css3 logo"
                />
              </div>
              <Button>Go to source</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Projects;
