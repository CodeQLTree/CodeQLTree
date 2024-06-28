grammar QLGrammar;

ql: qldoc? moduleBody;

module: annotation* 'module' modulename parameters? implements? '{' moduleBody '}';

parameters: '<' signatureExpr parameterName (',' signatureExpr parameterName)* '>';

implements: 'implements' moduleSignatureExpr (',' moduleSignatureExpr)*;

moduleBody: (import_ | predicate | class_ | module | alias | select)*;

import_: annotations 'import' importModuleExpr ('as' modulename)?;

qualId: simpleId | qualId '.' simpleId;

importModuleExpr: qualId | importModuleExpr '::' modulename arguments?;

arguments: '<' argument (',' argument)* '>';

argument: moduleExpr | type_ | predicateRef '/' INT;

signature: predicateSignature | typeSignature | moduleSignature;

predicateSignature: qldoc? annotations 'signature' head ';';

typeSignature: qldoc? annotations 'signature' 'class' classname ('extends' type_ (',' type_)*)? (';' | '{' signaturePredicate* '}');

moduleSignature: qldoc? annotation* 'signature' 'module' moduleSignatureName parameters? '{' moduleSignatureBody '}';

moduleSignatureBody: (signaturePredicate | defaultPredicate | signatureType)*;

signaturePredicate: qldoc? annotations head ';';

defaultPredicate: qldoc? annotations 'default' head '{' formula '}';

signatureType: qldoc? annotations 'class' classname ('extends' type_ (',' type_)*)? '{' signaturePredicate* '}';

select: ('from' var_decls)? ('where' formula)? 'select' as_exprs ('order' 'by' orderbys)?;

as_exprs: as_expr (',' as_expr)*;

as_expr: expr ('as' lowerId)?;

orderbys: orderby (',' orderby)*;

orderby: lowerId ('asc' | 'desc')?;

predicate: qldoc? annotations head optbody;

annotations: annotation*;

annotation: simpleAnnotation | argsAnnotation;

simpleAnnotation: 'abstract'
                | 'cached'
                | 'external'
                | 'extensible'
                | 'final'
                | 'transient'
                | 'library'
                | 'private'
                | 'deprecated'
                | 'override'
                | 'additional'
                | 'query';

argsAnnotation: 'pragma' '[' ('inline' | 'inline_late' | 'noinline' | 'nomagic' | 'noopt' | 'assume_small_delta') ']'
               | 'language' '[' 'monotonicAggregates' ']'
               | 'bindingset' '[' (variable ( ',' variable)*)? ']';

head: ('predicate' | type_) predicateName '(' var_decls ')';

optbody: ';'
       | '{' formula '}'
       | '=' literalId '(' (predicateRef '/' INT (',' predicateRef '/' INT)*)? ')' '(' (exprs)? ')';

class_: qldoc? annotations 'class' classname ('extends' type_ (',' type_)*)? ('instanceof' type_ (',' type_)*)? '{' member* '}';

member: character | predicate | field;

character: qldoc? annotations classname '(' ')' '{' formula '}';

field: qldoc? annotations var_decl ';';

moduleExpr: modulename arguments? | moduleExpr '::' modulename arguments?;

moduleSignatureExpr: (moduleExpr '::')? moduleSignatureName arguments?;

signatureExpr: (moduleExpr '::')? simpleId ('/' INT | arguments)?;

type_: (moduleExpr '::')? classname | dbasetype | 'boolean' | 'date' | 'float' | 'int' | 'string';

exprs: expr (',' expr)*;

alias: qldoc? annotations 'predicate' literalId '=' predicateRef '/' INT ';'
     | qldoc? annotations 'class' classname '=' type_ ';'
     | qldoc? annotations 'module' modulename '=' moduleExpr ';';

var_decls: (var_decl (',' var_decl)*)?;

var_decl: type_ lowerId;

