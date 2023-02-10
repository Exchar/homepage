/**
 *@auther Exchar
 *@date -----2021/11/21
 *@projectName ------
 *@file --------MyButton.js
 *@computer ------ttb
 *@createTime -------13:00
 *@描述信息 ---------基于React按钮的自定义按钮，拓展了样式:
 *                           参数：customProps：
 *                                  {
 *                                  className:向按钮新增类
 *                                  type: 预定义好的样式类型
 */
import { Button } from "antd";
import "./myButton.scss";
import React from "react";

function MyButton(props) {
  //基础的类,自定义类传入数组,也可以拓展
  const oldProps = { ...props };
  const newProps = props.customProps ? { ...props.customProps } : {};

  let classes = newProps.className || [];
  switch (newProps.type) {
    case "line-left-to-right":
      classes.push("line-leftToRight");
      break;
    default:
      break;
  }
  //移除传入属性
  delete oldProps.customProps;

  return (
    <Button {...oldProps} className={`myButton ${classes.join(" ")}`}></Button>
  );
}

export default MyButton;
