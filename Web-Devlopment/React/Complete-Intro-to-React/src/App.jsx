import React from "react";
import { createRoot } from "react-dom/client";
import { Pizza } from "./Pizza";

const App = () => {
    return (
        <div>
            <Pizza heading={"heading 1"} description={"description 1"} />
            <Pizza heading={"heading 2"} description={"description 2"} />
            <Pizza heading={"heading 3"} description={"description 3"} />
            <Pizza heading={"heading 4"} description={"description 4"} />
            <Pizza heading={"heading 5"} description={"description 5"} />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
