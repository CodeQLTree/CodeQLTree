// Generated from CodeQL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by CodeQLParser.

function CodeQLVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

CodeQLVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
CodeQLVisitor.prototype.constructor = CodeQLVisitor;

// Visit a parse tree produced by CodeQLParser#ql.
CodeQLVisitor.prototype.visitQl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#module.
CodeQLVisitor.prototype.visitModule = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#parameters.
CodeQLVisitor.prototype.visitParameters = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#implementsClause.
CodeQLVisitor.prototype.visitImplementsClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#moduleBody.
CodeQLVisitor.prototype.visitModuleBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#importDef.
CodeQLVisitor.prototype.visitImportDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#qualId.
CodeQLVisitor.prototype.visitQualId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#importModuleExpr.
CodeQLVisitor.prototype.visitImportModuleExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#arguments.
CodeQLVisitor.prototype.visitArguments = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#argument.
CodeQLVisitor.prototype.visitArgument = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#signature.
CodeQLVisitor.prototype.visitSignature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#predicateSignature.
CodeQLVisitor.prototype.visitPredicateSignature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#typeSignature.
CodeQLVisitor.prototype.visitTypeSignature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#moduleSignature.
CodeQLVisitor.prototype.visitModuleSignature = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#moduleSignatureBody.
CodeQLVisitor.prototype.visitModuleSignatureBody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#signaturePredicate.
CodeQLVisitor.prototype.visitSignaturePredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#defaultPredicate.
CodeQLVisitor.prototype.visitDefaultPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#signatureType.
CodeQLVisitor.prototype.visitSignatureType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#select.
CodeQLVisitor.prototype.visitSelect = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#as_exprs.
CodeQLVisitor.prototype.visitAs_exprs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#as_expr.
CodeQLVisitor.prototype.visitAs_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#orderbys.
CodeQLVisitor.prototype.visitOrderbys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#orderby.
CodeQLVisitor.prototype.visitOrderby = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#predicate.
CodeQLVisitor.prototype.visitPredicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#annotations.
CodeQLVisitor.prototype.visitAnnotations = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#annotation.
CodeQLVisitor.prototype.visitAnnotation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#simpleAnnotation.
CodeQLVisitor.prototype.visitSimpleAnnotation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#argsAnnotation.
CodeQLVisitor.prototype.visitArgsAnnotation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#head.
CodeQLVisitor.prototype.visitHead = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#optbody.
CodeQLVisitor.prototype.visitOptbody = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#classDef.
CodeQLVisitor.prototype.visitClassDef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#member.
CodeQLVisitor.prototype.visitMember = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#character.
CodeQLVisitor.prototype.visitCharacter = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#field.
CodeQLVisitor.prototype.visitField = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#moduleExpr.
CodeQLVisitor.prototype.visitModuleExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#moduleSignatureExpr.
CodeQLVisitor.prototype.visitModuleSignatureExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#signatureExpr.
CodeQLVisitor.prototype.visitSignatureExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#type.
CodeQLVisitor.prototype.visitType = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#exprs.
CodeQLVisitor.prototype.visitExprs = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#alias.
CodeQLVisitor.prototype.visitAlias = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#var_decls.
CodeQLVisitor.prototype.visitVar_decls = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#var_decl.
CodeQLVisitor.prototype.visitVar_decl = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#formula.
CodeQLVisitor.prototype.visitFormula = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#ifthen.
CodeQLVisitor.prototype.visitIfthen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#implies.
CodeQLVisitor.prototype.visitImplies = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#disjunction.
CodeQLVisitor.prototype.visitDisjunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#conjunction.
CodeQLVisitor.prototype.visitConjunction = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#negated.
CodeQLVisitor.prototype.visitNegated = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#comparison.
CodeQLVisitor.prototype.visitComparison = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#compop.
CodeQLVisitor.prototype.visitCompop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#instanceofClause.
CodeQLVisitor.prototype.visitInstanceofClause = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#inrange.
CodeQLVisitor.prototype.visitInrange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#call.
CodeQLVisitor.prototype.visitCall = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#closure.
CodeQLVisitor.prototype.visitClosure = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#expr.
CodeQLVisitor.prototype.visitExpr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#primary.
CodeQLVisitor.prototype.visitPrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#basePrimary.
CodeQLVisitor.prototype.visitBasePrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#postfix.
CodeQLVisitor.prototype.visitPostfix = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#unop.
CodeQLVisitor.prototype.visitUnop = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#cast.
CodeQLVisitor.prototype.visitCast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#eparen.
CodeQLVisitor.prototype.visitEparen = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#dontcare.
CodeQLVisitor.prototype.visitDontcare = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#literal.
CodeQLVisitor.prototype.visitLiteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#variable.
CodeQLVisitor.prototype.visitVariable = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#super_expr.
CodeQLVisitor.prototype.visitSuper_expr = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#postfix_cast.
CodeQLVisitor.prototype.visitPostfix_cast = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#callwithresults.
CodeQLVisitor.prototype.visitCallwithresults = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#aggregation.
CodeQLVisitor.prototype.visitAggregation = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#expression_pragma.
CodeQLVisitor.prototype.visitExpression_pragma = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#expression_pragma_type.
CodeQLVisitor.prototype.visitExpression_pragma_type = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#aggid.
CodeQLVisitor.prototype.visitAggid = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#aggorderbys.
CodeQLVisitor.prototype.visitAggorderbys = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#aggorderby.
CodeQLVisitor.prototype.visitAggorderby = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#any.
CodeQLVisitor.prototype.visitAny = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#range.
CodeQLVisitor.prototype.visitRange = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#setliteral.
CodeQLVisitor.prototype.visitSetliteral = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#simpleId.
CodeQLVisitor.prototype.visitSimpleId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#modulename.
CodeQLVisitor.prototype.visitModulename = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#moduleSignatureName.
CodeQLVisitor.prototype.visitModuleSignatureName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#classname.
CodeQLVisitor.prototype.visitClassname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#dbasetype.
CodeQLVisitor.prototype.visitDbasetype = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#predicateRef.
CodeQLVisitor.prototype.visitPredicateRef = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#predicateName.
CodeQLVisitor.prototype.visitPredicateName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#parameterName.
CodeQLVisitor.prototype.visitParameterName = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#varname.
CodeQLVisitor.prototype.visitVarname = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#literalId.
CodeQLVisitor.prototype.visitLiteralId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#lowerId.
CodeQLVisitor.prototype.visitLowerId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#upperId.
CodeQLVisitor.prototype.visitUpperId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#atLowerId.
CodeQLVisitor.prototype.visitAtLowerId = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by CodeQLParser#qldoc.
CodeQLVisitor.prototype.visitQldoc = function(ctx) {
  return this.visitChildren(ctx);
};



exports.CodeQLVisitor = CodeQLVisitor;