/**
 * <div id="parent">
 *      <div id="child">
 *          <h1></h1>
 *          <h1></h1>
 *      </div>
 * </div>
 */

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "First H1 tag"),
    React.createElement("h1", {}, "Second H1 Tag"),
  ])
);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
