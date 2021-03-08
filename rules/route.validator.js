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
                            let arrayOfRoute =node.arguments[0].value.split('/');
                            arrayOfRoute.forEach(element => {
                                let regEx=new RegExp("^[A-Z][a-zA-Z0-9.,$;]+$")
                                if(regEx.test(element)){
                                    context.report(node,"Route can have only small letter or numbers");
                                }      
                            });

                        }                 
                    }
                }
            }
        };

    }
};
