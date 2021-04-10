import antlr4 from 'antlr4';
import GrammarLexer from './build/YapislangLexer';
import GrammarParser from './build/YapislangParser';
import GrammarListener from './build/YapislangCustomListener';
import Visitor from './build/YapislangVisitor';

import example from './examples/ex1.yap';

class Main {
  static parse() {
    fetch(example)
      .then((res) => res.text())
      .then((res) => {
        const input = res;
        const chars = new antlr4.InputStream(input);
    
        const lexer = new GrammarLexer(chars);
        const tokens  = new antlr4.CommonTokenStream(lexer);
        const parser = new GrammarParser(tokens);
    
        // lexer.removeErrorListeners();
    
        parser.buildParseTrees = true;
    
        const tree = parser.program();
    
        const r = tree.accept(new Visitor())
        console.log('r', r);
        // const listener = new GrammarListener();
        // antlr4.tree.ParseTreeWalker.DEFAULT.walk(listener, tree);
      })
  }
}

Main.parse()