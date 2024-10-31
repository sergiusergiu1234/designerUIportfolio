import { useAuth0 } from "@auth0/auth0-react";
import NewEntryAdder from "./NewEntryAdder";
import { useEffect, useState } from "react";
import AdminProjectsList from "./AdminProjectsList";
import Button from "./Button";
import { Project } from "./ProjectCard";
import { fetchProjects } from "../tools";
import ConfirmationWindow from "./ConfirmationWindow";
import EditProjectForm from "./EditProjectForm";

const AdminPage = () => {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState<string>('')

  const [projects, setProjects] = useState<Project[]>([])

  const [editedProject, setEditedProject] = useState<Project | null>(null)
  const [deletedProject, setDeletedProject] = useState<Project | null>(null)
  const [addingNew, setAddingNew] = useState<boolean>(false)


  useEffect(() => {
    const fetchToken = async () => {
      try {
        const accessToken = await getAccessTokenSilently();
        setToken(accessToken);
      } catch (error) {
        console.error("Error fetching access token:", error);
      }
    };
    if (isAuthenticated) {
      fetchToken();
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  useEffect(() => {
    const fetchAndSetProjects = async () => {
      const data = await fetchProjects()
      if (data) {
        setProjects(data)
      }
    }
    fetchAndSetProjects()
  }, [])



  const handleEditClick = (project: Project) => {
    setEditedProject(project)
  }

  const onEntrySave = (project: Project) => {
    setProjects((prevP) =>
      prevP.map((p) => (p.id === project.id ? project : p))
    )
    setEditedProject(null)
  }

  const handleDeleteClick = (project: Project) => {
    setDeletedProject(project)
  }
  const onEntryDelete = (project: Project) => {
    setProjects((prev) => {
      const filteredProjects = prev.filter(p => p.id !== project.id)
      return filteredProjects
    })
  }

  const onEntryAdd = (project: Project) => {
    setProjects(prev => ([...prev, project]))
  }




  if (isLoading) {
    return <div>Loading ...</div>;
  }
  return (isAuthenticated ? <div className=" md:m-[5rem]">
    <Button variant="danger" className="text-red-500 font-extrabold" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </Button>
    <h1>Admin Dashboard</h1>
    <p>Panou de administrare site.</p>
    <Button onClick={() => setAddingNew(true)} variant="primary" className="bg-green-500">New</Button>
    <AdminProjectsList handleDeleteClick={handleDeleteClick} handleEditClick={handleEditClick} projects={projects} accessToken={token} />
    {editedProject && (
      <EditProjectForm
        accessToken={token}
        project={editedProject}
        onSave={onEntrySave}
        onCancel={() => setEditedProject(null)}
      />
    )}
    {deletedProject && (
      <ConfirmationWindow
        onClose={() => setDeletedProject(null)}
        onSave={onEntryDelete}
        accessToken={token}
        project={deletedProject} />
    )}
    {addingNew && <NewEntryAdder onSave={onEntryAdd} onClose={() => setAddingNew(false)} accessToken={token} />}
  </div> :
    <div>
      <Button variant="secondary" onClick={() => loginWithRedirect()}>Log In</Button>

    </div>)
}


export default AdminPage