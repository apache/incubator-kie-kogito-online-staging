define("ace/mode/latex",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/latex_highlight_rules","ace/mode/folding/latex","ace/range"],(function(e,t,n){var o=e("../lib/oop"),i=e("./text").Mode,r=e("./latex_highlight_rules").LatexHighlightRules,a=e("./folding/latex").FoldMode,l=(e("../range").Range,function(){this.HighlightRules=r,this.foldingRules=new a});o.inherits(l,i),function(){this.lineCommentStart="%",this.$id="ace/mode/latex"}.call(l.prototype),t.Mode=l})),define("ace/mode/latex_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var o=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,r=function(){this.$rules={start:[{token:"keyword",regex:"\\\\(?:[^a-zA-Z]|[a-zA-Z]+)"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"string",regex:"\\$(?:(?:\\\\.)|(?:[^\\$\\\\]))*?\\$"},{token:"comment",regex:"%.*$"}]}};o.inherits(r,i),t.LatexHighlightRules=r})),define("ace/mode/folding/latex",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range","ace/token_iterator"],(function(e,t,n){var o=e("../../lib/oop"),i=e("./fold_mode").FoldMode,r=e("../../range").Range,a=e("../../token_iterator").TokenIterator,l=t.FoldMode=function(){};o.inherits(l,i),function(){this.foldingStartMarker=/^\s*\\(begin)|(section|subsection)\b|{\s*$/,this.foldingStopMarker=/^\s*\\(end)\b|^\s*}/,this.getFoldWidgetRange=function(e,t,n){var o,i=e.doc.getLine(n);return(o=this.foldingStartMarker.exec(i))?o[1]?this.latexBlock(e,n,o[0].length-1):o[2]?this.latexSection(e,n,o[0].length-1):this.openingBracketBlock(e,"{",n,o.index):(o=this.foldingStopMarker.exec(i))?o[1]?this.latexBlock(e,n,o[0].length-1):this.closingBracketBlock(e,"}",n,o.index+o[0].length):void 0},this.latexBlock=function(e,t,n){var o={"\\begin":1,"\\end":-1},i=new a(e,t,n),l=i.getCurrentToken();if(l&&"keyword"===l.type){var g=o[l.value],s=function(){var e="lparen"==i.stepForward().type?i.stepForward().value:"";return-1===g&&(i.stepBackward(),e&&i.stepBackward()),e},d=[s()],h=-1===g?i.getCurrentTokenColumn():e.getLine(t).length,c=t;for(i.step=-1===g?i.stepBackward:i.stepForward;l=i.step();)if("keyword"===l.type){var u=o[l.value];if(u){var f=s();if(u===g)d.unshift(f);else if(d.shift()!==f||!d.length)break}}if(!d.length)return t=i.getCurrentTokenRow(),-1===g?new r(t,e.getLine(t).length,c,h):(i.stepBackward(),new r(c,h,t,i.getCurrentTokenColumn()))}},this.latexSection=function(e,t,n){var o=["\\subsection","\\section","\\begin","\\end"],i=new a(e,t,n),l=i.getCurrentToken();if(l&&"keyword"==l.type){for(var g=o.indexOf(l.value),s=0,d=t;l=i.stepForward();)if("keyword"===l.type){var h=o.indexOf(l.value);if(h>=2){if(s||(d=i.getCurrentTokenRow()-1),(s+=2==h?1:-1)<0)break}else if(h>=g)break}for(s||(d=i.getCurrentTokenRow()-1);d>t&&!/\S/.test(e.getLine(d));)d--;return new r(t,e.getLine(t).length,d,e.getLine(d).length)}}}.call(l.prototype)}));