// Generated from YapislangParser.g by ANTLR 4.9.1
// jshint ignore: start
import antlr4 from 'antlr4';
import YapislangParserListener from './YapislangParserListener.js';
import YapislangParserVisitor from './YapislangParserVisitor.js';

import YapislangParserBase from './YapislangParserBase.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u00038\u01d2\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010",
    "\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014",
    "\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017",
    "\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b",
    "\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e",
    "\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004",
    "$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004*\t*\u0004",
    "+\t+\u0004,\t,\u0003\u0002\u0005\u0002Z\n\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0006\u0003_\n\u0003\r\u0003\u000e\u0003`\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005m\n\u0005\u0003\u0006\u0006",
    "\u0006p\n\u0006\r\u0006\u000e\u0006q\u0003\u0007\u0003\u0007\u0005\u0007",
    "v\n\u0007\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003\t\u0003\n\u0003",
    "\n\u0003\n\u0005\n\u0081\n\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0006\r\u008e",
    "\n\r\r\r\u000e\r\u008f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003",
    "\r\u0005\r\u0098\n\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0006\u000e\u00a2\n",
    "\u000e\r\u000e\u000e\u000e\u00a3\u0003\u000e\u0003\u000e\u0003\u000f",
    "\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00ad\n",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003",
    "\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00ba\n\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012",
    "\u0003\u0012\u0003\u0013\u0003\u0013\u0003\u0013\u0005\u0013\u00c4\n",
    "\u0013\u0003\u0013\u0003\u0013\u0003\u0014\u0003\u0014\u0003\u0014\u0007",
    "\u0014\u00cb\n\u0014\f\u0014\u000e\u0014\u00ce\u000b\u0014\u0003\u0015",
    "\u0005\u0015\u00d1\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005",
    "\u0015\u00d6\n\u0015\u0003\u0016\u0005\u0016\u00d9\n\u0016\u0003\u0017",
    "\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0007\u0018\u00e0\n",
    "\u0018\f\u0018\u000e\u0018\u00e3\u000b\u0018\u0003\u0018\u0005\u0018",
    "\u00e6\n\u0018\u0003\u0018\u0006\u0018\u00e9\n\u0018\r\u0018\u000e\u0018",
    "\u00ea\u0003\u0018\u0007\u0018\u00ee\n\u0018\f\u0018\u000e\u0018\u00f1",
    "\u000b\u0018\u0003\u0018\u0007\u0018\u00f4\n\u0018\f\u0018\u000e\u0018",
    "\u00f7\u000b\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0005\u001b\u0106\n\u001b\u0003\u001c",
    "\u0003\u001c\u0003\u001c\u0003\u001c\u0007\u001c\u010c\n\u001c\f\u001c",
    "\u000e\u001c\u010f\u000b\u001c\u0003\u001c\u0005\u001c\u0112\n\u001c",
    "\u0005\u001c\u0114\n\u001c\u0003\u001c\u0003\u001c\u0003\u001d\u0003",
    "\u001d\u0005\u001d\u011a\n\u001d\u0003\u001e\u0003\u001e\u0003\u001e",
    "\u0007\u001e\u011f\n\u001e\f\u001e\u000e\u001e\u0122\u000b\u001e\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0003\u001f\u0005\u001f\u013e\n\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0005\u001f\u0169\n\u001f\u0003",
    "\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003",
    "\u001f\u0005\u001f\u0172\n\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f\u0003\u001f",
    "\u0003\u001f\u0007\u001f\u017e\n\u001f\f\u001f\u000e\u001f\u0181\u000b",
    "\u001f\u0003 \u0003 \u0003!\u0003!\u0003!\u0003!\u0007!\u0189\n!\f!",
    "\u000e!\u018c\u000b!\u0005!\u018e\n!\u0003!\u0005!\u0191\n!\u0003!\u0003",
    "!\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0005\"\u019a\n\"\u0003\"",
    "\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003\"\u0003",
    "\"\u0005\"\u01a6\n\"\u0003#\u0003#\u0003#\u0005#\u01ab\n#\u0003#\u0005",
    "#\u01ae\n#\u0003$\u0003$\u0003$\u0003$\u0003$\u0005$\u01b5\n$\u0003",
    "%\u0003%\u0003&\u0003&\u0003&\u0005&\u01bc\n&\u0003\'\u0003\'\u0003",
    "(\u0003(\u0005(\u01c2\n(\u0003)\u0003)\u0003*\u0003*\u0005*\u01c8\n",
    "*\u0003+\u0003+\u0003,\u0003,\u0003,\u0003,\u0005,\u01d0\n,\u0003,\u0002",
    "\u0003<-\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018",
    "\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJLNPRTV\u0002\t\u0003\u0002",
    "/3\u0003\u0002\u0016\u0017\u0003\u0002\u0013\u0014\u0003\u0002\u0018",
    "\u001b\u0003\u0002\u001c\u001d\u0003\u0002 $\u0004\u0002()+.\u0002\u01f7",
    "\u0002Y\u0003\u0002\u0002\u0002\u0004^\u0003\u0002\u0002\u0002\u0006",
    "b\u0003\u0002\u0002\u0002\bl\u0003\u0002\u0002\u0002\no\u0003\u0002",
    "\u0002\u0002\fu\u0003\u0002\u0002\u0002\u000ew\u0003\u0002\u0002\u0002",
    "\u0010z\u0003\u0002\u0002\u0002\u0012}\u0003\u0002\u0002\u0002\u0014",
    "\u0082\u0003\u0002\u0002\u0002\u0016\u0084\u0003\u0002\u0002\u0002\u0018",
    "\u0087\u0003\u0002\u0002\u0002\u001a\u0099\u0003\u0002\u0002\u0002\u001c",
    "\u00a7\u0003\u0002\u0002\u0002\u001e\u00a9\u0003\u0002\u0002\u0002 ",
    "\u00b0\u0003\u0002\u0002\u0002\"\u00b4\u0003\u0002\u0002\u0002$\u00c0",
    "\u0003\u0002\u0002\u0002&\u00c7\u0003\u0002\u0002\u0002(\u00d0\u0003",
    "\u0002\u0002\u0002*\u00d8\u0003\u0002\u0002\u0002,\u00da\u0003\u0002",
    "\u0002\u0002.\u00e1\u0003\u0002\u0002\u00020\u00f8\u0003\u0002\u0002",
    "\u00022\u00fa\u0003\u0002\u0002\u00024\u0105\u0003\u0002\u0002\u0002",
    "6\u0107\u0003\u0002\u0002\u00028\u0119\u0003\u0002\u0002\u0002:\u011b",
    "\u0003\u0002\u0002\u0002<\u013d\u0003\u0002\u0002\u0002>\u0182\u0003",
    "\u0002\u0002\u0002@\u0184\u0003\u0002\u0002\u0002B\u01a5\u0003\u0002",
    "\u0002\u0002D\u01ad\u0003\u0002\u0002\u0002F\u01b4\u0003\u0002\u0002",
    "\u0002H\u01b6\u0003\u0002\u0002\u0002J\u01bb\u0003\u0002\u0002\u0002",
    "L\u01bd\u0003\u0002\u0002\u0002N\u01c1\u0003\u0002\u0002\u0002P\u01c3",
    "\u0003\u0002\u0002\u0002R\u01c7\u0003\u0002\u0002\u0002T\u01c9\u0003",
    "\u0002\u0002\u0002V\u01cf\u0003\u0002\u0002\u0002XZ\u0005\u0004\u0003",
    "\u0002YX\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002Z[\u0003\u0002",
    "\u0002\u0002[\\\u0007\u0002\u0002\u0003\\\u0003\u0003\u0002\u0002\u0002",
    "]_\u0005\u0006\u0004\u0002^]\u0003\u0002\u0002\u0002_`\u0003\u0002\u0002",
    "\u0002`^\u0003\u0002\u0002\u0002`a\u0003\u0002\u0002\u0002a\u0005\u0003",
    "\u0002\u0002\u0002bc\u0005\b\u0005\u0002c\u0007\u0003\u0002\u0002\u0002",
    "dm\u0005\u000e\b\u0002em\u0005\u0014\u000b\u0002fm\u0005\u0016\f\u0002",
    "gm\u0005\u0018\r\u0002hm\u0005\u001a\u000e\u0002im\u0005\u001e\u0010",
    "\u0002jm\u0005 \u0011\u0002km\u0005\"\u0012\u0002ld\u0003\u0002\u0002",
    "\u0002le\u0003\u0002\u0002\u0002lf\u0003\u0002\u0002\u0002lg\u0003\u0002",
    "\u0002\u0002lh\u0003\u0002\u0002\u0002li\u0003\u0002\u0002\u0002lj\u0003",
    "\u0002\u0002\u0002lk\u0003\u0002\u0002\u0002m\t\u0003\u0002\u0002\u0002",
    "np\u0005\b\u0005\u0002on\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002",
    "\u0002qo\u0003\u0002\u0002\u0002qr\u0003\u0002\u0002\u0002r\u000b\u0003",
    "\u0002\u0002\u0002sv\u0005\u000e\b\u0002tv\u0005\"\u0012\u0002us\u0003",
    "\u0002\u0002\u0002ut\u0003\u0002\u0002\u0002v\r\u0003\u0002\u0002\u0002",
    "wx\u0005\u0010\t\u0002xy\u0005V,\u0002y\u000f\u0003\u0002\u0002\u0002",
    "z{\u0005\u001c\u000f\u0002{|\u0005\u0012\n\u0002|\u0011\u0003\u0002",
    "\u0002\u0002}\u0080\u0005> \u0002~\u007f\u0007\r\u0002\u0002\u007f\u0081",
    "\u0005<\u001f\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003",
    "\u0002\u0002\u0002\u0081\u0013\u0003\u0002\u0002\u0002\u0082\u0083\u0007",
    "\u000b\u0002\u0002\u0083\u0015\u0003\u0002\u0002\u0002\u0084\u0085\u0006",
    "\f\u0002\u0002\u0085\u0086\u0005:\u001e\u0002\u0086\u0017\u0003\u0002",
    "\u0002\u0002\u0087\u0088\u0007-\u0002\u0002\u0088\u0089\u0007\u0007",
    "\u0002\u0002\u0089\u008a\u0005:\u001e\u0002\u008a\u008b\u0007\b\u0002",
    "\u0002\u008b\u008d\u0007\t\u0002\u0002\u008c\u008e\u0005\b\u0005\u0002",
    "\u008d\u008c\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002\u0002",
    "\u008f\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002",
    "\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0097\u0007\n\u0002\u0002",
    "\u0092\u0093\u0007(\u0002\u0002\u0093\u0094\u0007\t\u0002\u0002\u0094",
    "\u0095\u0005\n\u0006\u0002\u0095\u0096\u0007\n\u0002\u0002\u0096\u0098",
    "\u0003\u0002\u0002\u0002\u0097\u0092\u0003\u0002\u0002\u0002\u0097\u0098",
    "\u0003\u0002\u0002\u0002\u0098\u0019\u0003\u0002\u0002\u0002\u0099\u009a",
    "\u0007+\u0002\u0002\u009a\u009b\u0007\u0007\u0002\u0002\u009b\u009c",
    "\u0005\u0010\t\u0002\u009c\u009d\u0007.\u0002\u0002\u009d\u009e\u0005",
    "<\u001f\u0002\u009e\u009f\u0007\b\u0002\u0002\u009f\u00a1\u0007\t\u0002",
    "\u0002\u00a0\u00a2\u0005\b\u0005\u0002\u00a1\u00a0\u0003\u0002\u0002",
    "\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a1\u0003\u0002\u0002",
    "\u0002\u00a3\u00a4\u0003\u0002\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002",
    "\u0002\u00a5\u00a6\u0007\n\u0002\u0002\u00a6\u001b\u0003\u0002\u0002",
    "\u0002\u00a7\u00a8\t\u0002\u0002\u0002\u00a8\u001d\u0003\u0002\u0002",
    "\u0002\u00a9\u00ac\u0007)\u0002\u0002\u00aa\u00ab\u0006\u0010\u0003",
    "\u0002\u00ab\u00ad\u0005:\u001e\u0002\u00ac\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00ad\u0003\u0002\u0002\u0002\u00ad\u00ae\u0003\u0002\u0002",
    "\u0002\u00ae\u00af\u0005V,\u0002\u00af\u001f\u0003\u0002\u0002\u0002",
    "\u00b0\u00b1\u0005P)\u0002\u00b1\u00b2\u0007\u000f\u0002\u0002\u00b2",
    "\u00b3\u0005\b\u0005\u0002\u00b3!\u0003\u0002\u0002\u0002\u00b4\u00b5",
    "\u0005\u001c\u000f\u0002\u00b5\u00b6\u0007,\u0002\u0002\u00b6\u00b7",
    "\u0005P)\u0002\u00b7\u00b9\u0007\u0007\u0002\u0002\u00b8\u00ba\u0005",
    "&\u0014\u0002\u00b9\u00b8\u0003\u0002\u0002\u0002\u00b9\u00ba\u0003",
    "\u0002\u0002\u0002\u00ba\u00bb\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007",
    "\b\u0002\u0002\u00bc\u00bd\u0007\t\u0002\u0002\u00bd\u00be\u0005*\u0016",
    "\u0002\u00be\u00bf\u0007\n\u0002\u0002\u00bf#\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\u0005P)\u0002\u00c1\u00c3\u0007\u0007\u0002\u0002\u00c2",
    "\u00c4\u0005&\u0014\u0002\u00c3\u00c2\u0003\u0002\u0002\u0002\u00c3",
    "\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003\u0002\u0002\u0002\u00c5",
    "\u00c6\u0007\b\u0002\u0002\u00c6%\u0003\u0002\u0002\u0002\u00c7\u00cc",
    "\u0005(\u0015\u0002\u00c8\u00c9\u0007\f\u0002\u0002\u00c9\u00cb\u0005",
    "(\u0015\u0002\u00ca\u00c8\u0003\u0002\u0002\u0002\u00cb\u00ce\u0003",
    "\u0002\u0002\u0002\u00cc\u00ca\u0003\u0002\u0002\u0002\u00cc\u00cd\u0003",
    "\u0002\u0002\u0002\u00cd\'\u0003\u0002\u0002\u0002\u00ce\u00cc\u0003",
    "\u0002\u0002\u0002\u00cf\u00d1\u0005\u001c\u000f\u0002\u00d0\u00cf\u0003",
    "\u0002\u0002\u0002\u00d0\u00d1\u0003\u0002\u0002\u0002\u00d1\u00d2\u0003",
    "\u0002\u0002\u0002\u00d2\u00d5\u0005> \u0002\u00d3\u00d4\u0007\r\u0002",
    "\u0002\u00d4\u00d6\u0005<\u001f\u0002\u00d5\u00d3\u0003\u0002\u0002",
    "\u0002\u00d5\u00d6\u0003\u0002\u0002\u0002\u00d6)\u0003\u0002\u0002",
    "\u0002\u00d7\u00d9\u0005\u0004\u0003\u0002\u00d8\u00d7\u0003\u0002\u0002",
    "\u0002\u00d8\u00d9\u0003\u0002\u0002\u0002\u00d9+\u0003\u0002\u0002",
    "\u0002\u00da\u00db\u0007\u0005\u0002\u0002\u00db\u00dc\u0005.\u0018",
    "\u0002\u00dc\u00dd\u0007\u0006\u0002\u0002\u00dd-\u0003\u0002\u0002",
    "\u0002\u00de\u00e0\u0007\f\u0002\u0002\u00df\u00de\u0003\u0002\u0002",
    "\u0002\u00e0\u00e3\u0003\u0002\u0002\u0002\u00e1\u00df\u0003\u0002\u0002",
    "\u0002\u00e1\u00e2\u0003\u0002\u0002\u0002\u00e2\u00e5\u0003\u0002\u0002",
    "\u0002\u00e3\u00e1\u0003\u0002\u0002\u0002\u00e4\u00e6\u00050\u0019",
    "\u0002\u00e5\u00e4\u0003\u0002\u0002\u0002\u00e5\u00e6\u0003\u0002\u0002",
    "\u0002\u00e6\u00ef\u0003\u0002\u0002\u0002\u00e7\u00e9\u0007\f\u0002",
    "\u0002\u00e8\u00e7\u0003\u0002\u0002\u0002\u00e9\u00ea\u0003\u0002\u0002",
    "\u0002\u00ea\u00e8\u0003\u0002\u0002\u0002\u00ea\u00eb\u0003\u0002\u0002",
    "\u0002\u00eb\u00ec\u0003\u0002\u0002\u0002\u00ec\u00ee\u00050\u0019",
    "\u0002\u00ed\u00e8\u0003\u0002\u0002\u0002\u00ee\u00f1\u0003\u0002\u0002",
    "\u0002\u00ef\u00ed\u0003\u0002\u0002\u0002\u00ef\u00f0\u0003\u0002\u0002",
    "\u0002\u00f0\u00f5\u0003\u0002\u0002\u0002\u00f1\u00ef\u0003\u0002\u0002",
    "\u0002\u00f2\u00f4\u0007\f\u0002\u0002\u00f3\u00f2\u0003\u0002\u0002",
    "\u0002\u00f4\u00f7\u0003\u0002\u0002\u0002\u00f5\u00f3\u0003\u0002\u0002",
    "\u0002\u00f5\u00f6\u0003\u0002\u0002\u0002\u00f6/\u0003\u0002\u0002",
    "\u0002\u00f7\u00f5\u0003\u0002\u0002\u0002\u00f8\u00f9\u0005<\u001f",
    "\u0002\u00f91\u0003\u0002\u0002\u0002\u00fa\u00fb\u00054\u001b\u0002",
    "\u00fb\u00fc\u0007\u000f\u0002\u0002\u00fc\u00fd\u0005<\u001f\u0002",
    "\u00fd3\u0003\u0002\u0002\u0002\u00fe\u0106\u0005N(\u0002\u00ff\u0106",
    "\u00075\u0002\u0002\u0100\u0106\u0005L\'\u0002\u0101\u0102\u0007\u0005",
    "\u0002\u0002\u0102\u0103\u0005<\u001f\u0002\u0103\u0104\u0007\u0006",
    "\u0002\u0002\u0104\u0106\u0003\u0002\u0002\u0002\u0105\u00fe\u0003\u0002",
    "\u0002\u0002\u0105\u00ff\u0003\u0002\u0002\u0002\u0105\u0100\u0003\u0002",
    "\u0002\u0002\u0105\u0101\u0003\u0002\u0002\u0002\u01065\u0003\u0002",
    "\u0002\u0002\u0107\u0113\u0007\u0007\u0002\u0002\u0108\u010d\u00058",
    "\u001d\u0002\u0109\u010a\u0007\f\u0002\u0002\u010a\u010c\u00058\u001d",
    "\u0002\u010b\u0109\u0003\u0002\u0002\u0002\u010c\u010f\u0003\u0002\u0002",
    "\u0002\u010d\u010b\u0003\u0002\u0002\u0002\u010d\u010e\u0003\u0002\u0002",
    "\u0002\u010e\u0111\u0003\u0002\u0002\u0002\u010f\u010d\u0003\u0002\u0002",
    "\u0002\u0110\u0112\u0007\f\u0002\u0002\u0111\u0110\u0003\u0002\u0002",
    "\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112\u0114\u0003\u0002\u0002",
    "\u0002\u0113\u0108\u0003\u0002\u0002\u0002\u0113\u0114\u0003\u0002\u0002",
    "\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115\u0116\u0007\b\u0002",
    "\u0002\u01167\u0003\u0002\u0002\u0002\u0117\u011a\u0005<\u001f\u0002",
    "\u0118\u011a\u0005P)\u0002\u0119\u0117\u0003\u0002\u0002\u0002\u0119",
    "\u0118\u0003\u0002\u0002\u0002\u011a9\u0003\u0002\u0002\u0002\u011b",
    "\u0120\u0005<\u001f\u0002\u011c\u011d\u0007\f\u0002\u0002\u011d\u011f",
    "\u0005<\u001f\u0002\u011e\u011c\u0003\u0002\u0002\u0002\u011f\u0122",
    "\u0003\u0002\u0002\u0002\u0120\u011e\u0003\u0002\u0002\u0002\u0120\u0121",
    "\u0003\u0002\u0002\u0002\u0121;\u0003\u0002\u0002\u0002\u0122\u0120",
    "\u0003\u0002\u0002\u0002\u0123\u0124\b\u001f\u0001\u0002\u0124\u013e",
    "\u0005$\u0013\u0002\u0125\u013e\u0005B\"\u0002\u0126\u0127\u0007\u0007",
    "\u0002\u0002\u0127\u0128\u0005\u001c\u000f\u0002\u0128\u0129\u0007\b",
    "\u0002\u0002\u0129\u012a\u0005<\u001f\u001d\u012a\u013e\u0003\u0002",
    "\u0002\u0002\u012b\u012c\u0007\u0011\u0002\u0002\u012c\u013e\u0005<",
    "\u001f\u0016\u012d\u012e\u0007\u0012\u0002\u0002\u012e\u013e\u0005<",
    "\u001f\u0015\u012f\u0130\u0007\u0013\u0002\u0002\u0130\u013e\u0005<",
    "\u001f\u0014\u0131\u0132\u0007\u0014\u0002\u0002\u0132\u013e\u0005<",
    "\u001f\u0013\u0133\u0134\u0007\u0015\u0002\u0002\u0134\u013e\u0005<",
    "\u001f\u0012\u0135\u013e\u0005P)\u0002\u0136\u013e\u0005J&\u0002\u0137",
    "\u013e\u0005,\u0017\u0002\u0138\u013e\u0005@!\u0002\u0139\u013a\u0007",
    "\u0007\u0002\u0002\u013a\u013b\u0005:\u001e\u0002\u013b\u013c\u0007",
    "\b\u0002\u0002\u013c\u013e\u0003\u0002\u0002\u0002\u013d\u0123\u0003",
    "\u0002\u0002\u0002\u013d\u0125\u0003\u0002\u0002\u0002\u013d\u0126\u0003",
    "\u0002\u0002\u0002\u013d\u012b\u0003\u0002\u0002\u0002\u013d\u012d\u0003",
    "\u0002\u0002\u0002\u013d\u012f\u0003\u0002\u0002\u0002\u013d\u0131\u0003",
    "\u0002\u0002\u0002\u013d\u0133\u0003\u0002\u0002\u0002\u013d\u0135\u0003",
    "\u0002\u0002\u0002\u013d\u0136\u0003\u0002\u0002\u0002\u013d\u0137\u0003",
    "\u0002\u0002\u0002\u013d\u0138\u0003\u0002\u0002\u0002\u013d\u0139\u0003",
    "\u0002\u0002\u0002\u013e\u017f\u0003\u0002\u0002\u0002\u013f\u0140\f",
    "\u0011\u0002\u0002\u0140\u0141\u0007.\u0002\u0002\u0141\u017e\u0005",
    "<\u001f\u0012\u0142\u0143\f\u0010\u0002\u0002\u0143\u0144\t\u0003\u0002",
    "\u0002\u0144\u017e\u0005<\u001f\u0011\u0145\u0146\f\u000f\u0002\u0002",
    "\u0146\u0147\t\u0004\u0002\u0002\u0147\u017e\u0005<\u001f\u0010\u0148",
    "\u0149\f\u000e\u0002\u0002\u0149\u014a\t\u0005\u0002\u0002\u014a\u017e",
    "\u0005<\u001f\u000f\u014b\u014c\f\r\u0002\u0002\u014c\u014d\t\u0006",
    "\u0002\u0002\u014d\u017e\u0005<\u001f\u000e\u014e\u014f\f\f\u0002\u0002",
    "\u014f\u0150\u0007\u001e\u0002\u0002\u0150\u017e\u0005<\u001f\r\u0151",
    "\u0152\f\u000b\u0002\u0002\u0152\u0153\u0007\u001f\u0002\u0002\u0153",
    "\u017e\u0005<\u001f\f\u0154\u0155\f\n\u0002\u0002\u0155\u0156\u0007",
    "\u000e\u0002\u0002\u0156\u0157\u0005<\u001f\u0002\u0157\u0158\u0007",
    "\u000f\u0002\u0002\u0158\u0159\u0005<\u001f\u000b\u0159\u017e\u0003",
    "\u0002\u0002\u0002\u015a\u015b\f\t\u0002\u0002\u015b\u015c\u0007\r\u0002",
    "\u0002\u015c\u017e\u0005<\u001f\t\u015d\u015e\f\b\u0002\u0002\u015e",
    "\u015f\u0005H%\u0002\u015f\u0160\u0005<\u001f\b\u0160\u017e\u0003\u0002",
    "\u0002\u0002\u0161\u0162\f\u001c\u0002\u0002\u0162\u0163\u0007\u0005",
    "\u0002\u0002\u0163\u0164\u0005:\u001e\u0002\u0164\u0165\u0007\u0006",
    "\u0002\u0002\u0165\u017e\u0003\u0002\u0002\u0002\u0166\u0168\f\u001b",
    "\u0002\u0002\u0167\u0169\u0007\u000e\u0002\u0002\u0168\u0167\u0003\u0002",
    "\u0002\u0002\u0168\u0169\u0003\u0002\u0002\u0002\u0169\u016a\u0003\u0002",
    "\u0002\u0002\u016a\u016b\u0007\u0010\u0002\u0002\u016b\u017e\u0005N",
    "(\u0002\u016c\u016d\f\u001a\u0002\u0002\u016d\u016e\u0007\u0010\u0002",
    "\u0002\u016e\u016f\u0005N(\u0002\u016f\u0171\u0007\u0007\u0002\u0002",
    "\u0170\u0172\u0005&\u0014\u0002\u0171\u0170\u0003\u0002\u0002\u0002",
    "\u0171\u0172\u0003\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002",
    "\u0173\u0174\u0007\b\u0002\u0002\u0174\u017e\u0003\u0002\u0002\u0002",
    "\u0175\u0176\f\u0019\u0002\u0002\u0176\u017e\u00056\u001c\u0002\u0177",
    "\u0178\f\u0018\u0002\u0002\u0178\u0179\u0006\u001f\u0013\u0002\u0179",
    "\u017e\u0007\u0011\u0002\u0002\u017a\u017b\f\u0017\u0002\u0002\u017b",
    "\u017c\u0006\u001f\u0015\u0002\u017c\u017e\u0007\u0012\u0002\u0002\u017d",
    "\u013f\u0003\u0002\u0002\u0002\u017d\u0142\u0003\u0002\u0002\u0002\u017d",
    "\u0145\u0003\u0002\u0002\u0002\u017d\u0148\u0003\u0002\u0002\u0002\u017d",
    "\u014b\u0003\u0002\u0002\u0002\u017d\u014e\u0003\u0002\u0002\u0002\u017d",
    "\u0151\u0003\u0002\u0002\u0002\u017d\u0154\u0003\u0002\u0002\u0002\u017d",
    "\u015a\u0003\u0002\u0002\u0002\u017d\u015d\u0003\u0002\u0002\u0002\u017d",
    "\u0161\u0003\u0002\u0002\u0002\u017d\u0166\u0003\u0002\u0002\u0002\u017d",
    "\u016c\u0003\u0002\u0002\u0002\u017d\u0175\u0003\u0002\u0002\u0002\u017d",
    "\u0177\u0003\u0002\u0002\u0002\u017d\u017a\u0003\u0002\u0002\u0002\u017e",
    "\u0181\u0003\u0002\u0002\u0002\u017f\u017d\u0003\u0002\u0002\u0002\u017f",
    "\u0180\u0003\u0002\u0002\u0002\u0180=\u0003\u0002\u0002\u0002\u0181",
    "\u017f\u0003\u0002\u0002\u0002\u0182\u0183\u0005P)\u0002\u0183?\u0003",
    "\u0002\u0002\u0002\u0184\u018d\u0007\t\u0002\u0002\u0185\u018a\u0005",
    "2\u001a\u0002\u0186\u0187\u0007\f\u0002\u0002\u0187\u0189\u00052\u001a",
    "\u0002\u0188\u0186\u0003\u0002\u0002\u0002\u0189\u018c\u0003\u0002\u0002",
    "\u0002\u018a\u0188\u0003\u0002\u0002\u0002\u018a\u018b\u0003\u0002\u0002",
    "\u0002\u018b\u018e\u0003\u0002\u0002\u0002\u018c\u018a\u0003\u0002\u0002",
    "\u0002\u018d\u0185\u0003\u0002\u0002\u0002\u018d\u018e\u0003\u0002\u0002",
    "\u0002\u018e\u0190\u0003\u0002\u0002\u0002\u018f\u0191\u0007\f\u0002",
    "\u0002\u0190\u018f\u0003\u0002\u0002\u0002\u0190\u0191\u0003\u0002\u0002",
    "\u0002\u0191\u0192\u0003\u0002\u0002\u0002\u0192\u0193\u0007\n\u0002",
    "\u0002\u0193A\u0003\u0002\u0002\u0002\u0194\u01a6\u0005\"\u0012\u0002",
    "\u0195\u0196\u0005\u001c\u000f\u0002\u0196\u0197\u0007,\u0002\u0002",
    "\u0197\u0199\u0007\u0007\u0002\u0002\u0198\u019a\u0005&\u0014\u0002",
    "\u0199\u0198\u0003\u0002\u0002\u0002\u0199\u019a\u0003\u0002\u0002\u0002",
    "\u019a\u019b\u0003\u0002\u0002\u0002\u019b\u019c\u0007\b\u0002\u0002",
    "\u019c\u019d\u0007\t\u0002\u0002\u019d\u019e\u0005*\u0016\u0002\u019e",
    "\u019f\u0007\n\u0002\u0002\u019f\u01a6\u0003\u0002\u0002\u0002\u01a0",
    "\u01a1\u0005\u001c\u000f\u0002\u01a1\u01a2\u0005D#\u0002\u01a2\u01a3",
    "\u0007%\u0002\u0002\u01a3\u01a4\u0005F$\u0002\u01a4\u01a6\u0003\u0002",
    "\u0002\u0002\u01a5\u0194\u0003\u0002\u0002\u0002\u01a5\u0195\u0003\u0002",
    "\u0002\u0002\u01a5\u01a0\u0003\u0002\u0002\u0002\u01a6C\u0003\u0002",
    "\u0002\u0002\u01a7\u01ae\u0005P)\u0002\u01a8\u01aa\u0007\u0007\u0002",
    "\u0002\u01a9\u01ab\u0005&\u0014\u0002\u01aa\u01a9\u0003\u0002\u0002",
    "\u0002\u01aa\u01ab\u0003\u0002\u0002\u0002\u01ab\u01ac\u0003\u0002\u0002",
    "\u0002\u01ac\u01ae\u0007\b\u0002\u0002\u01ad\u01a7\u0003\u0002\u0002",
    "\u0002\u01ad\u01a8\u0003\u0002\u0002\u0002\u01aeE\u0003\u0002\u0002",
    "\u0002\u01af\u01b5\u0005<\u001f\u0002\u01b0\u01b1\u0007\t\u0002\u0002",
    "\u01b1\u01b2\u0005*\u0016\u0002\u01b2\u01b3\u0007\n\u0002\u0002\u01b3",
    "\u01b5\u0003\u0002\u0002\u0002\u01b4\u01af\u0003\u0002\u0002\u0002\u01b4",
    "\u01b0\u0003\u0002\u0002\u0002\u01b5G\u0003\u0002\u0002\u0002\u01b6",
    "\u01b7\t\u0007\u0002\u0002\u01b7I\u0003\u0002\u0002\u0002\u01b8\u01bc",
    "\u0007&\u0002\u0002\u01b9\u01bc\u00075\u0002\u0002\u01ba\u01bc\u0005",
    "L\'\u0002\u01bb\u01b8\u0003\u0002\u0002\u0002\u01bb\u01b9\u0003\u0002",
    "\u0002\u0002\u01bb\u01ba\u0003\u0002\u0002\u0002\u01bcK\u0003\u0002",
    "\u0002\u0002\u01bd\u01be\u0007\'\u0002\u0002\u01beM\u0003\u0002\u0002",
    "\u0002\u01bf\u01c2\u0005P)\u0002\u01c0\u01c2\u0005R*\u0002\u01c1\u01bf",
    "\u0003\u0002\u0002\u0002\u01c1\u01c0\u0003\u0002\u0002\u0002\u01c2O",
    "\u0003\u0002\u0002\u0002\u01c3\u01c4\u00074\u0002\u0002\u01c4Q\u0003",
    "\u0002\u0002\u0002\u01c5\u01c8\u0005T+\u0002\u01c6\u01c8\u0007&\u0002",
    "\u0002\u01c7\u01c5\u0003\u0002\u0002\u0002\u01c7\u01c6\u0003\u0002\u0002",
    "\u0002\u01c8S\u0003\u0002\u0002\u0002\u01c9\u01ca\t\b\u0002\u0002\u01ca",
    "U\u0003\u0002\u0002\u0002\u01cb\u01d0\u0007\u000b\u0002\u0002\u01cc",
    "\u01d0\u0007\u0002\u0002\u0003\u01cd\u01d0\u0006,\u0016\u0002\u01ce",
    "\u01d0\u0006,\u0017\u0002\u01cf\u01cb\u0003\u0002\u0002\u0002\u01cf",
    "\u01cc\u0003\u0002\u0002\u0002\u01cf\u01cd\u0003\u0002\u0002\u0002\u01cf",
    "\u01ce\u0003\u0002\u0002\u0002\u01d0W\u0003\u0002\u0002\u0002.Y`lqu",
    "\u0080\u008f\u0097\u00a3\u00ac\u00b9\u00c3\u00cc\u00d0\u00d5\u00d8\u00e1",
    "\u00e5\u00ea\u00ef\u00f5\u0105\u010d\u0111\u0113\u0119\u0120\u013d\u0168",
    "\u0171\u017d\u017f\u018a\u018d\u0190\u0199\u01a5\u01aa\u01ad\u01b4\u01bb",
    "\u01c1\u01c7\u01cf"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class YapislangParser extends YapislangParserBase {

    static grammarFileName = "YapislangParser.g";
    static literalNames = [ null, null, null, "'['", "']'", "'('", "')'", 
                            "'{'", "'}'", "';'", "','", "'='", "'?'", "':'", 
                            "'.'", "'++'", "'--'", "'+'", "'-'", "'!'", 
                            "'*'", "'/'", "'<'", "'>'", "'<='", "'>='", 
                            "'=='", "'!='", "'&&'", "'||'", "'*='", "'/='", 
                            "'%='", "'+='", "'-='", "'=>'", null, null, 
                            "'else'", "'return'", "'continue'", "'for'", 
                            "'func'", "'if'", "'in'", "'string'", "'string[]'", 
                            "'char'", "'int'", "'bool'" ];
    static symbolicNames = [ null, "MultiLineComment", "SingleLineComment", 
                             "OpenBracket", "CloseBracket", "OpenParen", 
                             "CloseParen", "OpenBrace", "CloseBrace", "SemiColon", 
                             "Comma", "Assign", "QuestionMark", "Colon", 
                             "Dot", "PlusPlus", "MinusMinus", "Plus", "Minus", 
                             "Not", "Multiply", "Divide", "LessThan", "MoreThan", 
                             "LessThanEquals", "GreaterThanEquals", "Equals_", 
                             "NotEquals", "And", "Or", "MultiplyAssign", 
                             "DivideAssign", "ModulusAssign", "PlusAssign", 
                             "MinusAssign", "Arrow", "BooleanLiteral", "DecimalLiteral", 
                             "Else", "Return", "Continue", "For", "Function", 
                             "If", "In", "String", "StringList", "Char", 
                             "Int", "Bool", "Identifier", "StringLiteral", 
                             "WhiteSpaces", "LineTerminator", "UnexpectedCharacter" ];
    static ruleNames = [ "program", "sourceElements", "sourceElement", "statement", 
                         "statementList", "declaration", "variableStatement", 
                         "variableDeclarationList", "variableDeclaration", 
                         "emptyStatement", "expressionStatement", "ifStatement", 
                         "iterationStatement", "varModifier", "returnStatement", 
                         "labelledStatement", "functionDeclaration", "functionCall", 
                         "formalParameterList", "formalParameterArg", "functionBody", 
                         "arrayLiteral", "elementList", "arrayElement", 
                         "propertyAssignment", "propertyName", "arguments", 
                         "argument", "expressionSequence", "singleExpression", 
                         "assignable", "objectLiteral", "anonymousFunction", 
                         "arrowFunctionParameters", "arrowFunctionBody", 
                         "assignmentOperator", "literal", "numericLiteral", 
                         "identifierName", "identifier", "reservedWord", 
                         "keyword", "eos" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = YapislangParser.ruleNames;
        this.literalNames = YapislangParser.literalNames;
        this.symbolicNames = YapislangParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 10:
    	    		return this.expressionStatement_sempred(localctx, predIndex);
    	case 14:
    	    		return this.returnStatement_sempred(localctx, predIndex);
    	case 29:
    	    		return this.singleExpression_sempred(localctx, predIndex);
    	case 42:
    	    		return this.eos_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expressionStatement_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.notOpenBraceAndNotFunction();
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    returnStatement_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.notLineTerminator();
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    singleExpression_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 2:
    			return this.precpred(this._ctx, 15);
    		case 3:
    			return this.precpred(this._ctx, 14);
    		case 4:
    			return this.precpred(this._ctx, 13);
    		case 5:
    			return this.precpred(this._ctx, 12);
    		case 6:
    			return this.precpred(this._ctx, 11);
    		case 7:
    			return this.precpred(this._ctx, 10);
    		case 8:
    			return this.precpred(this._ctx, 9);
    		case 9:
    			return this.precpred(this._ctx, 8);
    		case 10:
    			return this.precpred(this._ctx, 7);
    		case 11:
    			return this.precpred(this._ctx, 6);
    		case 12:
    			return this.precpred(this._ctx, 26);
    		case 13:
    			return this.precpred(this._ctx, 25);
    		case 14:
    			return this.precpred(this._ctx, 24);
    		case 15:
    			return this.precpred(this._ctx, 23);
    		case 16:
    			return this.precpred(this._ctx, 22);
    		case 17:
    			return this.notLineTerminator();
    		case 18:
    			return this.precpred(this._ctx, 21);
    		case 19:
    			return this.notLineTerminator();
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    eos_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 20:
    			return this.lineTerminatorAhead();
    		case 21:
    			return this.closeBrace();
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, YapislangParser.RULE_program);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 87;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,0,this._ctx);
	        if(la_===1) {
	            this.state = 86;
	            this.sourceElements();

	        }
	        this.state = 89;
	        this.match(YapislangParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sourceElements() {
	    let localctx = new SourceElementsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, YapislangParser.RULE_sourceElements);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 92; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 91;
	        		this.sourceElement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 94; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,1, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sourceElement() {
	    let localctx = new SourceElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, YapislangParser.RULE_sourceElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, YapislangParser.RULE_statement);
	    try {
	        this.state = 106;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.variableStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.emptyStatement();
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 100;
	            this.expressionStatement();
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 101;
	            this.ifStatement();
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 102;
	            this.iterationStatement();
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 103;
	            this.returnStatement();
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 104;
	            this.labelledStatement();
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 105;
	            this.functionDeclaration();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statementList() {
	    let localctx = new StatementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, YapislangParser.RULE_statementList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 109; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 108;
	        		this.statement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 111; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,3, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	declaration() {
	    let localctx = new DeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, YapislangParser.RULE_declaration);
	    try {
	        this.state = 115;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 113;
	            this.variableStatement();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 114;
	            this.functionDeclaration();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableStatement() {
	    let localctx = new VariableStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, YapislangParser.RULE_variableStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 117;
	        this.variableDeclarationList();
	        this.state = 118;
	        this.eos();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclarationList() {
	    let localctx = new VariableDeclarationListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, YapislangParser.RULE_variableDeclarationList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 120;
	        this.varModifier();
	        this.state = 121;
	        this.variableDeclaration();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variableDeclaration() {
	    let localctx = new VariableDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, YapislangParser.RULE_variableDeclaration);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 123;
	        this.assignable();
	        this.state = 126;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        if(la_===1) {
	            this.state = 124;
	            this.match(YapislangParser.Assign);
	            this.state = 125;
	            this.singleExpression(0);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	emptyStatement() {
	    let localctx = new EmptyStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, YapislangParser.RULE_emptyStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 128;
	        this.match(YapislangParser.SemiColon);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionStatement() {
	    let localctx = new ExpressionStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, YapislangParser.RULE_expressionStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 130;
	        if (!( this.notOpenBraceAndNotFunction())) {
	            throw new antlr4.error.FailedPredicateException(this, "this.notOpenBraceAndNotFunction()");
	        }
	        this.state = 131;
	        this.expressionSequence();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	ifStatement() {
	    let localctx = new IfStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, YapislangParser.RULE_ifStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(YapislangParser.If);
	        this.state = 134;
	        this.match(YapislangParser.OpenParen);
	        this.state = 135;
	        this.expressionSequence();
	        this.state = 136;
	        this.match(YapislangParser.CloseParen);
	        this.state = 137;
	        this.match(YapislangParser.OpenBrace);
	        this.state = 139; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 138;
	        		this.statement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 141; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,6, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 143;
	        this.match(YapislangParser.CloseBrace);
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,7,this._ctx);
	        if(la_===1) {
	            this.state = 144;
	            this.match(YapislangParser.Else);
	            this.state = 145;
	            this.match(YapislangParser.OpenBrace);
	            this.state = 146;
	            this.statementList();
	            this.state = 147;
	            this.match(YapislangParser.CloseBrace);

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	iterationStatement() {
	    let localctx = new IterationStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, YapislangParser.RULE_iterationStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 151;
	        this.match(YapislangParser.For);
	        this.state = 152;
	        this.match(YapislangParser.OpenParen);
	        this.state = 153;
	        this.variableDeclarationList();
	        this.state = 154;
	        this.match(YapislangParser.In);
	        this.state = 155;
	        this.singleExpression(0);
	        this.state = 156;
	        this.match(YapislangParser.CloseParen);
	        this.state = 157;
	        this.match(YapislangParser.OpenBrace);
	        this.state = 159; 
	        this._errHandler.sync(this);
	        var _alt = 1;
	        do {
	        	switch (_alt) {
	        	case 1:
	        		this.state = 158;
	        		this.statement();
	        		break;
	        	default:
	        		throw new antlr4.error.NoViableAltException(this);
	        	}
	        	this.state = 161; 
	        	this._errHandler.sync(this);
	        	_alt = this._interp.adaptivePredict(this._input,8, this._ctx);
	        } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	        this.state = 163;
	        this.match(YapislangParser.CloseBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	varModifier() {
	    let localctx = new VarModifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, YapislangParser.RULE_varModifier);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 165;
	        _la = this._input.LA(1);
	        if(!(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (YapislangParser.String - 45)) | (1 << (YapislangParser.StringList - 45)) | (1 << (YapislangParser.Char - 45)) | (1 << (YapislangParser.Int - 45)) | (1 << (YapislangParser.Bool - 45)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	returnStatement() {
	    let localctx = new ReturnStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, YapislangParser.RULE_returnStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        this.match(YapislangParser.Return);
	        this.state = 170;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        if(la_===1) {
	            this.state = 168;
	            if (!( this.notLineTerminator())) {
	                throw new antlr4.error.FailedPredicateException(this, "this.notLineTerminator()");
	            }
	            this.state = 169;
	            this.expressionSequence();

	        }
	        this.state = 172;
	        this.eos();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	labelledStatement() {
	    let localctx = new LabelledStatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, YapislangParser.RULE_labelledStatement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 174;
	        this.identifier();
	        this.state = 175;
	        this.match(YapislangParser.Colon);
	        this.state = 176;
	        this.statement();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDeclaration() {
	    let localctx = new FunctionDeclarationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, YapislangParser.RULE_functionDeclaration);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 178;
	        this.varModifier();
	        this.state = 179;
	        this.match(YapislangParser.Function);
	        this.state = 180;
	        this.identifier();
	        this.state = 181;
	        this.match(YapislangParser.OpenParen);
	        this.state = 183;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (YapislangParser.String - 45)) | (1 << (YapislangParser.StringList - 45)) | (1 << (YapislangParser.Char - 45)) | (1 << (YapislangParser.Int - 45)) | (1 << (YapislangParser.Bool - 45)) | (1 << (YapislangParser.Identifier - 45)))) !== 0)) {
	            this.state = 182;
	            this.formalParameterList();
	        }

	        this.state = 185;
	        this.match(YapislangParser.CloseParen);
	        this.state = 186;
	        this.match(YapislangParser.OpenBrace);
	        this.state = 187;
	        this.functionBody();
	        this.state = 188;
	        this.match(YapislangParser.CloseBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionCall() {
	    let localctx = new FunctionCallContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, YapislangParser.RULE_functionCall);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 190;
	        this.identifier();
	        this.state = 191;
	        this.match(YapislangParser.OpenParen);
	        this.state = 193;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (YapislangParser.String - 45)) | (1 << (YapislangParser.StringList - 45)) | (1 << (YapislangParser.Char - 45)) | (1 << (YapislangParser.Int - 45)) | (1 << (YapislangParser.Bool - 45)) | (1 << (YapislangParser.Identifier - 45)))) !== 0)) {
	            this.state = 192;
	            this.formalParameterList();
	        }

	        this.state = 195;
	        this.match(YapislangParser.CloseParen);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalParameterList() {
	    let localctx = new FormalParameterListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, YapislangParser.RULE_formalParameterList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 197;
	        this.formalParameterArg();
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===YapislangParser.Comma) {
	            this.state = 198;
	            this.match(YapislangParser.Comma);
	            this.state = 199;
	            this.formalParameterArg();
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formalParameterArg() {
	    let localctx = new FormalParameterArgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, YapislangParser.RULE_formalParameterArg);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 206;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (YapislangParser.String - 45)) | (1 << (YapislangParser.StringList - 45)) | (1 << (YapislangParser.Char - 45)) | (1 << (YapislangParser.Int - 45)) | (1 << (YapislangParser.Bool - 45)))) !== 0)) {
	            this.state = 205;
	            this.varModifier();
	        }

	        this.state = 208;
	        this.assignable();
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===YapislangParser.Assign) {
	            this.state = 209;
	            this.match(YapislangParser.Assign);
	            this.state = 210;
	            this.singleExpression(0);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionBody() {
	    let localctx = new FunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, YapislangParser.RULE_functionBody);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
	        if(la_===1) {
	            this.state = 213;
	            this.sourceElements();

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayLiteral() {
	    let localctx = new ArrayLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, YapislangParser.RULE_arrayLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 216;
	        this.match(YapislangParser.OpenBracket);
	        this.state = 217;
	        this.elementList();
	        this.state = 218;
	        this.match(YapislangParser.CloseBracket);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	elementList() {
	    let localctx = new ElementListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, YapislangParser.RULE_elementList);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 223;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,16,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 220;
	                this.match(YapislangParser.Comma); 
	            }
	            this.state = 225;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,16,this._ctx);
	        }

	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YapislangParser.OpenBracket) | (1 << YapislangParser.OpenParen) | (1 << YapislangParser.OpenBrace) | (1 << YapislangParser.PlusPlus) | (1 << YapislangParser.MinusMinus) | (1 << YapislangParser.Plus) | (1 << YapislangParser.Minus) | (1 << YapislangParser.Not))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (YapislangParser.BooleanLiteral - 36)) | (1 << (YapislangParser.DecimalLiteral - 36)) | (1 << (YapislangParser.String - 36)) | (1 << (YapislangParser.StringList - 36)) | (1 << (YapislangParser.Char - 36)) | (1 << (YapislangParser.Int - 36)) | (1 << (YapislangParser.Bool - 36)) | (1 << (YapislangParser.Identifier - 36)) | (1 << (YapislangParser.StringLiteral - 36)))) !== 0)) {
	            this.state = 226;
	            this.arrayElement();
	        }

	        this.state = 237;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 230; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                do {
	                    this.state = 229;
	                    this.match(YapislangParser.Comma);
	                    this.state = 232; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                } while(_la===YapislangParser.Comma);
	                this.state = 234;
	                this.arrayElement(); 
	            }
	            this.state = 239;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	        }

	        this.state = 243;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===YapislangParser.Comma) {
	            this.state = 240;
	            this.match(YapislangParser.Comma);
	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrayElement() {
	    let localctx = new ArrayElementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, YapislangParser.RULE_arrayElement);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 246;
	        this.singleExpression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	propertyAssignment() {
	    let localctx = new PropertyAssignmentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, YapislangParser.RULE_propertyAssignment);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 248;
	        this.propertyName();
	        this.state = 249;
	        this.match(YapislangParser.Colon);
	        this.state = 250;
	        this.singleExpression(0);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	propertyName() {
	    let localctx = new PropertyNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, YapislangParser.RULE_propertyName);
	    try {
	        this.state = 259;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case YapislangParser.BooleanLiteral:
	        case YapislangParser.Else:
	        case YapislangParser.Return:
	        case YapislangParser.For:
	        case YapislangParser.Function:
	        case YapislangParser.If:
	        case YapislangParser.In:
	        case YapislangParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 252;
	            this.identifierName();
	            break;
	        case YapislangParser.StringLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 253;
	            this.match(YapislangParser.StringLiteral);
	            break;
	        case YapislangParser.DecimalLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 254;
	            this.numericLiteral();
	            break;
	        case YapislangParser.OpenBracket:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 255;
	            this.match(YapislangParser.OpenBracket);
	            this.state = 256;
	            this.singleExpression(0);
	            this.state = 257;
	            this.match(YapislangParser.CloseBracket);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arguments() {
	    let localctx = new ArgumentsContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, YapislangParser.RULE_arguments);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 261;
	        this.match(YapislangParser.OpenParen);
	        this.state = 273;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YapislangParser.OpenBracket) | (1 << YapislangParser.OpenParen) | (1 << YapislangParser.OpenBrace) | (1 << YapislangParser.PlusPlus) | (1 << YapislangParser.MinusMinus) | (1 << YapislangParser.Plus) | (1 << YapislangParser.Minus) | (1 << YapislangParser.Not))) !== 0) || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (YapislangParser.BooleanLiteral - 36)) | (1 << (YapislangParser.DecimalLiteral - 36)) | (1 << (YapislangParser.String - 36)) | (1 << (YapislangParser.StringList - 36)) | (1 << (YapislangParser.Char - 36)) | (1 << (YapislangParser.Int - 36)) | (1 << (YapislangParser.Bool - 36)) | (1 << (YapislangParser.Identifier - 36)) | (1 << (YapislangParser.StringLiteral - 36)))) !== 0)) {
	            this.state = 262;
	            this.argument();
	            this.state = 267;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,22,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 263;
	                    this.match(YapislangParser.Comma);
	                    this.state = 264;
	                    this.argument(); 
	                }
	                this.state = 269;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,22,this._ctx);
	            }

	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===YapislangParser.Comma) {
	                this.state = 270;
	                this.match(YapislangParser.Comma);
	            }

	        }

	        this.state = 275;
	        this.match(YapislangParser.CloseParen);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argument() {
	    let localctx = new ArgumentContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, YapislangParser.RULE_argument);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 279;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,25,this._ctx);
	        switch(la_) {
	        case 1:
	            this.state = 277;
	            this.singleExpression(0);
	            break;

	        case 2:
	            this.state = 278;
	            this.identifier();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expressionSequence() {
	    let localctx = new ExpressionSequenceContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, YapislangParser.RULE_expressionSequence);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.singleExpression(0);
	        this.state = 286;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 282;
	                this.match(YapislangParser.Comma);
	                this.state = 283;
	                this.singleExpression(0); 
	            }
	            this.state = 288;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	singleExpression(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new SingleExpressionContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 58;
	    this.enterRecursionRule(localctx, 58, YapislangParser.RULE_singleExpression, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 315;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,27,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 290;
	            this.functionCall();
	            break;

	        case 2:
	            localctx = new AnonymousFunctionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 291;
	            this.anonymousFunction();
	            break;

	        case 3:
	            localctx = new TypeAssertionExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 292;
	            this.match(YapislangParser.OpenParen);
	            this.state = 293;
	            this.varModifier();
	            this.state = 294;
	            this.match(YapislangParser.CloseParen);
	            this.state = 295;
	            this.singleExpression(27);
	            break;

	        case 4:
	            localctx = new PreIncrementExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 297;
	            this.match(YapislangParser.PlusPlus);
	            this.state = 298;
	            this.singleExpression(20);
	            break;

	        case 5:
	            localctx = new PreDecreaseExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 299;
	            this.match(YapislangParser.MinusMinus);
	            this.state = 300;
	            this.singleExpression(19);
	            break;

	        case 6:
	            localctx = new UnaryPlusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 301;
	            this.match(YapislangParser.Plus);
	            this.state = 302;
	            this.singleExpression(18);
	            break;

	        case 7:
	            localctx = new UnaryMinusExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 303;
	            this.match(YapislangParser.Minus);
	            this.state = 304;
	            this.singleExpression(17);
	            break;

	        case 8:
	            localctx = new NotExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 305;
	            this.match(YapislangParser.Not);
	            this.state = 306;
	            this.singleExpression(16);
	            break;

	        case 9:
	            localctx = new IdentifierExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 307;
	            this.identifier();
	            break;

	        case 10:
	            localctx = new LiteralExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 308;
	            this.literal();
	            break;

	        case 11:
	            localctx = new ArrayLiteralExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 309;
	            this.arrayLiteral();
	            break;

	        case 12:
	            localctx = new ObjectLiteralExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 310;
	            this.objectLiteral();
	            break;

	        case 13:
	            localctx = new ParenthesizedExpressionContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 311;
	            this.match(YapislangParser.OpenParen);
	            this.state = 312;
	            this.expressionSequence();
	            this.state = 313;
	            this.match(YapislangParser.CloseParen);
	            break;

	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 381;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,31,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 379;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new InExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 317;
	                    if (!( this.precpred(this._ctx, 15))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 15)");
	                    }
	                    this.state = 318;
	                    this.match(YapislangParser.In);
	                    this.state = 319;
	                    this.singleExpression(16);
	                    break;

	                case 2:
	                    localctx = new MultiplicativeExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 320;
	                    if (!( this.precpred(this._ctx, 14))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 14)");
	                    }
	                    this.state = 321;
	                    _la = this._input.LA(1);
	                    if(!(_la===YapislangParser.Multiply || _la===YapislangParser.Divide)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 322;
	                    this.singleExpression(15);
	                    break;

	                case 3:
	                    localctx = new AdditiveExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 323;
	                    if (!( this.precpred(this._ctx, 13))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 13)");
	                    }
	                    this.state = 324;
	                    _la = this._input.LA(1);
	                    if(!(_la===YapislangParser.Plus || _la===YapislangParser.Minus)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 325;
	                    this.singleExpression(14);
	                    break;

	                case 4:
	                    localctx = new RelationalExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 326;
	                    if (!( this.precpred(this._ctx, 12))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 12)");
	                    }
	                    this.state = 327;
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << YapislangParser.LessThan) | (1 << YapislangParser.MoreThan) | (1 << YapislangParser.LessThanEquals) | (1 << YapislangParser.GreaterThanEquals))) !== 0))) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 328;
	                    this.singleExpression(13);
	                    break;

	                case 5:
	                    localctx = new EqualityExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 329;
	                    if (!( this.precpred(this._ctx, 11))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 11)");
	                    }
	                    this.state = 330;
	                    _la = this._input.LA(1);
	                    if(!(_la===YapislangParser.Equals_ || _la===YapislangParser.NotEquals)) {
	                    this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 331;
	                    this.singleExpression(12);
	                    break;

	                case 6:
	                    localctx = new LogicalAndExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 332;
	                    if (!( this.precpred(this._ctx, 10))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 10)");
	                    }
	                    this.state = 333;
	                    this.match(YapislangParser.And);
	                    this.state = 334;
	                    this.singleExpression(11);
	                    break;

	                case 7:
	                    localctx = new LogicalOrExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 335;
	                    if (!( this.precpred(this._ctx, 9))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 9)");
	                    }
	                    this.state = 336;
	                    this.match(YapislangParser.Or);
	                    this.state = 337;
	                    this.singleExpression(10);
	                    break;

	                case 8:
	                    localctx = new TernaryExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 338;
	                    if (!( this.precpred(this._ctx, 8))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 8)");
	                    }
	                    this.state = 339;
	                    this.match(YapislangParser.QuestionMark);
	                    this.state = 340;
	                    this.singleExpression(0);
	                    this.state = 341;
	                    this.match(YapislangParser.Colon);
	                    this.state = 342;
	                    this.singleExpression(9);
	                    break;

	                case 9:
	                    localctx = new AssignmentExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 344;
	                    if (!( this.precpred(this._ctx, 7))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 7)");
	                    }
	                    this.state = 345;
	                    this.match(YapislangParser.Assign);
	                    this.state = 346;
	                    this.singleExpression(7);
	                    break;

	                case 10:
	                    localctx = new AssignmentOperatorExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 347;
	                    if (!( this.precpred(this._ctx, 6))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 6)");
	                    }
	                    this.state = 348;
	                    this.assignmentOperator();
	                    this.state = 349;
	                    this.singleExpression(6);
	                    break;

	                case 11:
	                    localctx = new MemberIndexExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 351;
	                    if (!( this.precpred(this._ctx, 26))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 26)");
	                    }
	                    this.state = 352;
	                    this.match(YapislangParser.OpenBracket);
	                    this.state = 353;
	                    this.expressionSequence();
	                    this.state = 354;
	                    this.match(YapislangParser.CloseBracket);
	                    break;

	                case 12:
	                    localctx = new MemberDotExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 356;
	                    if (!( this.precpred(this._ctx, 25))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 25)");
	                    }
	                    this.state = 358;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===YapislangParser.QuestionMark) {
	                        this.state = 357;
	                        this.match(YapislangParser.QuestionMark);
	                    }

	                    this.state = 360;
	                    this.match(YapislangParser.Dot);
	                    this.state = 361;
	                    this.identifierName();
	                    break;

	                case 13:
	                    localctx = new MemberDotFunctionCallContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 362;
	                    if (!( this.precpred(this._ctx, 24))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 24)");
	                    }
	                    this.state = 363;
	                    this.match(YapislangParser.Dot);
	                    this.state = 364;
	                    this.identifierName();
	                    this.state = 365;
	                    this.match(YapislangParser.OpenParen);
	                    this.state = 367;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (YapislangParser.String - 45)) | (1 << (YapislangParser.StringList - 45)) | (1 << (YapislangParser.Char - 45)) | (1 << (YapislangParser.Int - 45)) | (1 << (YapislangParser.Bool - 45)) | (1 << (YapislangParser.Identifier - 45)))) !== 0)) {
	                        this.state = 366;
	                        this.formalParameterList();
	                    }

	                    this.state = 369;
	                    this.match(YapislangParser.CloseParen);
	                    break;

	                case 14:
	                    localctx = new ArgumentsExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 371;
	                    if (!( this.precpred(this._ctx, 23))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 23)");
	                    }
	                    this.state = 372;
	                    this.arguments();
	                    break;

	                case 15:
	                    localctx = new PostIncrementExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 373;
	                    if (!( this.precpred(this._ctx, 22))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 22)");
	                    }
	                    this.state = 374;
	                    if (!( this.notLineTerminator())) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.notLineTerminator()");
	                    }
	                    this.state = 375;
	                    this.match(YapislangParser.PlusPlus);
	                    break;

	                case 16:
	                    localctx = new PostDecreaseExpressionContext(this, new SingleExpressionContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, YapislangParser.RULE_singleExpression);
	                    this.state = 376;
	                    if (!( this.precpred(this._ctx, 21))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 21)");
	                    }
	                    this.state = 377;
	                    if (!( this.notLineTerminator())) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.notLineTerminator()");
	                    }
	                    this.state = 378;
	                    this.match(YapislangParser.MinusMinus);
	                    break;

	                } 
	            }
	            this.state = 383;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,31,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	assignable() {
	    let localctx = new AssignableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, YapislangParser.RULE_assignable);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        this.identifier();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	objectLiteral() {
	    let localctx = new ObjectLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, YapislangParser.RULE_objectLiteral);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 386;
	        this.match(YapislangParser.OpenBrace);
	        this.state = 395;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===YapislangParser.OpenBracket || ((((_la - 36)) & ~0x1f) == 0 && ((1 << (_la - 36)) & ((1 << (YapislangParser.BooleanLiteral - 36)) | (1 << (YapislangParser.DecimalLiteral - 36)) | (1 << (YapislangParser.Else - 36)) | (1 << (YapislangParser.Return - 36)) | (1 << (YapislangParser.For - 36)) | (1 << (YapislangParser.Function - 36)) | (1 << (YapislangParser.If - 36)) | (1 << (YapislangParser.In - 36)) | (1 << (YapislangParser.Identifier - 36)) | (1 << (YapislangParser.StringLiteral - 36)))) !== 0)) {
	            this.state = 387;
	            this.propertyAssignment();
	            this.state = 392;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 388;
	                    this.match(YapislangParser.Comma);
	                    this.state = 389;
	                    this.propertyAssignment(); 
	                }
	                this.state = 394;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	            }

	        }

	        this.state = 398;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===YapislangParser.Comma) {
	            this.state = 397;
	            this.match(YapislangParser.Comma);
	        }

	        this.state = 400;
	        this.match(YapislangParser.CloseBrace);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	anonymousFunction() {
	    let localctx = new AnonymousFunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, YapislangParser.RULE_anonymousFunction);
	    var _la = 0; // Token type
	    try {
	        this.state = 419;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new FunctionDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 402;
	            this.functionDeclaration();
	            break;

	        case 2:
	            localctx = new AnonymousFunctionDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 403;
	            this.varModifier();
	            this.state = 404;
	            this.match(YapislangParser.Function);
	            this.state = 405;
	            this.match(YapislangParser.OpenParen);
	            this.state = 407;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (YapislangParser.String - 45)) | (1 << (YapislangParser.StringList - 45)) | (1 << (YapislangParser.Char - 45)) | (1 << (YapislangParser.Int - 45)) | (1 << (YapislangParser.Bool - 45)) | (1 << (YapislangParser.Identifier - 45)))) !== 0)) {
	                this.state = 406;
	                this.formalParameterList();
	            }

	            this.state = 409;
	            this.match(YapislangParser.CloseParen);
	            this.state = 410;
	            this.match(YapislangParser.OpenBrace);
	            this.state = 411;
	            this.functionBody();
	            this.state = 412;
	            this.match(YapislangParser.CloseBrace);
	            break;

	        case 3:
	            localctx = new ArrowFunctionContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 414;
	            this.varModifier();
	            this.state = 415;
	            this.arrowFunctionParameters();
	            this.state = 416;
	            this.match(YapislangParser.Arrow);
	            this.state = 417;
	            this.arrowFunctionBody();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrowFunctionParameters() {
	    let localctx = new ArrowFunctionParametersContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, YapislangParser.RULE_arrowFunctionParameters);
	    var _la = 0; // Token type
	    try {
	        this.state = 427;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case YapislangParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 421;
	            this.identifier();
	            break;
	        case YapislangParser.OpenParen:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 422;
	            this.match(YapislangParser.OpenParen);
	            this.state = 424;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 45)) & ~0x1f) == 0 && ((1 << (_la - 45)) & ((1 << (YapislangParser.String - 45)) | (1 << (YapislangParser.StringList - 45)) | (1 << (YapislangParser.Char - 45)) | (1 << (YapislangParser.Int - 45)) | (1 << (YapislangParser.Bool - 45)) | (1 << (YapislangParser.Identifier - 45)))) !== 0)) {
	                this.state = 423;
	                this.formalParameterList();
	            }

	            this.state = 426;
	            this.match(YapislangParser.CloseParen);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	arrowFunctionBody() {
	    let localctx = new ArrowFunctionBodyContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, YapislangParser.RULE_arrowFunctionBody);
	    try {
	        this.state = 434;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 429;
	            this.singleExpression(0);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 430;
	            this.match(YapislangParser.OpenBrace);
	            this.state = 431;
	            this.functionBody();
	            this.state = 432;
	            this.match(YapislangParser.CloseBrace);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	assignmentOperator() {
	    let localctx = new AssignmentOperatorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 70, YapislangParser.RULE_assignmentOperator);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 436;
	        _la = this._input.LA(1);
	        if(!(((((_la - 30)) & ~0x1f) == 0 && ((1 << (_la - 30)) & ((1 << (YapislangParser.MultiplyAssign - 30)) | (1 << (YapislangParser.DivideAssign - 30)) | (1 << (YapislangParser.ModulusAssign - 30)) | (1 << (YapislangParser.PlusAssign - 30)) | (1 << (YapislangParser.MinusAssign - 30)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 72, YapislangParser.RULE_literal);
	    try {
	        this.state = 441;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case YapislangParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 438;
	            this.match(YapislangParser.BooleanLiteral);
	            break;
	        case YapislangParser.StringLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 439;
	            this.match(YapislangParser.StringLiteral);
	            break;
	        case YapislangParser.DecimalLiteral:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 440;
	            this.numericLiteral();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	numericLiteral() {
	    let localctx = new NumericLiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 74, YapislangParser.RULE_numericLiteral);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 443;
	        this.match(YapislangParser.DecimalLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifierName() {
	    let localctx = new IdentifierNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 76, YapislangParser.RULE_identifierName);
	    try {
	        this.state = 447;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case YapislangParser.Identifier:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 445;
	            this.identifier();
	            break;
	        case YapislangParser.BooleanLiteral:
	        case YapislangParser.Else:
	        case YapislangParser.Return:
	        case YapislangParser.For:
	        case YapislangParser.Function:
	        case YapislangParser.If:
	        case YapislangParser.In:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 446;
	            this.reservedWord();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	identifier() {
	    let localctx = new IdentifierContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 78, YapislangParser.RULE_identifier);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 449;
	        this.match(YapislangParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	reservedWord() {
	    let localctx = new ReservedWordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 80, YapislangParser.RULE_reservedWord);
	    try {
	        this.state = 453;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case YapislangParser.Else:
	        case YapislangParser.Return:
	        case YapislangParser.For:
	        case YapislangParser.Function:
	        case YapislangParser.If:
	        case YapislangParser.In:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 451;
	            this.keyword();
	            break;
	        case YapislangParser.BooleanLiteral:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 452;
	            this.match(YapislangParser.BooleanLiteral);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	keyword() {
	    let localctx = new KeywordContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 82, YapislangParser.RULE_keyword);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 455;
	        _la = this._input.LA(1);
	        if(!(((((_la - 38)) & ~0x1f) == 0 && ((1 << (_la - 38)) & ((1 << (YapislangParser.Else - 38)) | (1 << (YapislangParser.Return - 38)) | (1 << (YapislangParser.For - 38)) | (1 << (YapislangParser.Function - 38)) | (1 << (YapislangParser.If - 38)) | (1 << (YapislangParser.In - 38)))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	eos() {
	    let localctx = new EosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 84, YapislangParser.RULE_eos);
	    try {
	        this.state = 461;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,43,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 457;
	            this.match(YapislangParser.SemiColon);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 458;
	            this.match(YapislangParser.EOF);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 459;
	            if (!( this.lineTerminatorAhead())) {
	                throw new antlr4.error.FailedPredicateException(this, "this.lineTerminatorAhead()");
	            }
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 460;
	            if (!( this.closeBrace())) {
	                throw new antlr4.error.FailedPredicateException(this, "this.closeBrace()");
	            }
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

YapislangParser.EOF = antlr4.Token.EOF;
YapislangParser.MultiLineComment = 1;
YapislangParser.SingleLineComment = 2;
YapislangParser.OpenBracket = 3;
YapislangParser.CloseBracket = 4;
YapislangParser.OpenParen = 5;
YapislangParser.CloseParen = 6;
YapislangParser.OpenBrace = 7;
YapislangParser.CloseBrace = 8;
YapislangParser.SemiColon = 9;
YapislangParser.Comma = 10;
YapislangParser.Assign = 11;
YapislangParser.QuestionMark = 12;
YapislangParser.Colon = 13;
YapislangParser.Dot = 14;
YapislangParser.PlusPlus = 15;
YapislangParser.MinusMinus = 16;
YapislangParser.Plus = 17;
YapislangParser.Minus = 18;
YapislangParser.Not = 19;
YapislangParser.Multiply = 20;
YapislangParser.Divide = 21;
YapislangParser.LessThan = 22;
YapislangParser.MoreThan = 23;
YapislangParser.LessThanEquals = 24;
YapislangParser.GreaterThanEquals = 25;
YapislangParser.Equals_ = 26;
YapislangParser.NotEquals = 27;
YapislangParser.And = 28;
YapislangParser.Or = 29;
YapislangParser.MultiplyAssign = 30;
YapislangParser.DivideAssign = 31;
YapislangParser.ModulusAssign = 32;
YapislangParser.PlusAssign = 33;
YapislangParser.MinusAssign = 34;
YapislangParser.Arrow = 35;
YapislangParser.BooleanLiteral = 36;
YapislangParser.DecimalLiteral = 37;
YapislangParser.Else = 38;
YapislangParser.Return = 39;
YapislangParser.Continue = 40;
YapislangParser.For = 41;
YapislangParser.Function = 42;
YapislangParser.If = 43;
YapislangParser.In = 44;
YapislangParser.String = 45;
YapislangParser.StringList = 46;
YapislangParser.Char = 47;
YapislangParser.Int = 48;
YapislangParser.Bool = 49;
YapislangParser.Identifier = 50;
YapislangParser.StringLiteral = 51;
YapislangParser.WhiteSpaces = 52;
YapislangParser.LineTerminator = 53;
YapislangParser.UnexpectedCharacter = 54;

YapislangParser.RULE_program = 0;
YapislangParser.RULE_sourceElements = 1;
YapislangParser.RULE_sourceElement = 2;
YapislangParser.RULE_statement = 3;
YapislangParser.RULE_statementList = 4;
YapislangParser.RULE_declaration = 5;
YapislangParser.RULE_variableStatement = 6;
YapislangParser.RULE_variableDeclarationList = 7;
YapislangParser.RULE_variableDeclaration = 8;
YapislangParser.RULE_emptyStatement = 9;
YapislangParser.RULE_expressionStatement = 10;
YapislangParser.RULE_ifStatement = 11;
YapislangParser.RULE_iterationStatement = 12;
YapislangParser.RULE_varModifier = 13;
YapislangParser.RULE_returnStatement = 14;
YapislangParser.RULE_labelledStatement = 15;
YapislangParser.RULE_functionDeclaration = 16;
YapislangParser.RULE_functionCall = 17;
YapislangParser.RULE_formalParameterList = 18;
YapislangParser.RULE_formalParameterArg = 19;
YapislangParser.RULE_functionBody = 20;
YapislangParser.RULE_arrayLiteral = 21;
YapislangParser.RULE_elementList = 22;
YapislangParser.RULE_arrayElement = 23;
YapislangParser.RULE_propertyAssignment = 24;
YapislangParser.RULE_propertyName = 25;
YapislangParser.RULE_arguments = 26;
YapislangParser.RULE_argument = 27;
YapislangParser.RULE_expressionSequence = 28;
YapislangParser.RULE_singleExpression = 29;
YapislangParser.RULE_assignable = 30;
YapislangParser.RULE_objectLiteral = 31;
YapislangParser.RULE_anonymousFunction = 32;
YapislangParser.RULE_arrowFunctionParameters = 33;
YapislangParser.RULE_arrowFunctionBody = 34;
YapislangParser.RULE_assignmentOperator = 35;
YapislangParser.RULE_literal = 36;
YapislangParser.RULE_numericLiteral = 37;
YapislangParser.RULE_identifierName = 38;
YapislangParser.RULE_identifier = 39;
YapislangParser.RULE_reservedWord = 40;
YapislangParser.RULE_keyword = 41;
YapislangParser.RULE_eos = 42;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_program;
    }

	EOF() {
	    return this.getToken(YapislangParser.EOF, 0);
	};

	sourceElements() {
	    return this.getTypedRuleContext(SourceElementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SourceElementsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_sourceElements;
    }

	sourceElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SourceElementContext);
	    } else {
	        return this.getTypedRuleContext(SourceElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterSourceElements(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitSourceElements(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitSourceElements(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SourceElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_sourceElement;
    }

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterSourceElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitSourceElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitSourceElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_statement;
    }

	variableStatement() {
	    return this.getTypedRuleContext(VariableStatementContext,0);
	};

	emptyStatement() {
	    return this.getTypedRuleContext(EmptyStatementContext,0);
	};

	expressionStatement() {
	    return this.getTypedRuleContext(ExpressionStatementContext,0);
	};

	ifStatement() {
	    return this.getTypedRuleContext(IfStatementContext,0);
	};

	iterationStatement() {
	    return this.getTypedRuleContext(IterationStatementContext,0);
	};

	returnStatement() {
	    return this.getTypedRuleContext(ReturnStatementContext,0);
	};

	labelledStatement() {
	    return this.getTypedRuleContext(LabelledStatementContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_statementList;
    }

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterStatementList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitStatementList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitStatementList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_declaration;
    }

	variableStatement() {
	    return this.getTypedRuleContext(VariableStatementContext,0);
	};

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_variableStatement;
    }

	variableDeclarationList() {
	    return this.getTypedRuleContext(VariableDeclarationListContext,0);
	};

	eos() {
	    return this.getTypedRuleContext(EosContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterVariableStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitVariableStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitVariableStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_variableDeclarationList;
    }

	varModifier() {
	    return this.getTypedRuleContext(VarModifierContext,0);
	};

	variableDeclaration() {
	    return this.getTypedRuleContext(VariableDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterVariableDeclarationList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitVariableDeclarationList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitVariableDeclarationList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_variableDeclaration;
    }

	assignable() {
	    return this.getTypedRuleContext(AssignableContext,0);
	};

	Assign() {
	    return this.getToken(YapislangParser.Assign, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterVariableDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitVariableDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitVariableDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EmptyStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_emptyStatement;
    }

	SemiColon() {
	    return this.getToken(YapislangParser.SemiColon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterEmptyStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitEmptyStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitEmptyStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_expressionStatement;
    }

	expressionSequence() {
	    return this.getTypedRuleContext(ExpressionSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterExpressionStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitExpressionStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitExpressionStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IfStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_ifStatement;
    }

	If() {
	    return this.getToken(YapislangParser.If, 0);
	};

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	expressionSequence() {
	    return this.getTypedRuleContext(ExpressionSequenceContext,0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	OpenBrace = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YapislangParser.OpenBrace);
	    } else {
	        return this.getToken(YapislangParser.OpenBrace, i);
	    }
	};


	CloseBrace = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YapislangParser.CloseBrace);
	    } else {
	        return this.getToken(YapislangParser.CloseBrace, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	Else() {
	    return this.getToken(YapislangParser.Else, 0);
	};

	statementList() {
	    return this.getTypedRuleContext(StatementListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterIfStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitIfStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitIfStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IterationStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_iterationStatement;
    }

	For() {
	    return this.getToken(YapislangParser.For, 0);
	};

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	variableDeclarationList() {
	    return this.getTypedRuleContext(VariableDeclarationListContext,0);
	};

	In() {
	    return this.getToken(YapislangParser.In, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	OpenBrace() {
	    return this.getToken(YapislangParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(YapislangParser.CloseBrace, 0);
	};

	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterIterationStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitIterationStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitIterationStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VarModifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_varModifier;
    }

	String() {
	    return this.getToken(YapislangParser.String, 0);
	};

	StringList() {
	    return this.getToken(YapislangParser.StringList, 0);
	};

	Char() {
	    return this.getToken(YapislangParser.Char, 0);
	};

	Int() {
	    return this.getToken(YapislangParser.Int, 0);
	};

	Bool() {
	    return this.getToken(YapislangParser.Bool, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterVarModifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitVarModifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitVarModifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReturnStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_returnStatement;
    }

	Return() {
	    return this.getToken(YapislangParser.Return, 0);
	};

	eos() {
	    return this.getTypedRuleContext(EosContext,0);
	};

	expressionSequence() {
	    return this.getTypedRuleContext(ExpressionSequenceContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterReturnStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitReturnStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitReturnStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LabelledStatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_labelledStatement;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	Colon() {
	    return this.getToken(YapislangParser.Colon, 0);
	};

	statement() {
	    return this.getTypedRuleContext(StatementContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterLabelledStatement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitLabelledStatement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitLabelledStatement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclarationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_functionDeclaration;
    }

	varModifier() {
	    return this.getTypedRuleContext(VarModifierContext,0);
	};

	Function() {
	    return this.getToken(YapislangParser.Function, 0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	OpenBrace() {
	    return this.getToken(YapislangParser.OpenBrace, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	CloseBrace() {
	    return this.getToken(YapislangParser.CloseBrace, 0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterFunctionDeclaration(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitFunctionDeclaration(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitFunctionDeclaration(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionCallContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_functionCall;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormalParameterListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_formalParameterList;
    }

	formalParameterArg = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(FormalParameterArgContext);
	    } else {
	        return this.getTypedRuleContext(FormalParameterArgContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YapislangParser.Comma);
	    } else {
	        return this.getToken(YapislangParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterFormalParameterList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitFormalParameterList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitFormalParameterList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormalParameterArgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_formalParameterArg;
    }

	assignable() {
	    return this.getTypedRuleContext(AssignableContext,0);
	};

	varModifier() {
	    return this.getTypedRuleContext(VarModifierContext,0);
	};

	Assign() {
	    return this.getToken(YapislangParser.Assign, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterFormalParameterArg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitFormalParameterArg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitFormalParameterArg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_functionBody;
    }

	sourceElements() {
	    return this.getTypedRuleContext(SourceElementsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitFunctionBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitFunctionBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_arrayLiteral;
    }

	OpenBracket() {
	    return this.getToken(YapislangParser.OpenBracket, 0);
	};

	elementList() {
	    return this.getTypedRuleContext(ElementListContext,0);
	};

	CloseBracket() {
	    return this.getToken(YapislangParser.CloseBracket, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArrayLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArrayLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArrayLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ElementListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_elementList;
    }

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YapislangParser.Comma);
	    } else {
	        return this.getToken(YapislangParser.Comma, i);
	    }
	};


	arrayElement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArrayElementContext);
	    } else {
	        return this.getTypedRuleContext(ArrayElementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterElementList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitElementList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitElementList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrayElementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_arrayElement;
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArrayElement(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArrayElement(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArrayElement(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertyAssignmentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_propertyAssignment;
    }

	propertyName() {
	    return this.getTypedRuleContext(PropertyNameContext,0);
	};

	Colon() {
	    return this.getToken(YapislangParser.Colon, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterPropertyAssignment(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitPropertyAssignment(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitPropertyAssignment(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PropertyNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_propertyName;
    }

	identifierName() {
	    return this.getTypedRuleContext(IdentifierNameContext,0);
	};

	StringLiteral() {
	    return this.getToken(YapislangParser.StringLiteral, 0);
	};

	numericLiteral() {
	    return this.getTypedRuleContext(NumericLiteralContext,0);
	};

	OpenBracket() {
	    return this.getToken(YapislangParser.OpenBracket, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	CloseBracket() {
	    return this.getToken(YapislangParser.CloseBracket, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterPropertyName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitPropertyName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitPropertyName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentsContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_arguments;
    }

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	argument = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ArgumentContext);
	    } else {
	        return this.getTypedRuleContext(ArgumentContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YapislangParser.Comma);
	    } else {
	        return this.getToken(YapislangParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArguments(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArguments(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArguments(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgumentContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_argument;
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArgument(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArgument(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArgument(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionSequenceContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_expressionSequence;
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YapislangParser.Comma);
	    } else {
	        return this.getToken(YapislangParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterExpressionSequence(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitExpressionSequence(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitExpressionSequence(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SingleExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_singleExpression;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class TernaryExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	QuestionMark() {
	    return this.getToken(YapislangParser.QuestionMark, 0);
	};

	Colon() {
	    return this.getToken(YapislangParser.Colon, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterTernaryExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitTernaryExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitTernaryExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.TernaryExpressionContext = TernaryExpressionContext;

class LogicalAndExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	And() {
	    return this.getToken(YapislangParser.And, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterLogicalAndExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitLogicalAndExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitLogicalAndExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.LogicalAndExpressionContext = LogicalAndExpressionContext;

class PreIncrementExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	PlusPlus() {
	    return this.getToken(YapislangParser.PlusPlus, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterPreIncrementExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitPreIncrementExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitPreIncrementExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.PreIncrementExpressionContext = PreIncrementExpressionContext;

class ObjectLiteralExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	objectLiteral() {
	    return this.getTypedRuleContext(ObjectLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterObjectLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitObjectLiteralExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitObjectLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.ObjectLiteralExpressionContext = ObjectLiteralExpressionContext;

class InExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	In() {
	    return this.getToken(YapislangParser.In, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterInExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitInExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitInExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.InExpressionContext = InExpressionContext;

class LogicalOrExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	Or() {
	    return this.getToken(YapislangParser.Or, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterLogicalOrExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitLogicalOrExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitLogicalOrExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.LogicalOrExpressionContext = LogicalOrExpressionContext;

class NotExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Not() {
	    return this.getToken(YapislangParser.Not, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterNotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitNotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitNotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.NotExpressionContext = NotExpressionContext;

class PreDecreaseExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	MinusMinus() {
	    return this.getToken(YapislangParser.MinusMinus, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterPreDecreaseExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitPreDecreaseExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitPreDecreaseExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.PreDecreaseExpressionContext = PreDecreaseExpressionContext;

class ArgumentsExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	arguments() {
	    return this.getTypedRuleContext(ArgumentsContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArgumentsExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArgumentsExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArgumentsExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.ArgumentsExpressionContext = ArgumentsExpressionContext;

class AnonymousFunctionExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	anonymousFunction() {
	    return this.getTypedRuleContext(AnonymousFunctionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterAnonymousFunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitAnonymousFunctionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitAnonymousFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.AnonymousFunctionExpressionContext = AnonymousFunctionExpressionContext;

class MemberDotFunctionCallContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	Dot() {
	    return this.getToken(YapislangParser.Dot, 0);
	};

	identifierName() {
	    return this.getTypedRuleContext(IdentifierNameContext,0);
	};

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterMemberDotFunctionCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitMemberDotFunctionCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitMemberDotFunctionCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.MemberDotFunctionCallContext = MemberDotFunctionCallContext;

class FunctionExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionCall() {
	    return this.getTypedRuleContext(FunctionCallContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterFunctionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitFunctionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitFunctionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.FunctionExpressionContext = FunctionExpressionContext;

class UnaryMinusExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Minus() {
	    return this.getToken(YapislangParser.Minus, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterUnaryMinusExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitUnaryMinusExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitUnaryMinusExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.UnaryMinusExpressionContext = UnaryMinusExpressionContext;

class AssignmentExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	Assign() {
	    return this.getToken(YapislangParser.Assign, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterAssignmentExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitAssignmentExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitAssignmentExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.AssignmentExpressionContext = AssignmentExpressionContext;

class PostDecreaseExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	MinusMinus() {
	    return this.getToken(YapislangParser.MinusMinus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterPostDecreaseExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitPostDecreaseExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitPostDecreaseExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.PostDecreaseExpressionContext = PostDecreaseExpressionContext;

class UnaryPlusExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Plus() {
	    return this.getToken(YapislangParser.Plus, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterUnaryPlusExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitUnaryPlusExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitUnaryPlusExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.UnaryPlusExpressionContext = UnaryPlusExpressionContext;

class EqualityExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	Equals_() {
	    return this.getToken(YapislangParser.Equals_, 0);
	};

	NotEquals() {
	    return this.getToken(YapislangParser.NotEquals, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterEqualityExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitEqualityExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitEqualityExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.EqualityExpressionContext = EqualityExpressionContext;

class MultiplicativeExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	Multiply() {
	    return this.getToken(YapislangParser.Multiply, 0);
	};

	Divide() {
	    return this.getToken(YapislangParser.Divide, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterMultiplicativeExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitMultiplicativeExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitMultiplicativeExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.MultiplicativeExpressionContext = MultiplicativeExpressionContext;

class ParenthesizedExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	expressionSequence() {
	    return this.getTypedRuleContext(ExpressionSequenceContext,0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterParenthesizedExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitParenthesizedExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitParenthesizedExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.ParenthesizedExpressionContext = ParenthesizedExpressionContext;

class AdditiveExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	Plus() {
	    return this.getToken(YapislangParser.Plus, 0);
	};

	Minus() {
	    return this.getToken(YapislangParser.Minus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterAdditiveExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitAdditiveExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitAdditiveExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.AdditiveExpressionContext = AdditiveExpressionContext;

class RelationalExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	LessThan() {
	    return this.getToken(YapislangParser.LessThan, 0);
	};

	MoreThan() {
	    return this.getToken(YapislangParser.MoreThan, 0);
	};

	LessThanEquals() {
	    return this.getToken(YapislangParser.LessThanEquals, 0);
	};

	GreaterThanEquals() {
	    return this.getToken(YapislangParser.GreaterThanEquals, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterRelationalExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitRelationalExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitRelationalExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.RelationalExpressionContext = RelationalExpressionContext;

class PostIncrementExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	PlusPlus() {
	    return this.getToken(YapislangParser.PlusPlus, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterPostIncrementExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitPostIncrementExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitPostIncrementExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.PostIncrementExpressionContext = PostIncrementExpressionContext;

class LiteralExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitLiteralExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.LiteralExpressionContext = LiteralExpressionContext;

class ArrayLiteralExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	arrayLiteral() {
	    return this.getTypedRuleContext(ArrayLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArrayLiteralExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArrayLiteralExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArrayLiteralExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.ArrayLiteralExpressionContext = ArrayLiteralExpressionContext;

class MemberDotExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	Dot() {
	    return this.getToken(YapislangParser.Dot, 0);
	};

	identifierName() {
	    return this.getTypedRuleContext(IdentifierNameContext,0);
	};

	QuestionMark() {
	    return this.getToken(YapislangParser.QuestionMark, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterMemberDotExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitMemberDotExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitMemberDotExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.MemberDotExpressionContext = MemberDotExpressionContext;

class MemberIndexExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	OpenBracket() {
	    return this.getToken(YapislangParser.OpenBracket, 0);
	};

	expressionSequence() {
	    return this.getTypedRuleContext(ExpressionSequenceContext,0);
	};

	CloseBracket() {
	    return this.getToken(YapislangParser.CloseBracket, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterMemberIndexExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitMemberIndexExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitMemberIndexExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.MemberIndexExpressionContext = MemberIndexExpressionContext;

class IdentifierExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterIdentifierExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitIdentifierExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitIdentifierExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.IdentifierExpressionContext = IdentifierExpressionContext;

class TypeAssertionExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	varModifier() {
	    return this.getTypedRuleContext(VarModifierContext,0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterTypeAssertionExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitTypeAssertionExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitTypeAssertionExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.TypeAssertionExpressionContext = TypeAssertionExpressionContext;

class AssignmentOperatorExpressionContext extends SingleExpressionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	singleExpression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SingleExpressionContext);
	    } else {
	        return this.getTypedRuleContext(SingleExpressionContext,i);
	    }
	};

	assignmentOperator() {
	    return this.getTypedRuleContext(AssignmentOperatorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterAssignmentOperatorExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitAssignmentOperatorExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitAssignmentOperatorExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.AssignmentOperatorExpressionContext = AssignmentOperatorExpressionContext;

class AssignableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_assignable;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterAssignable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitAssignable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitAssignable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ObjectLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_objectLiteral;
    }

	OpenBrace() {
	    return this.getToken(YapislangParser.OpenBrace, 0);
	};

	CloseBrace() {
	    return this.getToken(YapislangParser.CloseBrace, 0);
	};

	propertyAssignment = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(PropertyAssignmentContext);
	    } else {
	        return this.getTypedRuleContext(PropertyAssignmentContext,i);
	    }
	};

	Comma = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(YapislangParser.Comma);
	    } else {
	        return this.getToken(YapislangParser.Comma, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterObjectLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitObjectLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitObjectLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AnonymousFunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_anonymousFunction;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class AnonymousFunctionDeclContext extends AnonymousFunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varModifier() {
	    return this.getTypedRuleContext(VarModifierContext,0);
	};

	Function() {
	    return this.getToken(YapislangParser.Function, 0);
	};

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	OpenBrace() {
	    return this.getToken(YapislangParser.OpenBrace, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	CloseBrace() {
	    return this.getToken(YapislangParser.CloseBrace, 0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterAnonymousFunctionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitAnonymousFunctionDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitAnonymousFunctionDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.AnonymousFunctionDeclContext = AnonymousFunctionDeclContext;

class ArrowFunctionContext extends AnonymousFunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	varModifier() {
	    return this.getTypedRuleContext(VarModifierContext,0);
	};

	arrowFunctionParameters() {
	    return this.getTypedRuleContext(ArrowFunctionParametersContext,0);
	};

	Arrow() {
	    return this.getToken(YapislangParser.Arrow, 0);
	};

	arrowFunctionBody() {
	    return this.getTypedRuleContext(ArrowFunctionBodyContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArrowFunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArrowFunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArrowFunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.ArrowFunctionContext = ArrowFunctionContext;

class FunctionDeclContext extends AnonymousFunctionContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	functionDeclaration() {
	    return this.getTypedRuleContext(FunctionDeclarationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterFunctionDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitFunctionDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitFunctionDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

YapislangParser.FunctionDeclContext = FunctionDeclContext;

class ArrowFunctionParametersContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_arrowFunctionParameters;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	OpenParen() {
	    return this.getToken(YapislangParser.OpenParen, 0);
	};

	CloseParen() {
	    return this.getToken(YapislangParser.CloseParen, 0);
	};

	formalParameterList() {
	    return this.getTypedRuleContext(FormalParameterListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArrowFunctionParameters(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArrowFunctionParameters(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArrowFunctionParameters(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArrowFunctionBodyContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_arrowFunctionBody;
    }

	singleExpression() {
	    return this.getTypedRuleContext(SingleExpressionContext,0);
	};

	OpenBrace() {
	    return this.getToken(YapislangParser.OpenBrace, 0);
	};

	functionBody() {
	    return this.getTypedRuleContext(FunctionBodyContext,0);
	};

	CloseBrace() {
	    return this.getToken(YapislangParser.CloseBrace, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterArrowFunctionBody(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitArrowFunctionBody(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitArrowFunctionBody(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AssignmentOperatorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_assignmentOperator;
    }

	MultiplyAssign() {
	    return this.getToken(YapislangParser.MultiplyAssign, 0);
	};

	DivideAssign() {
	    return this.getToken(YapislangParser.DivideAssign, 0);
	};

	ModulusAssign() {
	    return this.getToken(YapislangParser.ModulusAssign, 0);
	};

	PlusAssign() {
	    return this.getToken(YapislangParser.PlusAssign, 0);
	};

	MinusAssign() {
	    return this.getToken(YapislangParser.MinusAssign, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterAssignmentOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitAssignmentOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitAssignmentOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_literal;
    }

	BooleanLiteral() {
	    return this.getToken(YapislangParser.BooleanLiteral, 0);
	};

	StringLiteral() {
	    return this.getToken(YapislangParser.StringLiteral, 0);
	};

	numericLiteral() {
	    return this.getTypedRuleContext(NumericLiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NumericLiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_numericLiteral;
    }

	DecimalLiteral() {
	    return this.getToken(YapislangParser.DecimalLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterNumericLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitNumericLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitNumericLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_identifierName;
    }

	identifier() {
	    return this.getTypedRuleContext(IdentifierContext,0);
	};

	reservedWord() {
	    return this.getTypedRuleContext(ReservedWordContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterIdentifierName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitIdentifierName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitIdentifierName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class IdentifierContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_identifier;
    }

	Identifier() {
	    return this.getToken(YapislangParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterIdentifier(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitIdentifier(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitIdentifier(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ReservedWordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_reservedWord;
    }

	keyword() {
	    return this.getTypedRuleContext(KeywordContext,0);
	};

	BooleanLiteral() {
	    return this.getToken(YapislangParser.BooleanLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterReservedWord(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitReservedWord(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitReservedWord(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class KeywordContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_keyword;
    }

	Else() {
	    return this.getToken(YapislangParser.Else, 0);
	};

	Return() {
	    return this.getToken(YapislangParser.Return, 0);
	};

	For() {
	    return this.getToken(YapislangParser.For, 0);
	};

	Function() {
	    return this.getToken(YapislangParser.Function, 0);
	};

	If() {
	    return this.getToken(YapislangParser.If, 0);
	};

	In() {
	    return this.getToken(YapislangParser.In, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterKeyword(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitKeyword(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitKeyword(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = YapislangParser.RULE_eos;
    }

	SemiColon() {
	    return this.getToken(YapislangParser.SemiColon, 0);
	};

	EOF() {
	    return this.getToken(YapislangParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.enterEos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof YapislangParserListener ) {
	        listener.exitEos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof YapislangParserVisitor ) {
	        return visitor.visitEos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




YapislangParser.ProgramContext = ProgramContext; 
YapislangParser.SourceElementsContext = SourceElementsContext; 
YapislangParser.SourceElementContext = SourceElementContext; 
YapislangParser.StatementContext = StatementContext; 
YapislangParser.StatementListContext = StatementListContext; 
YapislangParser.DeclarationContext = DeclarationContext; 
YapislangParser.VariableStatementContext = VariableStatementContext; 
YapislangParser.VariableDeclarationListContext = VariableDeclarationListContext; 
YapislangParser.VariableDeclarationContext = VariableDeclarationContext; 
YapislangParser.EmptyStatementContext = EmptyStatementContext; 
YapislangParser.ExpressionStatementContext = ExpressionStatementContext; 
YapislangParser.IfStatementContext = IfStatementContext; 
YapislangParser.IterationStatementContext = IterationStatementContext; 
YapislangParser.VarModifierContext = VarModifierContext; 
YapislangParser.ReturnStatementContext = ReturnStatementContext; 
YapislangParser.LabelledStatementContext = LabelledStatementContext; 
YapislangParser.FunctionDeclarationContext = FunctionDeclarationContext; 
YapislangParser.FunctionCallContext = FunctionCallContext; 
YapislangParser.FormalParameterListContext = FormalParameterListContext; 
YapislangParser.FormalParameterArgContext = FormalParameterArgContext; 
YapislangParser.FunctionBodyContext = FunctionBodyContext; 
YapislangParser.ArrayLiteralContext = ArrayLiteralContext; 
YapislangParser.ElementListContext = ElementListContext; 
YapislangParser.ArrayElementContext = ArrayElementContext; 
YapislangParser.PropertyAssignmentContext = PropertyAssignmentContext; 
YapislangParser.PropertyNameContext = PropertyNameContext; 
YapislangParser.ArgumentsContext = ArgumentsContext; 
YapislangParser.ArgumentContext = ArgumentContext; 
YapislangParser.ExpressionSequenceContext = ExpressionSequenceContext; 
YapislangParser.SingleExpressionContext = SingleExpressionContext; 
YapislangParser.AssignableContext = AssignableContext; 
YapislangParser.ObjectLiteralContext = ObjectLiteralContext; 
YapislangParser.AnonymousFunctionContext = AnonymousFunctionContext; 
YapislangParser.ArrowFunctionParametersContext = ArrowFunctionParametersContext; 
YapislangParser.ArrowFunctionBodyContext = ArrowFunctionBodyContext; 
YapislangParser.AssignmentOperatorContext = AssignmentOperatorContext; 
YapislangParser.LiteralContext = LiteralContext; 
YapislangParser.NumericLiteralContext = NumericLiteralContext; 
YapislangParser.IdentifierNameContext = IdentifierNameContext; 
YapislangParser.IdentifierContext = IdentifierContext; 
YapislangParser.ReservedWordContext = ReservedWordContext; 
YapislangParser.KeywordContext = KeywordContext; 
YapislangParser.EosContext = EosContext; 
