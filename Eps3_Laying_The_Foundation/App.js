import React from "react"
import ReactDOM from "react-dom/client"

//React.createElement Heading => object => when we render on DOm => becomes HTMLElement

const heading = React.createElement ("h1", {id: "heading"}, "Namste React🚀");

//JSX => Javascript Extension
// JSX is a syntax, react element is a object
// jsxheading === heading
// JSX (transpiled before it reaches the JS engine) - PARCEL - Babel.
// JSX => transpilied into React element=> rendered into HTMLElement.

const jsxHeading = <h1 className="head">Namaste React using JSX🚀</h1>

// If jsx is in multiple line wrap JSX in ().
// const jsxHeading = (<h1 className="head">
// Namaste React using JSX🚀
// </h1>)


// React Component
// Class Based Components - OLD Way
// Functional Components - New Way

//React Element
const heading1 = (
    <h1 className="head" tabIndex = "5">
        Namaste React using JSX
    </h1>
);

//Functional Component
const HeadingComponent = () => {
    return <h1>Namaste React Functional Component</h1>
}
 //or

 const HeadingComponent2 = () => {
    return (<h1>
    Namaste React Functional Component2
    </h1>)
}
//or
const HeadingComponent3 = () => (
     <h1>Namaste React Functional Component3</h1>
)

//or
const HeadingComponent4 = () => (
    <div id="container">
        <h1>Namaste React Functional Component4</h1>
    </div>
);

// all are same

//this is called component composition
const ele = <h1>React ele</h1>
const Title = () =>( 
    <div>
        {ele}
        <h1>I am title component</h1>
    </div>
)
const number = 1000;

const Head = ()=>{
    return (
        <div id = "container">
            <Title></Title>
            {Title ()} {/*Since it is a anonymous function*/}
            <h1>I am Head component</h1>
        </div>
    )
}

const root = ReactDOM.createRoot (document.querySelector("#root"));

root.render (<Head />)