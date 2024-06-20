// Generated from CodeQL.g4 by ANTLR 4.7.2
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by CodeQLParser.
function CodeQLListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

CodeQLListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
CodeQLListener.prototype.constructor = CodeQLListener;

// Enter a parse tree produced by CodeQLParser#ql.
CodeQLListener.prototype.enterQl = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#ql.
CodeQLListener.prototype.exitQl = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#module.
CodeQLListener.prototype.enterModule = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#module.
CodeQLListener.prototype.exitModule = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#parameters.
CodeQLListener.prototype.enterParameters = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#parameters.
CodeQLListener.prototype.exitParameters = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#implementsClause.
CodeQLListener.prototype.enterImplementsClause = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#implementsClause.
CodeQLListener.prototype.exitImplementsClause = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#moduleBody.
CodeQLListener.prototype.enterModuleBody = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#moduleBody.
CodeQLListener.prototype.exitModuleBody = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#importDef.
CodeQLListener.prototype.enterImportDef = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#importDef.
CodeQLListener.prototype.exitImportDef = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#qualId.
CodeQLListener.prototype.enterQualId = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#qualId.
CodeQLListener.prototype.exitQualId = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#importModuleExpr.
CodeQLListener.prototype.enterImportModuleExpr = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#importModuleExpr.
CodeQLListener.prototype.exitImportModuleExpr = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#arguments.
CodeQLListener.prototype.enterArguments = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#arguments.
CodeQLListener.prototype.exitArguments = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#argument.
CodeQLListener.prototype.enterArgument = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#argument.
CodeQLListener.prototype.exitArgument = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#signature.
CodeQLListener.prototype.enterSignature = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#signature.
CodeQLListener.prototype.exitSignature = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#predicateSignature.
CodeQLListener.prototype.enterPredicateSignature = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#predicateSignature.
CodeQLListener.prototype.exitPredicateSignature = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#typeSignature.
CodeQLListener.prototype.enterTypeSignature = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#typeSignature.
CodeQLListener.prototype.exitTypeSignature = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#moduleSignature.
CodeQLListener.prototype.enterModuleSignature = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#moduleSignature.
CodeQLListener.prototype.exitModuleSignature = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#moduleSignatureBody.
CodeQLListener.prototype.enterModuleSignatureBody = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#moduleSignatureBody.
CodeQLListener.prototype.exitModuleSignatureBody = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#signaturePredicate.
CodeQLListener.prototype.enterSignaturePredicate = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#signaturePredicate.
CodeQLListener.prototype.exitSignaturePredicate = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#defaultPredicate.
CodeQLListener.prototype.enterDefaultPredicate = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#defaultPredicate.
CodeQLListener.prototype.exitDefaultPredicate = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#signatureType.
CodeQLListener.prototype.enterSignatureType = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#signatureType.
CodeQLListener.prototype.exitSignatureType = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#select.
CodeQLListener.prototype.enterSelect = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#select.
CodeQLListener.prototype.exitSelect = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#as_exprs.
CodeQLListener.prototype.enterAs_exprs = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#as_exprs.
CodeQLListener.prototype.exitAs_exprs = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#as_expr.
CodeQLListener.prototype.enterAs_expr = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#as_expr.
CodeQLListener.prototype.exitAs_expr = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#orderbys.
CodeQLListener.prototype.enterOrderbys = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#orderbys.
CodeQLListener.prototype.exitOrderbys = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#orderby.
CodeQLListener.prototype.enterOrderby = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#orderby.
CodeQLListener.prototype.exitOrderby = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#predicate.
CodeQLListener.prototype.enterPredicate = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#predicate.
CodeQLListener.prototype.exitPredicate = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#annotations.
CodeQLListener.prototype.enterAnnotations = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#annotations.
CodeQLListener.prototype.exitAnnotations = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#annotation.
CodeQLListener.prototype.enterAnnotation = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#annotation.
CodeQLListener.prototype.exitAnnotation = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#simpleAnnotation.
CodeQLListener.prototype.enterSimpleAnnotation = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#simpleAnnotation.
CodeQLListener.prototype.exitSimpleAnnotation = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#argsAnnotation.
CodeQLListener.prototype.enterArgsAnnotation = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#argsAnnotation.
CodeQLListener.prototype.exitArgsAnnotation = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#head.
CodeQLListener.prototype.enterHead = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#head.
CodeQLListener.prototype.exitHead = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#optbody.
CodeQLListener.prototype.enterOptbody = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#optbody.
CodeQLListener.prototype.exitOptbody = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#classDef.
CodeQLListener.prototype.enterClassDef = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#classDef.
CodeQLListener.prototype.exitClassDef = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#member.
CodeQLListener.prototype.enterMember = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#member.
CodeQLListener.prototype.exitMember = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#character.
CodeQLListener.prototype.enterCharacter = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#character.
CodeQLListener.prototype.exitCharacter = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#field.
CodeQLListener.prototype.enterField = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#field.
CodeQLListener.prototype.exitField = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#moduleExpr.
CodeQLListener.prototype.enterModuleExpr = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#moduleExpr.
CodeQLListener.prototype.exitModuleExpr = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#moduleSignatureExpr.
CodeQLListener.prototype.enterModuleSignatureExpr = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#moduleSignatureExpr.
CodeQLListener.prototype.exitModuleSignatureExpr = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#signatureExpr.
CodeQLListener.prototype.enterSignatureExpr = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#signatureExpr.
CodeQLListener.prototype.exitSignatureExpr = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#type.
CodeQLListener.prototype.enterType = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#type.
CodeQLListener.prototype.exitType = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#exprs.
CodeQLListener.prototype.enterExprs = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#exprs.
CodeQLListener.prototype.exitExprs = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#alias.
CodeQLListener.prototype.enterAlias = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#alias.
CodeQLListener.prototype.exitAlias = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#var_decls.
CodeQLListener.prototype.enterVar_decls = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#var_decls.
CodeQLListener.prototype.exitVar_decls = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#var_decl.
CodeQLListener.prototype.enterVar_decl = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#var_decl.
CodeQLListener.prototype.exitVar_decl = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#formula.
CodeQLListener.prototype.enterFormula = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#formula.
CodeQLListener.prototype.exitFormula = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#ifthen.
CodeQLListener.prototype.enterIfthen = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#ifthen.
CodeQLListener.prototype.exitIfthen = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#implies.
CodeQLListener.prototype.enterImplies = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#implies.
CodeQLListener.prototype.exitImplies = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#disjunction.
CodeQLListener.prototype.enterDisjunction = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#disjunction.
CodeQLListener.prototype.exitDisjunction = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#conjunction.
CodeQLListener.prototype.enterConjunction = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#conjunction.
CodeQLListener.prototype.exitConjunction = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#negated.
CodeQLListener.prototype.enterNegated = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#negated.
CodeQLListener.prototype.exitNegated = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#comparison.
CodeQLListener.prototype.enterComparison = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#comparison.
CodeQLListener.prototype.exitComparison = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#compop.
CodeQLListener.prototype.enterCompop = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#compop.
CodeQLListener.prototype.exitCompop = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#instanceofClause.
CodeQLListener.prototype.enterInstanceofClause = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#instanceofClause.
CodeQLListener.prototype.exitInstanceofClause = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#inrange.
CodeQLListener.prototype.enterInrange = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#inrange.
CodeQLListener.prototype.exitInrange = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#call.
CodeQLListener.prototype.enterCall = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#call.
CodeQLListener.prototype.exitCall = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#closure.
CodeQLListener.prototype.enterClosure = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#closure.
CodeQLListener.prototype.exitClosure = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#expr.
CodeQLListener.prototype.enterExpr = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#expr.
CodeQLListener.prototype.exitExpr = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#primary.
CodeQLListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#primary.
CodeQLListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#basePrimary.
CodeQLListener.prototype.enterBasePrimary = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#basePrimary.
CodeQLListener.prototype.exitBasePrimary = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#postfix.
CodeQLListener.prototype.enterPostfix = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#postfix.
CodeQLListener.prototype.exitPostfix = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#unop.
CodeQLListener.prototype.enterUnop = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#unop.
CodeQLListener.prototype.exitUnop = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#cast.
CodeQLListener.prototype.enterCast = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#cast.
CodeQLListener.prototype.exitCast = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#eparen.
CodeQLListener.prototype.enterEparen = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#eparen.
CodeQLListener.prototype.exitEparen = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#dontcare.
CodeQLListener.prototype.enterDontcare = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#dontcare.
CodeQLListener.prototype.exitDontcare = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#literal.
CodeQLListener.prototype.enterLiteral = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#literal.
CodeQLListener.prototype.exitLiteral = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#variable.
CodeQLListener.prototype.enterVariable = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#variable.
CodeQLListener.prototype.exitVariable = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#super_expr.
CodeQLListener.prototype.enterSuper_expr = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#super_expr.
CodeQLListener.prototype.exitSuper_expr = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#postfix_cast.
CodeQLListener.prototype.enterPostfix_cast = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#postfix_cast.
CodeQLListener.prototype.exitPostfix_cast = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#callwithresults.
CodeQLListener.prototype.enterCallwithresults = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#callwithresults.
CodeQLListener.prototype.exitCallwithresults = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#aggregation.
CodeQLListener.prototype.enterAggregation = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#aggregation.
CodeQLListener.prototype.exitAggregation = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#expression_pragma.
CodeQLListener.prototype.enterExpression_pragma = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#expression_pragma.
CodeQLListener.prototype.exitExpression_pragma = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#expression_pragma_type.
CodeQLListener.prototype.enterExpression_pragma_type = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#expression_pragma_type.
CodeQLListener.prototype.exitExpression_pragma_type = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#aggid.
CodeQLListener.prototype.enterAggid = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#aggid.
CodeQLListener.prototype.exitAggid = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#aggorderbys.
CodeQLListener.prototype.enterAggorderbys = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#aggorderbys.
CodeQLListener.prototype.exitAggorderbys = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#aggorderby.
CodeQLListener.prototype.enterAggorderby = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#aggorderby.
CodeQLListener.prototype.exitAggorderby = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#any.
CodeQLListener.prototype.enterAny = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#any.
CodeQLListener.prototype.exitAny = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#range.
CodeQLListener.prototype.enterRange = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#range.
CodeQLListener.prototype.exitRange = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#setliteral.
CodeQLListener.prototype.enterSetliteral = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#setliteral.
CodeQLListener.prototype.exitSetliteral = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#simpleId.
CodeQLListener.prototype.enterSimpleId = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#simpleId.
CodeQLListener.prototype.exitSimpleId = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#modulename.
CodeQLListener.prototype.enterModulename = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#modulename.
CodeQLListener.prototype.exitModulename = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#moduleSignatureName.
CodeQLListener.prototype.enterModuleSignatureName = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#moduleSignatureName.
CodeQLListener.prototype.exitModuleSignatureName = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#classname.
CodeQLListener.prototype.enterClassname = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#classname.
CodeQLListener.prototype.exitClassname = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#dbasetype.
CodeQLListener.prototype.enterDbasetype = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#dbasetype.
CodeQLListener.prototype.exitDbasetype = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#predicateRef.
CodeQLListener.prototype.enterPredicateRef = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#predicateRef.
CodeQLListener.prototype.exitPredicateRef = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#predicateName.
CodeQLListener.prototype.enterPredicateName = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#predicateName.
CodeQLListener.prototype.exitPredicateName = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#parameterName.
CodeQLListener.prototype.enterParameterName = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#parameterName.
CodeQLListener.prototype.exitParameterName = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#varname.
CodeQLListener.prototype.enterVarname = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#varname.
CodeQLListener.prototype.exitVarname = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#literalId.
CodeQLListener.prototype.enterLiteralId = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#literalId.
CodeQLListener.prototype.exitLiteralId = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#lowerId.
CodeQLListener.prototype.enterLowerId = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#lowerId.
CodeQLListener.prototype.exitLowerId = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#upperId.
CodeQLListener.prototype.enterUpperId = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#upperId.
CodeQLListener.prototype.exitUpperId = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#atLowerId.
CodeQLListener.prototype.enterAtLowerId = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#atLowerId.
CodeQLListener.prototype.exitAtLowerId = function(ctx) {
};


// Enter a parse tree produced by CodeQLParser#qldoc.
CodeQLListener.prototype.enterQldoc = function(ctx) {
};

// Exit a parse tree produced by CodeQLParser#qldoc.
CodeQLListener.prototype.exitQldoc = function(ctx) {
};



exports.CodeQLListener = CodeQLListener;