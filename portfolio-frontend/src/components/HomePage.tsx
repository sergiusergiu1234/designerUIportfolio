import { useEffect, useState } from "react"
import Footer from "./Footer"
import LandingComponent from "./LandingComponent"
import ProjectsList from "./ProjectsList"
import { Project } from "./ProjectCard"
import { fetchProjects } from "../tools"

const HomePage = () => {

  const [projects, setProjects] = useState<Project[]>([])



  useEffect(() => {
    const fetchAndSetProjects = async () => {
      const data = await fetchProjects()
      if (data) {
        setProjects(data)
      }
    }
    fetchAndSetProjects()

  }, [])
  return <div className="flex justify-center items-center min-h-screen bg-gray-950">
    <div className="flex flex-col w-[90vw]  max-w-3xl gap-6">
      <LandingComponent />
      <ProjectsList projects={projects} />
      <Footer />
    </div>
  </div>
}

export default HomePage

