var fs = require('fs'); // build-in read & write file

// write file
fs.writeFile('data.txt', 'Hello world!', function (err){
  if(err) {throw err;}
  console.log('It is saved!');
});

// read file
fs.readFile('data.txt', function(err, data){
  if(err) throw err;
  console.log(data.toString());
});
