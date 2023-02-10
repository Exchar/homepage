import React, { Component } from "react";
import { Menu, Dropdown, Anchor } from "antd";
import "./Home.scss";
import wallPaper1 from "./../assets/img/wallpaper1.jpg";
import wallPaper2 from "./../assets/img/wallpaper1.png";
import wallPaper3 from "./../assets/img/wallpaper2.jpg";
import wallPaper4 from "./../assets/img/wallpaper3.jpg";
import wallPaper5 from "./../assets/img/wallpaper4.jpg";
import wallPaper6 from "./../assets/img/wallpaper5.jpg";
import wallPaper7 from "./../assets/img/wallpaper6.jpg";
import MyIcon from "../components/MyIcon";
import { getProjectConfig } from "../utils";
import ProjectContent from "./Home/projects";
// import {Animation} from "../components/Animate";
const { Link } = Anchor;
const linksList = getProjectConfig("contentLinks").filter(
  (item) => !!item.show || item.show === undefined
);
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeImg: {
        name: "画师作品1",
        url: wallPaper1,
        key: 1,
      },
      typingText: getProjectConfig("typingText"),
      nowStr: getProjectConfig("typingText")[0],
      nowPoint: 0,
      imgList: [
        {
          name: "画师作品1",
          url: wallPaper1,
          key: 1,
        },
        {
          name: "星空1",
          url: wallPaper2,
          key: 2,
        },
        {
          name: "画师作品2",
          url: wallPaper3,
          key: 3,
        },
        {
          name: "风景1",
          url: wallPaper4,
          key: 4,
        },
        {
          name: "星空2",
          url: wallPaper5,
          key: 5,
        },
        {
          name: "画师作品3",
          url: wallPaper6,
          key: 6,
        },
        {
          name: "风景2",
          url: wallPaper7,
          key: 7,
        },
      ],
    };
    this.topTextRef = React.createRef();
  }
  componentDidMount() {
    this.setNowStr();
  }
  setActiveImg(item) {
    this.setState({
      activeImg: item,
    });
  }
  getMenu = () => (
    <Menu className="glass light">
      {this.state.imgList.map((item, index) => (
        <Menu.Item key={index} icon={<MyIcon icon="LikeTwoTone"></MyIcon>}>
          <span onClick={this.setActiveImg.bind(this, item)}>{item.name}</span>
        </Menu.Item>
      ))}
    </Menu>
  );
  setNowStr = () => {
    const strList = this.state.typingText;
    let str = strList[this.state.nowPoint];
    console.log(Math.ceil(0.3 * str.length * 1000));
    this.setTimer(() => {
      this.setPoint();
      this.setNowStr();
    }, 0.3 * str.length * 1000);
  };
  setPoint() {
    let nextPoint = this.state.nowPoint;
    const strList = this.state.typingText;
    if (nextPoint < strList.length - 1) {
      nextPoint += 1;
    } else {
      nextPoint = 0;
    }
    console.log(strList[nextPoint]);
    this.setState({
      nowStr: "",
      nowPoint: nextPoint,
    });
    const el = this.topTextRef.current;
    el && el.classList.remove("my-typing");
    setTimeout(() => {
      el && el.classList.add("my-typing");

      this.setState({
        nowStr: strList[nextPoint],
      });
    }, 50);
  }
  setTimer = (func, wait) => {
    const timer = setTimeout(() => {
      func();
      clearTimeout(timer);
    }, Math.ceil(wait));
  };
  handlePreventDefault = (e, link) => {
    console.log(e, link);
    e.preventDefault();
    if (link.href) {
      // 找到锚点对应得的节点
      let element = document.getElementById(link.href.split("#")[1]);
      // 如果对应id的锚点存在，就跳滚动到锚点顶部
      element && element.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  };
  render() {
    return (
      <div style={{ width: "100%", position: "relative" }}>
        {/*切换首页显示大图*/}
        <div className="imgSwitch animate__animated animate__bounce">
          <Dropdown
            trigger={["click"]}
            overlay={this.getMenu()}
            placement="bottomRight"
            arrow
          >
            <MyIcon
              twoToneColor="rgba(241, 86, 86, 0.81)"
              icon="RocketTwoTone"
            ></MyIcon>
          </Dropdown>
        </div>
        <div className="anchor">
          <Anchor
            showInkInFixed
            targetOffset={300}
            bounds={10}
            getContainer={() => document.getElementById("viewPort")}
            onClick={this.handlePreventDefault}
          >
            {linksList.map((item, index) => (
              <Link key={index} href={`#${item.anchor}`} title={item.title}>
                {(item.children || []).map((item2, index2) => (
                  <Link
                    className="innerLink"
                    key={index2}
                    href={`#${item2.anchor}`}
                    title={item2.title}
                  ></Link>
                ))}
              </Link>
            ))}
          </Anchor>
        </div>
        <div
          className="topImg"
          style={{
            backgroundImage: `url(${this.state.activeImg.url})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          {/*<Image*/}
          {/*    width="100%"*/}
          {/*    src={this.state.activeImg.url}*/}
          {/*    preview={false}*/}
          {/*/>*/}

          <div className="topText">
            <div
              ref={this.topTextRef}
              className="my-typing top-text"
              style={{ "--width": this.state.nowStr.length }}
            >
              {this.state.nowStr}
            </div>
          </div>
        </div>
        <div className="mainContent">
          <div className="mainArea glass">
            {
              linksList.map(i=>i.anchor).includes('articles') ?(
                  <div id="articles" className="main-title">
                    <span
                        className=" title-decoration"
                        onClick={(e) =>
                            this.handlePreventDefault(e, { href: "#articles" })
                        }
                    >
                      文章
                    </span>
                  </div>
              ):null
            }
            {
              linksList.map(i=>i.anchor).includes('projects') ?(
                  <div id="articles" className="main-title">
                    <span
                        className=" title-decoration"
                        onClick={(e) =>
                            this.handlePreventDefault(e, { href: "#projects" })
                        }
                    >
                      项目
                    </span>
                    <div className="content-item">
                      <ProjectContent></ProjectContent>
                    </div>
                  </div>
              ):null
            }
            {
              linksList.map(i=>i.anchor).includes('websites') ?(
                  <div id="articles" className="main-title">
                    <span
                        className=" title-decoration"
                        onClick={(e) =>
                            this.handlePreventDefault(e, { href: "#websites" })
                        }
                    >
                      网址分享
                    </span>
                    <div className="content-item">
                      <ProjectContent type="websites"></ProjectContent>
                    </div>
                  </div>
              ):null
            }

          </div>
        </div>
      </div>
    );
  }
}
