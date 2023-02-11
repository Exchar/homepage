import React,{Component} from "react";
import {getProjectConfig} from "../../utils";
import './projects.scss'
import {Image} from "antd";
export default class ProjectContent extends Component{
    constructor(props) {
        super(props);

        this.state = {
            projectList:this.getDataList(props.type)
        }
    }
    getDataList(type = 'projects'){
        switch (type) {
            case "projects":
                return getProjectConfig('projectList');
            case "websites":
                return getProjectConfig('websites');
            default:
                return getProjectConfig('projectList')
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
                                <Image src={project.img} fallback="图片找不到了" height="100%" ></Image>
                            </div>
                            <div className="right-desc">
                                <div className="top-desc">
                                    {project.desc}
                                </div>
                                <div className="bottom-src">
                                    <a target='_blank' href={project.url} rel="noreferrer">
                                        {project.url}</a>
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
