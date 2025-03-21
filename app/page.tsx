import dynamic from "next/dynamic";
import Intro from "@/components/Intro";
import { CustomDock } from "@/components/CustomDock";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import CurrentlyDoing from "@/components/CurrentlyDoing";

const Meteors = dynamic(() => import("@/components/magicui/meteors"), {
  ssr: false,
});

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col md:gap-12 gap-8 md:p-24 p-10 relative overflow-hidden lg:w-7/12 sm:w-full mx-auto">
      <div className="fixed inset-0 pointer-events-none light-mode-fade-bottom dark:fade-bottom z-10 bg-white/10 dark:bg-black/10" />
      <CustomDock />

      <Intro />
      <Skills />
      <Projects />
      <Education />
      <CurrentlyDoing />
      <ContactMe />
      <Meteors number={20} />
    </main>
  );
}
