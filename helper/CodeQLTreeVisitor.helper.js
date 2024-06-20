const antlr4 = require('antlr4/index');
const CodeQLVisitor = require('../grammar/CodeQLVisitor').CodeQLVisitor;

class CodeQLTreeVisitor extends CodeQLVisitor {

    visitModule(ctx) {
        return this.visitChildren(ctx);
    }

    visitPredicate(ctx) {
        return this.visitChildren(ctx);
    }

    visitClassDef(ctx) {
        return this.visitChildren(ctx);
    }

    visitImportDef(ctx) {
        console.log('Visiting import:', ctx.importModuleExpr().getText());

        return this.visitChildren(ctx);
    }

    visitImportModuleExpr(ctx){
        return this.visitChildren(ctx);
    }

    visitSelect(ctx) {
        return this.visitChildren(ctx);
    }

    // Other methods here ...
}

exports.CodeQLTreeVisitor = CodeQLTreeVisitor;