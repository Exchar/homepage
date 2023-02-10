import React, { Suspense, lazy } from "react";
import { Redirect, Switch } from "react-router-dom";
import { Spin } from "antd";
import Layout from "../Layout/Layout";
import ProgressRoute from "../components/ProgressRoute";
// exact属性为true时路径中的hash值必须和path完全一致才渲染对应的组件，如果为false则'/'也可以匹配'/login';
// （如果strict属性为false，则末尾是否包含反斜杠结尾不影响匹配结果）

// strict属性主要就是匹配反斜杠，规定是否匹配末尾包含反斜杠的路径，如果strict为true，则如果path中不包含反斜杠结尾，
// 则他也不能匹配包含反斜杠结尾的路径，这个需要和exact结合使用

const permissions = "user"; //登录接口获取的当前用户的角色
const requiresAuth = true; //是否已经登录

//所有的路由
export const routes = [
  {
    path: "/",
    exact: true,
    requiresAuth: false,
    permissions: ["user", "admin"],
    showInMenu: false,
    render: () => <Redirect to="/home" />,
  },
  {
    path: "/home",
    name: "Home",
    exact: true,
    strict: true,
    showInMenu: true,
    requiresAuth: false, //是否需要登录
    permissions: ["user", "admin"], // 当前登录权限必须 user或admin 才可以访问
    component: lazy(() => import("../pages/Home.js")), //路由懒加载
    meta: { title: "我的主页", icon: "DatabaseTwoTone" },
  },
  {
    path: "/login",
    name: "Login",
    exact: true,
    strict: true,
    requiresAuth: false, //是否需要登录
    permissions: ["user", "admin"], // 当前登录权限必须 user或admin 才可以访问
    component: lazy(() => import("../pages/Login.js")), //路由懒加载
    meta: { title: "登录呢", icon: "login" },
  },
];
export const renderRoutes = (routes, extraProps = {}, switchProps = {}) => {
  return routes ? (
    <Suspense
      fallback={
        <div
          style={{
            width: "100vw",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Spin tip="🐟游啊游，游啊游"></Spin>
        </div>
      }
    >
      <Switch {...switchProps}>
        {routes.map((item, i) => (
          <ProgressRoute
            key={item.name || i}
            path={item.path}
            exact={item.exact}
            strict={item.strict}
            render={(props) => routeRender(item, props, extraProps)}
          />
        ))}
      </Switch>
    </Suspense>
  ) : null;
};

const routeRender = (route, props, extraProps) => {
  // 登录判断(需要登录 && 未登录-->跳登录页面,,,,,,,不需要登录 || 已经登录-->正常跳转)
  const login = route.requiresAuth && !requiresAuth; //跳登录
  // 该角色是否有权限访问该页面(当前角色是否在 路由要求角色数组中)
  const auth = route.permissions.includes(permissions); //有权限
  if (login) {
    return <Redirect to={{ path: "/login", message: "请登录后再操作！" }} />;
  } else {
    if (auth) {
      return route.render ? (
        route.render({ ...props, ...extraProps, route: route.routes })
      ) : (
        <route.component {...props} {...extraProps} route={route} />
      );
    } else {
      alert("您暂无权限");
      return <Redirect to={{ path: "/login", message: "请登录后再操作！" }} />;
    }
  }
};
export const basicRoutes = [
  {
    path: "/index",
    name: "Index",
    exact: true,
    strict: true,
    requiresAuth: false, //是否需要登录
    permissions: ["user", "admin"], // 当前登录权限必须 user或admin 才可以访问
    component: () => Layout,
    meta: { title: "登录呢", icon: "login" },
  },
  {
    path: "/",
    exact: true,
    requiresAuth: false,
    permissions: ["user", "admin"],
    render: () => <Redirect to="/index" />,
  },
];
