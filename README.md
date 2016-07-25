# nodejs

## NAVIGATION
### GET STARTED
### PROJECT ARCHITECTURE
### ASSETS
### MVC DEVELOPING LAYERs
### MONGODB (MANAGING USER)
### FUNCTIONs

## GET STARTED
### Hello World
- https://github.com/lecaoquochung/nodejs/commit/ade8f3963a27527a5725c386e96e005f4bbaebf8

### Modules (Define & Use)
- Encapsulate in its own file
```
// code.js
exports.project = 'Nodejs';
exports.coding = function() {
  console.log('I am coding ' + exports.project);
}
```
- fs build-in module (read & write file)
 - example code https://github.com/lecaoquochung/nodejs-example/commit/5dee2e760e010acb15afcaa7ddb3f840b65bba0c

- event build-in module (manage events)
 - example code https://github.com/lecaoquochung/nodejs-example/commit/6b742f8656c53f6272f32d235bcc66ad286e049f

- child process
 - exec: run command or shell
 - spawn: parallel process
 - example codehttps://github.com/lecaoquochung/nodejs-example/commit/9b96b4d339856067be4c6dd2af170befdf26d9b1
 - Reference: http://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm

## PROJECT ARCHITECTURE
### Nodejs application basic layers
- Fundamental: Process the Request itself (basically difference with PHP)
- 1st layer: Routing -> parses the request URL & decides what to do
- 2nd layer: Static -> Place logic, send respond...
- 3rd layer: Backend logic
 - All base on the the URL
 - Example of 3 basic layers in nodejs
 - example code https://github.com/lecaoquochung/nodejs-example/commit/1848365e0f204f5a8f350920bedac660dfee3649
