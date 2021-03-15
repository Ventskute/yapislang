import antlr4 from 'antlr4';
import { readFileSync } from 'fs';
import GrammarLexer from './build/YapislangLexer';
import GrammarParser from './build/YapislangParser';

class Main {
  static parse() {
    const input = String(readFileSync('./examples/ex3.yap'));
    const chars = new antlr4.InputStream(input);

    const lexer = new GrammarLexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new GrammarParser(tokens);

    lexer.removeErrorListeners();

    parser.buildParseTrees = true;
    parser.program();
  }
}

Main.parse()