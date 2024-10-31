export const fetchProjects = async () =>{
    try{
      const response = await fetch(`http://localhost:3001/projects`)
      if (!response.ok){
        throw new Error("Failed to fetch projects");
      }
      const data = await response.json()
      return data
   
    }catch(error){
      console.log("Error while fetching projects", error)
    }
  
  }