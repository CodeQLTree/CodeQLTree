const antlr4 = require('antlr4/index');
const CodeQLLexer = require('./grammar/CodeQLLexer.js').CodeQLLexer;
const CodeQLParser = require('./grammar/CodeQLParser.js').CodeQLParser;
const CodeQLTreeVisitor = require('./helper/CodeQLTreeVisitor.helper.js').CodeQLTreeVisitor;

function parseQLCode(code) {
    const chars = new antlr4.InputStream(code);
    const lexer = new CodeQLLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CodeQLParser(tokens);
    const tree = parser.ql(); // Grammar entry point
    const visitor = new CodeQLTreeVisitor();
    visitor.visit(tree);
}

// Example usage
const codeQLFile = `
/**
 * @id methodCalls
 * @name Finds mongo/mongoose calls
 * @description Checks method calls corresponding to CRUD query for mongo/mongoose, based on method name, not included in function. We exclude call to object here
 * @kind problem
 */

import javascript
import mongodb.mongoRecap
import mongoose.mongooseRecap
import axioms
import codeGen
import blackList

predicate testFile(File f) {
    //Jasmine test files
    f.getAbsolutePath().matches("%.spec.%") or 
    f.getAbsolutePath().matches("%test%") or
    f.getAbsolutePath().matches("%.jsx")
}

from MethodCallExpr mce
where 
    ( mongoMethodName(mce.getMethodName()) or mongooseMethodName(mce.getMethodName()) ) and
    respectAxioms(mce) and
    recap(mce) and
    not(blackList(mce)) and
    not testFile(mce.getFile())
select mce, mce.getMethodName() + " with receiver " + mce.getReceiver()`; // TODO

parseQLCode(codeQLFile);