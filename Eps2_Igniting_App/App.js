import React from "react"
import ReactDOM from "react-dom/client"
/*

<div id = "parent">
    <div id = "child">
        <h1></h1>
    </div>
</div>

Lets create this nested structure!

ReactElement(object) => render => HTML (Browser Understands)
*/
const parent = React.createElement (
    "div",
     {id: "parent"},
     React.createElement (
        "div", 
        {id: "child"}, 
        React.createElement(
            "h1", 
            {}, 
            "I am h1 tag"))
)


/*

<div id = "parent">
    <div id = "child">
        <h1></h1>
        <h2></h2>
    </div>
</div>

Lets create this nested-sibling structure!

*/

const parent2 = React.createElement ("div",{id: "parent"},
    React.createElement ("div",{id: "child"},[
        React.createElement("h1",{},"I am h1 tag"), 
        React.createElement("h2",{}, "I am h2 tag")])
)


/*

<div id = "parent">
    <div id = "child">
        <h1></h1>
        <h2></h2>
    </div>
    <div id = "child2">
        <h1></h1>
        <h2></h2>
    </div>
</div>

Lets create this nested-sibling structure!

*/
const parent3 = React.createElement ("div",{id: "parent"},[
    React.createElement ("div",{id: "child"},[
        React.createElement("h1",{},"I am h1 tag"), 
        React.createElement("h2",{}, "I am h2 tag")]),

    React.createElement ("div",{id: "child2"},[
        React.createElement("h1",{},"I am h1 tag"), 
        React.createElement("h2",{}, "I am h2 tag")])
    ]
)



const heading = React.createElement 
("h1", {id: "heading", xyz: "abc"}, "Hello World From React");

console.log (heading) // object

const root = ReactDOM.createRoot (document.getElementById("root"));

console.log (root);

root.render (parent3);