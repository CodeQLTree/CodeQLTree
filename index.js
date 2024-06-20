const antlr4 = require('antlr4');
const CodeQLLexer = require('./grammar/CodeQLLexer.js');
const CodeQLParser = require('./grammar/CodeQLParser.js');
const CodeQLTreeVisitor = require('./helper/CodeQLTreeVisitor.helper.js');

function parseQLCode(code) {
    const chars = new antlr4.InputStream(code);
    const lexer = new CodeQLLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CodeQLParser(tokens);
    const tree = parser.ql(); // Grammar entry point

    const visitor = new CodeQLTreeVisitor();
    visitor.visit(tree); // Visit the parse tree
}

// Example usage
const codeQLFile = `
module Example {
    import some.module as alias;
    predicate foo() {
        return true;
    }
    class Bar extends Baz {
        field x : int;
    }
}
`;

parseQLCode(codeQLFile);