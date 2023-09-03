# package.json and npm
- package.json stores the configuration for our npm. It helps npm manage all the dependencies required in the project in one place.
- npm is software registry having a huge collection of Node.js packages and allows developers to share code across web.It doesn't stand for NODE PACKAGE MANAGER❌
- npm init - it is a utility for creating package.json
- Jest is used for testing

# What is a bundler
- Parcel/webpack is a bundler. It bundles the html/css/js code so that it can be shipped to production
- npm install -D parcel := command to install parcel bundler. Here -D represent dev dependency
- create-react-app uses webpack bundler

# dev vs normal dependency
- there are 2 types of dependencies : dev and normal
- dev dependencies are required in development environment
- production dependencies are required in production environment

# Caret vs Tilda
caret (^) vs tilda (~): with ^ in front of verion, it will upgrade the current version to new version with minor change (i.e. 2.8.1 => 2.8.2) whereas ~ upgrades the current version to new version with major changes (i.e. 2.8.4 => 3.1.0). It is always safe and recommended to use ^ over ~ as it could mess up the code if some major dependecy is depreciated.

# node_modules vs package.json vs package-lock.json
- package-lock.json keep tracks of exact version of packages.
- package.json keep track of approximate version of dependency.
- node_modules is like a database, it contains the actual data of those dependencies.

# transitive dependency
when one project dependes on another project which in turn depends on another and so on. 

# Why node_modules is stored in .gitignore?
- if we have package-lock.json and package.json, we can recreate all the node_modules.
- node_modules is not important to put on github
- package.json and package-lock.json are important to put on github because package.json maintains the approx. version of dependecy and package-lock.json maintains the exact version of all the dependencies. 

# npm vs npx
- npm means getting the required package from the huge colllection of packages managed by npm.
- npx means executing a package

# Why CDN is not preferred?
cdn is not a preferred way to get react in the project because it is costly operation to perform a network call to get package when we can easily get in node_modules. Secondly it is difficult to maintain the latest version of react dependency

# What does Parcel Do?
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds 
- Image Optimization
- Minification
- Bundling
- Compress File
- Consistent Hashing
- Code Splitting
- Differential bundling - support older browser
- Good Error Handling
- Tree-Shaking

# what is .parcel-cache
- It is a cache maintained by parcel for faster build of application. This ensures that files are not build each time the code is bundled.

# What is tree-shaking
- It refers to loading the necessary methods and dependency in the DOM and leaving the unnesseary information. Thus, giving faster performance and build of project

# Why is '.gitignore'?
- It refers to files which stores the information regarding the files which should not be tracked by git.

# Why should I not modify package-lock.json?
- Because it contains the exact version of dependency used by the project. It also helps the other developers to configure their environment with correct version of packages so that they run code locally.

# What is browserlists?
- Browser list a node package that helps the developer list down the browser on which the app must not fail in any circumstance. It helps parcel (or any other bundler) to bundle apps specifically for the browser.