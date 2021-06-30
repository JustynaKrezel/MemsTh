import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./App.css";
import Mem from "./components/Mem";
import Nav from "./components/Nav";
import dataApp from "./dataApp.json";

function App() {

  let [showmem, setShowmem] = useState([]);

  useEffect(() => {
    setShowmem(dataApp);
  }, []);

  function incrementVoteCount(memElementId) {
    showmem = showmem.map((memElement) => {
      if (memElement._id === memElementId) {
        memElement.upvote = memElement.upvote + 1;
      }
      return memElement;
    });
    setShowmem(showmem);
  }

  function decrementVoteCount(memElementId) {
    showmem = showmem.map((memElement) => {
      if (memElement._id === memElementId) {
        memElement.downvote = memElement.downvote - 1;
      }
      return memElement;
    });
    setShowmem(showmem);
  }

  return (
    <div>
        <div className="App">
          <header className="App-header">
            <Nav />
          </header>
          {showmem.map((memElement) => {
            return (
              <div className="content">
                <Mem
                  memElement={memElement}
                  incrementVoteCount={(memElementId) => incrementVoteCount(memElementId)}
                  decrementVoteCount={(memElementId) => decrementVoteCount(memElementId)}
                />
              </div>
            );
          })}
        </div>
    </div>


  );
}

export default withRouter(App);
