# What are scripts?
- Scripts are used to write npm commands faster.
- It is done in package.json.

# npm start vs npm run start
npm start == npm run start, since start is a reserved word. this cant be done for build i.e. npm build != npm run build

# JSX
- JSX is not html in js. JSX just has HTML like syntax but it is not html inside js.
- JS engine/browser doesn't understand JSX.
- JSX is not pure javascript. If u write JSX in console it will give an error.
- Babel is the BEAST💀: - It is the js compiler that converts our JSX into react element/object which is inturn  bundled by PARCEL💀 and rendered in the DOM.
- JSX is transpiled before it reches the JS Engine. Transpiling is done by Babel.

# attributes
attributes are written in "camelCase".

# react functional component
- It is a function that returns some JSX/React Element.

# JSX is anti-cross-site-scripting
If an attacker tries to inject some malicious code. JSX santasizes the data before executing in a component thus preventing cross-site scripting attack.