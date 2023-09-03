# What is emmet
- Emmet or zen coding is a widely used toolkit for developers that helps in writing faster HTML and CSS code using shortcuts, abbreviations etc.
-Abbreviations :- write html5 and get a boilerplate ready.
-Nested element :- we can use ">" to generate nested script. ">" shows parent-child relationship
-shortcuts :- div.id expands to <div class = "id">, similarly bgc: red expands to background-color: red;
-multiply :- you can multiply elemets with a number to produce repititve elements.

# Difference between Library and Framework.
- Library refers to a file consisting of methods which aids developers in writing secure and maintainable code. It can work on a subset of code.
- Framework refers too a skeleton/structure upon which developers build their app.

# What is  CDN? Why do we use it?
- It is a distributed network of servers to provide faster access to data over network. You can think of CDN as dominos branch across globe. When you want to eat pizza at dominos, you don't have to go to US to have a pizza. What you can do is go to the nearest branch of dominos and savor those flavors.

# Why React is known as React?
- React, a js library, is known as "React" beacuse its core concept revolves around reacting to changes in data and updating UI acoordingly. It is based on its philosphy of making Ui dynamic and responsive by reacting to the changes introduced in the state.

# What is cross-origin in the script tag?
- As mentioned CDN provides faster access to data. Thus, it can happen that the requested data might be present on various servers (origins), therefore, a request must be sent to each origin for the required data.
- However, browser usually follows "same-origin-policy" which means it wants the data to be retrieved from same origin.
This is because of cross-origin-scripting (XSS) attack, where an attacker injects malicious scripts into a web page, they can potentially steal data or perform actions on behalf of the user, making unauthorized cross-origin requests.
- Therefore, its the duty of developer to add authentic links and allow cross-origin-resource-sharing (CORS).

# What is difference between React and ReactDOM?
- React is a js library which consists of js code anf methods thats helps in developing scalable web app.
- ReactDOM refers to the virtual DOM. It follows the policy of minimal updation. It maintains a DOM tree like browser and whenever there is a change in virtual DOM, it calculates the changes and find the path to make calculated changes in the browser DOM tree.

# What is the difference between react.development.js and react.production.js files via CDN?
react.development.js:
- This file is intended for development and debugging purposes.
- It contains additional error-checking and warning messages that help developers identify and diagnose issues in their code.
- The file is larger in size compared to the production version because it includes development-related code.
- It is not optimized for performance but is helpful during development to catch and report potential problems early.

react.production.js:
- This file is optimized for production and is intended for use in a production environment.
- It does not include error-checking and warning messages present in the development version, making it smaller in size and more efficient.
- Using the production version is recommended for deploying your React application to production servers because it reduces the file size and improves performance.

# What are async and defer?
- In case of async attribute, scripts are fetched from the network in parallel to parsing of HTML scripts and when its available HTML parsing is stopped, scripts are executed and on its completion parsing continues.
