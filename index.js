import antlr4 from 'antlr4';
import { readFileSync } from 'fs';
import GrammarLexer from './build/YapislangLexer';
import GrammarParser from './build/YapislangParser';
import GrammarListener from './build/YapislangCustomListener';

class Main {
  static parse() {
    const input = String(readFileSync('./examples/ex1.yap'));
    const chars = new antlr4.InputStream(input);

    const lexer = new GrammarLexer(chars);
    const tokens  = new antlr4.CommonTokenStream(lexer);
    const parser = new GrammarParser(tokens);

    lexer.removeErrorListeners();

    parser.buildParseTrees = true;

    const tree = parser.program();
    const listener = new GrammarListener();
    antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
  }
}

Main.parse()