import { FaEye, FaEyeSlash } from "react-icons/fa"
import Button from "./Button"
import { Project } from "./ProjectCard"

interface AdminProjectsCardProps {
    p: Project,
    handleEditClick: (project: Project) => void,
    handleDeleteClick: (project: Project) => void
}

const AdminProjectsCard = ({ p, handleEditClick, handleDeleteClick }: AdminProjectsCardProps) => {
    return <div key={p.id} className=" flex flex-col lg:flex-row border p-4 mb-4 rounded-lg shadow-sm">
        <div className="flex flex-col gap-5">
            <label className="text-3xl">{p.isVisible ? <FaEye /> : <FaEyeSlash />} </label>
            <h3 className="text-lg font-semibold">{p.title}</h3>
            <p className="text-gray-700">{p.description}</p>
            <p className="text-gray-700">Client url: {p.projectLink}</p>
            <Button
                onClick={() => handleEditClick(p)}
                className="text-blue-200 hover:underline mt-2 bg-slate-600 w-fit"
            >
                Edit
            </Button>
            <Button variant="danger" className="w-fit" onClick={() => handleDeleteClick(p)}>Delete</Button>

        </div>
        <div className="flex justify-center items-center h-fit overflow-hidden rounded-lg border-[2px] border-gray-600">
            <img src={p.imageUrl} alt={p.title} className="object-cover " />
        </div>


    </div>
}

export default AdminProjectsCard