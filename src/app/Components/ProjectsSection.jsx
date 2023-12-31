"use client"
import Reac, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from "framer-motion"

const ProjectsData = [
  {
    id: 1,
    title: "JavaScript Portfolio Website",
    description: 'Build a standard portfolio website and deploy on GitHub.',
    image: "/images/projects/portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javad-EB/Portfolio-Page",
    previewUrl: "https://javad-eb.github.io/Portfolio-Page/#",
  },
    {
    id: 2,
    title: "Yar Movie Site",
    description: 'This site Create by Reactjs. (Typescript and SCSS with imdb API)',
    image: "/images/projects/YarMovie.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javad-EB/YarMovie",
    previewUrl: "https://github.com/Javad-EB/YarMovie",
  },
  {
    id: 3,
    title: "JavaScript Book Library",
    description: 'Build a Book Library Page to Add, Delete, Update and Edit books.',
    image: "/images/projects/booklibrary.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javad-EB/Book-Library",
    previewUrl: "https://javad-eb.github.io/Book-Library/",
  },
  {
    id: 4,
    title: "Full Stack Todo-List",
    description: 'Build a ToDo List application and deploy it to Heroku! (Install express.js, nodemon, mangoose, bcrypt bcryptjs, validator, cookie-parser jsonwebtoken Packages)',
    image: "/images/projects/todolist.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javad-EB/react-fullstack",
    previewUrl: "https://todo-list-react.herokuapp.com/",
  },
  {
    id: 5,
    title: "JavaScript Game",
    description: 'Rock paper scissors is a hand game, play between you and computer.',
    image: "/images/projects/Game.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javad-EB/JavaScript-Main-Project",
    previewUrl: "https://javad-eb.github.io/JavaScript-Main-Project/",
  },
  {
    id: 6,
    title: "JavaScript Calculator",
    description: 'This calculator is written in JavaScript,CSS and HTML. This program can calculate simple math operations.',
    image: "/images/projects/Calculator.png",
    tag: ["All", "Web", "Mobile"],
    gitUrl: "https://github.com/Javad-EB/JavadScript-Calculator",
    previewUrl: "https://javad-eb.github.io/JavadScript-Calculator/",
  },
  {
    id: 7,
    title: "Travel website",
    description: 'This site created by Reactjs.',
    image: "/images/projects/Travelwensite.png",
    tag: ["All", "Web" , "Mobile"],
    gitUrl: "https://github.com/Javad-EB/TravelWebsite",
    previewUrl: "https://delicate-haupia-d07800.netlify.app/",
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")
  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = ProjectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0, scale: 0.5 },
    animate: { y: 0, opacity: 1, scale: 1 },
  }

  return (
    <section id="projects" className='scroll-snap-x-center scroll-snap-y-center'>
      <h2 className='text-center text-4xl font-bold text-white mt-5 mb-4 '>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6 '>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />

      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.8, delay: index * 0.8 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection