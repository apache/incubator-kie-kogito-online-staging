define("ace/mode/perl",["require","exports","module","ace/lib/oop","ace/mode/text","ace/mode/perl_highlight_rules","ace/mode/matching_brace_outdent","ace/range","ace/mode/folding/cstyle"],(function(e,t,n){var r=e("../lib/oop"),i=e("./text").Mode,o=e("./perl_highlight_rules").PerlHighlightRules,s=e("./matching_brace_outdent").MatchingBraceOutdent,a=(e("../range").Range,e("./folding/cstyle").FoldMode),g=function(){this.HighlightRules=o,this.$outdent=new s,this.foldingRules=new a({start:"^=(begin|item)\\b",end:"^=(cut)\\b"})};r.inherits(g,i),function(){this.lineCommentStart="#",this.blockComment=[{start:"=begin",end:"=cut"},{start:"=item",end:"=cut"}],this.getNextLineIndent=function(e,t,n){var r=this.$getIndent(t),i=this.getTokenizer().getLineTokens(t,e).tokens;return i.length&&"comment"==i[i.length-1].type||"start"==e&&t.match(/^.*[\{\(\[\:]\s*$/)&&(r+=n),r},this.checkOutdent=function(e,t,n){return this.$outdent.checkOutdent(t,n)},this.autoOutdent=function(e,t,n){this.$outdent.autoOutdent(t,n)},this.$id="ace/mode/perl"}.call(g.prototype),t.Mode=g})),define("ace/mode/perl_highlight_rules",["require","exports","module","ace/lib/oop","ace/mode/text_highlight_rules"],(function(e,t,n){var r=e("../lib/oop"),i=e("./text_highlight_rules").TextHighlightRules,o=function(){var e=this.createKeywordMapper({keyword:"base|constant|continue|else|elsif|for|foreach|format|goto|if|last|local|my|next|no|package|parent|redo|require|scalar|sub|unless|until|while|use|vars","constant.language":"ARGV|ENV|INC|SIG","support.function":"getprotobynumber|getprotobyname|getservbyname|gethostbyaddr|gethostbyname|getservbyport|getnetbyaddr|getnetbyname|getsockname|getpeername|setpriority|getprotoent|setprotoent|getpriority|endprotoent|getservent|setservent|endservent|sethostent|socketpair|getsockopt|gethostent|endhostent|setsockopt|setnetent|quotemeta|localtime|prototype|getnetent|endnetent|rewinddir|wantarray|getpwuid|closedir|getlogin|readlink|endgrent|getgrgid|getgrnam|shmwrite|shutdown|readline|endpwent|setgrent|readpipe|formline|truncate|dbmclose|syswrite|setpwent|getpwnam|getgrent|getpwent|ucfirst|sysread|setpgrp|shmread|sysseek|sysopen|telldir|defined|opendir|connect|lcfirst|getppid|binmode|syscall|sprintf|getpgrp|readdir|seekdir|waitpid|reverse|unshift|symlink|dbmopen|semget|msgrcv|rename|listen|chroot|msgsnd|shmctl|accept|unpack|exists|fileno|shmget|system|unlink|printf|gmtime|msgctl|semctl|values|rindex|substr|splice|length|msgget|select|socket|return|caller|delete|alarm|ioctl|index|undef|lstat|times|srand|chown|fcntl|close|write|umask|rmdir|study|sleep|chomp|untie|print|utime|mkdir|atan2|split|crypt|flock|chmod|BEGIN|bless|chdir|semop|shift|reset|link|stat|chop|grep|fork|dump|join|open|tell|pipe|exit|glob|warn|each|bind|sort|pack|eval|push|keys|getc|kill|seek|sqrt|send|wait|rand|tied|read|time|exec|recv|eof|chr|int|ord|exp|pos|pop|sin|log|abs|oct|hex|tie|cos|vec|END|ref|map|die|uc|lc|do"},"identifier");this.$rules={start:[{token:"comment.doc",regex:"^=(?:begin|item)\\b",next:"block_comment"},{token:"string.regexp",regex:"[/](?:(?:\\[(?:\\\\]|[^\\]])+\\])|(?:\\\\/|[^\\]/]))*[/]\\w*\\s*(?=[).,;]|$)"},{token:"string",regex:'["](?:(?:\\\\.)|(?:[^"\\\\]))*?["]'},{token:"string",regex:'["].*\\\\$',next:"qqstring"},{token:"string",regex:"['](?:(?:\\\\.)|(?:[^'\\\\]))*?[']"},{token:"string",regex:"['].*\\\\$",next:"qstring"},{token:"constant.numeric",regex:"0x[0-9a-fA-F]+\\b"},{token:"constant.numeric",regex:"[+-]?\\d+(?:(?:\\.\\d*)?(?:[eE][+-]?\\d+)?)?\\b"},{token:e,regex:"[a-zA-Z_$][a-zA-Z0-9_$]*\\b"},{token:"keyword.operator",regex:"%#|\\$#|\\.\\.\\.|\\|\\|=|>>=|<<=|<=>|&&=|=>|!~|\\^=|&=|\\|=|\\.=|x=|%=|\\/=|\\*=|\\-=|\\+=|=~|\\*\\*|\\-\\-|\\.\\.|\\|\\||&&|\\+\\+|\\->|!=|==|>=|<=|>>|<<|,|=|\\?\\:|\\^|\\||x|%|\\/|\\*|<|&|\\\\|~|!|>|\\.|\\-|\\+|\\-C|\\-b|\\-S|\\-u|\\-t|\\-p|\\-l|\\-d|\\-f|\\-g|\\-s|\\-z|\\-k|\\-e|\\-O|\\-T|\\-B|\\-M|\\-A|\\-X|\\-W|\\-c|\\-R|\\-o|\\-x|\\-w|\\-r|\\b(?:and|cmp|eq|ge|gt|le|lt|ne|not|or|xor)"},{token:"comment",regex:"#.*$"},{token:"lparen",regex:"[[({]"},{token:"rparen",regex:"[\\])}]"},{token:"text",regex:"\\s+"}],qqstring:[{token:"string",regex:'(?:(?:\\\\.)|(?:[^"\\\\]))*?"',next:"start"},{token:"string",regex:".+"}],qstring:[{token:"string",regex:"(?:(?:\\\\.)|(?:[^'\\\\]))*?'",next:"start"},{token:"string",regex:".+"}],block_comment:[{token:"comment.doc",regex:"^=cut\\b",next:"start"},{defaultToken:"comment.doc"}]}};r.inherits(o,i),t.PerlHighlightRules=o})),define("ace/mode/matching_brace_outdent",["require","exports","module","ace/range"],(function(e,t,n){var r=e("../range").Range,i=function(){};(function(){this.checkOutdent=function(e,t){return!!/^\s+$/.test(e)&&/^\s*\}/.test(t)},this.autoOutdent=function(e,t){var n=e.getLine(t).match(/^(\s*\})/);if(!n)return 0;var i=n[1].length,o=e.findMatchingBracket({row:t,column:i});if(!o||o.row==t)return 0;var s=this.$getIndent(e.getLine(o.row));e.replace(new r(t,0,t,i-1),s)},this.$getIndent=function(e){return e.match(/^\s*/)[0]}}).call(i.prototype),t.MatchingBraceOutdent=i})),define("ace/mode/folding/cstyle",["require","exports","module","ace/lib/oop","ace/range","ace/mode/folding/fold_mode"],(function(e,t,n){var r=e("../../lib/oop"),i=e("../../range").Range,o=e("./fold_mode").FoldMode,s=t.FoldMode=function(e){e&&(this.foldingStartMarker=new RegExp(this.foldingStartMarker.source.replace(/\|[^|]*?$/,"|"+e.start)),this.foldingStopMarker=new RegExp(this.foldingStopMarker.source.replace(/\|[^|]*?$/,"|"+e.end)))};r.inherits(s,o),function(){this.foldingStartMarker=/(\{|\[)[^\}\]]*$|^\s*(\/\*)/,this.foldingStopMarker=/^[^\[\{]*(\}|\])|^[\s\*]*(\*\/)/,this.getFoldWidgetRange=function(e,t,n,r){var i,o=e.getLine(n);if(i=o.match(this.foldingStartMarker)){var s=i.index;if(i[1])return this.openingBracketBlock(e,i[1],n,s);var a=e.getCommentFoldRange(n,s+i[0].length,1);return a&&!a.isMultiLine()&&(r?a=this.getSectionRange(e,n):"all"!=t&&(a=null)),a}if("markbegin"!==t&&(i=o.match(this.foldingStopMarker)))return s=i.index+i[0].length,i[1]?this.closingBracketBlock(e,i[1],n,s):e.getCommentFoldRange(n,s,-1)},this.getSectionRange=function(e,t){for(var n=e.getLine(t),r=n.search(/\S/),o=t,s=n.length,a=t+=1,g=e.getLength();++t<g;){var c=(n=e.getLine(t)).search(/\S/);if(-1!==c){if(r>c)break;var l=this.getFoldWidgetRange(e,"all",t);if(l){if(l.start.row<=o)break;if(l.isMultiLine())t=l.end.row;else if(r==c)break}a=t}}return new i(o,s,a,e.getLine(a).length)}}.call(s.prototype)}));