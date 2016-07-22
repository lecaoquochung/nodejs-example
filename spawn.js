var spawn = require('child_process').spawn;
var command = spawn('git', ['push', 'gh', 'master']);
var git_status = spawn('git', ['status']);

// command.stdout.on('data', function(data) {
//   console.log('stdout: ' + data);
// });
//
// command.on('close', function (code) {
//   console.log('child process exited with code ' + code);
// });

git_status.stdout.on('data', function(data) {
  console.log('stdout: ' + data);
});

git_status.on('close', function (code) {
  console.log('Exit with code: ' + code)
})
