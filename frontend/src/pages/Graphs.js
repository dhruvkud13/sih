import React from "react";
import Stats from "../components/TypeStats";
import DocStats from "../components/DocStats";
import Fade from "react-reveal/Fade";

const Graphs = () => {
  return (
    <Fade right>
      <div className="flex">
        <div
          style={{
            width: "50%",
            height: "50%",
          }}
        >
          <Stats />
        </div>
        <div
          style={{
            width: "50%",
            height: "50%",
          }}
        >
          <DocStats />
        </div>
      </div>
    </Fade>
  );
};

export default Graphs;
