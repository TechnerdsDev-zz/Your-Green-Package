import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Frame from "react-frame-component";

export default function Accordian(props) {
  return (
    <Frame
      style={{ width: "100%", height: "100vh", border: "0", marginTop: "2%" }}
      initialContent='<div><script id="jane-frame-script" src="https://api.iheartjane.com/v1/stores/3697/embed.js"></script></div>'
      mountTarget="#jane-frame-script"
    ></Frame>
  );
}
