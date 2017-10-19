import React, {Component} from 'react'
import ProjectSummary from '../components/ProjectsSummary'

class Home extends Component {

    bio = () => (
        <div>
            <img src='https://avatars1.githubusercontent.com/u/1190767?v=4&s=460' style={{width: '200px'}}/>
            <p>Danny is a Software Craftsman at Pluralsight in Lehi, UT. Danny began acquiring his expertise in software engineering at Neumont University in Salt Lake City, UT where he graduated with a BSCS. Danny’s passion for technology has led him throughout the Microsoft Stack including .NET, C#, XAML, and F#. Danny has an expertise in NUI (The Natural User Interface) having built numerous multi-touch and gesture based interfaces for software applications across a broad spectrum of devices. Currently his passion includes building Windows Universal Apps and learning React using TypeScript. Danny is an Alumnus Microsoft MVP for Windows Platform Development and speaks all over the country including VSLive, That Conference, Spark Conference, and SoCal Code Camp. When not building beautiful software, Danny is an outdoors man and devoted husband and father. He loves to camp, hike and mountain bike.</p>
        </div>        
    )

    links = () => (
        <div>
            <ul>
                <li><a target="_blank" href='https://twitter.com/dannydwarren'>Twitter</a></li>
                <li><a target="_blank" href='https://www.linkedin.com/in/dannydwarren'>LinkedIn</a></li>
                <li><a target="_blank" href='https://github.com/dannydwarren'>GitHub</a></li>
                <li><a target="_blank" href='https://dannydwarren.github.io/'>Blog</a></li>
            </ul>
        </div>
    )

    render() {
        return (
            <div>
                <h1>Danny Warren</h1>
                {this.bio()}
                <div>
                    <ProjectSummary />
                </div>
                {this.links()}
            </div>
        )
    }
}

export default Home