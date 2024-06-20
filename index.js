const antlr4 = require('antlr4/index');
const CodeQLLexer = require('./grammar/CodeQLLexer.js').CodeQLLexer;
const CodeQLParser = require('./grammar/CodeQLParser.js').CodeQLParser;
const CodeQLTreeVisitor = require('./helper/CodeQLTreeVisitor.helper.js').CodeQLTreeVisitor;

function parseQLCode(code) {
    const chars = new antlr4.InputStream(code);
    const lexer = new CodeQLLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CodeQLParser(tokens);
    const tree = parser.ql();

    const visitor = new CodeQLTreeVisitor();
    visitor.visit(tree);
}

//  Code
const codeQLFile = `
`; // TODO

parseQLCode(codeQLFile);