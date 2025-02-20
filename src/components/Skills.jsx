import { Card, CardContent } from "./Card";
import { techs } from "../resources/techs";
import Section from "./Section";

function Skills() {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center gap-10">
        <h1 className="text-3xl font-bold text-[#fff]">Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-6 lg:w-3/4">
          <SkillCard tech={techs.java} />
          <SkillCard tech={techs.springboot} />
          <SkillCard tech={techs.javascript} />
          <SkillCard tech={techs.html} />
          <SkillCard tech={techs.css} />
          <SkillCard tech={techs.react} />
          <SkillCard tech={techs.tailwind} />
          <SkillCard tech={techs.postgres} />
        </div>
      </div>
    </Section>
  );
}

function SkillCard({ tech }) {
  return (
    <Card className="group w-32 cursor-pointer bg-gradient-to-bl hover:from-[#B326DC] hover:to-[#1f1f1f]">
      <CardContent className="h-full">
        <div className="flex h-full flex-col items-center justify-between gap-4">
          <img
            src={tech.icon}
            alt={tech.alt}
            className="h-20 transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0 md:grayscale-60"
          />
          <span className="cursor-default text-sm text-[#fff]">
            {tech.name}
          </span>
          <div className="absolute top-0 left-0 -z-1 h-full w-full rounded-2xl bg-[#1f1f1f] transition-all duration-500 group-hover:bg-[#1f1f1f]/0"></div>
        </div>
      </CardContent>
    </Card>
  );
}

export default Skills;
