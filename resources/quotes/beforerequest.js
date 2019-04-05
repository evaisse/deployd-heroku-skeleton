var debug = require('debug')('velos');



// limit to 50 max items
if (ctx && ctx.req && ctx.req.method == "GET") {
    query.$limit = Math.max(parseInt(query.$limit)||0, 50);
}

console.log(query, ctx.req.method);