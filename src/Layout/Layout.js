import React, {Component} from "react";
import {renderRoutes, routes} from "../router/router";
import {Switch} from "react-router-dom";
// import {Dropdown, Button, Menu} from 'antd';
import './Layout.scss'
import ParticlesBg from 'particles-bg';
import WX from './../assets/img/WX.jpg';
import QQ from './../assets/img/QQ.jpg';
import {BackTop, Button, Image, Popover} from "antd";
import MyIcon from "../components/MyIcon";
// import {Animation} from "../components/Animate";

export default class Layout extends Component {
    constructor(props) {
        super(props);
        this.viewPort=React.createRef();
        this.state = {
            backgrounds: [
                {
                    value: 'cobweb',
                    label: '连接线'
                }, {
                    value: 'lines',
                    label: '线条'
                }, {
                    value: 'circle',
                    label: '圆圈'
                }
            ],
            links: [
                {
                    value: 'backToTop',
                    label: '返回顶部',
                    icon: 'UpCircleTwoTone'
                },
                {
                    label: '微信',
                    value: WX,
                    icon: 'WechatFilled',
                    color: '#25f366'
                }, {
                    label: 'QQ',
                    value: QQ,
                    icon: 'QqCircleFilled',
                    color: '#2a2a2a'
                }
            ],
            menus: [
                {
                    value: 'backToTop',
                    label: '返回顶部',
                    icon: 'UpCircleTwoTone'
                },
                {
                    label: '微信',
                    value: WX,
                    icon: 'WechatFilled',
                    color: '#25f366'
                }, {
                    label: 'QQ',
                    value: QQ,
                    icon: 'QqCircleFilled',
                    color: '#2a2a2a'
                }
            ]
        }
    }

    // getMenu = () => {
    //     return <Menu>
    //         <Menu.Item>
    //             <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
    //                 1st menu item
    //             </a>
    //         </Menu.Item>
    //     </Menu>
    // }
    getPopImg = (value) => {
        return <Image width={200} src={value}/>
    }
    getPopText = () => {
        return <span>返回顶部</span>
    }

    render() {
        return (
            <div style={{height: '100%'}}>
                {/*  悬浮区域*/}
                {/*左下角导航*/}
                <div className="poper-left animate__animated animate__bounceInUp">
                    {/*<Dropdown overlay={this.getMenu()} placement="bottomCenter" arrow>*/}
                    {/*    <Button>bottomCenter</Button>*/}
                    {/*</Dropdown>*/}
                    {/*    竖着的图标菜单*/}

                        {this.state.links.map((item, index) => {
                            if (item.value === 'backToTop') {
                                return <span key={index}>
                                    <BackTop style={{left:'0',bottom:'118px'}} target={()=>this.viewPort.current}>
                                    <Popover placement="right"
                                             content={this.getPopText(item.value)}
                                             trigger="hover"><Button shape="circle" size="large">
                                    <MyIcon icon={item.icon} style={{color: item.color}}/>
                                </Button></Popover>
                                    </BackTop>
                                    </span>
                            } else {
                                return <span key={index}>
                                    <Popover placement="right" content={this.getPopImg(item.value)}
                                             trigger="hover"><Button shape="circle" size="large">
                                    <MyIcon icon={item.icon} style={{color: item.color}}/>
                                </Button></Popover></span>
                            }
                        })}
                </div>
                {/*    顶部头像*/}
                {/* <div className="poper-right">
                    {this.state.menus.map((item, index) => {
                        if (item.value === 'backToTop') {
                            return <span key={index}>
                                <Button shape="circle" size="large">
                                    <MyIcon icon={item.icon} style={{color: item.color}}/>
                                </Button>
                                    </span>
                        } else {
                            return <span key={index}>
                                    <Button shape="circle" size="large">
                                    <MyIcon icon={item.icon} style={{color: item.color}}/>
                                </Button></span>
                        }
                    })}
                </div> */}
                {/*  页面背景区域*/}
                <div className="background">
                    {/*使用Particles插件作为背景*/}
                    <ParticlesBg type="cobweb" bg={true}/>
                </div>
                {/*  页面主要内容区域*/}
                <div className="mainContent">
                    <div className="viewPort" id="viewPort" ref={this.viewPort}>
                        <Switch>{renderRoutes(routes)}</Switch>
                        <div className="bottomBackground">
                            <p className="powerText styleText">powered by Exchar</p>
                            {/*    定义两个大圆*/}
                            <div className="circleContainer">
                                <div className="largeCircle"></div>
                                <div className="largeCircle2"></div>
                                <div className="smallCircle"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
