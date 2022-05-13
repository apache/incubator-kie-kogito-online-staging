define("ace/mode/scad",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scad_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/behaviour/cstyle","ace/mode/folding/cstyle"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text").Mode,i=e("./scad_highlight_rules").scadHighlightRules,s=e("./matching_brace_outdent").MatchingBraceOutdent,a=(e("../range").Range,e("./behaviour/cstyle").CstyleBehaviour),u=e("./folding/cstyle").FoldMode,c=function(){this.HighlightRules=i,this.$outdent=new s,this.$behaviour=new a,this.foldingRules=new u};r.inherits(c,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e),i=o.tokens,s=o.state;if(i.length&&"comment"==i[i.length-1].type)return r;if("start"==e)(a=t.match(/^.*[\{\(\[]\s*$/))&&(r+=n);else if("doc-start"==e){if("start"==s)return"";var a;(a=t.match(/^\s*(\/?)\*/))&&(a[1]&&(r+=" "),r+="* ")}return r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/scad"}.call(c.prototype),t.Mode=c})),define("ace/mode/scad_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/doc_comment_highlight_rules","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=(e("../lib/lang"),e("./doc_comment_highlight_rules").DocCommentHighlightRules),i=e("./text_highlight_rules").TextHighlightRules,s=function(){var e=this.createKeywordMapper({"variable.language":"this",keyword:"module|if|else|for","constant.language":"NULL"},"identifier");this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},o.getStartRule("start"),{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0[xX][0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:"constant",regex:"<[a-zA-Z0-9.]+>"},{token:"keyword",regex:"(?:use|include)"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|==|=|!=|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|\\b(?:in|new|delete|typeof|void)"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]},this.embedRules(o,"doc-",[o.getEndRule("start")])};r.inherits(s,i),t.scadHighlightRules=s})),define("ace/mode/doc_comment_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),o=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment.doc.tag",regex:"@[\\w\\d_]+"},{token:"comment.doc.tag",regex:"\\bTODO\\b"},{defaultToken:"comment.doc"}]}};r.inherits(i,o),i.getStartRule=function(e){return{token:"comment.doc",regex:"\\/\\*(?=\\*)",next:e}},i.getEndRule=function(e){return{token:"comment.doc",regex:"\\*\\/",next:e}},t.DocCommentHighlightRules=i})),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){var r=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var o=n[1].length,i=e.findMatchingBracket({row:t,column:o});if(!i||i.row==t)return 0;var s=this.$getIndent(e.getLine(i.row));e.replace(new r(t,0,t,o-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o})),define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],(function(e,t,n){var r,o=e("../../lib/oop"),i=e("../behaviour").Behaviour,s=e("../../token_iterator").TokenIterator,a=e("../../lib/lang"),u=["text","paren.rparen","punctuation.operator"],c=["text","paren.rparen","punctuation.operator","comment"],l={},g=function(e){var t=-1;if(e.multiSelect&&(t=e.selection.id,l.rangeCount!=e.multiSelect.rangeCount&&(l={rangeCount:e.multiSelect.rangeCount})),l[t])return r=l[t];r=l[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""}},d=function(){this.add("braces","insertion",(function(e,t,n,o,i){var s=n.getCursorPosition(),u=o.doc.getLine(s.row);if("{"==i){g(n);var c=n.getSelectionRange(),l=o.doc.getTextRange(c);if(""!==l&&"{"!==l&&n.getWrapBehavioursEnabled())return{text:"{"+l+"}",selection:!1};if(d.isSaneInsertion(n,o))return/[\]\}\)]/.test(u[s.column])||n.inMultiSelectMode?(d.recordAutoInsert(n,o,"}"),{text:"{}",selection:[1,1]}):(d.recordMaybeInsert(n,o,"{"),{text:"{",selection:[1,1]})}else if("}"==i){if(g(n),"}"==u.substring(s.column,s.column+1)&&null!==o.$findOpeningBracket("}",{column:s.column+1,row:s.row})&&d.isAutoInsertedClosing(s,u,i))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}else{if("\n"==i||"\r\n"==i){g(n);var m="";if(d.isMaybeInsertedClosing(s,u)&&(m=a.stringRepeat("}",r.maybeInsertedBrackets),d.clearMaybeInsertedClosing()),"}"===u.substring(s.column,s.column+1)){var h=o.findMatchingBracket({row:s.row,column:s.column+1},"}");if(!h)return null;var f=this.$getIndent(o.getLine(h.row))}else{if(!m)return void d.clearMaybeInsertedClosing();f=this.$getIndent(u)}var b=f+o.getTabString();return{text:"\n"+b+"\n"+f+m,selection:[1,b.length,1,b.length]}}d.clearMaybeInsertedClosing()}})),this.add("braces","deletion",(function(e,t,n,o,i){var s=o.doc.getTextRange(i);if(!i.isMultiLine()&&"{"==s){if(g(n),"}"==o.doc.getLine(i.start.row).substring(i.end.column,i.end.column+1))return i.end.column++,i;r.maybeInsertedBrackets--}})),this.add("parens","insertion",(function(e,t,n,r,o){if("("==o){g(n);var i=n.getSelectionRange(),s=r.doc.getTextRange(i);if(""!==s&&n.getWrapBehavioursEnabled())return{text:"("+s+")",selection:!1};if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,")"),{text:"()",selection:[1,1]}}else if(")"==o){g(n);var a=n.getCursorPosition(),u=r.doc.getLine(a.row);if(")"==u.substring(a.column,a.column+1)&&null!==r.$findOpeningBracket(")",{column:a.column+1,row:a.row})&&d.isAutoInsertedClosing(a,u,o))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("parens","deletion",(function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"("==i&&(g(n),")"==r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)))return o.end.column++,o})),this.add("brackets","insertion",(function(e,t,n,r,o){if("["==o){g(n);var i=n.getSelectionRange(),s=r.doc.getTextRange(i);if(""!==s&&n.getWrapBehavioursEnabled())return{text:"["+s+"]",selection:!1};if(d.isSaneInsertion(n,r))return d.recordAutoInsert(n,r,"]"),{text:"[]",selection:[1,1]}}else if("]"==o){g(n);var a=n.getCursorPosition(),u=r.doc.getLine(a.row);if("]"==u.substring(a.column,a.column+1)&&null!==r.$findOpeningBracket("]",{column:a.column+1,row:a.row})&&d.isAutoInsertedClosing(a,u,o))return d.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("brackets","deletion",(function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&"["==i&&(g(n),"]"==r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)))return o.end.column++,o})),this.add("string_dquotes","insertion",(function(e,t,n,r,o){if('"'==o||"'"==o){g(n);var i=o,s=n.getSelectionRange(),a=r.doc.getTextRange(s);if(""!==a&&"'"!==a&&'"'!=a&&n.getWrapBehavioursEnabled())return{text:i+a+i,selection:!1};var u=n.getCursorPosition(),c=r.doc.getLine(u.row);if("\\"==c.substring(u.column-1,u.column))return null;for(var l,m=r.getTokens(s.start.row),h=0,f=-1,b=0;b<m.length&&("string"==(l=m[b]).type?f=-1:f<0&&(f=l.value.indexOf(i)),!(l.value.length+h>s.start.column));b++)h+=m[b].value.length;if(!l||f<0&&"comment"!==l.type&&("string"!==l.type||s.start.column!==l.value.length+h-1&&l.value.lastIndexOf(i)===l.value.length-1)){if(!d.isSaneInsertion(n,r))return;return{text:i+i,selection:[1,1]}}if(l&&"string"===l.type&&c.substring(u.column,u.column+1)==i)return{text:"",selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,n,r,o){var i=r.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==i||"'"==i)&&(g(n),r.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)==i))return o.end.column++,o}))};d.isSaneInsertion=function(e,t){var n=e.getCursorPosition(),r=new s(t,n.row,n.column);if(!this.$matchTokenType(r.getCurrentToken()||"text",u)){var o=new s(t,n.row,n.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",u))return!1}return r.stepForward(),r.getCurrentTokenRow()!==n.row||this.$matchTokenType(r.getCurrentToken()||"text",c)},d.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},d.recordAutoInsert=function(e,t,n){var o=e.getCursorPosition(),i=t.doc.getLine(o.row);this.isAutoInsertedClosing(o,i,r.autoInsertedLineEnd[0])||(r.autoInsertedBrackets=0),r.autoInsertedRow=o.row,r.autoInsertedLineEnd=n+i.substr(o.column),r.autoInsertedBrackets++},d.recordMaybeInsert=function(e,t,n){var o=e.getCursorPosition(),i=t.doc.getLine(o.row);this.isMaybeInsertedClosing(o,i)||(r.maybeInsertedBrackets=0),r.maybeInsertedRow=o.row,r.maybeInsertedLineStart=i.substr(0,o.column)+n,r.maybeInsertedLineEnd=i.substr(o.column),r.maybeInsertedBrackets++},d.isAutoInsertedClosing=function(e,t,n){return r.autoInsertedBrackets>0&&e.row===r.autoInsertedRow&&n===r.autoInsertedLineEnd[0]&&t.substr(e.column)===r.autoInsertedLineEnd},d.isMaybeInsertedClosing=function(e,t){return r.maybeInsertedBrackets>0&&e.row===r.maybeInsertedRow&&t.substr(e.column)===r.maybeInsertedLineEnd&&t.substr(0,e.column)==r.maybeInsertedLineStart},d.popAutoInsertedClosing=function(){r.autoInsertedLineEnd=r.autoInsertedLineEnd.substr(1),r.autoInsertedBrackets--},d.clearMaybeInsertedClosing=function(){r&&(r.maybeInsertedBrackets=0,r.maybeInsertedRow=-1)},o.inherits(d,i),t.CstyleBehaviour=d})),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){var r=e("../../lib/oop"),o=e("../../range").Range,i=e("./fold_mode").FoldMode,s=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(s,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n,r){var o,i=e.getLine(n);if(o=i.match(this.foldingStartMarker)){var s=o.index;if(o[1])return this.openingBracketBlock(e,o[1],n,s);var a=e.getCommentFoldRange(n,s+o[0].length,1);return a&&!a.isMultiLine()&&(r?a=this.getSectionRange(e,n):"all"!=t&&(a=null)),a}if("markbegin"!==t&&(o=i.match(this.foldingStopMarker)))return s=o.index+o[0].length,o[1]?this.closingBracketBlock(e,o[1],n,s):e.getCommentFoldRange(n,s,-1)},this.getSectionRange=function(e,t){for(var n=e.getLine(t),r=n.search(/\S/),i=t,s=n.length,a=t+=1,u=e.getLength();++t<u;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(r>c)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=i)break;if(l.isMultiLine())t=l.end.row;else if(r==c)break}a=t}}return new o(i,s,a,e.getLine(a).length)}}.call(s.prototype)}));