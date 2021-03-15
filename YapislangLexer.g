lexer grammar YapislangLexer;

channels { ERROR }

options { superClass=YapislangLexerBase; }

MultiLineComment:               '/*' .*? '*/'             -> channel(HIDDEN);
SingleLineComment:              '//' ~[\r\n\u2028\u2029]* -> channel(HIDDEN);

OpenBracket:                    '[';
CloseBracket:                   ']';
OpenParen:                      '(';
CloseParen:                     ')';
OpenBrace:                      '{' {this.ProcessOpenBrace();};
CloseBrace:                     '}' {this.ProcessCloseBrace();};
SemiColon:                      ';';
Comma:                          ',';
Assign:                         '=';
QuestionMark:                   '?';
Colon:                          ':';
Dot:                            '.';
PlusPlus:                       '++';
MinusMinus:                     '--';
Plus:                           '+';
Minus:                          '-';
Not:                            '!';
Multiply:                       '*';
Divide:                         '/';
LessThan:                       '<';
MoreThan:                       '>';
LessThanEquals:                 '<=';
GreaterThanEquals:              '>=';
Equals_:                        '==';
NotEquals:                      '!=';
And:                            '&&';
Or:                             '||';
MultiplyAssign:                 '*=';
DivideAssign:                   '/=';
ModulusAssign:                  '%=';
PlusAssign:                     '+=';
MinusAssign:                    '-=';
ARROW:                          '=>';

/// Boolean Literals

BooleanLiteral:                 'true'
              |                 'false';

/// Numeric Literals

DecimalLiteral
    : '0'
    | [1-9] [0-9_]*
    ;

/// Keywords

Else:                           'else';
Return:                         'return';
Continue:                       'continue';
For:                            'for';
Function:                       'func';
If:                             'if';
In:                             'in';

/// Types
String:                         'string';
StringList:                     'string[]';
Char:                           'char';
Int:                            'int';
Bool:                           'bool';

/// Identifier Names and Identifiers

Identifier:                     IdentifierStart IdentifierPart*;

/// String Literals
StringLiteral:                 ('"' DoubleStringCharacter* '"'
             |                  '\'' SingleStringCharacter* '\'') {this.ProcessStringLiteral();}
             ;

WhiteSpaces:                    [\t\u000B\u000C\u0020\u00A0]+ -> channel(HIDDEN);

LineTerminator:                 [\r\n\u2028\u2029] -> channel(HIDDEN);

UnexpectedCharacter:            . -> channel(ERROR);

// Fragment rules

fragment DoubleStringCharacter
    : ~["\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;
fragment SingleStringCharacter
    : ~['\\\r\n]
    | '\\' EscapeSequence
    | LineContinuation
    ;
fragment EscapeSequence
    : SingleEscapeCharacter
    | NonEscapeCharacter
    ;
fragment SingleEscapeCharacter
    : ['"\\bfnrtv]
    ;

fragment NonEscapeCharacter
    : ~['"\\bfnrtv0-9xu\r\n]
    ;
fragment LineContinuation
    : '\\' [\r\n\u2028\u2029]
    ;
fragment IdentifierPart
    : IdentifierStart
    | [\p{Mn}]
    | [\p{Nd}]
    | [\p{Pc}]
    | '\u200C'
    | '\u200D'
    ;
fragment IdentifierStart
    : [\p{L}]
    | [$_]
    ;