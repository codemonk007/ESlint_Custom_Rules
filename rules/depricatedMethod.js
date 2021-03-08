let settings= require('./../config/settings');
module.exports = {

    create: function(context) {
        return {
            CallExpression: function(node) {               
                if (settings.DEPRICATE_METHODS.indexOf(node.callee.name)>0) {
                    context.report(node, node.callee.name+"() is "+"Depricated Method!!");
                }
            }
        };

    }
};
