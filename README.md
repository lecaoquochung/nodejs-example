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
 - exec: run command or shell
 - spawn: parallel process
 - https://github.com/lecaoquochung/nodejs-example/commit/9b96b4d339856067be4c6dd2af170befdf26d9b1
 - Reference: http://www.tutorialspoint.com/nodejs/nodejs_scaling_application.htm

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
- Grunt (init & sample)
 - configuration file: gruntfile.js
 - write to file
```
npm install -g grunt-cli
npm install grunt-contrib-concat --save
npm install grunt-contrib-watch grunt-contrib-uglify --save // update package.json
```
 - https://github.com/lecaoquochung/nodejs-example/commit/52ba27a28f3a72e83944b37836d2ee0dd74e5236
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


### MVC

### REST API
