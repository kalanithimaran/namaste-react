const heading = React.createElement("h1", { id: "heading" }, "Hello world from React..👋");
//1st is tag, 2nd id atributes, 3rd is childrean.
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(heading);