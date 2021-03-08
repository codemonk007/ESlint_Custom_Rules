let settings= require('./../config/settings');
let count = 0;
module.exports = {
    create: function(context) {

        return {

            MemberExpression: function(node) {               
                // console.log(node.object.name);
                // console.log(node.property.name);   
                if(node.object.name ==="module" && node.property.name ==="exports"){
                    count=count+1;
                }   
                if(count >1){
                    context.report(node,"should have one module.exports per file");
                }   
            }
        };

    }
};
