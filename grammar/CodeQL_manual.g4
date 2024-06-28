grammar CodeQL_manual;

ql: moduleBody;

// moduleBody: (import | predicate | class | module | alias | select)*; 
moduleBody: select;
select: ('from' variableDeclarations)? 'select' asExprs ('order' 'by' orderBys);
// (where formula)?

variableDeclarations: singleVariableDeclaration (',' singleVariableDeclaration)*;
singleVariableDeclaration: type lowerId;

// formula: parenthesisFormula
//     |   disjunction
//     |   conjunction
//     |   implies
//     |   ifthen
//     |   negated
//     |   quantified
//     |   comparison
//     |   instanceof
//     |   inrange
//     |   call
//     ;
// parenthesisFormula: '(' formula ')';
// disjunction: formula 'or' formula;
// conjunction: formula 'and' formula;
// implies: formula 'implies' formula;
// ifthen: 'if' formula 'then' formula 'else' formula;
// negated: 'not' formula;
// quantified: ;

type: classType
    | databaseType
    | 'boolean'
    | 'date'
    | 'float'
    | 'int'
    | 'string'
    ;
classType: className; // TODO
className: upperId;
databaseType: atLowerId;
    

atLowerId: '@'LOWERCASE_LETTER(LOWERCASE_LETTER|UPPERCASE_LETTER|DIGIT|'_')*;
lowerId: LOWERCASE_LETTER(LOWERCASE_LETTER|UPPERCASE_LETTER|DIGIT|'_')*;
upperId: UPPERCASE_LETTER(LOWERCASE_LETTER|UPPERCASE_LETTER|DIGIT|'_')*;


LOWERCASE_LETTER: [a-z];
UPPERCASE_LETTER: [A-Z];
DIGIT: [0-9];

COMMENT : '/**' .*? '*/' -> skip ;
LINE_COMMENT : '//' ~[\r\n]* -> skip ;