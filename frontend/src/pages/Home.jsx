import Hero from "../sections/home/Hero";
import Trust from "../sections/home/Trust";
import Story from "../sections/home/Story";
import Services from "../sections/home/Services";
import Process from "../sections/home/Process";
import Industries from "../sections/home/Industries";
import Proof from "../sections/home/Proof";
import Cases from "../sections/home/Cases";
import Stack from "../sections/home/Stack";
import CTA from "../sections/home/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Story />
      <Services />
      <Process />
      <Industries />
      {/* <Proof /> */}
      <Cases />
      <Stack />
      <CTA />
    </>
  );
}
