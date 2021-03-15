import antlr4 from 'antlr4';

export default class YapislangLexerBase extends antlr4.Lexer {
    constructor(input) {
        super(input);
        this.scopeStrictModes = new Array();
        this.lastToken = null;
        this.useStrictDefault = false;
        this.useStrictCurrent = false;
    }

    getStrictDefault() {
        return this.useStrictDefault;
    }

    setUseStrictDefault(value) {
        this.useStrictDefault = value;
        this.useStrictCurrent = value;
    }

    IsStrictMode() {
        return this.useStrictCurrent;
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

    ProcessOpenBrace() {
        this.useStrictCurrent =
            this.scopeStrictModes.length > 0 && this.scopeStrictModes[0]
                ? true
                : this.useStrictDefault;
        this.scopeStrictModes.push(this.useStrictCurrent);
    }

    ProcessCloseBrace() {
        this.useStrictCurrent =
            this.scopeStrictModes.length > 0
                ? this.scopeStrictModes.pop()
                : this.useStrictDefault;
    }

    ProcessStringLiteral() {
        if (
            this.lastToken !== undefined &&
            (this.lastToken === null ||
                this.lastToken.type === 5)
        ) {
            const text = this._input.strdata.slice(0, "use strict".length);
            if (text === '"use strict"' || text === "'use strict'") {
                if (this.scopeStrictModes.length > 0) {
                    this.scopeStrictModes.pop();
                }
                this.useStrictCurrent = true;
                this.scopeStrictModes.push(this.useStrictCurrent);
            }
        }
    }

    IsStartOfFile() {
        return this.lastToken === null;
    }
}