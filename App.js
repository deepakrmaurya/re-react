// **This is comment
// *! This is also a comment
// *? This is also a comment in blue
// *TODO this is also a comment in orange

import React from "react";
import ReactDOM from "react-dom/client";

const Title = () => {
  return <h1>This is the title component inside Header Component</h1>;
};

const Header = () => {
  return (
    <div>
      <Title />
      <h1 className="divTag">This is Functional Component</h1>
    </div>
  );
};

const jsxHeading = <h1 id="divTag">Hello, this is jsx</h1>;
console.log(jsxHeading);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Header />);

// const heading = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "h2",
//     { id: "child" },
//     React.createElement(
//       "div",
//       { id: "divTag" },
//       "This is heading coming from nested React Element",
//     ),
//   ),
// );
// console.log(heading);
