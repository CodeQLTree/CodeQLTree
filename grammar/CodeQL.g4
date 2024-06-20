// Generated with ChatGPT4o from CodeQLBNFSpecification.bnf with debugging
grammar CodeQL;

ql                : qldoc? moduleBody ;
module            : annotation* 'module' modulename parameters? implementsClause? '{' moduleBody '}' ;
parameters        : '<' signatureExpr parameterName (',' signatureExpr parameterName)* '>' ;
implementsClause  : 'implements' moduleSignatureExpr (',' moduleSignatureExpr)* ;
moduleBody        : (importDef | predicate | classDef | module | alias | select)* ;
importDef         : annotations 'import' importModuleExpr ('as' modulename)? ;
qualId            : simpleId | qualId '.' simpleId ;
importModuleExpr  : qualId | importModuleExpr '::' modulename arguments? ;
arguments         : '<' argument (',' argument)* '>' ;
argument          : moduleExpr | type | predicateRef '/' INT ;
signature         : predicateSignature | typeSignature | moduleSignature ;
predicateSignature: qldoc? annotations 'signature' head ';' ;
typeSignature     : qldoc? annotations 'signature' 'class' classname ('extends' type (',' type)*)? (';' | '{' signaturePredicate* '}') ;
moduleSignature   : qldoc? annotation* 'signature' 'module' moduleSignatureName parameters? '{' moduleSignatureBody '}' ;
moduleSignatureBody : (signaturePredicate | defaultPredicate | signatureType)* ;
signaturePredicate: qldoc? annotations head ';' ;
defaultPredicate  : qldoc? annotations 'default' head '{' formula '}' ;
signatureType     : qldoc? annotations 'class' classname ('extends' type (',' type)*)? '{' signaturePredicate* '}' ;
select            : ('from' var_decls)? ('where' formula)? 'select' as_exprs ('order' 'by' orderbys)? ;
as_exprs          : as_expr (',' as_expr)* ;
as_expr           : expr ('as' lowerId)? ;
orderbys          : orderby (',' orderby)* ;
orderby           : lowerId ('asc' | 'desc')? ;
predicate         : qldoc? annotations head optbody ;
annotations       : annotation* ;
annotation        : simpleAnnotation | argsAnnotation ;
simpleAnnotation  : 'abstract' | 'cached' | 'external' | 'extensible' | 'final' | 'transient' | 'library' | 'private' | 'deprecated' | 'override' | 'additional' | 'query' ;
argsAnnotation    : 'pragma' '[' ('inline' | 'inline_late' | 'noinline' | 'nomagic' | 'noopt' | 'assume_small_delta') ']' 
                  | 'language' '[' 'monotonicAggregates' ']' 
                  | 'bindingset' '[' (variable ( ',' variable)*)? ']' ;
head              : ('predicate' | type) predicateName '(' var_decls ')' ;
optbody           : ';' | '{' formula '}' | '=' literalId '(' (predicateRef '/' INT (',' predicateRef '/' INT)*)? ')' '(' (exprs)? ')' ;
classDef          : qldoc? annotations 'class' classname ('extends' type (',' type)*)? ('instanceofClause' type (',' type)*)? '{' member* '}' ;
member            : character | predicate | field ;
character         : qldoc? annotations classname '(' ')' '{' formula '}' ;
field             : qldoc? annotations var_decl ';' ;
moduleExpr        : modulename arguments? | moduleExpr '::' modulename arguments? ;
moduleSignatureExpr : (moduleExpr '::')? moduleSignatureName arguments? ;
signatureExpr     : (moduleExpr '::')? simpleId ('/' INT | arguments)? ;
type              : (moduleExpr '::')? classname | dbasetype | 'boolean' | 'date' | 'float' | 'int' | 'string' ;
exprs             : expr (',' expr)* ;
alias             : qldoc? annotations 'predicate' literalId '=' predicateRef '/' INT ';'
                  | qldoc? annotations 'class' classname '=' type ';'
                  | qldoc? annotations 'module' modulename '=' moduleExpr ';' ;
