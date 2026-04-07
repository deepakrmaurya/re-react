const heading = React.createElement("h1", {
    id: "parent"
}, React.createElement("h2", {
    id: "child"
}, React.createElement("h3", {}, "This is heading coming from nested React Element")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

//# sourceMappingURL=re-react.6bd02f5a.js.map
