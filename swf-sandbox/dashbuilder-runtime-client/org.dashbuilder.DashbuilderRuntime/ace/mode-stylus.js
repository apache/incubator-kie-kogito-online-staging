define("ace/mode/stylus",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/stylus_highlight_rules","ace/mode/folding/coffee"],(function(e,t,o){var r=e("../lib/oop"),i=e("./text").Mode,n=e("./stylus_highlight_rules").StylusHighlightRules,a=e("./folding/coffee").FoldMode,s=function(){this.HighlightRules=n,this.foldingRules=new a};r.inherits(s,i),function(){this.$id="ace/mode/stylus"}.call(s.prototype),t.Mode=s})),define("ace/mode/stylus_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules","ace/mode/css_highlight_rules"],(function(e,t,o){var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,n=e("./css_highlight_rules"),a=function(){var e=this.createKeywordMapper({"support.type":n.supportType,"support.function":n.supportFunction,"support.constant":n.supportConstant,"support.constant.color":n.supportConstantColor,"support.constant.fonts":n.supportConstantFonts},"text",!0);this.$rules={start:[{token:"comment",regex:/\/\/.*$/},{token:"comment",regex:/\/\*/,next:"comment"},{token:["entity.name.function.stylus","text"],regex:"^([-a-zA-Z_][-\\w]*)?(\\()"},{token:["entity.other.attribute-name.class.stylus"],regex:"\\.-?[_a-zA-Z]+[_a-zA-Z0-9-]*"},{token:["entity.language.stylus"],regex:"^ *&"},{token:["variable.language.stylus"],regex:"(arguments)"},{token:["keyword.stylus"],regex:"@[-\\w]+"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:n.pseudoElements},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:n.pseudoClasses},{token:["entity.name.tag.stylus"],regex:"(?:\\b)(a|abbr|acronym|address|area|article|aside|audio|b|base|big|blockquote|body|br|button|canvas|caption|cite|code|col|colgroup|datalist|dd|del|details|dfn|dialog|div|dl|dt|em|eventsource|fieldset|figure|figcaption|footer|form|frame|frameset|(?:h[1-6])|head|header|hgroup|hr|html|i|iframe|img|input|ins|kbd|label|legend|li|link|map|mark|menu|meta|meter|nav|noframes|noscript|object|ol|optgroup|option|output|p|param|pre|progress|q|samp|script|section|select|small|span|strike|strong|style|sub|summary|sup|table|tbody|td|textarea|tfoot|th|thead|time|title|tr|tt|ul|var|video)(?:\\b)"},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation.definition.entity.stylus","entity.other.attribute-name.id.stylus"],regex:"(#)([a-zA-Z][a-zA-Z0-9_-]*)"},{token:"meta.vendor-prefix.stylus",regex:"-webkit-|-moz\\-|-ms-|-o-"},{token:"keyword.control.stylus",regex:"(?:!important|for|in|return|true|false|null|if|else|unless|return)\\b"},{token:"keyword.operator.stylus",regex:"!|~|\\+|-|(?:\\*)?\\*|\\/|%|(?:\\.)\\.\\.|<|>|(?:=|:|\\?|\\+|-|\\*|\\/|%|<|>)?=|!="},{token:"keyword.operator.stylus",regex:"(?:in|is(?:nt)?|not)\\b"},{token:"string",regex:"'(?=.)",next:"qstring"},{token:"string",regex:'"(?=.)',next:"qqstring"},{token:"constant.numeric",regex:n.numRe},{token:"keyword",regex:"(?:ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)\\b"},{token:e,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"}],comment:[{token:"comment",regex:".*?\\*\\/",next:"start"},{token:"comment",regex:".+"}],qqstring:[{token:"string",regex:'[^"\\\\]+'},{token:"string",regex:"\\\\$",next:"qqstring"},{token:"string",regex:'"|$',next:"start"}],qstring:[{token:"string",regex:"[^'\\\\]+"},{token:"string",regex:"\\\\$",next:"qstring"},{token:"string",regex:"'|$",next:"start"}]}};r.inherits(a,i),t.StylusHighlightRules=a})),define("ace/mode/css_highlight_rules",["require","exports","module","ace/lib/oop","ace/lib/lang","ace/mode/text_highlight_rules"],(function(e,t,o){var r=e("../lib/oop"),i=(e("../lib/lang"),e("./text_highlight_rules").TextHighlightRules),n=t.supportType="animation-fill-mode|alignment-adjust|alignment-baseline|animation-delay|animation-direction|animation-duration|animation-iteration-count|animation-name|animation-play-state|animation-timing-function|animation|appearance|azimuth|backface-visibility|background-attachment|background-break|background-clip|background-color|background-image|background-origin|background-position|background-repeat|background-size|background|baseline-shift|binding|bleed|bookmark-label|bookmark-level|bookmark-state|bookmark-target|border-bottom|border-bottom-color|border-bottom-left-radius|border-bottom-right-radius|border-bottom-style|border-bottom-width|border-collapse|border-color|border-image|border-image-outset|border-image-repeat|border-image-slice|border-image-source|border-image-width|border-left|border-left-color|border-left-style|border-left-width|border-radius|border-right|border-right-color|border-right-style|border-right-width|border-spacing|border-style|border-top|border-top-color|border-top-left-radius|border-top-right-radius|border-top-style|border-top-width|border-width|border|bottom|box-align|box-decoration-break|box-direction|box-flex-group|box-flex|box-lines|box-ordinal-group|box-orient|box-pack|box-shadow|box-sizing|break-after|break-before|break-inside|caption-side|clear|clip|color-profile|color|column-count|column-fill|column-gap|column-rule|column-rule-color|column-rule-style|column-rule-width|column-span|column-width|columns|content|counter-increment|counter-reset|crop|cue-after|cue-before|cue|cursor|direction|display|dominant-baseline|drop-initial-after-adjust|drop-initial-after-align|drop-initial-before-adjust|drop-initial-before-align|drop-initial-size|drop-initial-value|elevation|empty-cells|fit|fit-position|float-offset|float|font-family|font-size|font-size-adjust|font-stretch|font-style|font-variant|font-weight|font|grid-columns|grid-rows|hanging-punctuation|height|hyphenate-after|hyphenate-before|hyphenate-character|hyphenate-lines|hyphenate-resource|hyphens|icon|image-orientation|image-rendering|image-resolution|inline-box-align|left|letter-spacing|line-height|line-stacking-ruby|line-stacking-shift|line-stacking-strategy|line-stacking|list-style-image|list-style-position|list-style-type|list-style|margin-bottom|margin-left|margin-right|margin-top|margin|mark-after|mark-before|mark|marks|marquee-direction|marquee-play-count|marquee-speed|marquee-style|max-height|max-width|min-height|min-width|move-to|nav-down|nav-index|nav-left|nav-right|nav-up|opacity|orphans|outline-color|outline-offset|outline-style|outline-width|outline|overflow-style|overflow-x|overflow-y|overflow|padding-bottom|padding-left|padding-right|padding-top|padding|page-break-after|page-break-before|page-break-inside|page-policy|page|pause-after|pause-before|pause|perspective-origin|perspective|phonemes|pitch-range|pitch|play-during|pointer-events|position|presentation-level|punctuation-trim|quotes|rendering-intent|resize|rest-after|rest-before|rest|richness|right|rotation-point|rotation|ruby-align|ruby-overhang|ruby-position|ruby-span|size|speak-header|speak-numeral|speak-punctuation|speak|speech-rate|stress|string-set|table-layout|target-name|target-new|target-position|target|text-align-last|text-align|text-decoration|text-emphasis|text-height|text-indent|text-justify|text-outline|text-shadow|text-transform|text-wrap|top|transform-origin|transform-style|transform|transition-delay|transition-duration|transition-property|transition-timing-function|transition|unicode-bidi|vertical-align|visibility|voice-balance|voice-duration|voice-family|voice-pitch-range|voice-pitch|voice-rate|voice-stress|voice-volume|volume|white-space-collapse|white-space|widows|width|word-break|word-spacing|word-wrap|z-index",a=t.supportFunction="rgb|rgba|url|attr|counter|counters",s=t.supportConstant="absolute|after-edge|after|all-scroll|all|alphabetic|always|antialiased|armenian|auto|avoid-column|avoid-page|avoid|balance|baseline|before-edge|before|below|bidi-override|block-line-height|block|bold|bolder|border-box|both|bottom|box|break-all|break-word|capitalize|caps-height|caption|center|central|char|circle|cjk-ideographic|clone|close-quote|col-resize|collapse|column|consider-shifts|contain|content-box|cover|crosshair|cubic-bezier|dashed|decimal-leading-zero|decimal|default|disabled|disc|disregard-shifts|distribute-all-lines|distribute-letter|distribute-space|distribute|dotted|double|e-resize|ease-in|ease-in-out|ease-out|ease|ellipsis|end|exclude-ruby|fill|fixed|georgian|glyphs|grid-height|groove|hand|hanging|hebrew|help|hidden|hiragana-iroha|hiragana|horizontal|icon|ideograph-alpha|ideograph-numeric|ideograph-parenthesis|ideograph-space|ideographic|inactive|include-ruby|inherit|initial|inline-block|inline-box|inline-line-height|inline-table|inline|inset|inside|inter-ideograph|inter-word|invert|italic|justify|katakana-iroha|katakana|keep-all|last|left|lighter|line-edge|line-through|line|linear|list-item|local|loose|lower-alpha|lower-greek|lower-latin|lower-roman|lowercase|lr-tb|ltr|mathematical|max-height|max-size|medium|menu|message-box|middle|move|n-resize|ne-resize|newspaper|no-change|no-close-quote|no-drop|no-open-quote|no-repeat|none|normal|not-allowed|nowrap|nw-resize|oblique|open-quote|outset|outside|overline|padding-box|page|pointer|pre-line|pre-wrap|pre|preserve-3d|progress|relative|repeat-x|repeat-y|repeat|replaced|reset-size|ridge|right|round|row-resize|rtl|s-resize|scroll|se-resize|separate|slice|small-caps|small-caption|solid|space|square|start|static|status-bar|step-end|step-start|steps|stretch|strict|sub|super|sw-resize|table-caption|table-cell|table-column-group|table-column|table-footer-group|table-header-group|table-row-group|table-row|table|tb-rl|text-after-edge|text-before-edge|text-bottom|text-size|text-top|text|thick|thin|transparent|underline|upper-alpha|upper-latin|upper-roman|uppercase|use-script|vertical-ideographic|vertical-text|visible|w-resize|wait|whitespace|z-index|zero",l=t.supportConstantColor="aqua|black|blue|fuchsia|gray|green|lime|maroon|navy|olive|orange|purple|red|silver|teal|white|yellow",c=t.supportConstantFonts="arial|century|comic|courier|garamond|georgia|helvetica|impact|lucida|symbol|system|tahoma|times|trebuchet|utopia|verdana|webdings|sans-serif|serif|monospace",d=t.numRe="\\-?(?:(?:[0-9]+)|(?:[0-9]*\\.[0-9]+))",g=t.pseudoElements="(\\:+)\\b(after|before|first-letter|first-line|moz-selection|selection)\\b",u=t.pseudoClasses="(:)\\b(active|checked|disabled|empty|enabled|first-child|first-of-type|focus|hover|indeterminate|invalid|last-child|last-of-type|link|not|nth-child|nth-last-child|nth-last-of-type|nth-of-type|only-child|only-of-type|required|root|target|valid|visited)\\b",p=function(){var e=this.createKeywordMapper({"support.function":a,"support.constant":s,"support.type":n,"support.constant.color":l,"support.constant.fonts":c},"text",!0);this.$rules={start:[{token:"comment",regex:"\\/\\*",push:"comment"},{token:"paren.lparen",regex:"\\{",push:"ruleset"},{token:"string",regex:"@.*?{",push:"media"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],media:[{token:"comment",regex:"\\/\\*",push:"comment"},{token:"paren.lparen",regex:"\\{",push:"ruleset"},{token:"string",regex:"\\}",next:"pop"},{token:"keyword",regex:"#[a-z0-9-_]+"},{token:"variable",regex:"\\.[a-z0-9-_]+"},{token:"string",regex:":[a-z0-9-_]+"},{token:"constant",regex:"[a-z0-9-_]+"},{caseInsensitive:!0}],comment:[{token:"comment",regex:"\\*\\/",next:"pop"},{defaultToken:"comment"}],ruleset:[{token:"paren.rparen",regex:"\\}",next:"pop"},{token:"comment",regex:"\\/\\*",push:"comment"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:["constant.numeric","keyword"],regex:"("+d+")(ch|cm|deg|em|ex|fr|gd|grad|Hz|in|kHz|mm|ms|pc|pt|px|rad|rem|s|turn|vh|vm|vw|%)"},{token:"constant.numeric",regex:d},{token:"constant.numeric",regex:"#[a-f0-9]{6}"},{token:"constant.numeric",regex:"#[a-f0-9]{3}"},{token:["punctuation","entity.other.attribute-name.pseudo-element.css"],regex:g},{token:["punctuation","entity.other.attribute-name.pseudo-class.css"],regex:u},{token:["support.function","string","support.function"],regex:"(url\\()(.*)(\\))"},{token:e,regex:"\\-?[a-zA-Z_][a-zA-Z0-9_\\-]*"},{caseInsensitive:!0}]},this.normalizeRules()};r.inherits(p,i),t.CssHighlightRules=p})),define("ace/mode/folding/coffee",["require","exports","module","ace/lib/oop","ace/mode/folding/fold_mode","ace/range"],(function(e,t,o){var r=e("../../lib/oop"),i=e("./fold_mode").FoldMode,n=e("../../range").Range,a=t.FoldMode=function(){};r.inherits(a,i),function(){this.getFoldWidgetRange=function(e,t,o){var r=this.indentationBlock(e,o);if(r)return r;var i=/\S/,a=e.getLine(o),s=a.search(i);if(-1!=s&&"#"==a[s]){for(var l=a.length,c=e.getLength(),d=o,g=o;++o<c;){var u=(a=e.getLine(o)).search(i);if(-1!=u){if("#"!=a[u])break;g=o}}if(g>d){var p=e.getLine(g).length;return new n(d,l,g,p)}}},this.getFoldWidget=function(e,t,o){var r=e.getLine(o),i=r.search(/\S/),n=e.getLine(o+1),a=e.getLine(o-1),s=a.search(/\S/),l=n.search(/\S/);if(-1==i)return e.foldWidgets[o-1]=-1!=s&&s<l?"start":"","";if(-1==s){if(i==l&&"#"==r[i]&&"#"==n[i])return e.foldWidgets[o-1]="",e.foldWidgets[o+1]="","start"}else if(s==i&&"#"==r[i]&&"#"==a[i]&&-1==e.getLine(o-2).search(/\S/))return e.foldWidgets[o-1]="start",e.foldWidgets[o+1]="","";return e.foldWidgets[o-1]=-1!=s&&s<i?"start":"",i<l?"start":""}}.call(a.prototype)}));