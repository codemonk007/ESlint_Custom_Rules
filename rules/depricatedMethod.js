module.exports = {

    create: function(context) {

        return {

            CallExpression: function(node) {

                if (node.callee.name === "depricatedMethod") {
                    context.report(node, node.callee.name+"() is "+"Depricated Method!!");
                }
            }
        };

    }
};
