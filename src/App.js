import "./App.scss";
import React from "react";
import Layout from "./Layout/Layout";
import { basicRoutes, renderRoutes } from "./router/router";
import { HashRouter, Switch } from "react-router-dom";
// import ProgressRoute from "./utils/ProgressRoute";
function App() {
    setTimeout(()=> {
        document.title = '鱼儿游啊游'
    })
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Layout>{renderRoutes(basicRoutes)}</Layout>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
