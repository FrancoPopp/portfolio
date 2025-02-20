import { Card, CardContent } from "./Card";

function Skills() {
  return (
    <section
      id="skills"
      className="relative flex h-screen w-full flex-col items-center px-8 pt-[64px]"
    >
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold text-[#fff]">Skills</h1>
        <div className="flex w-3/4 flex-wrap items-center justify-center gap-6">
          <SkillCard
            name="Java"
            src="/src/assets/images/javaLogo.webp"
            alt="java logo"
          />
          <SkillCard
            name="Spring boot"
            src="/src/assets/images/springbootLogo.webp"
            alt="springboot logo"
          />
          <SkillCard
            name="JavaScript"
            src="/src/assets/images/jsLogo.webp"
            alt="javascript logo"
          />
          <SkillCard
            name="HTML5"
            src="/src/assets/images/htmlLogo.webp"
            alt="html5 logo"
          />
          <SkillCard
            name="CSS3"
            src="/src/assets/images/css3Logo.webp"
            alt="css3 logo"
          />
          <SkillCard
            name="ReactJS"
            src="/src/assets/images/reactLogo.webp"
            alt="react logo"
          />
          <SkillCard
            name="TailwindCSS"
            src="/src/assets/images/tailwindLogo.webp"
            alt="tailwindcss logo"
          />
          <SkillCard
            name="PostgreSQL"
            src="/src/assets/images/postgresLogo.svg.webp"
            alt="postgreSQL logo"
          />
        </div>
      </div>
    </section>
  );
}

function SkillCard({ name, src, alt }) {
  return (
    <Card className="group w-32 bg-gradient-to-bl hover:from-[#B326DC] hover:to-[#1f1f1f]">
      <CardContent className="h-full">
        <div className="flex h-full flex-col items-center justify-between gap-4">
          <img
            src={src}
            alt={alt}
            className="h-20 grayscale-60 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
          />
          <span className="cursor-default text-sm text-[#fff]">{name}</span>
          <div className="absolute top-0 left-0 -z-1 h-full w-full rounded-2xl bg-[#1f1f1f] transition-all duration-500 group-hover:bg-[#1f1f1f]/0"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Skills;