var_decls         : (var_decl (',' var_decl)*)? ;
var_decl          : type lowerId ;
formula           : ifthen | implies | disjunction ;
ifthen            : 'if' formula 'then' formula 'else' formula ;
implies           : conjunction ('implies' conjunction)* ;
disjunction       : conjunction ('or' conjunction)* ;
conjunction       : negated ('and' negated)* ;
negated           : 'not' negated | comparison ;
comparison        : expr compop expr ;
compop            : '=' | '!=' | '<' | '>' | '<=' | '>=' ;
instanceofClause  : expr 'instanceof' type ;
inrange           : expr 'in' (range | setliteral) ;
call              : predicateRef (closure)? '(' (exprs)? ')' | primary '.' predicateName (closure)? '(' (exprs)? ')' ;
closure           : '*' | '+' ;
expr              : primary (( '+' | '-' | '*' | '/' | '%' ) primary)* ;
primary           : basePrimary postfix* ;
basePrimary       : dontcare 
                  | unop 
                  | cast 
                  | literal 
                  | variable 
                  | super_expr 
                  | eparen 
                  | aggregation 
                  | expression_pragma 
                  | any 
                  | range 
                  | setliteral;
postfix           : postfix_cast | callwithresults ;
unop              : ('+' | '-') basePrimary ;
cast              : '(' type ')' basePrimary ;
eparen            : '(' expr ')' ;
dontcare          : '_' ;
literal           : 'false' | 'true' | INT | FLOAT | STRING ;
variable          : varname | 'this' | 'result' ;
super_expr        : 'super' | type '.' 'super' ;
postfix_cast      : '.' '(' type ')' ;
callwithresults   : predicateRef (closure)? '(' (exprs)? ')' | '.' predicateName (closure)? '(' (exprs)? ')' ;
aggregation       : aggid ('[' expr ']')? '(' var_decls ('|' (formula)? ('|' as_exprs ('order' 'by' aggorderbys)?)?)? ')' 
                  | aggid ('[' expr ']')? '(' as_exprs ('order' 'by' aggorderbys)? ')' 
                  | 'unique' '(' var_decls '|' (formula)? ('|' as_exprs)? ')' ;
expression_pragma : 'pragma' '[' expression_pragma_type ']' '(' expr ')' ;
expression_pragma_type : 'only_bind_out' | 'only_bind_into' ;
aggid             : 'avg' | 'concat' | 'count' | 'max' | 'min' | 'rank' | 'strictconcat' | 'strictcount' | 'strictsum' | 'sum' ;
aggorderbys       : aggorderby (',' aggorderby)* ;
aggorderby        : expr ('asc' | 'desc')? ;
any               : 'any' '(' var_decls ('|' (formula)? ('|' expr)?)? ')' ;
range             : '[' expr '..' expr ']' ;
setliteral        : '[' expr (',' expr)* ','? ']' ;
simpleId          : lowerId | upperId ;
modulename        : simpleId ;
moduleSignatureName : upperId ;
classname         : upperId ;
dbasetype         : atLowerId ;
predicateRef      : (moduleExpr '::')? literalId ;
predicateName     : lowerId ;
parameterName     : simpleId ;
varname           : lowerId ;
literalId         : lowerId | atLowerId | 'any' | 'none' ;

LOWERCASE_LETTER  : [a-z] ;
UPPERCASE_LETTER  : [A-Z] ;
DIGIT             : [0-9] ;

lowerId           : LOWERCASE_LETTER (LOWERCASE_LETTER | UPPERCASE_LETTER | DIGIT | '_')* ;
upperId           : UPPERCASE_LETTER (LOWERCASE_LETTER | UPPERCASE_LETTER | DIGIT | '_')* ;
atLowerId         : '@' lowerId ;

QSTRING : '"' ('\\' . | ~('\\' | '"'))* '"' ;
STRING  : '\'' ('\\' . | ~('\\' | '\''))* '\'' ;
INT     : DIGIT+ ;
FLOAT   : DIGIT+ '.' DIGIT* | '.' DIGIT+ ;
WS      : [ \t\r\n]+ -> skip ;
COMMENT : '/*' .*? '*/' -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;

qldoc : '/*' .*? '*/' ;
