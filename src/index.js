import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Hot from "./components/Hot";
import NoneExist from "./components/NoneExist";
// import reportWebVitals from "./reportWebVitals";
import { Route, BrowserRouter } from 'react-router-dom';
import { HotProvider } from "./components/AppContext";


function Routing() {


  return (
    <BrowserRouter>
      <HotProvider>
        <div>
          <Route exact path="/" component={App} />
          <Route exact path="/hot" component={Hot} />
          <Route exact path="/noneexist" component={NoneExist} />
        </div>
      </HotProvider>
    </BrowserRouter>
  )
}

ReactDOM.render(<Routing />, document.getElementById("root"));
