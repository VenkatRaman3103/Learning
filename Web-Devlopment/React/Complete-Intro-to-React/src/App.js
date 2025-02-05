const App = () => {
	return React.createElement("h1", {}, "Hello Big Bird");
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
