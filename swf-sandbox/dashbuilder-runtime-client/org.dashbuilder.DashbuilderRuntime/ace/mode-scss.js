define("ace/mode/scss",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/scss_highlight_rules","ace/mode/matching_brace_outdent","ace/mode/behaviour/css","ace/mode/folding/cstyle"],(function(e,t,r){var n=e("../lib/oop"),o=e("./text").Mode,i=e("./scss_highlight_rules").ScssHighlightRules,a=e("./matching_brace_outdent").MatchingBraceOutdent,s=e("./behaviour/css").CssBehaviour,l=e("./folding/cstyle").FoldMode,u=function(){this.HighlightRules=i,this.$outdent=new a,this.$behaviour=new s,this.foldingRules=new l};n.inherits(u,o),function(){this.lineCommentStart="//",this.blockComment={start:"/*",end:"*/"},this.getNextLineIndent=function(e,t,r){var n=this.$getIndent(t),o=this.getTokenizer().getLineTokens(t,e).tokens;return o.length&&"comment"==o[o.length-1].type||t.match(/^.*\{\s*$/)&&(n+=r),n},this.checkOutdent=function(e,t,r){return this.$outdent.checkOutdent(t,r)},this.autoOutdent=function(e,t,r){this.$outdent.autoOutdent(t,r)},this.$id="ace/mode/scss"}.call(u.prototype),t.Mode=u})),define("ace/mode/scss_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],(function(e,t,r){var n=e("../lib/oop"),o=e("../lib/lang"),i=e("./text_highlight_rules").TextHighlightRules,a=function(){var e=o.arrayToMap(function(){for(var e="-webkit-|-moz-|-o-|-ms-|-svg-|-pie-|-khtml-".split("|"),t="appearance|background-clip|background-inline-policy|background-origin|background-size|binding|border-bottom-colors|border-left-colors|border-right-colors|border-top-colors|border-end|border-end-color|border-end-style|border-end-width|border-image|border-start|border-start-color|border-start-style|border-start-width|box-align|box-direction|box-flex|box-flexgroup|box-ordinal-group|box-orient|box-pack|box-sizing|column-count|column-gap|column-width|column-rule|column-rule-width|column-rule-style|column-rule-color|float-edge|font-feature-settings|font-language-override|force-broken-image-icon|image-region|margin-end|margin-start|opacity|outline|outline-color|outline-offset|outline-radius|outline-radius-bottomleft|outline-radius-bottomright|outline-radius-topleft|outline-radius-topright|outline-style|outline-width|padding-end|padding-start|stack-sizing|tab-size|text-blink|text-decoration-color|text-decoration-line|text-decoration-style|transform|transform-origin|transition|transition-delay|transition-duration|transition-property|transition-timing-function|user-focus|user-input|user-modify|user-select|window-shadow|border-radius".split("|"),r="azimuth|background-attachment|background-color|background-image|background-position|background-repeat|background|border-bottom-color|border-bottom-style|border-bottom-width|border-bottom|border-collapse|border-color|border-left-color|border-left-style|border-left-width|border-left|border-right-color|border-right-style|border-right-width|border-right|border-spacing|border-style|border-top-color|border-top-style|border-top-width|border-top|border-width|border|bottom|box-shadow|box-sizing|caption-side|clear|clip|color|content|counter-increment|counter-reset|cue-after|cue-before|cue|cursor|direction|display|elevation|empty-cells|float|font-family|font-size-adjust|font-size|font-stretch|font-style|font-variant|font-weight|font|height|left|letter-spacing|line-height|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|marker-offset|margin|marks|max-height|max-width|min-height|min-width|opacity|orphans|outline-color|outline-style|outline-width|outline|overflow|overflow-x|overflow-y|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|page|pause-after|pause-before|pause|pitch-range|pitch|play-during|position|quotes|richness|right|size|speak-header|speak-numeral|speak-punctuation|speech-rate|speak|stress|table-layout|text-align|text-decoration|text-indent|text-shadow|text-transform|top|unicode-bidi|vertical-align|visibility|voice-family|volume|white-space|widows|width|word-spacing|z-index".split("|"),n=[],o=0,i=e.length;o<i;o++)Array.prototype.push.apply(n,(e[o]+t.join("|"+e[o])).split("|"));return Array.prototype.push.apply(n,t),Array.prototype.push.apply(n,r),n}()),t=o.arrayToMap("hsl|hsla|rgb|rgba|url|attr|counter|counters|abs|adjust_color|adjust_hue|alpha|join|blue|ceil|change_color|comparable|complement|darken|desaturate|floor|grayscale|green|hue|if|invert|join|length|lighten|lightness|mix|nth|opacify|opacity|percentage|quote|red|round|saturate|saturation|scale_color|transparentize|type_of|unit|unitless|unqoute".split("|")),r=o.arrayToMap("absolute|all-scroll|always|armenian|auto|baseline|below|bidi-override|block|bold|bolder|border-box|both|bottom|break-all|break-word|capitalize|center|char|circle|cjk-ideographic|col-resize|collapse|content-box|crosshair|dashed|decimal-leading-zero|decimal|default|disabled|disc|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ellipsis|fixed|georgian|groove|hand|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|inactive|inherit|inline-block|inline|inset|inside|inter-ideograph|inter-word|italic|justify|katakana-iroha|katakana|keep-all|left|lighter|line-edge|line-through|line|list-item|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|medium|middle|move|n-resize|ne-resize|newspaper|no-drop|no-repeat|nw-resize|none|normal|not-allowed|nowrap|oblique|outset|outside|overline|pointer|progress|relative|repeat-x|repeat-y|repeat|right|ridge|row-resize|rtl|s-resize|scroll|se-resize|separate|small-caps|solid|square|static|strict|super|sw-resize|table-footer-group|table-header-group|tb-rl|text-bottom|text-top|text|thick|thin|top|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|zero".split("|")),n=o.arrayToMap("aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow".split("|")),i=o.arrayToMap("@mixin|@extend|@include|@import|@media|@debug|@warn|@if|@for|@each|@while|@else|@font-face|@-webkit-keyframes|if|and|!default|module|def|end|declare".split("|")),a=o.arrayToMap("a|abbr|acronym|address|applet|area|article|aside|audio|b|base|basefont|bdo|big|blockquote|body|br|button|canvas|caption|center|cite|code|col|colgroup|command|datalist|dd|del|details|dfn|dir|div|dl|dt|em|embed|fieldset|figcaption|figure|font|footer|form|frame|frameset|h1|h2|h3|h4|h5|h6|head|header|hgroup|hr|html|i|iframe|img|input|ins|keygen|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|rp|rt|ruby|s|samp|script|section|select|small|source|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|u|ul|var|video|wbr|xmp".split("|")),s="\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))";this.$rules={start:[{token:"comment",regex:"\\/\\/.*$"},{token:"comment",regex:"\\/\\*",next:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:s+"(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)"},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:"constant.numeric",regex:s},{token:["support.function","string","support.function"],regex:"(url\\()(.*)(\\))"},{token:function(o){return e.hasOwnProperty(o.toLowerCase())?"support.type":i.hasOwnProperty(o)?"keyword":r.hasOwnProperty(o)?"constant.language":t.hasOwnProperty(o)?"support.function":n.hasOwnProperty(o.toLowerCase())?"support.constant.color":a.hasOwnProperty(o.toLowerCase())?"variable.language":"text"},regex:"\\-?[@a-z_][@a-z0-9_\\-]*"},{token:"variable",regex:"[a-z_\\-$][a-z0-9_\\-$]*\\b"},{token:"variable.language",regex:"#[a-z0-9-_]+"},{token:"variable.language",regex:"\\.[a-z0-9-_]+"},{token:"variable.language",regex:":[a-z0-9-_]+"},{token:"constant",regex:"[a-z0-9-_]+"},{token:"keyword.operator",regex:"<|>|<=|>=|==|!=|-|%|#|\\+|\\$|\\+|\\*"},{token:"paren.lparen",regex:"[[({]"},{token:"paren.rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"},{caseInsensitive:!0}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}]}};n.inherits(a,i),t.ScssHighlightRules=a})),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,r){var n=e("../range").Range,o=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var r=e.getLine(t).match(/^(\s*\})/);if(!r)return 0;var o=r[1].length,i=e.findMatchingBracket({row:t,column:o});if(!i||i.row==t)return 0;var a=this.$getIndent(e.getLine(i.row));e.replace(new n(t,0,t,o-1),a)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(o.prototype),t.MatchingBraceOutdent=o})),define("ace/mode/behaviour/css",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/mode/behaviour/cstyle","ace/token_iterator"],(function(e,t,r){var n=e("../../lib/oop"),o=(e("../behaviour").Behaviour,e("./cstyle").CstyleBehaviour),i=e("../../token_iterator").TokenIterator,a=function(){this.inherit(o),this.add("colon","insertion",(function(e,t,r,n,o){if(":"===o){var a=r.getCursorPosition(),s=new i(n,a.row,a.column),l=s.getCurrentToken();if(l&&l.value.match(/\s+/)&&(l=s.stepBackward()),l&&"support.type"===l.type){var u=n.doc.getLine(a.row);if(":"===u.substring(a.column,a.column+1))return{text:"",selection:[1,1]};if(!u.substring(a.column).match(/^\s*;/))return{text:":;",selection:[1,1]}}}})),this.add("colon","deletion",(function(e,t,r,n,o){var a=n.doc.getTextRange(o);if(!o.isMultiLine()&&":"===a){var s=r.getCursorPosition(),l=new i(n,s.row,s.column),u=l.getCurrentToken();if(u&&u.value.match(/\s+/)&&(u=l.stepBackward()),u&&"support.type"===u.type&&";"===n.doc.getLine(o.start.row).substring(o.end.column,o.end.column+1))return o.end.column++,o}})),this.add("semicolon","insertion",(function(e,t,r,n,o){if(";"===o){var i=r.getCursorPosition();if(";"===n.doc.getLine(i.row).substring(i.column,i.column+1))return{text:"",selection:[1,1]}}}))};n.inherits(a,o),t.CssBehaviour=a})),define("ace/mode/behaviour/cstyle",["require","exports","module","ace/lib/oop","ace/mode/behaviour","ace/token_iterator","ace/lib/lang"],(function(e,t,r){var n,o=e("../../lib/oop"),i=e("../behaviour").Behaviour,a=e("../../token_iterator").TokenIterator,s=e("../../lib/lang"),l=["text","paren.rparen","punctuation.operator"],u=["text","paren.rparen","punctuation.operator","comment"],c={},d=function(e){var t=-1;if(e.multiSelect&&(t=e.selection.id,c.rangeCount!=e.multiSelect.rangeCount&&(c={rangeCount:e.multiSelect.rangeCount})),c[t])return n=c[t];n=c[t]={autoInsertedBrackets:0,autoInsertedRow:-1,autoInsertedLineEnd:"",maybeInsertedBrackets:0,maybeInsertedRow:-1,maybeInsertedLineStart:"",maybeInsertedLineEnd:""}},g=function(){this.add("braces","insertion",(function(e,t,r,o,i){var a=r.getCursorPosition(),l=o.doc.getLine(a.row);if("{"==i){d(r);var u=r.getSelectionRange(),c=o.doc.getTextRange(u);if(""!==c&&"{"!==c&&r.getWrapBehavioursEnabled())return{text:"{"+c+"}",selection:!1};if(g.isSaneInsertion(r,o))return/[\]\}\)]/.test(l[a.column])||r.inMultiSelectMode?(g.recordAutoInsert(r,o,"}"),{text:"{}",selection:[1,1]}):(g.recordMaybeInsert(r,o,"{"),{text:"{",selection:[1,1]})}else if("}"==i){if(d(r),"}"==l.substring(a.column,a.column+1)&&null!==o.$findOpeningBracket("}",{column:a.column+1,row:a.row})&&g.isAutoInsertedClosing(a,l,i))return g.popAutoInsertedClosing(),{text:"",selection:[1,1]}}else{if("\n"==i||"\r\n"==i){d(r);var p="";if(g.isMaybeInsertedClosing(a,l)&&(p=s.stringRepeat("}",n.maybeInsertedBrackets),g.clearMaybeInsertedClosing()),"}"===l.substring(a.column,a.column+1)){var h=o.findMatchingBracket({row:a.row,column:a.column+1},"}");if(!h)return null;var m=this.$getIndent(o.getLine(h.row))}else{if(!p)return void g.clearMaybeInsertedClosing();m=this.$getIndent(l)}var b=m+o.getTabString();return{text:"\n"+b+"\n"+m+p,selection:[1,b.length,1,b.length]}}g.clearMaybeInsertedClosing()}})),this.add("braces","deletion",(function(e,t,r,o,i){var a=o.doc.getTextRange(i);if(!i.isMultiLine()&&"{"==a){if(d(r),"}"==o.doc.getLine(i.start.row).substring(i.end.column,i.end.column+1))return i.end.column++,i;n.maybeInsertedBrackets--}})),this.add("parens","insertion",(function(e,t,r,n,o){if("("==o){d(r);var i=r.getSelectionRange(),a=n.doc.getTextRange(i);if(""!==a&&r.getWrapBehavioursEnabled())return{text:"("+a+")",selection:!1};if(g.isSaneInsertion(r,n))return g.recordAutoInsert(r,n,")"),{text:"()",selection:[1,1]}}else if(")"==o){d(r);var s=r.getCursorPosition(),l=n.doc.getLine(s.row);if(")"==l.substring(s.column,s.column+1)&&null!==n.$findOpeningBracket(")",{column:s.column+1,row:s.row})&&g.isAutoInsertedClosing(s,l,o))return g.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("parens","deletion",(function(e,t,r,n,o){var i=n.doc.getTextRange(o);if(!o.isMultiLine()&&"("==i&&(d(r),")"==n.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)))return o.end.column++,o})),this.add("brackets","insertion",(function(e,t,r,n,o){if("["==o){d(r);var i=r.getSelectionRange(),a=n.doc.getTextRange(i);if(""!==a&&r.getWrapBehavioursEnabled())return{text:"["+a+"]",selection:!1};if(g.isSaneInsertion(r,n))return g.recordAutoInsert(r,n,"]"),{text:"[]",selection:[1,1]}}else if("]"==o){d(r);var s=r.getCursorPosition(),l=n.doc.getLine(s.row);if("]"==l.substring(s.column,s.column+1)&&null!==n.$findOpeningBracket("]",{column:s.column+1,row:s.row})&&g.isAutoInsertedClosing(s,l,o))return g.popAutoInsertedClosing(),{text:"",selection:[1,1]}}})),this.add("brackets","deletion",(function(e,t,r,n,o){var i=n.doc.getTextRange(o);if(!o.isMultiLine()&&"["==i&&(d(r),"]"==n.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)))return o.end.column++,o})),this.add("string_dquotes","insertion",(function(e,t,r,n,o){if('"'==o||"'"==o){d(r);var i=o,a=r.getSelectionRange(),s=n.doc.getTextRange(a);if(""!==s&&"'"!==s&&'"'!=s&&r.getWrapBehavioursEnabled())return{text:i+s+i,selection:!1};var l=r.getCursorPosition(),u=n.doc.getLine(l.row);if("\\"==u.substring(l.column-1,l.column))return null;for(var c,p=n.getTokens(a.start.row),h=0,m=-1,b=0;b<p.length&&("string"==(c=p[b]).type?m=-1:m<0&&(m=c.value.indexOf(i)),!(c.value.length+h>a.start.column));b++)h+=p[b].value.length;if(!c||m<0&&"comment"!==c.type&&("string"!==c.type||a.start.column!==c.value.length+h-1&&c.value.lastIndexOf(i)===c.value.length-1)){if(!g.isSaneInsertion(r,n))return;return{text:i+i,selection:[1,1]}}if(c&&"string"===c.type&&u.substring(l.column,l.column+1)==i)return{text:"",selection:[1,1]}}})),this.add("string_dquotes","deletion",(function(e,t,r,n,o){var i=n.doc.getTextRange(o);if(!o.isMultiLine()&&('"'==i||"'"==i)&&(d(r),n.doc.getLine(o.start.row).substring(o.start.column+1,o.start.column+2)==i))return o.end.column++,o}))};g.isSaneInsertion=function(e,t){var r=e.getCursorPosition(),n=new a(t,r.row,r.column);if(!this.$matchTokenType(n.getCurrentToken()||"text",l)){var o=new a(t,r.row,r.column+1);if(!this.$matchTokenType(o.getCurrentToken()||"text",l))return!1}return n.stepForward(),n.getCurrentTokenRow()!==r.row||this.$matchTokenType(n.getCurrentToken()||"text",u)},g.$matchTokenType=function(e,t){return t.indexOf(e.type||e)>-1},g.recordAutoInsert=function(e,t,r){var o=e.getCursorPosition(),i=t.doc.getLine(o.row);this.isAutoInsertedClosing(o,i,n.autoInsertedLineEnd[0])||(n.autoInsertedBrackets=0),n.autoInsertedRow=o.row,n.autoInsertedLineEnd=r+i.substr(o.column),n.autoInsertedBrackets++},g.recordMaybeInsert=function(e,t,r){var o=e.getCursorPosition(),i=t.doc.getLine(o.row);this.isMaybeInsertedClosing(o,i)||(n.maybeInsertedBrackets=0),n.maybeInsertedRow=o.row,n.maybeInsertedLineStart=i.substr(0,o.column)+r,n.maybeInsertedLineEnd=i.substr(o.column),n.maybeInsertedBrackets++},g.isAutoInsertedClosing=function(e,t,r){return n.autoInsertedBrackets>0&&e.row===n.autoInsertedRow&&r===n.autoInsertedLineEnd[0]&&t.substr(e.column)===n.autoInsertedLineEnd},g.isMaybeInsertedClosing=function(e,t){return n.maybeInsertedBrackets>0&&e.row===n.maybeInsertedRow&&t.substr(e.column)===n.maybeInsertedLineEnd&&t.substr(0,e.column)==n.maybeInsertedLineStart},g.popAutoInsertedClosing=function(){n.autoInsertedLineEnd=n.autoInsertedLineEnd.substr(1),n.autoInsertedBrackets--},g.clearMaybeInsertedClosing=function(){n&&(n.maybeInsertedBrackets=0,n.maybeInsertedRow=-1)},o.inherits(g,i),t.CstyleBehaviour=g})),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,r){var n=e("../../lib/oop"),o=e("../../range").Range,i=e("./fold_mode").FoldMode,a=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};n.inherits(a,i),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,r,n){var o,i=e.getLine(r);if(o=i.match(this.foldingStartMarker)){var a=o.index;if(o[1])return this.openingBracketBlock(e,o[1],r,a);var s=e.getCommentFoldRange(r,a+o[0].length,1);return s&&!s.isMultiLine()&&(n?s=this.getSectionRange(e,r):"all"!=t&&(s=null)),s}if("markbegin"!==t&&(o=i.match(this.foldingStopMarker)))return a=o.index+o[0].length,o[1]?this.closingBracketBlock(e,o[1],r,a):e.getCommentFoldRange(r,a,-1)},this.getSectionRange=function(e,t){for(var r=e.getLine(t),n=r.search(/\S/),i=t,a=r.length,s=t+=1,l=e.getLength();++t<l;){var u=(r=e.getLine(t)).search(/\S/);if(-1!==u){if(n>u)break;var c=this.getFoldWidgetRange(e,"all",t);if(c){if(c.start.row<=i)break;if(c.isMultiLine())t=c.end.row;else if(n==u)break}s=t}}return new o(i,a,s,e.getLine(s).length)}}.call(a.prototype)}));