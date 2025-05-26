import { BackgroundShapes } from "@/components/shared/background-shapes";
import { ProfileCard } from "@/components/shared/profile-card";
import { AboutSection } from "@/components/shared/sections/about-section";
import { EducationSection } from "@/components/shared/sections/education-section";
import { ExperienceSection } from "@/components/shared/sections/experience-section";
import { ProjectsSection } from "@/components/shared/sections/projects-section";
import { SkillsSection } from "@/components/shared/sections/skills-section";

export default function Home() {
  return (
    <>
      <BackgroundShapes />
      <main className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 dark:from-teal-950 dark:via-gray-900 dark:to-cyan-950 p-4 md:p-8">
        <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-[350px_1fr]">
          <aside className="space-y-6">
            <ProfileCard />
             <AboutSection />
             <EducationSection />
          </aside>
          <div className="space-y-12">
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
          </div>
        </div>
      </main>
    </>
  );
}
