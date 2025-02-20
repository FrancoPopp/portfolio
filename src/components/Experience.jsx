import { Card, CardContent } from "./Card";
import Section from "./Section";

function Experience() {
  return (
    <Section id="experience">
      <div className="grid w-full gap-10 md:grid-cols-2">
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-3xl font-bold text-[#fff]">Experience</h2>
          <div className="flex w-3/4 flex-col gap-16">
            <Card>
              <CardContent>
                <ExperienceContent
                  date="Sep 2024 - Dec 2024"
                  title="Teaching Assistant"
                  company="Universidad Nacional del Sur, Bahía Blanca, Argentina"
                />
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="flex flex-col items-center gap-10">
          <h2 className="text-3xl font-bold text-[#fff]">Education</h2>
          <div className="flex w-3/4 flex-col gap-16">
            <Card>
              <CardContent>
                <ExperienceContent
                  date="Expected 2026"
                  title="Software Engineering"
                  company="Universidad Nacional del Sur, Bahía Blanca, Argentina"
                />
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <ExperienceContent
                  date="2015 - 2021"
                  title="Technical High School in Informatics"
                  company={`Technical Institute "La Piedad", Bahía Blanca, Argentina`}
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

function ExperienceContent({ date, title, company }) {
  return (
    <div className="flex w-full flex-col gap-1 text-left">
      <h4 className="text-lg font-semibold text-[#B326DC]">{date}</h4>
      <h3 className="text-3xl font-bold text-[#fff]">{title}</h3>
      <span className="text-md text-[#E9E9E9]">{company}</span>
    </div>
  );
}

export default Experience;
