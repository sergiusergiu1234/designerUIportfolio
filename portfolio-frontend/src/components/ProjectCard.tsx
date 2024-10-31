import Button from "./Button"



export type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectLink: string;
  isVisible: boolean;
};

interface ProjectCardProps {
  project: Project
}


const ProjectCard = ({ project }: ProjectCardProps) => {
  return <div className="flex flex-col p-4 border-[2px] rounded-xl border-gray-600  bg-dark-pattern">
    <div className="flex justify-center items-center h-[40vh] overflow-hidden rounded-lg border-[2px] border-gray-600">
      <img src={project.imageUrl} alt={project.title} className="object-cover h-full w-full hover:scale-110 duration-700" />
    </div>
    <div className="mt-4 flex flex-col gap-2 flex-1">
      <label className="text-white text-lg font-semibold">{project.title}</label>
      <p className="text-gray-400 text-[0.9rem] overflow-hidden text-ellipsis ">
        {project.description}
      </p>
    </div>
    <div className="mt-auto flex justify-center">
      <a className="w-full rounded-xl " href={project.projectLink}>
        <Button variant="secondary" className="w-full rounded-xl mt-4 hover:bg-gray-600 duration-700">
          Creator link
        </Button>
      </a>
    </div>
  </div>
}

export default ProjectCard