import React from "react";
import ReactDOM from "react-dom/client";


// const parent = React.createElement("div" , {id: "parent"},
//   React.createElement("div", {id:"child"}, 
//     [React.createElement("h1", {} , "I'm h1 tag"),
//       React.createElement("h1", {} , "I'm h1 tag")]
//   )
// );

//JSX
// const jsxHeading = (
//   <div>
// <h1 className = "heading">This is React</h1>
//   <h2 className = "heading">This is ReactDOM</h2>
//   </div>
// );

const JsxHeading = () => (
  <div>
<h1 className = "heading">This is React</h1>
  <h2 className = "heading">This is ReactDOM</h2>
  </div>
);
const ele = 1000;


//React Functional Component
const HeadingComponent = () => { return (
  <div>
    {ele}
    <JsxHeading />
    <h1>This is a React Component</h1>
</div>)};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);