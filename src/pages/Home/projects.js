import React,{Component} from "react";
import {getProjectConfig} from "../../utils";
import './projects.scss'
import {Image} from "antd";
export default class ProjectContent extends Component{
    constructor(props) {
        super(props);
        this.state = {
            projectList:getProjectConfig('projectList')
        }
    }

    render() {
        return (
            <div className="project-container">
                {this.state.projectList.map(project=>
                    (<div className="project-item-container" key={project.name}>
                        <span className='my-content-title'>{project.name}</span>
                            <div className="project-item">
                                <div className="left-img">
                                    <Image src={project.img}></Image>
                                </div>
                                <div className="right-desc">
                                    <div className="top-desc">
                                        {project.desc}
                                    </div>
                                    <div className="bottom-src">
                                        <a href={project.url}>部署地址：{project.url}</a>
                                    </div>
                                </div>
                            </div>
                    </div>
                    ))
                }
            </div>
        );
    }
}