formula: fparen
       | disjunction
       | conjunction
       | implies
       | ifthen
       | negated
       | quantified
       | comparison
       | instanceof
       | inrange
       | call;

fparen: '(' formula ')';

disjunction: formula 'or' formula;

conjunction: formula 'and' formula;

implies: formula 'implies' formula;

ifthen: 'if' formula 'then' formula 'else' formula;

negated: 'not' formula;

quantified: 'exists' '(' expr ')'
           | 'exists' '(' var_decls ('|' formula)? ('|' formula)? ')'
           | 'forall' '(' var_decls ('|' formula)? '|' formula ')'
           | 'forex' '(' var_decls ('|' formula)? '|' formula ')';

comparison: expr compop expr;

compop: '=' | '!=' | '<' | '>' | '<=' | '>=';

instanceof: expr 'instanceof' type_;

inrange: expr 'in' (range | setliteral);

call: predicateRef (closure)? '(' (exprs)? ')'
    | primary '.' predicateName (closure)? '(' (exprs)? ')';

closure: '*' | '+';

expr: dontcare
    | unop
    | binop
    | cast
    | primary;

primary: eparen
       | literal
       | variable
       | super_expr
       | postfix_cast
       | callwithresults
       | aggregation
       | expression_pragma
       | any
       | range
       | setliteral;

eparen: '(' expr ')';

dontcare: '_';

literal: 'false' | 'true' | INT | FLOAT | STRING;

unop: '+' expr
    | '-' expr;

binop: expr '+' expr
     | expr '-' expr
     | expr '*' expr
     | expr '/' expr
     | expr '%' expr;

variable: varname | 'this' | 'result';

super_expr: 'super' | type_ '.' 'super';

cast: '(' type_ ')' expr;

postfix_cast: primary '.' '(' type_ ')';

aggregation: aggid ('[' expr ']')? '(' var_decls ('|' (formula)? ('|' as_exprs ('order' 'by' aggorderbys)?)?)? ')'
           | aggid ('[' expr ']')? '(' as_exprs ('order' 'by' aggorderbys)? ')'
           | 'unique' '(' var_decls '|' (formula)? ('|' as_exprs)? ')';

expression_pragma: 'pragma' '[' expression_pragma_type ']' '(' expr ')';

expression_pragma_type: 'only_bind_out' | 'only_bind_into';

aggid: 'avg' | 'concat' | 'count' | 'max' | 'min' | 'rank' | 'strictconcat' | 'strictcount' | 'strictsum' | 'sum';

aggorderbys: aggorderby (',' aggorderby)*;

aggorderby: expr ('asc' | 'desc')?;

any: 'any' '(' var_decls ('|' (formula)? ('|' expr)?)? ')';

callwithresults: predicateRef (closure)? '(' (exprs)? ')'
                | primary '.' predicateName (closure)? '(' (exprs)? ')';

range: '[' expr '..' expr ']';

setliteral: '[' expr (',' expr)* ','? ']';

simpleId: lowerId | upperId;

modulename: simpleId;

moduleSignatureName: upperId;

classname: upperId;

dbasetype: atLowerId;

predicateRef: (moduleExpr '::')? literalId;

predicateName: lowerId;

parameterName: simpleId;

varname: lowerId;

literalId: lowerId | atLowerId | 'any' | 'none';

// Tokens
fragment LOWER: [a-z];
fragment UPPER: [A-Z];
fragment DIGIT: [0-9];

lowerId: LOWER (LOWER | DIGIT | '_')*;
upperId: UPPER (UPPER | DIGIT | '_')*;
atLowerId: '@' lowerId;

INT: DIGIT+;
FLOAT: DIGIT+ '.' DIGIT*;
STRING: '"' (~["\\] | '\\' .)* '"';

// Whitespace and Comments
WS: [ \t\r\n]+ -> skip;
COMMENT: '/*' .*? '*/' -> skip;
LINE_COMMENT: '//' ~[\r\n]* -> skip;
