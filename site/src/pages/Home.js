import React, {Component} from 'react'
import ProjectSummary from '../components/ProjectsSummary'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Danny Warren</h1>
                <div>Image and Bio</div>
                <div>
                    <ProjectSummary />
                </div>
                <div>Links Here</div>
            </div>
        )
    }
}

export default Home