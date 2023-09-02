# package.json and npm
- package.json stores the configuration for our npm. It helps npm manage all the dependencies required in the project in one place.
- npm is a package manager that manages the packages/dependcies on which the project relies on. It doesn't stand for NODE PACKAGE MANAGER❌
- npm init - it is a utility for creating package.json
- Jest is used for testing

# What is a bundler
- Parcel/webpack is a bundler. It bundles the html/css/js code so that it can be shipped to production
- npm install -D parcel := command to install parcel bundler. Here -D represent dev dependency
- create-react-app uses webpack bundler

# dev vs normal dependency
- there are 2 types of dependencies : dev and normal
- dev dependencies are required in development environment
- normal dependencies are required in deploy/production phase

# Caret vs Tilde
caret (^) vs tilde (~): with ^ infront of verion, it will upgrade the current version to new version with minor change (i.e. 2.8.1 => 2.8.2) whereas ~ upgrades the current version to new version with major changes (i.e. 2.8.4 => 3.1.0). It is always safe and recommended to use ^ over ~ as it could mess up the code if some major dependecy is depreciated.

# node_modules vs package.json vs package-lock.json
- package-lock.json keep tracks of exact version of packages.
- package.json keep track of approximate version of dependency and package-lock.json keeps track of the exact version.
- node_modules is like a database, it contains the actual data of those dependecies.

# transitive dependency
when one project dependes on another project which in turn dependes on another and so on. 

# Why node_modules is stored in .gitignore?
- if we have package-lock.json and package.json, we can recreate all the node_modules.
- node_modules is not important to put on github
- package.json and package-lock.json are important to put on github because package.json maintains the version of dependecy and package-lock.json and maintains the exact version of all the dependencies. 

# npm vs npx
- npm means getting the required package from the huge colllection of packages managed by npm.
- npx means executing a package

# Why CDN is not preferred?
cdn is not a preferred way to get react in the project because it is costly operation to perform a network call to get package when we can easily get in node_modules. Secondly it is difficult to maintain the latest version of dependency

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