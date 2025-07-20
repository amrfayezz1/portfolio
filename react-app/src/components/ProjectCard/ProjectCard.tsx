import React from 'react';
import { Card, CardFront, CardBack } from '../Card/Card';
import { Project } from '../../types';
import './ProjectCard.css';

interface ProjectCardProps {
  project: Project;
  onVideoModal?: (videoUrl: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onVideoModal }) => {
  const handleVideoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (project.videoUrl && onVideoModal) {
      onVideoModal(project.videoUrl);
    }
  };

  const renderProjectLinks = () => {
    const links = [];
    
    if (project.liveUrl) {
      links.push(
        <a 
          key="live" 
          href={project.liveUrl} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link"
        >
          Open Project
        </a>
      );
    }
    
    if (project.videoUrl) {
      links.push(
        <button 
          key="video"
          type="button"
          className="project-link" 
          onClick={handleVideoClick}
        >
          View Demo
        </button>
      );
    }
    
    return links;
  };

  return (
    <Card className="project-card">
      <CardFront backgroundImage={project.image}>
        <div className="project-logo">
          <img src={project.image} alt={`${project.title} Logo`} />
        </div>
        <h3 className="project-title">{project.title}</h3>
      </CardFront>
      <CardBack>
        <div className="project-abstract">
          <p>{project.description}</p>
          <div className="project-links">
            {renderProjectLinks()}
          </div>
        </div>
      </CardBack>
    </Card>
  );
};