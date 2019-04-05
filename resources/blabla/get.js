var done = ctx.done;
ctx.done = function() {};

var quotizer = require('random-quotes');



done(randomQuotes());