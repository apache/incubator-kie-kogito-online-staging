define("ace/mode/tcl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/folding/cstyle","ace/mode/tcl_highlight_rules","ace/mode/matching_brace_outdent","ace/range"],(function(e,t,n){var o=e("../lib/oop"),r=e("./text").Mode,i=e("./folding/cstyle").FoldMode,a=e("./tcl_highlight_rules").TclHighlightRules,g=e("./matching_brace_outdent").MatchingBraceOutdent,c=(e("../range").Range,function(){this.HighlightRules=a,this.$outdent=new g,this.foldingRules=new i});o.inherits(c,r),function(){this.lineCommentStart="#",this.getNextLineIndent=function(e,t,n){var o=this.$getIndent(t),r=this.getTokenizer().getLineTokens(t,e).tokens;return r.length&&"comment"==r[r.length-1].type||"start"==e&&t.match(/^.*[\{\(\[]\s*$/)&&(o+=n),o},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/tcl"}.call(c.prototype),t.Mode=c})),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){var o=e("../../lib/oop"),r=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};o.inherits(a,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n,o){var r,i=e.getLine(n);if(r=i.match(this.foldingStartMarker)){var a=r.index;if(r[1])return this.openingBracketBlock(e,r[1],n,a);var g=e.getCommentFoldRange(n,a+r[0].length,1);return g&&!g.isMultiLine()&&(o?g=this.getSectionRange(e,n):"all"!=t&&(g=null)),g}if("markbegin"!==t&&(r=i.match(this.foldingStopMarker)))return a=r.index+r[0].length,r[1]?this.closingBracketBlock(e,r[1],n,a):e.getCommentFoldRange(n,a,-1)},this.getSectionRange=function(e,t){for(var n=e.getLine(t),o=n.search(/\S/),i=t,a=n.length,g=t+=1,c=e.getLength();++t<c;){var l=(n=e.getLine(t)).search(/\S/);if(-1!==l){if(o>l)break;var s=this.getFoldWidgetRange(e,"all",t);if(s){if(s.start.row<=i)break;if(s.isMultiLine())t=s.end.row;else if(o==l)break}g=t}}return new r(i,a,g,e.getLine(g).length)}}.call(a.prototype)})),define("ace/mode/tcl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var o=e("../lib/oop"),r=e("./text_highlight_rules").TextHighlightRules,i=function(){this.$rules={start:[{token:"comment",regex:"#.*\\\\$",next:"commentfollow"},{token:"comment",regex:"#.*$"},{token:"support.function",regex:"[\\\\]$",next:"splitlineStart"},{token:"text",regex:'[\\\\](?:["]|[{]|[}]|[[]|[]]|[$]|[])'},{token:"text",regex:"^|[^{][;][^}]|[/\r/]",next:"commandItem"},{token:"string",regex:'[ ]*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'[ ]*["]',next:"qqstring"},{token:"variable.instance",regex:"[$]",next:"variable"},{token:"support.function",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|{\\*}|;|::"},{token:"identifier",regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"paren.lparen",regex:"[[{]",next:"commandItem"},{token:"paren.lparen",regex:"[(]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],commandItem:[{token:"comment",regex:"#.*\\\\$",next:"commentfollow"},{token:"comment",regex:"#.*$",next:"start"},{token:"string",regex:'[ ]*["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"variable.instance",regex:"[$]",next:"variable"},{token:"support.function",regex:"(?:[:][:])[a-zA-Z0-9_/]+(?:[:][:])",next:"commandItem"},{token:"support.function",regex:"[a-zA-Z0-9_/]+(?:[:][:])",next:"commandItem"},{token:"support.function",regex:"(?:[:][:])",next:"commandItem"},{token:"paren.rparen",regex:"[\\])}]"},{token:"support.function",regex:"!|\\$|%|&|\\*|\\-\\-|\\-|\\+\\+|\\+|~|===|==|=|!=|!==|<=|>=|<<=|>>=|>>>=|<>|<|>|!|&&|\\|\\||\\?\\:|\\*=|%=|\\+=|\\-=|&=|\\^=|{\\*}|;|::"},{token:"keyword",regex:"[a-zA-Z0-9_/]+",next:"start"}],commentfollow:[{token:"comment",regex:".*\\\\$",next:"commentfollow"},{token:"comment",regex:".+",next:"start"}],splitlineStart:[{token:"text",regex:"^.",next:"start"}],variable:[{token:"variable.instance",regex:"[a-zA-Z_\\d]+(?:[(][a-zA-Z_\\d]+[)])?",next:"start"},{token:"variable.instance",regex:"{?[a-zA-Z_\\d]+}?",next:"start"}],qqstring:[{token:"string",regex:'(?:[^\\\\]|\\\\.)*?["]',next:"start"},{token:"string",regex:".+"}]}};o.inherits(i,r),t.TclHighlightRules=i})),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){var o=e("../range").Range,r=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var r=n[1].length,i=e.findMatchingBracket({row:t,column:r});if(!i||i.row==t)return 0;var a=this.$getIndent(e.getLine(i.row));e.replace(new o(t,0,t,r-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(r.prototype),t.MatchingBraceOutdent=r}));