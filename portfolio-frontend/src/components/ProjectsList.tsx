import React from 'react';
import ProjectCard, { Project } from './ProjectCard';



const ProjectsList: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {projects.map(p => (
        p.isVisible && <ProjectCard key={p.id} project={p} />
      ))}
    </div>
  );
};

export default ProjectsList;
