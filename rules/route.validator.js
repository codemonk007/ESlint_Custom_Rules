let settings= require('./../config/settings');
let count = 0;
module.exports = {
    create: function(context) {


        return {

            CallExpression: function(node) {        
                if(node.callee){
                    if(node.callee.object){
                        if(node.callee.object.name == "router"){
                            console.log(node.arguments[0].value);                            
                        }                 
                    }
                }
            }
        };

    }
};
