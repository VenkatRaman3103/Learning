import React from "react";
import { createRoot } from "react-dom/client";

const Banner = (props) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, props.heading),
        React.createElement("p", {}, props.description),
    ]);
};

const App = () => {
    return React.createElement("div", {}, [
        React.createElement(Banner, {
            heading: "heading 1",
            description: "description 1",
        }),
        React.createElement(Banner, {
            heading: "heading 2",
            description: "description 2",
        }),
        React.createElement(Banner, {
            heading: "heading 3",
            description: "description 3",
        }),
    ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
