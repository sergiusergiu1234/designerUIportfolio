import { useState } from "react"
import { Project } from "./ProjectCard"
import Button from "./Button"

interface EditProjectFormProps {
    project: Project,
    onCancel: () => void,
    accessToken: string,
    onSave: (updatedEntry: Project) => void
}


const EditProjectForm = ({ project, onCancel, accessToken, onSave }: EditProjectFormProps) => {

    const [title, setTitle] = useState<string>(project.title)
    const [description, setDescription] = useState<string>(project.description)
    const [projectLink, setProjectLink] = useState<string>(project.projectLink)
    const [isVisible, setIsVisisble] = useState<boolean>(project.isVisible)
    const [isSaving, setIsSaving] = useState(false);
    const [image, setImage] = useState<File | null>(null)
    const handleSave = async () => {

        if (
            title === project.title &&
            description === project.description &&
            projectLink === project.projectLink &&
            isVisible === project.isVisible
        ) {
            alert("No changes made to the entry.");
            onCancel();
            return;
        }
        setIsSaving(true)

        try {
            const response = await fetch(`http://localhost:3001/projects/${project.id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': "application/json",
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    title,
                    description,
                    projectLink,
                    isVisible
                })
            })

            if (!response.ok) {
                throw new Error("Error updating project entry")
            }
            const updatedEntry = await response.json()
            onSave(updatedEntry)

            onCancel()
        } catch (error) {
            console.log(error)
        }
    }
    return <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg h-fit">
            <h2 className="text-xl font-bold mb-4">Edit Project</h2>
            <label className="text-sm font-medium text-gray-600">Visible</label>
            <input
                type="checkbox"
                checked={isVisible}
                onChange={(e) => setIsVisisble(e.target.checked)}
                className="w-5 h-5 accent-blue-500 rounded-md "
            />
            <label className="block text-gray-700 mb-2">Title</label>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <label className="block text-gray-700 mb-2">Description</label>
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <label className="block text-gray-700 mb-2">Project link</label>
            <input
                type="text"
                value={projectLink}
                onChange={(e) => setProjectLink(e.target.value)}
                className="w-full p-2 border rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />


            <div className="flex justify-end gap-2">
                <Button variant="danger" onClick={onCancel} className=" text-white px-4 py-2 rounded">
                    Cancel
                </Button>
                <button
                    onClick={handleSave}
                    disabled={isSaving}
                    className={`px-4 py-2 rounded text-white ${isSaving ? "bg-blue-300" : "bg-blue-500"} ${isSaving ? "cursor-not-allowed" : ""}`}
                >
                    {isSaving ? "Saving..." : "Save Changes"}
                </button>
            </div>
        </div>
    </div>

}

export default EditProjectForm
