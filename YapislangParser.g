parser grammar YapislangParser;

options {
    tokenVocab=YapislangLexer;
    superClass=YapislangParserBase;
}

program
    : sourceElements? EOF
    ;

sourceElements
    : sourceElement+
    ;

sourceElement
    : statement
    ;

statement
    : block
    | variableStatement
    | emptyStatement
    | expressionStatement
    | ifStatement
    | iterationStatement
    | returnStatement
    | labelledStatement
    | functionDeclaration
    ;

block
    : '{' statementList? '}'
    ;

statementList
    : statement+
    ;

declaration
    : variableStatement
    | functionDeclaration
    ;

variableStatement
    : variableDeclarationList eos
    ;

variableDeclarationList
    : varModifier variableDeclaration (',' variableDeclaration)*
    ;

variableDeclaration
    : assignable ('=' singleExpression)?
    ;

emptyStatement
    : SemiColon
    ;

expressionStatement
    : {this.notOpenBraceAndNotFunction()}? expressionSequence eos
    ;

ifStatement
    : If '(' expressionSequence ')' statement (Else statement)?
    ;

iterationStatement
    : For '(' (expressionSequence | variableDeclarationList)? ';' expressionSequence? ';' expressionSequence? ')' statement
    | For '(' (singleExpression | variableDeclarationList) In expressionSequence ')' statement
    ;

varModifier
    : String
    | StringList
    | Char
    | Int
    | Bool
    ;

returnStatement
    : Return ({this.notLineTerminator()}? expressionSequence)? eos
    ;

labelledStatement
    : identifier ':' statement
    ;


functionDeclaration
    : varModifier Function identifier '(' formalParameterList? ')' '{' functionBody '}'
    ;

formalParameterList
    : formalParameterArg (',' formalParameterArg)*
    ;

formalParameterArg
    : varModifier assignable ('=' singleExpression)?
    ;

functionBody
    : sourceElements?
    ;

arrayLiteral
    : ('[' elementList ']')
    ;

elementList
    : ','* arrayElement? (','+ arrayElement)* ','*
    ;

arrayElement
    : singleExpression
    ;

propertyAssignment
    : propertyName ':' singleExpression
    ;

propertyName
    : identifierName
    | StringLiteral
    | numericLiteral
    | '[' singleExpression ']'
    ;

arguments
    : '('(argument (',' argument)* ','?)?')'
    ;

argument
    : (singleExpression | identifier)
    ;

expressionSequence
    : singleExpression (',' singleExpression)*
    ;

singleExpression
    : anonymousFunction                                                     # AnonymousFunctionExpression
    | '(' varModifier ')' singleExpression                                  # TypeAssertionExpression
    | singleExpression '[' expressionSequence ']'                           # MemberIndexExpression
    | singleExpression '?'? '.' identifierName                         # MemberDotExpression
    | singleExpression arguments                                            # ArgumentsExpression
    | singleExpression {this.notLineTerminator()}? '++'                     # PostIncrementExpression
    | singleExpression {this.notLineTerminator()}? '--'                     # PostDecreaseExpression
    | '++' singleExpression                                                 # PreIncrementExpression
    | '--' singleExpression                                                 # PreDecreaseExpression
    | '+' singleExpression                                                  # UnaryPlusExpression
    | '-' singleExpression                                                  # UnaryMinusExpression
    | '!' singleExpression                                                  # NotExpression
    | singleExpression In singleExpression                                  # InExpression
    | singleExpression ('*' | '/') singleExpression                   # MultiplicativeExpression
    | singleExpression ('+' | '-') singleExpression                         # AdditiveExpression
    | singleExpression ('<' | '>' | '<=' | '>=') singleExpression           # RelationalExpression
    | singleExpression ('==' | '!=' ) singleExpression       # EqualityExpression
    | singleExpression '&&' singleExpression                                # LogicalAndExpression
    | singleExpression '||' singleExpression                                # LogicalOrExpression
    | singleExpression '?' singleExpression ':' singleExpression            # TernaryExpression
    | <assoc=right> singleExpression '=' singleExpression                   # AssignmentExpression
    | <assoc=right> singleExpression assignmentOperator singleExpression    # AssignmentOperatorExpression
    | identifier                                                            # IdentifierExpression
    | literal                                                               # LiteralExpression
    | arrayLiteral                                                          # ArrayLiteralExpression
    | objectLiteral                                                         # ObjectLiteralExpression
    | '(' expressionSequence ')'                                            # ParenthesizedExpression
    ;

assignable
    : identifier
    | arrayLiteral
    | objectLiteral
    ;

objectLiteral
    : '{' (propertyAssignment (',' propertyAssignment)*)? ','? '}'
    ;

anonymousFunction
    : functionDeclaration                                                       # FunctionDecl
    | Function '(' formalParameterList? ')' '{' functionBody '}'                # anonymousFunctionDecl
    | arrowFunctionParameters '=>' arrowFunctionBody                            # ArrowFunction
    ;

arrowFunctionParameters
    : identifier
    | '(' formalParameterList? ')'
    ;

arrowFunctionBody
    : singleExpression
    | '{' functionBody '}'
    ;

assignmentOperator
    : '*='
    | '/='
    | '%='
    | '+='
    | '-='
    ;

literal
    : BooleanLiteral
    | StringLiteral
    | numericLiteral
    ;

numericLiteral
    : DecimalLiteral
    ;

identifierName
    : identifier
    | reservedWord
    ;

identifier
    : Identifier
    ;

reservedWord
    : keyword
    | BooleanLiteral
    ;

keyword
    : Else
    | Return
    | For
    | Function
    | If
    | In
    | varModifier
    ;

eos
    : SemiColon
    | EOF
    | {this.lineTerminatorAhead()}?
    | {this.closeBrace()}?
    ;