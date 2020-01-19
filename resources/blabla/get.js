var done = ctx.done;

const quotizer = require('random-quotes');

const myQuote = quotizer();

// console.log(quote.status);

delete myQuote.status;

setResult(myQuote);
