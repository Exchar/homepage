/**
 *@auther Exchar
 *@date -----2021/11/19
 *@projectName ------
 *@file --------Animate.js
 *@computer ------ttb
 *@updateTime -------22:41
 */

import React from "react";
import "animate.css";

function Animation(props) {
  const { animation } = props;
  return (
    <div className={`animate__animated animate__${animation}`}>
      {props.children}
    </div>
  );
}

function WithAnimation(WrappedComponent, animation, ref) {
  return class extends React.Component {
    render() {
      // 将 input 组件包装在容器中，而不对其进行修改。Good!
      return (
        <WrappedComponent
          {...this.props}
          className={`animate__animated animate__${
            animation ? animation : "fadeIn"
          }`}
          ref={ref ? ref : ""}
        />
      );
    }
  };
}
export { Animation, WithAnimation };
