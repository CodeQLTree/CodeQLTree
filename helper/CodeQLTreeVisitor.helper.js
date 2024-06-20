const antlr4 = require('antlr4');
const CodeQLVisitor = require('./grammar/CodeQLVisitor').CodeQLVisitor;

class CodeQLTreeVisitor extends CodeQLVisitor {

    visitModule(ctx) {
        console.log("Visiting a module: " + ctx.modulename().getText());
        this.visitAnnotations(ctx.annotation());
        return this.visitModuleBody(ctx.moduleBody());
    }

    visitModuleBody(ctx) {
        console.log("Visiting module body");
        return ctx.children.map(child => this.visit(child));
    }

    visitImport(ctx) {
        console.log("Visiting an import: " + ctx.importModuleExpr().getText());
        if (ctx.modulename()) {
            console.log("Imported as: " + ctx.modulename().getText());
        }
    }

    visitPredicate(ctx) {
        console.log("Visiting a predicate: " + ctx.head().predicateName().getText());
        if (ctx.optbody()) {
            console.log("With body: " + ctx.optbody().getText());
        }
    }

    visitClassDecl(ctx) {
        console.log("Visiting a class: " + ctx.classname().getText());
        if (ctx.annotations()) {
            console.log("With annotations: " + ctx.annotations().getText());
        }
        if (ctx.member()) {
            ctx.member().forEach(member => this.visit(member));
        }
    }

    visitAlias(ctx) {
        console.log("Visiting an alias");
        if (ctx.literalId()) {
            console.log("Alias name: " + ctx.literalId().getText());
        }
        if (ctx.predicateRef()) {
            console.log("Refers to predicate: " + ctx.predicateRef().getText());
        }
    }

    visitAnnotations(ctx) {
        if (ctx && ctx.length > 0) {
            ctx.forEach(annotation => {
                if (annotation.simpleAnnotation()) {
                    console.log("Annotation: " + annotation.simpleAnnotation().getText());
                } else if (annotation.argsAnnotation()) {
                    console.log("Annotation with args: " + annotation.argsAnnotation().getText());
                }
            });
        }
    }

    // Add more visit methods here for each rule you want to handle
}
