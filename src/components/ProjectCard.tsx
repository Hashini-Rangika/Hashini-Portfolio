import type { Project } from "../data/projects";
import GlassCard from "./GlassCard";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <GlassCard>
      <h3 className='text-xl font-semibold text-white mb-2'>{project.title}</h3>
      <p className='text-cyan-400 mb-2'>{project.role}</p>
      <p className='text-gray-300 mb-4'>{project.description}</p>
      <p className='text-sm text-gray-400'>Tools: {project.tools.join(", ")}</p>
    </GlassCard>
  );
};

export default ProjectCard;
