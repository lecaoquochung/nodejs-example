# nodejs
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
 - https://github.com/lecaoquochung/nodejs-example/commit/5dee2e760e010acb15afcaa7ddb3f840b65bba0c

- event build-in module (manage events)
 - https://github.com/lecaoquochung/nodejs-example/commit/6b742f8656c53f6272f32d235bcc66ad286e049f

- child process

## PROJECT ARCHITECTURE
### Nodejs application basic layers
- Fundamental: Process the Request itself (basically difference with PHP)
- 1st layer: Routing -> parses the request URL & decides what to do
- 2nd layer: Static -> Place logic, send respond...
- 3rd layer: Backend logic
 - All base on the the URL
 - Example of 3 basic layers in nodejs
 - https://github.com/lecaoquochung/nodejs-example/commit/1848365e0f204f5a8f350920bedac660dfee3649
![Basic layers in nodejs](https://cloud.githubusercontent.com/assets/1205620/17047855/53ca0466-501c-11e6-8a9a-402ef3279b83.png)

### Task runner & building system
- Grunt (introduction)
```
npm install -g grunt-cli
npm install grunt-contrib-concat --save
npm install grunt-contrib-watch grunt-contrib-uglify --save // update package.json
```


### Test-driven development

### MVC

### REST API
