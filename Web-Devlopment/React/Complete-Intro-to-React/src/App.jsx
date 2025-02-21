import React from "react";
import { createRoot } from "react-dom/client";
import { Pizza } from "./Pizza";

const App = () => {
    return (
        <div>
            <Pizza
                heading={"heading 1"}
                description={"description 1"}
                image={"/public/pizzas/pepperoni.webp"}
            />
            <Pizza
                heading={"heading 2"}
                description={"description 2"}
                image={"/public/pizzas/hawaiian.webp"}
            />
            <Pizza
                heading={"heading 3"}
                description={"description 3"}
                image={"/public/pizzas/big_meat.webp"}
            />
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
