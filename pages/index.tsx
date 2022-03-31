import type { NextPage } from "next";

import Bio from "../components/Bio";

import Section from "../components/section";
import Self from "../components/self";
import config from "../config";
import { useRouter } from "next/router";
const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div>
      <Section delay={0.5} className="flex flex-col">
        <Self />
      </Section>

      <Section delay={1} className="flex flex-col justify-between">
        <Bio content={config.bio} className="p-5 pt-0" />
      </Section>

      <Section delay={1.5} className="flex justify-center  items-center">
        <div
          className="card select-none cursor-pointer p-8"
          onClick={() => router.push("/cv.pdf")}
        >
          View CV
        </div>
        <div
          className="card select-none cursor-pointer px-4"
          onClick={() => router.push("/projects")}
        >
          Projects
        </div>
      </Section>
    </div>
  );
};

export default Home;
