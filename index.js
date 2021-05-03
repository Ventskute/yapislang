import antlr4 from 'antlr4';
import GrammarLexer from './build/YapislangLexer';
import GrammarParser from './build/YapislangParser';
import Visitor from './build/YapislangVisitor';
import compiler from './build/compiler';
import fs from 'fs';

export function main() {
  fs.readFile('./examples/test.yap', "utf8", (err, res) => {
      const input = res;
      const chars = new antlr4.InputStream(input);

      const lexer = new GrammarLexer(chars);
      const tokens  = new antlr4.CommonTokenStream(lexer);
      const parser = new GrammarParser(tokens);

      parser.buildParseTrees = true;

      const tree = parser.program();

      const r = tree.accept(new Visitor())
      console.log(r);

      compiler.print();
      compiler.write();
    })
}

main()