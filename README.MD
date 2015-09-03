# Project Bootstrap for React

This project uses

- requirejs, as AMD dependency resolver (also used for minification)
- react, for component driven Web UI
- react-router , for React-based routing
- event-emitter, as event system
- q, as promise API
- bootstrap as css framework
- jquery, just as dependency, or if you really need it



# Installation

Install [node.js](http://nodejs.org/download/) to get ``npm``.

After successfull installation just call to get all packages

``npm install``

This will also install gulp and its needed dependencies.

# Build

For a complete build simply execute ``gulp``.

During development you will need the JSX transpiler. Calling ```gulp watch`` will run the jsx watcher, which allows automatic transpilation of your jsx files.


TODOs:
- Still need a few adjustments
- Improve the http module considering better decoupling the authentication mechanism
- Include Flux example


