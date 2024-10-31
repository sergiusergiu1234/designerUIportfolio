import { useEffect, useState } from "react"
import { Project } from "./ProjectCard"
import { fetchProjects } from "../tools"
import Button from "./Button"
import EditProjectForm from "./EditProjectForm"
import { FaEye } from "react-icons/fa";
import { isVisible } from "@testing-library/user-event/dist/utils"
import { FaEyeSlash } from "react-icons/fa";
import ConfirmationWindow from "./ConfirmationWindow"
import NewEntryAdder from "./NewEntryAdder"
import AdminProjectsCard from "./AdminProjectsCard"
interface AdminProjectsListProps {
    accessToken: string,
    projects: Project[],
    handleEditClick: (project: Project) => void,
    handleDeleteClick: (project: Project) => void
}

const AdminProjectsList = ({ accessToken, projects, handleEditClick, handleDeleteClick }: AdminProjectsListProps) => {
    const [viewHidden, setViewHidden] = useState<boolean>(true)

    return <div>


        <label className="text-xl">View hidden entries </label>
        <input checked={viewHidden} onChange={(e) => setViewHidden(e.target.checked)} type="checkbox" />
        {projects && projects.map(p => (p.isVisible || (!p.isVisible && viewHidden)) && (

            <AdminProjectsCard p={p} handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} />

        ))}

    </div>
}

export default AdminProjectsList