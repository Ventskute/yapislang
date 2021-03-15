import antlr4 from 'antlr4';

export default class YapislangLexerBase extends antlr4.Lexer {
    constructor(input) {
        super(input);
        this.lastToken = null;
    }

    getCurrentToken() {
        return nextToken.call(this);
    }

    nextToken() {
        var next = super.nextToken.call(this);

        if (next.channel === antlr4.Token.DEFAULT_CHANNEL) {
            this.lastToken = next;
        }
        return next;
    }

    IsStartOfFile() {
        return this.lastToken === null;
    }
}