import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'
import InlineLoader from '../loaders/InlineLoader'



const ProjectList = ({projects}) => {
    return (
        <div className="project-list section">
            {projects !== undefined ? projects.map(project => {
                return (
                    <Link to={'./project/' + project.id} key={project.id}>
                        <ProjectSummary project={project} />
                    </Link>
                );
            }) :
                <InlineLoader />
            }
        </div>
    )
}


export default ProjectList