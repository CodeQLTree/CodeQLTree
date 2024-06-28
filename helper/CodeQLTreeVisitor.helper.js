const antlr4 = require('antlr4/index');
const CodeQLVisitor = require('../grammar/CodeQLVisitor').CodeQLVisitor;

class CodeQLTreeVisitor extends CodeQLVisitor {

    visitModule(ctx) {
        console.log("Visiting a module: " + ctx.modulename().getText());
        this.visitAnnotations(ctx.annotation());
        return this.visitModuleBody(ctx.moduleBody());
    }

    visitModuleBody(ctx) {
        console.log("Visiting m module body");
        //console.log(ctx.children)
        return ctx.children.map(child => this.visit(child));
    }

    visitImportDef(ctx) {
        console.log("Visiting my import: " + ctx.importModuleExpr().getText());
        console.log(ctx)
        if (ctx.modulename()) {
            console.log("Imported as: " + ctx.modulename().getText());
        }
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