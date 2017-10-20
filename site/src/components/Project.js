import React, {Component} from 'react'

class Project extends Component {

    project = this.props.data

    render() {
        return (
            <div>
                <h4>{this.project.name}</h4>
                <p>{this.project.date}</p>
                <p>{this.project.description}</p>
            </div>
        )
    }
}

export default Project