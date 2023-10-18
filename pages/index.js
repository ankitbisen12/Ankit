import { Fragment} from "react";
import Intro from "@/components/Intro";
import TechnicalSkill from "@/components/TechnicalSkill";
import ContactForm from "@/components/ContactForm";
import MyEducation from "@/components/MyEducation";
import Skill from "@/models/Skills";
import Education from "@/models/Education";
import Tools from "@/components/Tools";
import Tool from "@/models/Tool";
import Projects from "@/components/Projects";
import Project from "@/models/Project";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import Service from "@/components/Service";
import About from "@/components/About";
import Abbout from "@/models/About";

const mongoose = require("mongoose");

export async function generateMetaData() {
  const data = await fetch("/api/getAbout");
  const info = await data.json();

  return {
    title: info.title,
    description: info.intro,
  };
}

export default function Home(props) {
  // console.log(props.skill);
  // console.log(props.education);
  // console.log(props.tools);

  return (
    <Fragment>
      <Intro />
      <About about={props.about}/>
      <TechnicalSkill skills={props.skill} />
      <MyEducation education={props.education} />
      <Projects projects={props.projects} />
      <Tools tools={props.tools} />
      <Service />
      <ContactForm />
      <ScrollToTopButton />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }

  let skills = await Skill.find({});
  let education = await Education.find({});
  let tools = await Tool.find({});
  let projects = await Project.find({});
  let about = await Abbout.find({});

  return {
    props: {
      skill: JSON.parse(JSON.stringify(skills)),
      education: JSON.parse(JSON.stringify(education)),
      tools: JSON.parse(JSON.stringify(tools)),
      projects: JSON.parse(JSON.stringify(projects)),
      about:JSON.parse(JSON.stringify(about))
    },
  };
}