![Basic layers in nodejs](https://cloud.githubusercontent.com/assets/1205620/17047855/53ca0466-501c-11e6-8a9a-402ef3279b83.png)

### Task runner & building system
- Grunt (init & sample)
 - configuration file: gruntfile.js
 - write to file
```
npm install -g grunt-cli
npm install grunt-contrib-concat --save
npm install grunt-contrib-watch grunt-contrib-uglify --save // update package.json
```
 - example code https://github.com/lecaoquochung/nodejs-example/commit/52ba27a28f3a72e83944b37836d2ee0dd74e5236
![Grunt sample run](https://cloud.githubusercontent.com/assets/1205620/17048836/f2852d2c-5023-11e6-9fad-426a189963b2.png)

- Gulp (init & sample)
 - configuration file: gulpfile.js, plugin: gulp-concat, gulp-uglify, gulp-rename
 - streaming-based tool (keep data in memory)
 ```
 npm install -g gulp
 npm install gulp-concat gulp-uglify gulp-rename --save
 npm install gulp-uglify --save
 npm install gulp-rename --save
 ```
 ![gulp sample](https://cloud.githubusercontent.com/assets/1205620/17049360/d97c1436-5027-11e6-9970-ede61ca0f1de.png)

### Test-driven development
- Benefit
 - Stability application
 - Automated testing saves time -> improving & refactoring more
 - Better structuring & modular approachs
 - Continuous test -> dev new features on existing app, Automated test -> know what code breaks an old feature
 - test -> document (new members join the team)
![test driven flow](https://cloud.githubusercontent.com/assets/1205620/17049576/16e27760-5029-11e6-8e8f-db1156b0d271.png)
- Mocha
 - sample/mocha.js read external JSON files
```
npm install mocha -g
mocha sample/mocha.js
```
![mocha test](https://cloud.githubusercontent.com/assets/1205620/17050633/f35ec054-502e-11e6-871d-907a8c970197.png)
- example code https://github.com/lecaoquochung/nodejs-example/commit/410bebab4e41e4e6bb302daddfc7fc39b85c533f

### MVC Pattern
- Model-View-Controller: data, logic, and presentation layers
 - Note: VC could be the same functions
![traditional MVC flow](https://cloud.githubusercontent.com/assets/1205620/17050789/da7a6ee8-502f-11e6-9ef2-c11251cc7334.png)
- example code https://github.com/lecaoquochung/nodejs-example/commit/480b3c25ab3d74fd978faf4320ae87c99e2f1270

### REST(Representational State Transfer) API Concept
- REST API benefit: simple & highly scalable
- Example scenario: Manage online store users
 - GET /users -> return list of users
 - POST /users -> create new users
 - PUT /users/[id] -> edit the user data with user id
 - DELETE /users/[id] -> delete user with user id
 ```
 # sample/server_restapi.js
 # curl http://localhost:1337/ // GET
 # curl -X PUT -d item="Nodejs Example" http://localhost:1337/ // PUT
 # curl -X PUT -d item="Udon" http://localhost:1337 // PUT with query process server_restapi_query
 ```

## ASSETS
### Serving files
- Write everything for server to handle incoming request (Not server automatically like Linux-Apache-MySQL-PHP)
- Example of assets function (server image, css, Javascript)
```
// native modules
var http = require('http');
var fs = require('fs');
var path = require('path');

// assets module
var files = { };
var port = 9000;
var host = '127.0.0.1';

var assets = function(req,res){
  // ...
};

var app = http.createServer(assets).listen(port, host);
console.log('Listening on ' + host + ":" + port);

```
- Assets functions
 - Check file exists (HTTP error code)
```
var sendError = function(message, code) {...});
```
 - Recognize files & its extension
 - Sending files content to browser (Content-Type included)
 - Ex: sample/assets_functions.js

### CSS processing
- CSS preprocessors (Less & Sass) -> just test with Less this time
- Package JSON: gulp, less -> sample/package_css_gulp_less.json
- Gulp config less: sample/gulp_less_conf.js
- Code https://github.com/lecaoquochung/nodejs-example/commit/d4c03eda79f20616f35328fb8cc87fb3ec835bdd

### Javascript Client-Side packing
- Goal: serving only 1 JavaScript file to the client's browser (Node.js cand do with tools)
- Tools to do
 - Gulp (Concatenate files)
 - RequireJS (Modularity in the browser): Encapsulate client-side js into 1 file (?: need some examples)
```
npm install -g requirejs

// in code_requirejs folder
r.js -o build.js
```
 - Browsersify (Node.js -> Browser)
  - Sovle module problem
```
require(['modules/ajax', 'modules/router'], function(ajax, router) {
 ...
});

// better with browserify
var ajax = require('modules/ajax');
var router = require('modules/router');
```

```
// Install
npm install -g browserify

```

```
// defaul sample/browserify
browserify ./main.js -o main-built.js
```

### HTML Template
- Defining templates in script tags (Reference: handlebars (http://handlebarsjs.com/) template engine.)
```
<script type="text/x-handlebars" id="my-template">
 <p>Hello, <strong> </strong>!</p>
</script>

Since the tag has an id attribute, we can get its content easily in the following way:
var template = document.querySelector('#my-template').innerHTML;
```

- Loading template external (complex)
```
// like jquery method
$.get('/templates/template.html', function(html) {
 // ...
});
```
- Writing HTML inside JavaScript (Reference: React (http://facebook.github.io/react/))
```
<script type="text/jsx">
  var HelloMessage = React.createClass({
    render: function() {
      // Note: the following line is invalid JavaScript,
      // and only works using React parser.
      return <div>Hello {this.props.name}</div>;
    }
  });
</script>
```

```
There are solutions that do not have templates in the form of HTML. There
are tools that use templates written in JSON or YAML. For example, AbsurdJS
(http://absurdjs.com/) can keep its template inside the JavaScript class
definition as follows:

body: {
 'section.content#home': {
 nav: [
 { 'a[href="#" class="link"]': 'A' },
 { 'a[href="#" class="link"]': 'B' },
 { 'a[href="#" class="link"]': 'C' }
 ]
 },
 footer: {
 p: 'Text in the Footer'
 }
}
```

- Precompiling tempaltes (fast for Backend)
 - Do not need to think about HTML Template
 - Separated from Javascript
 - Do not need to fetch & process HTML
```
"ractive": "0.6.1",
"gulp-tap": "0.1.3"
```

## MVC DEVELOPING LAYERs
- File structure
- Backend & Frontend Router
- Rative.js(client-side framework if needed)
- Application main file
- MVC Classes

### Directory structure
- nodejs-example structure
![example MVC structure](https://cloud.githubusercontent.com/assets/1205620/17089103/e376991a-525d-11e6-87c5-19fe7099a556.png)
- Backend folder
 - Node.js environment
### Server handlers
- Server handlers
```
var app = http.createServer(assets).listen(port, '127.0.0.1');
```
- API handler: client-side communicate with the backend via REST API
- Page handlers: not API request -> server HTML page
 - ractive.js: Framework for client-side
 - frontend/app.j: client-side Javascript 

### Router
### Ractive.js
### Application entry point
### Define Controller
### Define View
### Define Model

## MONGODB (MANAGING USER)
