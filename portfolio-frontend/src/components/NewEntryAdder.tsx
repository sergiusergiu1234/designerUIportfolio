import { useEffect, useState } from "react"
import Button from "./Button";
import { Project } from "./ProjectCard";

export interface NewEntryAdderProps{
  accessToken: string,
  onClose: ()=> void,
  onSave: (project:Project) => void
}

const NewEntryAdder = ({accessToken, onClose, onSave}: NewEntryAdderProps) => {
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>('')
    const [projectLink, setProjectLink] = useState<string>('')
    const [isVisible, setIsVisisble] = useState<boolean>(false)
    const [invalidUrl, setInvalidUrl] = useState<boolean>(false);


    const [image, setImage] = useState<File | null>(null);

    const handleTextSubmit = async (imageUrl: string) => {
        const data = {
            title,
            description,
            projectLink,
            isVisible,
            imageUrl
        }
        console.log("Uploading tesxt", data)
        try{
            const response = await fetch('http://localhost:3001/projects', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify(data)
            })
            if (!response.ok) {
                throw new Error('Error uploading text');
              }
              const project =await response.json()
              setTitle('');
              setDescription('');
              setProjectLink('');
              setIsVisisble(true);
              setImage(null);
              onSave(project)
              onClose()
              alert("Text uploaded with success")
        }catch(err){
            console.log(err)
            alert('Error uploading text')
        }
    }

    const handleImageSubmit = async () => {
        if (!image) {
          alert('Please select an image first.');
          return;
        }
    
        const formData = new FormData();
        formData.append('image', image);
        console.log(accessToken)
        try {
          const response = await fetch('http://localhost:3001/image-upload', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${accessToken}`
            },
            body: formData,
          });
    
          if (!response.ok) {
            throw new Error('Eroare la trimiterea imaginii');
          }
          const data = await response.json()
      
          alert('Imaginea a fost încărcată cu succes!');

          
          await handleTextSubmit(data.image_url)

        } catch (error) {
          console.error(error);
          alert('A apărut o eroare la trimiterea imaginii');
        }
      };


      useEffect(()=>{
        if (!projectLink.startsWith('http://') && !projectLink.startsWith('https://')) {
          setInvalidUrl(true)
        }else{
          setInvalidUrl(false)
        }
      },[projectLink])
  

      return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center z-50">
 <div className="flex flex-col gap-6 p-6 max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800 text-center">Add New Project</h2>
    
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Project Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project title"
            />
          </div>
    
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Project Description</label>
            <input
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter project description"
            />
          </div>
    
          <div className="flex flex-col gap-1">
            <div className="flex flex-row gap-2">
              <label className="text-sm font-medium text-gray-600">Client URL</label>
              {invalidUrl && <label className="text-sm font-medium text-red-600">Url should  start with http:// or https://.</label>}
            </div>

            <input
              value={projectLink}
              onChange={(e) => setProjectLink(e.currentTarget.value)}
              type="text"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter client URL"
            />
          </div>
    
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-gray-600">Image</label>
            <input
              onChange={(e) => setImage(e.currentTarget.files ? e.currentTarget.files[0] : null)}
              type="file"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
    
          <div className="flex flex-row gap-2 items-center">
            <label className="text-sm font-medium text-gray-600">Visible</label>
            <input
              type="checkbox"
              checked={isVisible}
              onChange={(e) => setIsVisisble(e.target.checked)}
              className="w-5 h-5 accent-blue-500 rounded-md "
            />
          </div>
    
          <Button
            disabled={title.length < 1 || description.length < 1 || invalidUrl}
            onClick={handleImageSubmit}
            variant='primary'
            className="mt-4 bg-green-800 text-black font-semibold py-2 px-4 rounded-lg  transition duration-300 ease-in-out"
          >
            Submit
          </Button>
          <Button variant="danger" className="w-fit" onClick={onClose}>X</Button>
        </div>
        </div>
       
      );
    };
    
    export default NewEntryAdder;