import React, {Component} from 'react'
import Project from '../components/Project'

class Projects extends Component {

    projects = this.props.projects

    render() {
        return (
            <div>
                {this.projects.map(project => <Project key={project.id} data={project}/>)}
            </div>
        )
    }
}

export default Projects