const fs = require('fs');
const path = require('path');
module.exports = {
    create: function(context) {

        return {

            CallExpression: function(node) {
                // console.log(node.ExpressionStatement);
                
                // let m = path.join(__dirname, "foo.js");
                // console.log(m);                
                // fs.readFile(FILE_LOCATION, function (err, data) {
                //     if (err) throw err;
                //     if(data.indexOf('search string') >= 0){
                //      console.log(data)
                //     }
                //   });
                if (node.callee.name === "depricatedMethod") {
                    context.report(node, node.callee.name+"() is "+"Depricated Method!!");
                }
            }
        };
    }
};