import React, {Component} from 'react'
import { Link } from 'react-router-dom'


class ProjectsSummary extends Component {

    projects = this.props.projects

    render() {
        return (
            <Link to='/projects'>
                {this.projects.map(project => <div key={project.id}>{project.name}</div>)}
            </Link>
        )
    }
}

export default ProjectsSummary