const parsePath = require("parse-path")
 
console.log(parsePath("http://ionicabizau.net/blog"))

console.log(parsePath("http://domain.com/path/name?foo=bar&bar=42#some-hash"))

console.log(parsePath("git+ssh://git@host.xz/path/name.git"))

console.log(parsePath("git@github.com:IonicaBizau/git-stats.git"))