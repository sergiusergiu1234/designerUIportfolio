import { useEffect, useState } from "react"
import Button from "./Button"
import { Project } from "./ProjectCard"


interface ConfirmationWindowProps {
    accessToken: string,
    project: Project,
    onClose: () => void,
    onSave: (deletedProject: Project) => void
}
const ConfirmationWindow = ({ accessToken, project, onClose, onSave }: ConfirmationWindowProps) => {
    const [mayDelete, setMayDelete] = useState<boolean>(false)
    const [deleteCaptcha, setDeleteCaptcha] = useState<string>('')


    useEffect(() => {
        setMayDelete(project.title === deleteCaptcha);
    }, [deleteCaptcha])

    const handleDelete = async () => {
        try {
            const response = await fetch(`http://localhost:3001/projects/${project.id}`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            if (!response.ok) {
                throw new Error('Error deleting the entry.')
            }
            onSave(project);
            onClose();
        } catch (err) {
            console.log(err)
        }
    }

    return <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-16 rounded-2xl shadow-lg flex flex-col">
            <div className="flex flex-row gap-3 content-center">
                <label>Type</label> <label className="font-bold text-red-700">{project.title}</label> <label>to delete it from the portfolio.</label>
            </div>
            <input value={deleteCaptcha} onChange={(e) => setDeleteCaptcha(e.currentTarget.value)} type="text" className=" border  rounded-md p-2 mt-2 mb-2 focus:outline-none focus:ring-4 focus:ring-red-700" placeholder={project.title} />
            <div className="flex flex-row gap-2">
                <Button onClick={handleDelete} disabled={!mayDelete} variant='danger' className="w-fit">Delete</Button>
                <Button onClick={onClose} variant="secondary" className="w-fit bg-green-800">Close</Button>
            </div>

        </div>

    </div>
}

export default ConfirmationWindow