
const element = React.createElement("div",{id:"parent"},
[React.createElement("div",{id:"child1"},
[React.createElement("h1",{},
"child of h1 al"),
React.createElement("h2",{},
"child of h2")]),
React.createElement("div",{id:"child2"},
[React.createElement("h1",{},
"child of h1"),
React.createElement("h2",{},
"child of h2")],)])



const root = ReactDOM.createRoot(document.getElementById("demo"))
root.render(element)